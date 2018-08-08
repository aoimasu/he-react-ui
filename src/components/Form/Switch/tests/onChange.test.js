// @flow
import React from 'react';
import { shallow } from 'enzyme';
import Switch from '../Switch';
import styles from '../Switch.scss';

const handleChange = jest.fn();
const wrapper = shallow(
  <Switch id="demo" name="demo" value="on" onChange={handleChange} />,
);

describe('<Switch />', () => {
  it('triggers onChange the switch is toggled', () => {
    const switchEl = wrapper.find(`.${styles.switchLabel}`).first();
    expect(handleChange).toHaveBeenCalledTimes(0);
    switchEl.simulate('click');
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
  it('do not call onChange when the switch is disabled', () => {
    wrapper.setProps({ disabled: true });
    const switchEl = wrapper.find(`.${styles.switchLabel}`).first();
    switchEl.simulate('click');
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
