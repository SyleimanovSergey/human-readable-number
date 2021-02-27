module.exports = function toReadable(number) {
    let unit = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let numbersFrom11to19 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundred = 'hundred'
    let num = Array.from(String(number))


    if (number === 0) {
        return 'zero'
    } else if (number < 10 && number !== 0) {
        return unit[num[0] - 1];
    } else if (number === 10) {
        return dozens[0];
    } else if (number > 10 && number < 20) {
        return numbersFrom11to19[num[1] - 1];
    } else if (number > 19 && number < 100) {
        if (num[1] !== String(0)) {
            return dozens[num[0] - 1] + ' ' + unit[num[1] - 1];
        } else {
            return dozens[num[0] - 1];
        }
    } else if (number >= 100 && number < 1000) {
        if (num[1] > 0 || num[2] > 0) {
            if (Number(num[1] + num[2]) > 10 && Number(num[1] + num[2]) < 20) {
                return unit[num[0] - 1] + ' ' + hundred + ' ' + numbersFrom11to19[num[2] - 1];
            } else if (Number(num[1]) > 0 && Number(num[1]) < 10 && num[2] === '0') {
                return unit[num[0] - 1] + ' ' + hundred + ' ' + dozens[num[1] - 1];
            } else if (Number(num[2]) > 0 && Number(num[2]) < 10 && num[1] === '0') {
                return unit[num[0] - 1] + ' ' + hundred + ' ' + unit[num[2] - 1];
            } else if (Number(num[2]) > 0 && Number(num[2]) < 10 && Number(num[1]) > 0 && Number(num[1]) < 10) {
                return unit[num[0] - 1] + ' ' + hundred + ' ' + dozens[num[1] - 1] + ' ' + unit[num[2] - 1];
            }
        }
        return unit[num[0] - 1] + ' ' + hundred;
    }
}
