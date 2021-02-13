import React from 'react'
import { AppProps } from 'next/app'
import { SWRConfig } from 'swr'

import ThemeContainer from '../contexts/theme/ThemeContainer'
import swrConfig from '../config/swr'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SWRConfig value={swrConfig}>
      <ThemeContainer>
        <Component {...pageProps} />
      </ThemeContainer>
    </SWRConfig>
  )
}

export default MyApp
