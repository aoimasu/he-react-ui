// @flow
import React from 'react';

type Props = { className?: string };

export default function Bookings(props: Props) {
  const { className, ...restProps } = props;

  return (
    <svg
      className={className}
      {...restProps}
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(1.000000, 1.000000)">
        <path d="M -0.015625,6.9863281 A 1.0001,1.0001 0 0 0 -1,8 v 14 a 1.0001,1.0001 0 0 0 1,1 h 22 a 1.0001,1.0001 0 0 0 1,-1 V 8 A 1.0001,1.0001 0 1 0 21,8 V 21 H 1 V 8 A 1.0001,1.0001 0 0 0 -0.015625,6.9863281 Z" />
        <path d="M 0,1 A 1.0001,1.0001 0 0 0 -1,2 V 8 A 1.0001,1.0001 0 0 0 0,9 H 22 A 1.0001,1.0001 0 0 0 23,8 V 2 A 1.0001,1.0001 0 0 0 22,1 Z M 1,3 H 21 V 7 H 1 Z" />
        <path d="M 10.984375,-1.0136719 A 1.0001,1.0001 0 0 0 10,0 v 4 a 1.0001,1.0001 0 1 0 2,0 V 0 a 1.0001,1.0001 0 0 0 -1.015625,-1.0136719 z" />
        <path d="M 4.984375,-1.0136719 A 1.0001,1.0001 0 0 0 4,0 V 4 A 1.0001,1.0001 0 1 0 6,4 V 0 A 1.0001,1.0001 0 0 0 4.984375,-1.0136719 Z" />
        <path d="M 16.984375,-1.0136719 A 1.0001,1.0001 0 0 0 16,0 v 4 a 1.0001,1.0001 0 1 0 2,0 V 0 a 1.0001,1.0001 0 0 0 -1.015625,-1.0136719 z" />
        <path d="m 3,11 h 4 v 3 H 3 Z" />
        <path d="m 9,11 h 4 v 3 H 9 Z" />
        <path d="m 3,16 h 4 v 3 H 3 Z" />
        <path d="m 9,16 h 4 v 3 H 9 Z" />
        <path d="m 15,11 h 4 v 3 h -4 z" />
      </g>
    </svg>
  );
}
