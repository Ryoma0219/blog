const Container = ({
  center,
  gray,
  wide,
  small,
  padding,
  overflow,
  minHeight,
  children,
  divider,
  ...props
}) => {
  return (
    <div {...props}>
      <style jsx>
        {`
      {
        width: 100%;
        margin: 0 auto;
        padding: ${padding ? '3rem' : '0'} ${wide ? '0' : '1rem'};
        ${wide && !small ? '' : 'max-width: 1024px;'}
        ${small ? 'max-width: 682px;' : ''}
        ${center ? 'text-align: center;' : ''}
        ${gray ? 'background-color: #fafafa;' : ''}
        ${gray ? 'border-top: 1px solid #eaeaea;' : ''}
        ${gray ? 'border-bottom: 1px solid #eaeaea;' : ''}
        ${wide && !overflow ? 'overflow: hidden;' : ''}
        ${minHeight ? `min-height: ${minHeight}px;` : ''}
        ${divider ? `border-top: 1px solid rgba(0,0,0,0.1);` : ''}
      }
      :after {
        content: '';
        display: table;
        clear: both;
      }

      // CSS only media query for tablet
      @media screen and (max-width: 960px) {
        div {
          padding: ${padding ? '2rem' : '0'} ${wide ? '0' : '2rem'};
        }
      }
      // CSS only media query for mobile
      @media screen and (max-width: 640px) {
        div {
          padding: ${padding ? '2rem' : '0'} ${wide ? '0' : '2rem'};
        }
      }
    `}
      </style>
      {children}
    </div>
  );
}

export default Container;
