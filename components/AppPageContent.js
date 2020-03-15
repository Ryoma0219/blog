const PageContent = ({
  children
}) => (
  <div>
    {children}
    <style jsx>{`
      div {
        min-height: 100vh;
      }
    `}</style>
  </div>
);

export default PageContent;
