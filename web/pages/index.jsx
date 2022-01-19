import Head from "next/head"
import { useContext } from "react"

import Home from "../components/Home"
import ToastMessage from "../components/ToastMessage"

import { ShowContext } from "../context/showContext.jsx"

export default function HomePage() {
    let { clearError, error } = useContext(ShowContext)

    return (
        <>
            <Head>
                <title>tvRepo</title>
                <meta charSet="utf-8" />
            </Head>

            {error.status && (
                <ToastMessage
                    title="error"
                    body={error.content}
                    show={true}
                    clearError={clearError}
                />
            )}

            <Home />
        </>
    )
}
