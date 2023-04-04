'use strict';
const año = document.getElementById('añoGoleador');
const btnWin = document.getElementById('goldenBoot');
const reload = document.getElementById('reload');

btnWin.addEventListener('click', function() {
    const añoNum = parseInt(año.value); // covierto un string en num porque es lo que requiero 
    if (añoNum === 2010) {
        document.getElementById('messi-image').style.display = 'block';
        document.querySelector('.card-title').innerText = 'Lionel Messi';
        document.querySelector('.card-text').innerText = '34 goles';

    } else if (añoNum === 2011) {
        document.getElementById('CR7-image').style.display = 'block';
        document.querySelector('.card-title').innerText = 'Cristiano Ronaldo';
        document.querySelector('.card-text').innerText = '40 goles';


    } else if (añoNum === 2012) {
        document.getElementById('messi-image').style.display = 'block';
        document.querySelector('.card-title').innerText = 'Lionel Messi';
        document.querySelector('.card-text').innerText = '50 goles';

    } else if (añoNum === 2013) {
        document.getElementById('messi-image').style.display = 'block';
        document.querySelector('.card-title').innerText = 'Lionel Messi';
        document.querySelector('.card-text').innerText = '46 goles';

    } else if (añoNum === 2014) {
        document.getElementById('CR7-image').style.display = 'block';
        document.querySelector('.card-title').innerText = 'Cristiano Ronaldo';
        document.querySelector('.card-text').innerText = '31 goles';
        document.getElementById('suarez-image').style.display = 'block';
        document.querySelector('.card-title').innerText = 'Luis Suarez';
        document.querySelector('.card-text').innerText = '31 goles';

    } else if (añoNum === 2015) {
        document.getElementById('CR7-image').style.display = 'block';
        document.querySelector('.card-title').innerText = 'Cristiano Ronaldo';
        document.querySelector('.card-text').innerText = '48 goles';

    } else if (añoNum === 2016) {
        document.getElementById('suarez-image').style.display = 'block';
        document.querySelector('.card-title').innerText = 'Luis Suarez';
        document.querySelector('.card-text').innerText = '40 goles';

    } else if (añoNum === 2017) {
        document.getElementById('messi-image').style.display = 'block';
        document.querySelector('.card-title').innerText = 'Lionel Messi';
        document.querySelector('.card-text').innerText = '37 goles';

    } else if (añoNum === 2018) {
        document.getElementById('messi-image').style.display = 'block';
        document.querySelector('.card-title').innerText = 'Lionel Messi';
        document.querySelector('.card-text').innerText = '34 goles';

    } else if (añoNum === 2019) {
        document.getElementById('messi-image').style.display = 'block';
        document.querySelector('.card-title').innerText = 'Lionel Messi';
        document.querySelector('.card-text').innerText = '36 goles';

    } else if (añoNum === 2020) {
        document.getElementById('immobile-image').style.display = 'block';
        document.querySelector('.card-title').innerText = 'Ciro Immobile';
        document.querySelector('.card-text').innerText = '36 goles';

    }
});

reload.addEventListener('click', _ => {
    location.reload();
});