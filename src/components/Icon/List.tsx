import React from 'react';

const List: React.SFC<React.SVGProps<SVGSVGElement>> = props => (
  <svg {...props} viewBox="-3 -3 30 30">
    <path
      id="a"
      d="M8.667 7.333a1.667 1.667 0 1 1 0-3.333h11.666a1.667 1.667 0 1 1 0 3.333H8.667zm0 13.334a1.667 1.667 0 0 1 0-3.334h11.666a1.667 1.667 0 0 1 0 3.334H8.667zm0-6.667a1.667 1.667 0 0 1 0-3.333h11.666a1.667 1.667 0 1 1 0 3.333H8.667zM2.5 4h2.333a.5.5 0 0 1 .5.5v2.333a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5V4.5a.5.5 0 0 1 .5-.5zm0 6.667h2.333a.5.5 0 0 1 .5.5V13.5a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5v-2.333a.5.5 0 0 1 .5-.5zm0 6.666h2.333a.5.5 0 0 1 .5.5v2.334a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5v-2.334a.5.5 0 0 1 .5-.5z"
    />
  </svg>
);

List.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default List;
