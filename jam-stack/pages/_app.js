import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div class="container">
      <Component {...pageProps} />
    </div>
}

export default MyApp
