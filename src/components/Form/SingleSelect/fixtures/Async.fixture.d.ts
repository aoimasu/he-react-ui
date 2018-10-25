import SingleSelect from '../';
declare const _default: {
    component: typeof SingleSelect;
    formWrapper: {
        value: null;
    };
    props: {
        id: string;
        name: string;
        loadOptionsAsync: (input: string) => Promise<{
            options: any;
        }>;
    };
};
export default _default;
