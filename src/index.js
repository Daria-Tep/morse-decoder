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
    let arr = [];
    let strCount = 10;

    for (let i = 0; i < expr.length; i += strCount) { //разделить строку на массив по 10 символов 
        arr.push(expr.slice(i, i + strCount))
    }

    let letterArray = arr.map(elem => { //заменить соответственно цифры на . и -, а нули убрать 
        return elem.replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, '')
    })

    let result = '';

    for (let j = 0; j < letterArray.length; j++) {

        const morseArr = Object.keys(MORSE_TABLE);

        morseArr.find(function callback(elem) { //поиск символов из letterArray в объекте соответствий
            if (elem === letterArray[j]) { //когда найден, добавлять букву или пробел к результату
                return result += MORSE_TABLE[elem]
            }
        })
    }

    return result

}

module.exports = {
    decode
}