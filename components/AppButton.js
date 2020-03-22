import Link from 'next/link';
import classNames from 'classnames';
import css from 'styled-jsx/css';

const buttonStyle = css`
  .btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    margin: -0.25rem -0.5rem;
    border-radius: 7px;
    color: #25d96f;
    background-color: transparent;
    border: none;
    font-size: inherit;
    line-height: inherit;
    transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
    outline: none;
  }
  .btn:hover {
    color: rgba(37, 217, 111, 0.8);
    background: rgba(0, 118, 255, 0.1);
  }
  .btn.invert {
    margin: 0;
    padding: 0 3.5rem;
    height: 2.81rem;
    line-height: 2.8rem;
    border-radius: 7px;
    background-color: rgba(37, 217, 111, 0.8);
    box-shadow: 0 4px 14px 0 rgba(0, 118, 255, 0.39);
    color: white;
  }
  .btn.invert:hover {
    background: rgba(37, 217, 111, 0.8);
    box-shadow: 0 6px 20px rgba(0, 118, 255, 0.23);
  }
  .btn.invert:active {
    background: #006ae6;
  }
  .btn.small {
    font-size: 0.875rem;
    height: 1.5rem;
    padding: 0 0.75rem;
    line-height: inherit;
    border-radius: 5px;
  }
`;

const Button = ({
  children,
  invert,
  small,
  href,
  as,
  className,
  amp,
  ...props
}) => {
  const buttonClassNames = classNames(className, 'btn', 'no-drag', {
    invert,
    small
  });

  if (href) {
    const isExternal = href && href.startsWith('http');
    const a = (
      <a className={buttonClassNames} href={href} {...props}>
        {children}
        <style jsx>{buttonStyle}</style>
      </a>
    );

    return amp || isExternal ? (
      a
    ) : (
      <Link href={href} as={as}>
        {a}
      </Link>
    );
  }

  return (
    <button type="button" className={buttonClassNames} {...props}>
      <span className="text">{children}</span>
      <style jsx>{buttonStyle}</style>
    </button>
  );
};

export default Button;
