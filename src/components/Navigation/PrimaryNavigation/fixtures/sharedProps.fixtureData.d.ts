declare const _default: () => {
    siteName: string;
    logoutRoute: string;
    locations: {
        value: string;
        label: string;
    }[];
    bottomKeys: string[];
    items: ({
        key: string;
        label: string;
        icon: string;
        title: string;
        items: null;
        route: string;
        exact: boolean;
    } | {
        key: string;
        label: string;
        icon: string;
        title: string;
        items: ({
            key: string;
            title: string;
            label: string;
            route: string;
            items: {
                key: string;
                label: string;
                route: string;
            }[];
            notifications?: undefined;
        } | {
            key: string;
            title: string;
            label: string;
            route: string;
            notifications: number;
            items: {
                key: string;
                label: string;
                route: string;
            }[];
        })[];
        route?: undefined;
        exact?: undefined;
    } | {
        key: string;
        label: string;
        icon: string;
        title: string;
        items: {
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
        }[];
        route?: undefined;
        exact?: undefined;
    } | {
        key: string;
        label: string;
        title: string;
        icon: string;
        route: string;
        items?: undefined;
        exact?: undefined;
    })[];
};
export default _default;
