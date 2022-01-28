module.exports = function toReadable(num) {
  let arrOfNum;
  let total = '';
  let numOfTens = '';
  let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  let tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
  if (num >= 0 && num <= 9) {
    total += ones[num];
    return total;
  } else if (num >= 10 && num <= 20) {
    total += ones[num];
    return total;
  } else if (num >= 20 && num <= 90 && num % 10 == 0) {
    total += tens[num / 10 - 1];
    return total;
  } else if (num >= 20 && num <= 99 && num % 10 != 0) {
    arrOfNum = String(num).split('').map((num) => {
      return Number(num);
    });
    total = tens[arrOfNum[0] - 1] + ' ' + ones[arrOfNum[1]].toLowerCase();
    return total;
  } else if (num >= 100 && num % 100 == 0) {
    total += hundreds[num / 100 - 1];
    return total;
  } else if (num > 100 && num <= 999) {
    arrOfNum = String(num).split('').map((num) => {
      return Number(num);
    });
    let numOfHandred = arrOfNum[0];
    numOfTens = Number(arrOfNum[1].toString() + arrOfNum[2].toString());
    console.log(numOfTens);
    total += hundreds[numOfHandred - 1];
    if (numOfTens <= 20) {
      total += ' ' + ones[numOfTens].toLowerCase();
    } else if (numOfTens >= 20 && numOfTens <= 90 && numOfTens % 10 == 0) {
      total += ' ' + tens[numOfTens / 10 - 1].toLowerCase();
    } else if (numOfTens >= 20 && numOfTens <= 99 && numOfTens % 10 != 0) {
      arrOfNum = String(numOfTens).split('').map((numOfTens) => {
      return Number(numOfTens);
      });
      total += ' ' + tens[arrOfNum[0] - 1].toLowerCase() + ' ' + ones[arrOfNum[1]].toLowerCase();
    }
    console.log(total);
    return total;
  } 
};