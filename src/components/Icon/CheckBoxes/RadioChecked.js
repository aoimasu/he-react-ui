import React from "react";
import PropTypes from "prop-types";

export default function RadioChecked(props) {
  const { className, ...restProps } = props;

  return (
    <svg
      className={className}
      {...restProps}
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.66 0.36L13.89 0.79L15.05 1.37L16.11 2.08L17.07 2.93L17.92 3.89L18.63 4.95L19.21 6.11L19.64 7.34L19.91 8.64L20 10L19.91 11.36L19.64 12.66L19.21 13.89L18.63 15.05L17.92 16.11L17.07 17.07L16.11 17.92L15.05 18.63L13.89 19.21L12.66 19.64L11.36 19.91L10 20L8.64 19.91L7.34 19.64L6.11 19.21L4.95 18.63L3.89 17.92L2.93 17.07L2.08 16.11L1.37 15.05L0.79 13.89L0.36 12.66L0.09 11.36L0 10L0.09 8.64L0.36 7.34L0.79 6.11L1.37 4.95L2.08 3.89L2.93 2.93L3.89 2.08L4.95 1.37L6.11 0.79L7.34 0.36L8.64 0.09L10 0L11.36 0.09L12.66 0.36ZM7.64 6.77L6.77 7.64L6.2 8.74L6 10L6.2 11.26L6.77 12.36L7.64 13.23L8.74 13.8L10 14L11.26 13.8L12.36 13.23L13.23 12.36L13.8 11.26L14 10L13.8 8.74L13.23 7.64L12.36 6.77L11.26 6.2L10 6L8.74 6.2L7.64 6.77Z" />
    </svg>
  );
}

RadioChecked.propTypes = {
  className: PropTypes.string
};
