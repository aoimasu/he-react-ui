/// <reference types="react" />
declare const _default: ({
    name: string;
    component: (props: any) => JSX.Element;
    props: {
        name: string;
        dark?: undefined;
        down?: undefined;
        shadow?: undefined;
    };
} | {
    name: string;
    component: (props: any) => JSX.Element;
    props: {
        name: string;
        dark: boolean;
        down?: undefined;
        shadow?: undefined;
    };
} | {
    name: string;
    component: (props: any) => JSX.Element;
    props: {
        name: string;
        down: boolean;
        dark?: undefined;
        shadow?: undefined;
    };
} | {
    name: string;
    component: (props: any) => JSX.Element;
    props: {
        name: string;
        shadow: boolean;
        dark?: undefined;
        down?: undefined;
    };
})[];
export default _default;
