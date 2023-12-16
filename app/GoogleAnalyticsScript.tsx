/* eslint-disable @next/next/inline-script-id */
import Script from 'next/script'
import React from 'react'


export const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX" />
      <Script id='google-analytics'>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'GT-E720JHXSJ1');`}
      </Script>
    </>
  )
}
