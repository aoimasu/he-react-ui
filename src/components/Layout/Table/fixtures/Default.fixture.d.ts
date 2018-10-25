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
            content: string[];
        }[];
    };
};
export default _default;
