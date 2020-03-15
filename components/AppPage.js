import PageContainer from './AppPageContainer';
import Header from './AppHeader';

const Page = ({
  title,
  description,
  sticky,
  children
}) => (
  <PageContainer title={title} description={description}>
    <Header sticky={sticky} />
    {children}
  </PageContainer>
);

export default Page;
