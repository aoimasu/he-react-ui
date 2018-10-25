import moment from 'moment';
import component from '../DateRangePicker';
declare const _default: ({
    name: string;
    component: typeof component;
    props: {
        label: string;
        options: {
            label: string;
            value: moment.Moment[];
        }[];
        keepOpenOnDateSelect?: undefined;
        fill?: undefined;
        isOutsideRange?: undefined;
        allowCustom?: undefined;
        placeholder?: undefined;
    };
    parentLayout: {
        margin: number;
        padding: number;
        border: string;
        background: string;
        boxShadow: string;
    };
    formWrapper: {
        value: moment.Moment[];
    };
} | {
    name: string;
    component: typeof component;
    props: {
        options: {
            label: string;
            value: moment.Moment[];
        }[];
        keepOpenOnDateSelect: boolean;
        label?: undefined;
        fill?: undefined;
        isOutsideRange?: undefined;
        allowCustom?: undefined;
        placeholder?: undefined;
    };
    parentLayout: {
        margin: number;
        padding: number;
        border: string;
        background: string;
        boxShadow: string;
    };
    formWrapper: {
        value: moment.Moment[];
    };
} | {
    name: string;
    component: typeof component;
    props: {
        label: string;
        options: {
            label: string;
            value: moment.Moment[];
        }[];
        fill: boolean;
        keepOpenOnDateSelect?: undefined;
        isOutsideRange?: undefined;
        allowCustom?: undefined;
        placeholder?: undefined;
    };
    parentLayout: {
        margin: number;
        padding: number;
        border: string;
        background: string;
        boxShadow: string;
    };
    formWrapper: {
        value: moment.Moment[];
    };
} | {
    component: typeof component;
    name: string;
    parentLayout: {
        margin: number;
        padding: number;
        border: string;
        background: string;
        boxShadow: string;
    };
    formWrapper: {
        value: moment.Moment[];
    };
    props?: undefined;
} | {
    component: typeof component;
    name: string;
    props: {
        isOutsideRange: (date: moment.Moment) => boolean;
        label?: undefined;
        options?: undefined;
        keepOpenOnDateSelect?: undefined;
        fill?: undefined;
        allowCustom?: undefined;
        placeholder?: undefined;
    };
    parentLayout: {
        margin: number;
        padding: number;
        border: string;
        background: string;
        boxShadow: string;
    };
    formWrapper: {
        value: moment.Moment[];
    };
} | {
    component: typeof component;
    name: string;
    parentLayout: {
        margin: number;
        padding: number;
        border: string;
        background: string;
        boxShadow: string;
    };
    props: {
        label: string;
        options: {
            label: string;
            value: moment.Moment[];
        }[];
        allowCustom: boolean;
        keepOpenOnDateSelect?: undefined;
        fill?: undefined;
        isOutsideRange?: undefined;
        placeholder?: undefined;
    };
    formWrapper: {
        value: moment.Moment[];
    };
} | {
    component: typeof component;
    name: string;
    parentLayout: {
        margin: number;
        padding: number;
        border: string;
        background: string;
        boxShadow: string;
    };
    formWrapper: {
        value: null;
    };
    props?: undefined;
} | {
    component: typeof component;
    name: string;
    parentLayout: {
        margin: number;
        padding: number;
        border: string;
        background: string;
        boxShadow: string;
    };
    props: {
        placeholder: string;
        label?: undefined;
        options?: undefined;
        keepOpenOnDateSelect?: undefined;
        fill?: undefined;
        isOutsideRange?: undefined;
        allowCustom?: undefined;
    };
    formWrapper: {
        value: null;
    };
})[];
export default _default;
