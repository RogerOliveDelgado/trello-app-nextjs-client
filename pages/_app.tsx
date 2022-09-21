import '../styles/globals.css'
import type { AppProps } from 'next/app'
import UserContextProvider from "../contexts/UserContext"
import {Provider} from "react-redux"
import store from '../store/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Provider store={store}>
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  </Provider>)
}

export default MyApp
