/// <reference types="react" />
import PopoverDisplay from '.';
declare const _default: ({
    name: string;
    component: typeof PopoverDisplay;
    props: {
        light?: undefined;
        tooltip?: undefined;
    };
    parentLayout: {
        padding: number;
    };
    children: JSX.Element;
} | {
    name: string;
    component: typeof PopoverDisplay;
    props: {
        light: boolean;
        tooltip?: undefined;
    };
    parentLayout: {
        padding: number;
    };
    children: JSX.Element;
} | {
    name: string;
    component: typeof PopoverDisplay;
    props: {
        tooltip: boolean;
        light?: undefined;
    };
    parentLayout: {
        padding: number;
    };
    children: string;
})[];
export default _default;
