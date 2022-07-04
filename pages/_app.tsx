import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ChampionListProvider from "../store/ChampionContext/ChampionList";
import Layout from "../components/Layout";
import "@fortawesome/fontawesome-svg-core/styles.css"
import {config} from "@fortawesome/fontawesome-svg-core"
import VersionListProvider from "../store/VersionContext/VersionList";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return(
      <VersionListProvider>
          <ChampionListProvider>
              <Layout>
                  <Component {...pageProps}/>
              </Layout>
          </ChampionListProvider>
      </VersionListProvider>
  )
}

export default MyApp
