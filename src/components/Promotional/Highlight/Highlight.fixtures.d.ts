/// <reference types="react" />
import Highlight from '.';
declare const _default: ({
    name: string;
    component: typeof Highlight;
    props: {
        image: {
            src: string;
            alt: string;
        };
        youtubeId?: undefined;
    };
    children: JSX.Element;
    parentLayout: {
        marginTop: number;
    };
} | {
    name: string;
    component: typeof Highlight;
    props: {
        youtubeId: string;
        image?: undefined;
    };
    children: JSX.Element;
    parentLayout: {
        marginTop: number;
    };
})[];
export default _default;
