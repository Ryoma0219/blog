import Head from 'next/head';

const PageContainer = ({ title, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title || 'ohoshi.me'}</title>
        {description !== false && (
          <meta
            name="description"
            content={description || "Ryoma Hoshino's Blog"}
          />
        )}
      </Head>
      {children}
      <style jsx global>
        {`
          html {
            line-height: 1.15;
            -webkit-text-size-adjust: 100%;
            height: 100%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            position: relative;
            min-height: 100%;
            margin: 0;
            line-height: 1.65;
            font-family: -apple-system, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
              'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
              sans-serif;
            font-size: 16px;
            font-weight: 400;
            min-width: 320px;
            direction: ltr;
            font-feature-settings: 'kern';
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            scroll-behavior: smooth;
          }
          html,
          body {
            background-color: #fff;
            color: #112;
          }
          ::selection {
            background-color: #25d96f;
            color: #fff;
          }
          [role='grid']:focus {
            outline: none;
          }
          svg {
            text-rendering: optimizeLegibility;
          }
          h1,
          h2,
          h3 {
            margin: 0;
          }
          a {
            color: #25d96f;
            text-decoration: none;
            transition: color 0.2s ease;
          }
          a:hover {
            color: #68b5fb;
          }
          code {
            font-size: 0.9em;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
              serif;
          }
          code:before,
          code:after {
            content: '\`';
          }
          pre code:before,
          pre code:after {
            content: none;
          }
          iframe {
            width: 100%;
            height: 100%;
            border: none;
          }
          a[role='button'] {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            -khtml-user-select: none;
            user-select: none;
          }
          a {
            -webkit-touch-callout: none;
            -ms-touch-action: pan-y;
            touch-action: pan-y;
            -webkit-tap-highlight-color: transparent;
          }
          .no-drag {
            user-drag: none;
            user-select: none;
            -moz-user-select: none;
            -webkit-user-drag: none;
            -webkit-user-select: none;
            -ms-user-select: none;
          }
          .visually-hidden {
            clip: rect(0 0 0 0);
            height: 1px;
            width: 1px;
            margin: -1px;
            padding: 0;
            border: 0;
            overflow: hidden;
            position: absolute;
          }

          code[class*='language-'],
          pre[class*='language-'] {
            color: #f8f8f2;
            text-shadow: 0 1px rgba(0, 0, 0, 0.3);
            direction: ltr;
            text-align: left;
            white-space: pre;
            word-spacing: normal;
            word-break: normal;
            line-height: 1.5;
            tab-size: 4;
            hyphens: none;
          }

          .token.comment,
          .token.prolog,
          .token.doctype,
          .token.cdata {
            color: #999;
          }

          .token.punctuation {
            color: #c5c8c6;
          }

          .namespace {
            opacity: 0.7;
          }

          .token.property,
          .token.keyword,
          .token.tag {
            color: #96cbfe;
          }

          .token.class-name {
            color: #ffffb6;
          }

          .token.boolean,
          .token.constant {
            color: #99cc99;
          }

          .token.symbol,
          .token.deleted {
            color: #f92672;
          }

          .token.number {
            color: #ff73fd;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #a8ff60;
          }

          .token.variable {
            color: #c6c5fe;
          }

          .token.operator {
            color: #ededed;
          }

          .token.entity {
            color: #ffffb6;
            cursor: help;
          }

          .token.url {
            color: #96cbfe;
          }

          .language-css .token.string,
          .style .token.string {
            color: #87c38a;
          }

          .token.atrule,
          .token.attr-value {
            color: #f9ee98;
          }

          .token.function {
            color: #dad085;
          }

          .token.regex {
            color: #e9c062;
          }

          .token.important {
            color: #fd971f;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          svg {
            shape-rendering: crispEdges;
          }

          svg path,
          svg circle {
            shape-rendering: geometricprecision;
          }
          [data-reach-skip-link] {
            border: 0;
            clip: rect(0 0 0 0);
            height: 1px;
            width: 1px;
            margin: -1px;
            padding: 0;
            overflow: hidden;
            position: absolute;
          }
          [data-reach-skip-link]:focus {
            padding: 1rem;
            position: fixed;
            top: 10px;
            left: 10px;
            background: white;
            z-index: 1;
            width: auto;
            height: auto;
            clip: auto;
          }
        `}
      </style>
    </div>
  );
};

export default PageContainer;
