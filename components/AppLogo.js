import Image from './AppImage';

const Logo = ({
  height = 48,
  width = 160
}) => (
  <Image
    src="/static/ohoshi-logo.png"
    height={height}
    width={width}
    margin={0}
  >
  </Image>
);

export default Logo;
