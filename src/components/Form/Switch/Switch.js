// @flow

/**
 *
 * Button
 *
 */

import classnames from 'classnames';
import React from 'react';
import Icon from '../../Icon';
import styles from './Switch.scss';

type Props = {
  id: string,
  name: string,
  disabled?: boolean,
  className?: string,
  label?: string,
  onChange: Function,
  value?: string,
};

class Switch extends React.Component<Props> {
  static defaultProps = {
    disabled: false,
  };

  handleClick = () => {
    if (!this.props.disabled && this.props.onChange) {
      const oldValue = this.props.value;
      this.props.onChange({
        value: oldValue === 'on' ? 'off' : 'on',
        props: this.props,
      });
    }
  };

  render() {
    const {
      className,
      id,
      label,
      onChange,
      value,
      disabled,
      ...restProps
    } = this.props;

    const classes = classnames(
      styles.outer,
      disabled && styles.disabled,
      className,
    );

    const labelClasses = classnames(
      styles.switchLabel,
      value === 'on' && styles.switchOn,
      value === 'off' && styles.switchOff,
    );

    return (
      <div className={classes} id={id} {...restProps}>
        <label className={labelClasses} onClick={this.handleClick}>
          <span className={styles.switchInner}>
            <Icon name="Tick" className={styles.switchTick} />
          </span>
          <span className={styles.switchSwitch} />
        </label>
      </div>
    );
  }
}

export default Switch;
