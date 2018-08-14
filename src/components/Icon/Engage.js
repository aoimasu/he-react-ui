// @flow
import React from 'react';

function Engage(props: SVGProps) {
  return (
    <svg {...props} viewBox="0 0 26 26">
      <path d="M19.576 19.342a1 1 0 0 0-.623.209l-2.408 1.812c-.8.6-1.272 1.545-1.272 2.545V25a1 1 0 0 0 1 1H25a1 1 0 0 0 1-1v-1.092c0-1-.472-1.942-1.271-2.543l-2.409-1.814a1 1 0 1 0-1.203 1.597l2.408 1.815a1 1 0 0 0 .002 0c.3.224.473.571.473.945V24h-6.727v-.092c0-.374.174-.72.473-.945a1 1 0 0 0 .002 0l2.408-1.815a1 1 0 0 0-.58-1.806z" />
      <path d="M20.637 14.182a3.197 3.197 0 0 0-3.182 3.181v1.092a3.197 3.197 0 0 0 3.182 3.182 3.197 3.197 0 0 0 3.181-3.182v-1.092a3.197 3.197 0 0 0-3.181-3.181zm0 2c.665 0 1.181.516 1.181 1.181v1.092c0 .666-.516 1.182-1.181 1.182a1.166 1.166 0 0 1-1.182-1.182v-1.092c0-.665.516-1.181 1.182-1.181zM4.303 5.158a1 1 0 0 0-.623.211L1.273 7.182C.473 7.782 0 8.726 0 9.727v1.091a1 1 0 0 0 1 1h8.727a1 1 0 0 0 1-1V9.727c0-1-.47-1.943-1.27-2.543l-2.41-1.815a1 1 0 1 0-1.203 1.598L8.252 8.78a1 1 0 0 0 .002 0c.3.225.473.572.473.946v.091H2v-.091c0-.374.173-.721.473-.946a1 1 0 0 0 .002 0l2.408-1.814a1 1 0 0 0-.58-1.809z" />
      <path d="M5.363 0a3.197 3.197 0 0 0-3.181 3.182v1.091a3.197 3.197 0 0 0 3.181 3.182 3.197 3.197 0 0 0 3.182-3.182V3.182A3.197 3.197 0 0 0 5.363 0zm0 2c.666 0 1.182.516 1.182 1.182v1.091c0 .666-.516 1.182-1.182 1.182a1.166 1.166 0 0 1-1.181-1.182V3.182C4.182 2.516 4.698 2 5.363 2z" />
      <g>
        <path d="M13 4.75a1 1 0 1 0 0 2h5c2.22 0 4 1.78 4 4v.625a1 1 0 1 0 2 0v-.625c0-3.302-2.698-6-6-6z" />
        <path d="M16.73.99a1 1 0 0 0-.687.303l-3.75 3.75a1 1 0 0 0 0 1.414l3.75 3.75a1 1 0 1 0 1.414-1.414L14.414 5.75l3.043-3.043A1 1 0 0 0 16.73.99z" />
      </g>
      <g>
        <path d="M13 21.25a1 1 0 1 0 0-2H8c-2.22 0-4-1.78-4-4v-.625a1 1 0 1 0-2 0v.625c0 3.302 2.698 6 6 6z" />
        <path d="M9.27 25.01a1 1 0 0 0 .687-.303l3.75-3.75a1 1 0 0 0 0-1.414l-3.75-3.75a1 1 0 1 0-1.414 1.414l3.043 3.043-3.043 3.043a1 1 0 0 0 .727 1.717z" />
      </g>
    </svg>
  );
}

Engage.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default Engage;
