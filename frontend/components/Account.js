import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

import Avatar from './Avatar'

export default function Account({ session }) {
    const supabase = useSupabaseClient()
    const user = useUser()
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState(null)
    const [website, setWebsite] = useState(null)
    const [avatar_url, setAvatarUrl] = useState(null)

    useEffect(() => {
        getProfile()
    }, [session])

    async function getProfile() {
        try {
            setLoading(true)

            let { data, error, status } = await supabase
                .from('profiles')
                .select(`username, website, avatar_url`)
                .eq('id', user.id)
                .single()

            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setUsername(data.username)
                setWebsite(data.website)
                setAvatarUrl(data.avatar_url)
            }
        } catch (error) {
            alert('Error loading user data!')
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    async function updateProfile({ username, website, avatar_url }) {
        try {
            setLoading(true)

            const updates = {
                id: user.id,
                username,
                website,
                avatar_url,
                updated_at: new Date().toISOString(),
            }

            let { error } = await supabase.from('profiles').upsert(updates)
            if (error) throw error
            alert('Profile updated!')
        } catch (error) {
            alert('Error updating the data!')
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="form-widget w-[10rem]">
            <Avatar
                uid={user.id}
                url={avatar_url}
                size={150}
                onUpload={(url) => {
                    setAvatarUrl(url)
                    updateProfile({ username, website, avatar_url: url })
                }}
            />
            <div className='w-[10rem]'>
                <label htmlFor="email" className='text-white'>Email</label>
                <input id="email" type="text" value={session.user.email} disabled />
            </div>
            <div className='w-[10rem]'>
                <label htmlFor="username" className='text-white'>Username</label>
                <input
                    id="username"
                    type="text"
                    value={username || ''}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className='w-[10rem]'>
                <label htmlFor="website" className='text-white'>Website</label>
                <input
                    id="website"
                    type="website"
                    value={website || ''}
                    onChange={(e) => setWebsite(e.target.value)}
                />
            </div>

            <div className={`my-[10px] w-[10rem]`}>
                <button
                    className="button primary block"
                    onClick={() => updateProfile({ username, website, avatar_url })}
                    disabled={loading}
                >
                    {loading ? 'Loading ...' : 'Update'}
                </button>
            </div>

            <div className='w-[10rem]'>
                <button
                    className="button block w-[2.5rem]"
                    onClick={() => supabase.auth.signOut()}
                >
                    Sign Out
                </button>
            </div>
        </div>
    )
}