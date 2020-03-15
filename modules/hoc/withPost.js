import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import Page from '../../components/AppPage';
import Container from '../../components/AppContainer';
import Button from '../../components/AppButton';
import Footer from '../../components/AppFooter';

import { components } from '../../components/blog/Components';

export default meta => ({ children }) => (
  <MDXProvider components={components}>
    <Page title={`Blog - ${meta.title} | Ohoshi.me`}>
      <Container padding>
        <h1 className="title">{meta.title}</h1>
        <Container small wide overflow>
          <main>{children}</main>
          <div className="back-button">
            <Button href="/" invert amp>
              ← Back to Blog
            </Button>
          </div>
        </Container>
      </Container>
      <style jsx>{`
        .title {
          text-align: center;
        }
        .date {
          margin-top: 2rem;
          text-align: center;
        }
        amp-timeago {
          display: inline;
        }
        .authors {
          margin: 1.5rem 0 4rem;
          text-align: center;
        }
        .back-button {
          margin-top: 8rem;
        }
        .icon {
          line-height: 0;
          vertical-align: middle;
        }
        .post-type {
          display: block;
          text-align: center;
          text-transform: uppercase;
          font-size: 12px;
          color: #0070f3;
        }
        // CSS only media query for mobile
        @media screen and (max-width: 640px) {
          .authors {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: -1rem;
            margin-right: -1rem;
          }
          .title {
            text-align: center;
          }
          .date {
            margin-top: 1rem;
            text-align: center;
          }
        }
      `}</style>
      <Footer />
    </Page>
  </MDXProvider>
);
