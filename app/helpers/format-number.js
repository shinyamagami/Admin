import {helper} from '@ember/component/helper';

export function formatNumber(number) {
    if (number === '' || number === null || number === undefined) {
        return;
    }

    return Number(number).toLocaleString();
}

export default helper(function ([number]/*, hash*/) {
    return formatNumber(number);
});
