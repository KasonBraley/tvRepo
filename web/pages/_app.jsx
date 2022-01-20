import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/App.css"
import ShowProvider from "../context/showContext.jsx"
import Layout from "../components/Layout"

function MyApp({ Component, pageProps }) {
    return (
        <ShowProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ShowProvider>
    )
}

export default MyApp
