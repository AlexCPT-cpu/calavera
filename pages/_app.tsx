import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ConnectWalletProvider } from "../context/WalletConnectContext";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    type: "dark", // it could be "light" or "dark"
    theme: {
      colors: {
        // brand colors
        primaryLight: '$green200',
        primaryLightHover: '$green300',
        primaryLightActive: '$green400',
        primaryLightContrast: '$green600',
        primary: '#4ADE7B',
        primaryBorder: '$green500',
        primaryBorderHover: '$green600',
        primarySolidHover: '$green700',
        primarySolidContrast: '$white',
        primaryShadow: '$green500',
  
        gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
        link: '#5E1DAD',
  
        // you can also create your own color
        myColor: '#ff4ecd'
  
        // ...  more colors
      },
      space: {},
      fonts: {}
    }
  })

  return(
    <ConnectWalletProvider>
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
    </ConnectWalletProvider>
  )
}

export default MyApp
