let temperaturas = [];
let nivelesRio = [];

function ver(n) {
    document.querySelector('.menu').style.display = 'none';
    for(let i = 1; i <= 5; i++) {
        document.getElementById('e' + i).style.display = 'none';
    }
    document.getElementById('e' + n).style.display = 'block';
}

function menu() {
    document.querySelector('.menu').style.display = 'block';
    for(let i = 1; i <= 5; i++) {
        document.getElementById('e' + i).style.display = 'none';
    }
    temperaturas = [];
    nivelesRio = [];
}

function e1() {
    let aqi = parseFloat(document.getElementById('aqi').value);
    let r = '';
    if(aqi <= 50) r = 'Bueno';
    else if(aqi <= 100) r = 'Moderado';
    else if(aqi <= 150) r = 'Dañino';
    else r = 'Muy dañino';
    document.getElementById('r1').innerHTML = r;
}

function e2() {
    let num = parseInt(document.getElementById('mediciones').value);
    let suma = 0;
    for(let i = 0; i < num; i++) {
        let db = parseFloat(prompt("Ingrese nivel de ruido " + (i+1) + " (dB):"));
        suma += db;
    }
    let promedio = suma / num;
    document.getElementById('r2').innerHTML = 'Promedio: ' + promedio + ' dB';
}

function a3() {
    let t = parseFloat(document.getElementById('temp').value);
    temperaturas.push(t);
    document.getElementById('r3').innerHTML += t + '°C<br>';
}

function c3() {
    let altas = 0;
    for(let i = 0; i < temperaturas.length; i++) {
        if(temperaturas[i] > 45) altas++;
    }
    document.getElementById('r3').innerHTML += 'Focos de calor: ' + altas;
}

function e4() {
    let cod = document.getElementById('residuo').value;
    let r = '';
    if(cod == '1') r = 'Orgánico';
    else if(cod == '2') r = 'Plástico';
    else if(cod == '3') r = 'Papel/Cartón';
    else r = 'Vidrio';
    document.getElementById('r4').innerHTML = r;
}

function a5() {
    let n = parseFloat(document.getElementById('nivel').value);
    nivelesRio.push(n);
    document.getElementById('r5').innerHTML += n + ' metros<br>';
}

function c5() {
    let alertas = 0;
    for(let i = 0; i < nivelesRio.length; i++) {
        if(nivelesRio[i] > 3) alertas++;
    }
    document.getElementById('r5').innerHTML += 'Alertas: ' + alertas;
}