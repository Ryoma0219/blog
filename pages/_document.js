/* eslint-disable react/no-danger */
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { useAmp } from 'next/amp';

import { GA_TRACKING_ID } from '../modules/analytics';

function AmpWrap({ ampOnly, nonAmp }) {
  const isAmp = useAmp();
  if (ampOnly) return isAmp && ampOnly;
  return !isAmp && nonAmp;
}

class NextSite extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#000" />
          <AmpWrap
            ampOnly={
              <>
                <script
                  async
                  key="amp-analytics"
                  custom-element="amp-analytics"
                  src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
                />
                <meta name="amp-google-client-id-api" content="googleanalytics"></meta>
              </>
            }
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <AmpWrap
            ampOnly={
              <amp-analytics type="googleanalytics" id="analytics1" data-credentials="include">
                <script
                  type="application/json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      vars: {
                        account: GA_TRACKING_ID,
                        gtag_id: GA_TRACKING_ID,
                        config: {
                          GA_TRACKING_ID: { groups: 'default' }
                        }
                      },
                      triggers: {
                        trackPageview: {
                          on: 'visible',
                          request: 'pageview'
                        }
                      }
                    })
                  }}
                />
              </amp-analytics>
            }
          />
          <AmpWrap
            nonAmp={
              <>
                <script
                  async
                  src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                />
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}');
                  `
                  }}
                />
              </>
            }
          />
        </body>
      </Html>
    );
  }
}

export default NextSite;
