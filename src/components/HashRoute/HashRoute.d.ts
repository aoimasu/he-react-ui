/// <reference types="react" />
declare type Props = {
    render: Function;
    path: string;
    exact?: boolean | undefined;
    strict?: boolean;
};
export default function HashRoute(props: Props): JSX.Element;
export {};
