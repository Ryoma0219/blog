const nextMDX = require('@next/mdx');
const rehypePrism = require('@mapbox/rehype-prism');

const withMDX = nextMDX({
  extension: /[/\\](pages|blog)[/\\](.+)\.mdx?$/,
  options: {
    hastPlugins: [rehypePrism]
  }
});

const nextConfig = {
  pageExtensions: ['js', 'mdx'],
  experimental: {
    redirects() {
      return [
        {
          source: '/2019/11/04/py-json-validation{/}?',
          statusCode: 301,
          destination: '/blog/py-json-validator'
        },
        {
          source: '/2019/07/11/amp-ga-user-sync{/}?',
          statusCode: 301,
          destination: '/blog/amp-ga-user-sync'
        },
        {
          source: '/2019/06/28/lazy-load-for-wp{/}?',
          statusCode: 301,
          destination: '/blog/lazy-load-for-wp'
        },
        {
          source: '/2019/06/15/ios-pwa-splash{/}?',
          statusCode: 301,
          destination: '/blog/ios-pwa-splash'
        },
        {
          source: '/2019/06/03/page-speed-insighter{/}?',
          statusCode: 301,
          destination: '/blog/page-speed-insighter'
        },
        {
          source: '/2019/05/06/career-engineer{/}?',
          statusCode: 301,
          destination: '/blog/career-engineer'
        },
        {
          source: '/2019/05/03/service-worker-1{/}?',
          statusCode: 301,
          destination: '/blog/service-worker'
        },
        {
          source: '/2019/04/05/pass-google-adsense{/}?',
          statusCode: 301,
          destination: '/blog/pass-google-adsense'
        },
        {
          source: '/2019/03/10/retire-entry{/}?',
          statusCode: 301,
          destination: '/blog/retire-entry'
        },
        {
          source: '/2019/03/06/ronbun-git{/}?',
          statusCode: 301,
          destination: '/'
        },
        {
          source: '/2019/02/13/tottewototte{/}?',
          statusCode: 301,
          destination: '/blog/tottewototte'
        },
        
        {
          source: '/2018/11/02/monaca-touch-auth{/}?',
          statusCode: 301,
          destination: '/blog/monaca-touch-auth'
        },
        {
          source: '/2018/10/01/js%E3%81%A7%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%89%E3%82%B7%E3%83%A7%E3%83%BC%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B{/}?',
          statusCode: 301,
          destination: '/blog/vue-slideshow'
        }
      ];
    }
  },
};

module.exports = withMDX(nextConfig);