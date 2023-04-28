function segitigaSiku(){
    let ab = 8;
    let bc = 6;

    let abKuadrat = Math.pow(ab,2);
    let bcKuadrat = Math.pow(bc,2);

    let penjumlahanKuadrat = abKuadrat + bcKuadrat;

    let akarPangkat = Math.sqrt(penjumlahanKuadrat);
    console.log(`Nilai AB : ${ab}`);
    console.log(`Nilai BC : ${bc}`);
    
    return `panjang sisi AC pada segitiga siku-siku tersebut adalah : ${akarPangkat} cm`;

}

console.log(segitigaSiku());