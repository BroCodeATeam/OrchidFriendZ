import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

import Home from './Home'

const LandingPage = () => {
    const session = useSession()
    const supabase = useSupabaseClient()

    return (
        <div className={`w-screen h-screen flex justify-center items-center`}>
            {!session ? (
                <Auth
                    providers={
                        [
                            'google',
                            'facebook'
                        ]
                    }
                    supabaseClient={supabase}
                    appearance={{ theme: ThemeSupa }}
                    theme="dark"
                    className={`w-[500px] max-w-[500px]`}
                />
            ) : (
                <Home />
            )}
        </div>
    )
}

export default LandingPage