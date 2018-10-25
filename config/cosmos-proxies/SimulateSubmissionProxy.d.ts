import React from 'react';
declare type Props = {
    nextProxy: any;
    fixture: any;
};
export default class SimulateSubmissionProxy extends React.Component<Props, any> {
    state: {
        done: boolean;
        submitting: boolean;
    };
    onClick: () => void;
    render(): JSX.Element;
}
export {};
