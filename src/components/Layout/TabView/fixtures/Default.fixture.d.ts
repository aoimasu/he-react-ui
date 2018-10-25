import TabView from '../';
declare const _default: {
    component: typeof TabView;
    url: string;
    parentLayout: {
        marginTop: number;
    };
    props: {
        heading: string;
        tabs: ({
            title: string;
            route: string;
            exact: boolean;
        } | {
            title: string;
            route: string;
            exact?: undefined;
        })[];
    };
};
export default _default;
