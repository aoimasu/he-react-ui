import Table from '../';
declare const _default: {
    component: typeof Table;
    props: {
        columns: ({
            title: string;
            sortable: boolean;
            width?: undefined;
        } | {
            title: string;
            width: string;
            sortable?: undefined;
        } | {
            title: string;
            sortable: boolean;
            width: string;
        })[];
        body: {
            content: string[];
        }[];
    };
};
export default _default;
