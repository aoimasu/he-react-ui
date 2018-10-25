export declare type NavItem = {
    key: string;
    label?: string;
    title?: string;
    icon?: string;
    route?: string;
    exact?: boolean;
    badge?: 'NEW' | 'FREE';
    notifications?: number;
    items?: NavItem[];
};
export default NavItem;
