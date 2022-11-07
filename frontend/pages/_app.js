import React from 'react'
import '../styles/globals.css'
import Topnav from "../components/navigation/Topnav";

function MyApp({ Component, pageProps }) {

    return (
        <>

            <Topnav />

            <Component {...pageProps} />

        </>
    )
}
export default MyApp