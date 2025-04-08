'use client';

import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/GlobalStyles'
import colors from '../src/styles/colors'
import { ParallaxProvider } from 'react-scroll-parallax'
import Head from 'next/head'
import { Providers } from './providers'

const theme = {
  colors
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/Icon.png" type="image/png" />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
      <body>
        <Providers>
          <ThemeProvider theme={theme}>
            <ParallaxProvider>
              <GlobalStyles />
              {children}
            </ParallaxProvider>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
} 