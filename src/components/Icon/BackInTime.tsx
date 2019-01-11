import React from 'react';

const BackInTime: React.SFC<React.SVGProps<SVGSVGElement>> = props => (
  <svg {...props} viewBox="-1 -1 26 26">
    <mask id="b" fill="#fff">
      <path
        id="a"
        d="M7.076 7.015l1.58-.262a1 1 0 1 1 .327 1.973l-3.826.635a.996.996 0 0 1-.94-.212.996.996 0 0 1-.33-.591l-.655-3.946a1 1 0 1 1 1.973-.328l.253 1.528A8.936 8.936 0 0 1 12 3c4.952 0 9 4.048 9 9s-4.048 9-9 9-9-4.048-9-9a1 1 0 0 1 2 0c0 3.848 3.152 7 7 7s7-3.152 7-7-3.152-7-7-7c-1.903 0-3.658.75-4.924 2.015zm8.831 7.478a1 1 0 0 1-1.414 1.414l-3.2-3.2A1 1 0 0 1 11 12V8a1 1 0 0 1 2 0v3.586l2.907 2.907z"
      />
    </mask>
    <g fill={props.fill} mask="url(#b)">
      <path d="M-8-8h40v40H-8z" />
    </g>
  </svg>
);

BackInTime.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default BackInTime;
