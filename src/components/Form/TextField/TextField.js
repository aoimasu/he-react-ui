// @flow
/**
 *
 * TextField
 *
 */

import classnames from 'classnames';
import React, { Fragment } from 'react';
import { returnNull } from '../../../util';
import PopUp from '../../PopUp';
import Cross from '../../Icon/Cross';
import Tick from '../../Icon/Tick';
import Help from '../../Icon/Help';
import Popover from '../../Popover';
import style from './TextField.scss';

type Markers = 'none' | 'tick-cross' | 'info' | 'verify';

type Props = {
  id: string,
  name: string,
  className?: string,
  label?: Object | string,
  description?: string,
  error?: string,
  inline?: boolean,
  value?: string,
  disabled?: boolean,
  marker?: Markers,
  markerTooltip?: any,
  showMarkerTooltip?: boolean,
  isValid?: boolean,
  isVerified?: boolean,
  password?: boolean,
  small?: boolean,
  onBlur: Function,
  onChange: Function,
  onFocus: Function,
  toggleMarkerTooltip?: Function,
};

class TextField extends React.Component<Props, *> {
  static defaultProps = {
    disabled: false,
    inline: false,
    marker: 'none',
    markerTooltip: null,
    showMarkerTooltip: false,
    value: '',
    isValid: true,
    isVerified: false,
    onBlur: returnNull,
    onChange: returnNull,
    onFocus: returnNull,
    toggleMarkerTooltip: returnNull,
  };

  state = {
    focused: false,
  };

  handleFocus = (e: SyntheticEvent<HTMLInputElement>) => {
    const event = {
      value: e.currentTarget.value,
      props: this.props,
    };

    this.setState({
      focused: true,
    });
    this.props.onFocus(event);
  };

  handleBlur = (e: SyntheticEvent<HTMLInputElement>) => {
    const event = {
      value: e.currentTarget.value,
      props: this.props,
    };

    this.setState({
      focused: false,
    });
    this.props.onBlur(event);
  };

  handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const event = {
      value: e.currentTarget.value,
      props: this.props,
    };
    this.props.onChange(event);
  };

  renderMarker = () => {
    const {
      value,
      marker,
      markerTooltip,
      isVerified,
      isValid,
      showMarkerTooltip,
      toggleMarkerTooltip,
    } = this.props;
    switch (marker) {
      case 'tick-cross':
        return (
          value !== '' &&
          (isValid ? (
            <Tick className={style.marker} />
          ) : (
            <Cross className={style.marker} />
          ))
        );
      case 'info':
        return (
          markerTooltip && (
            <div className={style.helper}>
              <Popover content={markerTooltip} tooltip light preferRight>
                <Help className={style.helperIcon} />
              </Popover>
            </div>
          )
        );
      case 'verify': {
        return (
          <Fragment>
            <PopUp
              showing={showMarkerTooltip}
              className={style.popUp}
              onClose={toggleMarkerTooltip}
            >
              {markerTooltip}
            </PopUp>
            <div
              className={classnames(
                style.verifiedTag,
                isVerified ? style.verified : style.unVerified,
              )}
              onClick={toggleMarkerTooltip}
            >
              {isVerified ? 'Verified' : 'Verify'}
            </div>
          </Fragment>
        );
      }
      default:
        return null;
    }
  };
  render() {
    const {
      className,
      id,
      name,
      label,
      description,
      value,
      disabled,
      error,
      inline,
      marker,
      markerTooltip,
      onBlur,
      onChange,
      onFocus,
      isValid,
      isVerified,
      password,
      small,
      showMarkerTooltip,
      toggleMarkerTooltip,
      ...restProps
    } = this.props;
    const { focused } = this.state;
    const floating = focused || value !== '';
    const wrapperClasses = classnames(
      style.outer,
      {
        [style.invalid]: !isValid,
        [style.disabled]: disabled,
        [style.inline]: inline,
        [style.focused]: focused,
        [style.hasMarker]: marker !== 'none',
        [style.small]: small,
      },
      className,
    );

    const inputClasses = classnames(style.input, {
      [style.small]: small,
      [style.noLabel]: !label,
    });

    const labelClasses = classnames(style.label, {
      [style.floating]: floating,
      [style.small]: small,
    });

    return (
      <div className={wrapperClasses} {...restProps}>
        <div className={style.block}>
          <input
            className={inputClasses}
            id={id}
            name={name}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            disabled={disabled}
            value={value}
            type={password ? 'password' : 'text'}
          />

          {this.renderMarker()}

          {label && (
            <label className={labelClasses} htmlFor={id}>
              {label}
            </label>
          )}
        </div>

        {(description || error) && (
          <label htmlFor={id} className={style.description}>
            {error || description}
          </label>
        )}
      </div>
    );
  }
}

export default TextField;
