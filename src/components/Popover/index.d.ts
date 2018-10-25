import React from 'react';
declare type Props = {
    children?: any;
    content?: any;
    preferRight?: boolean;
    triggerOnClick?: boolean;
    tooltip?: boolean;
    light?: boolean;
    className?: string;
};
export default class Popover extends React.Component<Props, any> {
    state: {
        fullyMounted: boolean;
    };
    notifyMount: (node: Node | null) => void;
    render(): JSX.Element;
}
export {};
