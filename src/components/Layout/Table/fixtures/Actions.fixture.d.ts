/// <reference types="react" />
import Table from '../';
declare const _default: {
    component: typeof Table;
    props: {
        columns: ({
            title: string;
            width?: undefined;
        } | {
            title: string;
            width: string;
        })[];
        body: {
            content: (string | JSX.Element)[];
        }[];
    };
};
export default _default;
