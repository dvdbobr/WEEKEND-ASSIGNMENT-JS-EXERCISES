function maskify(str) {
    let notMask = str.slice(-4);
    let mask='';
    for (let i = 0; i < str.length-4; i++) {
        mask+="#";
    }
    if(str.length>=4)
    console.log(mask+notMask)
    else console.log(str)
}
let str = '10616'
maskify(str)