import * as PT from 'prop-types';
import { DATE_PICKER_TYPE, DATE_INPUT_TYPE, DATE_PICKER_MODE } from './constant';
import { datejs } from '../util';

export const error = (propName, ComponentName) =>
    new Error(`Invalid prop ${propName} supplied to ${ComponentName}. Validation failed.`);

function checkType(type) {
    return (props, propName, componentName) => {
        let value = props[propName];
        if (value) {
            if (!Array.isArray(value)) {
                value = [value];
            }

            if (!Array.isArray(type)) {
                type = [type];
            }

            if (!value.every(v => type.includes(typeof v))) {
                throw error(propName, componentName);
            }
        }
    };
}

const SharedPT = {
    // 日期类型：
    //  @string: 2020-11-11
    //  @date: 日期对象
    //  @moment: moment对象
    //  @dayjs: dayjs对象
    date(props, propName, componentName) {
        if (propName in props && !datejs(props.propName).isValid()) {
            throw error(propName, componentName);
        }
    },
    value(props, propName, componentName) {
        if (propName in props) {
            let value = props[propName];
            if (props.type === DATE_PICKER_TYPE.RANGE && !Array.isArray(value)) {
                throw error(propName, componentName);
            } else {
                value = [value];
            }

            if (!value.every(v => datejs(v).isValid())) {
                throw error(propName, componentName);
            }
        }
    },
    format: checkType(['string', 'function']),
    inputValue: checkType('string'),
    placeholder: checkType('string'),
    readOnly: checkType('boolean'),
    mode: PT.oneOf(Object.values(DATE_PICKER_MODE)),
    type: PT.oneOf(Object.values(DATE_PICKER_TYPE)),
    inputType: PT.oneOf(Object.values(DATE_INPUT_TYPE)),
    size: PT.oneOf(['small', 'medium', 'large']),
    render: PT.oneOfType([PT.node, PT.func]),
};

export default SharedPT;