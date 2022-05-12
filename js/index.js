for (let i = 11; i >= 9 ; i--) {
    document.write(`<section><br><b>La tabla del ${i}:</b></br></section>`);
    for (let j = 1; j < 10; j++) {
        document.write(`<section class="tablas">${i} x ${j} : ${i*j}</section>`);
    }
}
