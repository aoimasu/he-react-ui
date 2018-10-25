/// <reference types="react" />
import Radio from '../';
declare const _default: {
    component: typeof Radio;
    formWrapper: {};
    props: {
        name: string;
        id: string;
        options: ({
            label: string;
            value: string;
            child?: undefined;
            showChild?: undefined;
        } | {
            label: string;
            value: string;
            child: JSX.Element;
            showChild: boolean;
        })[];
        value: string;
    };
};
export default _default;
