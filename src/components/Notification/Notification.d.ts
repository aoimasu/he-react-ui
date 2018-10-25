import React from 'react';
declare type Props = {
    canClose: boolean;
    children?: Array<any> | Object | string;
    className?: string;
    closed: boolean;
    onClose: Function;
    type: 'confirmation' | 'default' | 'error' | 'warning';
};
export default class Notification extends React.PureComponent<Props> {
    static defaultProps: {
        canClose: boolean;
        closed: boolean;
        onClose: () => null;
        type: string;
    };
    handleClose: (event: React.SyntheticEvent<any>) => void;
    render(): JSX.Element;
}
export {};
