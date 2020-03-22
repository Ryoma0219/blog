import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import Page from '../../components/AppPage';
import Container from '../../components/AppContainer';
import Button from '../../components/AppButton';
import Footer from '../../components/AppFooter';
import Screen from '../../components/AppScreen';
import Tags from '../../components/blog/Tags';
import Image from '../../components/AppImage';

import { components } from '../../components/blog/Components';

const Author = meta => {
  return (
    <div className="author">
      <Image src={meta.avatar} width={40} height={40} margin={0} authorIcon />
      <div className="name f5">
        <span className="real-name">
          {meta.name}
          <a
            href={`https://twitter.com/${meta.twitter}`}
            className="twitter"
            rel="noopener noreferrer"
            target="_blank"
          >
            @{meta.twitter}
          </a>
        </span>
        <div className="intro">{meta.intro}</div>
      </div>
      <style jsx>{`
        .author {
          display: inline-flex;
          align-items: center;
          padding: 0 1rem;
          margin-bottom: 0.5rem;
          white-space: nowrap;
        }
        img {
          width: 2rem;
          height: 2rem;
          margin-right: 0.5rem;
          border-radius: 50%;
          background: #efefef;
        }
        .name {
          line-height: 1.2rem;
          text-align: left;
        }
        .real-name {
          display: block;
        }
        .intro {
          color: #757575;
          font-size: 12px;
        }
        .twitter {
          font-size: 12px;
          margin-left: 12px;
        }
        .twitter-mobile {
          display: none;
          margin-left: 0.25rem;
        }
        // CSS only media query for mobile
        @media screen and (max-width: 640px) {
          img {
            width: 1.5rem;
            height: 1.5rem;
          }
          .real-name {
            display: inline;
          }
          .twitter {
            display: none;
          }
          .twitter-mobile {
            display: initial;
          }
        }
      `}</style>
    </div>
  );
};
const HeaderImage = meta => (
  meta.eyeCatch && (
    <div>
      <style jsx>{`
        div {
          background-image: url(${meta.eyeCatch});
          background-size: cover;
          background-position: center 50%;
          width: 100%;
          min-height: 220px;
        }
      `}</style>
    </div>
  )
);

export default meta => ({ children }) => (
  <MDXProvider components={components}>
    <Page title={`Blog - ${meta.title} | Ohoshi.me`}>
      <Screen offset={74}>
        <Container padding>
          <h1 className="title">{meta.title}</h1>
          {meta.eyeCatch && (
            <HeaderImage {...meta} />
          )}
          <Container small wide overflow>
            <Tags tags={meta.tags} />
            <main>{children}</main>
            <Author {...meta} />
            <div className="back-button">
              <Button href="/" invert amp>
                ← Back to Blog
              </Button>
            </div>
          </Container>
        </Container>
      </Screen>
      <style jsx>{`
        .title {
          text-align: center;
          margin-bottom: 2rem;
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
          color: #25d96f;
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
