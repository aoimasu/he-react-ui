import React from 'react';

const Info: React.SFC<React.SVGProps<SVGSVGElement>> = props => (
  <svg {...props} viewBox="0 0 24 24">
    <mask id="b" fill="#fff">
      <path
        id="a"
        d="M13 16h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h1v-4h-1a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v5zm6.071 3.071c-3.905 3.905-10.237 3.905-14.142 0-3.905-3.905-3.905-10.237 0-14.142 3.905-3.905 10.237-3.905 14.142 0 3.905 3.905 3.905 10.237 0 14.142zM6.343 6.343a8 8 0 1 0 11.314 11.314A8 8 0 0 0 6.343 6.343zM11 7.5a1 1 0 0 1 2 0V8a1 1 0 0 1-2 0v-.5z"
      />
    </mask>
    <g fill={props.fill} mask="url(#b)">
      <path d="M-8-8h40v40H-8z" />
    </g>
  </svg>
);

Info.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default Info;
