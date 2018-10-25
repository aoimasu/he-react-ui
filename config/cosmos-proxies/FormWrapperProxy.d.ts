import React from 'react';
declare type Props = {
    nextProxy: any;
    fixture: any;
};
export default class FormWrapperProxy<T> extends React.Component<Props, any> {
    constructor(props: Props);
    state: {
        value: number;
    };
    onChange: ({ value }: {
        value: T;
    }) => void;
    render(): JSX.Element;
}
export {};
