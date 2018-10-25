declare const _default: ({
    url: string;
    name: string;
    component: any;
    props: {
        item: null;
        locations: {
            value: string;
            label: string;
        }[];
        logoutRoute: string;
        loading?: undefined;
        backRoute?: undefined;
    };
} | {
    name: string;
    component: any;
    url: string;
    props: {
        item: {
            key: string;
            title: string;
            label: string;
            route: string;
            badge: string;
            items: {
                key: string;
                label: string;
                route: string;
            }[];
            icon?: undefined;
        };
        locations: {
            value: string;
            label: string;
        }[];
        logoutRoute: string;
        loading?: undefined;
        backRoute?: undefined;
    };
} | {
    name: string;
    component: any;
    url: string;
    props: {
        item: {
            key: string;
            title: string;
            label: string;
            route: string;
            badge: string;
            items?: undefined;
            icon?: undefined;
        };
        locations: {
            value: string;
            label: string;
        }[];
        logoutRoute: string;
        loading?: undefined;
        backRoute?: undefined;
    };
} | {
    name: string;
    component: any;
    url: string;
    props: {
        item: {
            key: string;
            label: string;
            icon: string;
            title: string;
            route: string;
            items: never[];
            badge?: undefined;
        };
        logoutRoute: string;
        locations?: undefined;
        loading?: undefined;
        backRoute?: undefined;
    };
} | {
    name: string;
    component: any;
    url: string;
    props: {
        item: {
            items: never[];
            key: string;
            title: string;
            route: string;
            label?: undefined;
            badge?: undefined;
            icon?: undefined;
        };
        locations: never[];
        loading: boolean;
        logoutRoute: string;
        backRoute?: undefined;
    };
} | {
    name: string;
    component: any;
    url: string;
    props: {
        item: {
            key: string;
            title: string;
            label: string;
            route: string;
            badge: string;
            items: {
                key: string;
                label: string;
                route: string;
            }[];
            icon?: undefined;
        };
        backRoute: string;
        locations: {
            value: string;
            label: string;
        }[];
        logoutRoute: string;
        loading?: undefined;
    };
})[];
export default _default;
