import { AppProps } from "next/app"

import { globalStyles } from "../styles/global"

import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app";

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logoImg.src} alt="Logo" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
