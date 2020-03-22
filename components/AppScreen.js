const Screen = ({ offset, children }) => (
  <div
    style={{
      minHeight: offset ? `calc(100vh - ${offset}px)` : ''
    }}
  >
    <style jsx>{`
      {
        width: 100%;
        min-height: 100vh;
      }
    `}</style>
    {children}
  </div>
);

export default Screen;
