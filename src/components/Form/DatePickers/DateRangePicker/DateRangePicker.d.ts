import { Moment } from 'moment';
import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
declare type Props = {
    options: {
        label: string;
        value: [Moment, Moment];
    }[];
    value: [Moment, Moment] | void;
    allowCustom: boolean;
    id: string;
    className?: string;
    label?: string;
    error?: string;
    disabled?: boolean;
    fill: boolean;
    onChange: Function;
    isOutsideRange: Function;
    placeholder: string;
    keepOpenOnDateSelect: boolean;
};
declare type RangePickerResult = {
    startDate: Moment;
    endDate: Moment;
};
export default class DateRangePicker extends React.Component<Props, any> {
    static defaultProps: {
        allowCustom: boolean;
        options: never[];
        placeholder: string;
        id: string;
        fill: boolean;
        keepOpenOnDateSelect: boolean;
        onChange: () => null;
        isOutsideRange: () => boolean;
        value: null;
    };
    state: {
        focusedInput: null;
        selectOpen: boolean;
    };
    getSelectOptions: () => {
        label: string;
        value: string;
    }[];
    getSelectValue: () => string | null;
    getRangeTitle: () => string | null;
    handleFocusChange: (focusedInput: string) => void;
    handleDatesChange: (result: RangePickerResult) => void;
    showCustomPicker: () => void;
    handleSelectChange: (ev: {
        value: string;
    }) => void;
    handleSelectOpen: () => boolean;
    handleSelectClose: () => void;
    render(): JSX.Element;
}
export {};
