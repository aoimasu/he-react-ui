import React from 'react'
import PropTypes from 'prop-types'

export default function Alert (props) {
  const {className, color, height, width, ...restProps} = props

  return (
    <svg className={className} width={`${width}px`} height={`${height}px`} {...restProps} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(2.000000, 3.000000)">
        <path fill={color} d="M8.88235294,0.654411765 L15.2156863,12.5294118 C15.475585,13.0167218 15.2912316,13.6224542 14.8039216,13.8823529 C14.6590914,13.9595957 14.4974742,14 14.3333333,14 L1.66666667,14 C1.11438192,14 0.666666667,13.5522847 0.666666667,13 C0.666666667,12.8358592 0.70707098,12.6742419 0.784313725,12.5294118 L7.11764706,0.654411765 C7.37754576,0.167101691 7.98327816,-0.017251647 8.47058824,0.242647059 C8.6456522,0.336014504 8.7889855,0.479347805 8.88235294,0.654411765 Z M7.25,5 L7.25,7.5 C7.25,7.91421356 7.58578644,8.25 8,8.25 C8.41421356,8.25 8.75,7.91421356 8.75,7.5 L8.75,5 C8.75,4.58578644 8.41421356,4.25 8,4.25 C7.58578644,4.25 7.25,4.58578644 7.25,5 Z M8,12 C8.55228475,12 9,11.5522847 9,11 C9,10.4477153 8.55228475,10 8,10 C7.44771525,10 7,10.4477153 7,11 C7,11.5522847 7.44771525,12 8,12 Z" />
      </g>
    </svg>
  )
}

Alert.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string
}
