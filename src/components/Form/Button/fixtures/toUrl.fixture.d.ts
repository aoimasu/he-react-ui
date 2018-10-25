import Button from '../';
declare const _default: ({
    name: string;
    component: typeof Button;
    props: {
        to: string;
        withRouter?: undefined;
        newWindow?: undefined;
    };
    children: string;
    url?: undefined;
    simulateSubmission?: undefined;
} | {
    name: string;
    component: typeof Button;
    props: {
        withRouter: boolean;
        to: string;
        newWindow?: undefined;
    };
    url: string;
    children: string;
    simulateSubmission: boolean;
} | {
    name: string;
    component: typeof Button;
    props: {
        to: string;
        newWindow: boolean;
        withRouter?: undefined;
    };
    children: string;
    url?: undefined;
    simulateSubmission?: undefined;
})[];
export default _default;
