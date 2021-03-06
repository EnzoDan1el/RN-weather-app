import React from 'react';
import Svg, {Path, Defs, Stop, LinearGradient} from 'react-native-svg';

const Sunset = () => {
  return (
    <Svg
      width="25"
      height="16"
      viewBox="0 0 25 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M12.5 1V4.05769V7.11538M12.5 7.11538L15 4.05769M12.5 7.11538L10 4.05769M20.6318 7.81936L18.7553 9.66865M24 14.7826H21.3462M3.65385 14.7826H1M6.24466 9.66865L4.36817 7.81936"
        stroke="#91A5B0"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <Path
        d="M12.5 9.83333C9.27833 9.83333 6.66666 12.445 6.66666 15.6667H18.3333C18.3333 12.445 15.7217 9.83333 12.5 9.83333Z"
        fill="#91A5B0"
      />
    </Svg>
  );
};

export default Sunset;
