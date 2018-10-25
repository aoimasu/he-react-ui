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
        body: ({
            content: string[];
            inactive?: undefined;
        } | {
            content: string[];
            inactive: boolean;
        })[];
    };
};
export default _default;
