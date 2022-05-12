for (let i = 11; i >= 9 ; i--) {
    document.write(`<div><br><b>La tabla del ${i}:</b></br></div>`);
    for (let j = 1; j <= 10; j++) {
        document.write(`<div class="tablas">${i} x ${j} : ${i*j}</div>`);
    }
}
