import React from 'react';

import Footer from '../components/AppFooter';
import Screen from '../components/AppScreen';
import Page from '../components/AppPage';
import Container from '../components/AppContainer';
import Preview from '../components/blog/Preview';
import { components } from '../components/blog/Components';

function importAll(r) {
  return r.keys().map(r);
}

const previewItems = importAll(
  require.context('../blog', false, /\.meta\.mdx$/)
);

function dateSortDesc(a, b) {
  const date1 = new Date(a.meta.date);
  const date2 = new Date(b.meta.date);
  if (date1 > date2) return -1;
  if (date1 < date2) return 1;
  return 0;
}

const Li = components.li;

const getLi = path => ({ children }) => {
  const { props } = children.props;
  const { href } = props;
  const isHash = href && href.startsWith('#');
  const element = React.cloneElement(children, {
    props: isHash ? { ...props, href: path + href } : props
  });

  return <Li>{element}</Li>;
};

const items = previewItems
  .sort(dateSortDesc)
  .map(({ default: Component, meta }, index) => {
    const previewComponents = { ...components, li: getLi(meta.link) };

    return (
      <Preview key={meta.title} {...meta}>
        <Component components={previewComponents} />
      </Preview>
    );
  });

export default () => (
  <Page title="Ohoshi.me">
    <Screen offset={74}>
      <Container wide>{items}</Container>
    </Screen>
    <Footer />
  </Page>
);

// export const config = {
//   amp: true
// };
