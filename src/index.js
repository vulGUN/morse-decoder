const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
  '**********': ' ',
};

function decode(expr) {
  const length = expr.length;
  let arr = [],
    arr2 = [];
  for (let i = 0; i < length / 10; i++) {
    arr.push(expr.split('', 10));
    expr = expr.slice(10);
  }
  arr.map((item) => {
    for (let i = 0; i < 10; i += 2) {
      if (item[i] === '1' && item[i + 1] === '0') {
        item[i] = item[i].replace(/[0-1]/, '.');
        item[i + 1] = item[i + 1].replace(/[0-1]/, '');
      }
      if (item[i] === '1' && item[i + 1] === '1') {
        item[i] = item[i].replace(/[0-1]/, '-');
        item[i + 1] = item[i + 1].replace(/[0-1]/, '');
      }
      if (item[i] === '0' && item[i + 1] === '0') {
        item[i] = item[i].replace(/0/, '');
        item[i + 1] = item[i + 1].replace(/0/, '');
      }
    }
  });

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].join('');
    for (let key in MORSE_TABLE) {
      if (key == arr[i]) {
        arr2.push(MORSE_TABLE[key]);
      }
    }
  }
  return arr2.join('');
}

module.exports = {
  decode,
};
