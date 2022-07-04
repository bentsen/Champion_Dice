import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ChampionListProvider from "../store/ChampionContext/ChampionList";
import Layout from "../components/Layout";
import "@fortawesome/fontawesome-svg-core/styles.css"
import {config} from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return(
      <ChampionListProvider>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </ChampionListProvider>
  )
}

export default MyApp
