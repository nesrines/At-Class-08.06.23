let Check = x => {
    if (isNaN(x)) console.log(`'${x}' eded deyil`);
    else if (x > 0) console.log(`${x} musbetdir`);
    else if (x < 0) console.log(`${x} menfidir`);
    else console.log(x);
}
let Check15 = x => {
    if (isNaN(x)) console.log(`'${x}' eded deyil`);
    else if (x % 3 === 0 && x % 5 === 0) console.log(`${x} hem 3-e, hem 5-e qaliqsiz bolunur`);
    else console.log(`${x} hem 3-e, hem 5-e qaliqsiz bolunmur`);
}
let CheckDigits = x  => {
    if (isNaN(x)) console.log(`'${x}' eded deyil`);
    else if (Math.abs(x) > 999 || Math.abs(x) < 100) console.log(`${x} ucreqemli deyil, zehmet olmazsa, ucreqemli eded daxil edin.`);
    else {
        let a = Math.trunc(x / 100);
        let b = (x % 100 - x % 10) / 10;
        let c = x % 10;
        if (a === b && b === c) console.log(`${x} ededinin butun reqemleri eynidir`);
        else if (a === b || b === c || c === a) console.log(`${x} ededinin reqemlerinin ikisi eyni, biri ferqlidir`)
        else console.log(`${x} ededinin butun reqemleri ferqlidir`);
    }
}
let DigitsProduct = x => {
    if (isNaN(x)) console.log(`'${x}' eded deyil`);
    else {
        let product = 1;
        let y = x;
        if (y < 0) y = Math.abs(y);
        if (y === 0) product = 0;
        while (y >= 1) {
            product *= y % 10;
            y = Math.trunc(y / 10);
        }
        console.log(`${x} ededinin reqemlerinin hasili = ${product}`);
    }
}

let num = -876;
Check(num);
Check15(num);
CheckDigits(num);
DigitsProduct(num);