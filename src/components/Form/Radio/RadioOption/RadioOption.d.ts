import React from 'react';
import { Option } from '../Option.type';
export default class RadioOption extends React.Component<{
    onClick: Function;
    name: string;
    option: Option;
    value?: string;
}> {
    handleClick: () => void;
    render(): JSX.Element;
}
