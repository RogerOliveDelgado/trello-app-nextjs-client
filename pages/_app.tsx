import '../styles/globals.css'
import type { AppProps } from 'next/app'
import UserContextProvider from "../contexts/UserContext"
import { store } from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <UserContextProvider>
      <Component {...pageProps} />
        </UserContextProvider>
    </Provider>
  ) 
}

export default MyApp
