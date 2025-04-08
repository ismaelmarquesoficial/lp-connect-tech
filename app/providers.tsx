'use client';

import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/GlobalStyles'
import colors from '../src/styles/colors'
import { ParallaxProvider } from 'react-scroll-parallax'

const theme = {
  colors
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <GlobalStyles />
        {children}
      </ParallaxProvider>
    </ThemeProvider>
  )
} 