import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const PlusIcon = (props: SvgProps) => (
  <Svg
    fill="#000000"
    width="30px"
    height="30px"
    viewBox="0 0 24 24"
    id="plus"
    data-name="Flat Line"
    {...props}>
    <Path
      id="primary"
      d="M5,12H19M12,5V19"
      style={{
        fill: 'none',
        stroke: '#128C7E',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
      }}
    />
  </Svg>
);
export default PlusIcon;
