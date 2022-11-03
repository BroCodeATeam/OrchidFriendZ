import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

import Home from './Home'

const LandingPage = () => {
    const session = useSession()
    const supabase = useSupabaseClient()

    return (
        <div>
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
                />
            ) : (
                <Home />
            )}
        </div>
    )
}

export default LandingPage