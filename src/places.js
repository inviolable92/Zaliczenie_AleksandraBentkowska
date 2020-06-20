import _ from 'lodash';
import IconTime from './assets/time.svg';
import IconPlane from './assets/plane.svg';
import IconBaggage from './assets/baggage.svg';
import DaneSamolotu from '../samoloty.json';
import SamolotMaly from './assets/samoloty-srodek_maly.png';
import Odrzutowiec from './assets/samoloty-srodek_odrzutowiec.png';



function StworzZdjecie(image, nazwaZdjecia) {
    const icon = new Image();
    icon.src = image;
    icon.id = nazwaZdjecia;
    return icon;
}

export function stronaMiejsc(daneRezerwacji) {
    let template = document.querySelector('#places');
    template = template.content.cloneNode(true);
    let svgSamolot = template.querySelector('#svgSamolot');
    let zmiennySamolot = template.querySelector('.container2');
    if (daneRezerwacji[0] === DaneSamolotu[0].miasto) {
        svgSamolot.innerHTML =
            "<svg class='svgSamolot' width='210' height='880'>" +
            "<rect id='A1' class='pierwszaKlasa' x='1' y='1' width='25' height='25' rx='5'/> " +
            "<rect id='A2' class='pierwszaKlasa' x='1' y='50' width='25' height='25' rx='5'/> " +
            "<rect id='A3'class='pierwszaKlasa' x='1' y='100' width='25' height='25' rx='5'/> " +
            "<rect id='A4' class='pierwszaKlasa' x='1' y='150' width='25' height='25' rx='5'/> " +
            "<rect id='A5' class='pierwszaKlasa' x='1' y='200' width='25' height='25' rx='5'/> " +
            "<rect id='A6' class='pierwszaKlasa' x='1' y='250' width='25' height='25' rx='5'/> " +
            "<rect id='A7' class='drugaKlasa' x='1' y='300' width='25' height='25' rx='5'/> " +
            "<rect id='A8' class='drugaKlasa' x='1' y='400' width='25' height='25' rx='5'/> " +
            "<rect id='A9' class='drugaKlasa' x='1' y='450' width='25' height='25' rx='5'/> " +
            "<rect id='A11' class='drugaKlasa' x='1' y='500' width='25' height='25' rx='5'/> " +
            "<rect id='A11' class='drugaKlasa' x='1' y='550' width='25' height='25' rx='5'/> " +
            "<rect id='A12' class='TrzeciaKlasa' x='1' y='600' width='25' height='25' rx='5'/> " +
            "<rect id='A13' class='TrzeciaKlasa' x='1' y='650' width='25' height='25' rx='5'/> " +
            "<rect id='A14' class='TrzeciaKlasa' x='1' y='700' width='25' height='25' rx='5'/> " +
            "<rect id='A15' class='TrzeciaKlasa' x='1' y='800' width='25' height='25' rx='5'/> " +
            "<rect id='A16' class='TrzeciaKlasa' x='1' y='850' width='25' height='25' rx='5'/> " +


            "<rect id='B1' class='pierwszaKlasa' x='30' y='1' width='25' height='25' rx='5'/> " +
            "<rect id='B2' class='pierwszaKlasa' x='30' y='50' width='25' height='25' rx='5'/> " +
            "<rect id='B3' class='pierwszaKlasa' x='30' y='100' width='25' height='25' rx='5'/> " +
            "<rect id='B4' class='pierwszaKlasa' x='30' y='150' width='25' height='25' rx='5'/> " +
            "<rect id='B5' class='pierwszaKlasa' x='30' y='200' width='25' height='25' rx='5'/> " +
            "<rect id='B6' class='pierwszaKlasa' x='30' y='250' width='25' height='25' rx='5'/> " +
            "<rect id='B7' class='drugaKlasa' x='30' y='300' width='25' height='25' rx='5'/> " +
            "<rect id='B8' class='drugaKlasa' x='30' y='400' width='25' height='25' rx='5'/> " +
            "<rect id='B9' class='drugaKlasa' x='30' y='450' width='25' height='25' rx='5'/> " +
            "<rect id='B10' class='drugaKlasa' x='30' y='500' width='25' height='25' rx='5'/> " +
            "<rect id='B11' class='drugaKlasa' x='30' y='550' width='25' height='25' rx='5'/> " +
            "<rect id='B12' class='TrzeciaKlasa' x='30' y='600' width='25' height='25' rx='5'/> " +
            "<rect id='B13' class='TrzeciaKlasa' x='30' y='650' width='25' height='25' rx='5'/> " +
            "<rect id='B14' class='TrzeciaKlasa' x='30' y='700' width='25' height='25' rx='5'/> " +
            "<rect id='B15' class='TrzeciaKlasa' x='30' y='800' width='25' height='25' rx='5'/> " +
            "<rect id='B16' class='TrzeciaKlasa' x='30' y='850' width='25' height='25' rx='5'/> " +


            "<rect id='C1' class='pierwszaKlasa' x='60' y='1' width='25' height='25' rx='5'/> " +
            "<rect id='C2' class='pierwszaKlasa' x='60' y='50' width='25' height='25' rx='5'/> " +
            "<rect id='C3' class='pierwszaKlasa' x='60' y='100' width='25' height='25' rx='5'/> " +
            "<rect id='C4' class='pierwszaKlasa' x='60' y='150' width='25' height='25' rx='5'/> " +
            "<rect id='C5' class='pierwszaKlasa' x='60' y='200' width='25' height='25' rx='5'/> " +
            "<rect id='C6' class='pierwszaKlasa' x='60' y='250' width='25' height='25' rx='5'/> " +
            "<rect id='C7' class='drugaKlasa' x='60' y='300' width='25' height='25' rx='5'/> " +
            "<rect id='C8' class='drugaKlasa' x='60' y='400' width='25' height='25' rx='5'/> " +
            "<rect id='C9' class='drugaKlasa' x='60' y='450' width='25' height='25' rx='5'/> " +
            "<rect id='C10' class='drugaKlasa' x='60' y='500' width='25' height='25' rx='5'/> " +
            "<rect id='C11' class='drugaKlasa' x='60' y='550' width='25' height='25' rx='5'/> " +
            "<rect id='C12' class='TrzeciaKlasa' x='60' y='600' width='25' height='25' rx='5'/> " +
            "<rect id='C13' class='TrzeciaKlasa' x='60' y='650' width='25' height='25' rx='5'/> " +
            "<rect id='C14' class='TrzeciaKlasa' x='60' y='700' width='25' height='25' rx='5'/> " +
            "<rect id='C15' class='TrzeciaKlasa' x='60' y='800' width='25' height='25' rx='5'/> " +
            "<rect id='C16' class='TrzeciaKlasa' x='60' y='850' width='25' height='25' rx='5'/> " +


            "<rect id='D1' class='pierwszaKlasa' x='120' y='50' width='25' height='25' rx='5'/> " +
            "<rect id='D2' class='pierwszaKlasa' x='120' y='1' width='25' height='25' rx='5'/> " +
            "<rect id='D3' class='pierwszaKlasa' x='120' y='100' width='25' height='25' rx='5'/> " +
            "<rect id='D4' class='pierwszaKlasa' x='120' y='150' width='25' height='25' rx='5'/> " +
            "<rect id='D5' class='pierwszaKlasa' x='120' y='200' width='25' height='25' rx='5'/> " +
            "<rect id='D6' class='pierwszaKlasa' x='120' y='250' width='25' height='25' rx='5'/> " +
            "<rect id='D7' class='drugaKlasa' x='120' y='300' width='25' height='25' rx='5'/> " +
            "<rect id='D8' class='drugaKlasa' x='120' y='400' width='25' height='25' rx='5'/> " +
            "<rect id='D9' class='drugaKlasa' x='120' y='450' width='25' height='25' rx='5'/> " +
            "<rect id='D10' class='drugaKlasa' x='120' y='500' width='25' height='25' rx='5'/> " +
            "<rect id='D11' class='drugaKlasa' x='120' y='550' width='25' height='25' rx='5'/> " +
            "<rect id='D12' class='TrzeciaKlasa' x='120' y='600' width='25' height='25' rx='5'/> " +
            "<rect id='D13' class='TrzeciaKlasa' x='120' y='650' width='25' height='25' rx='5'/> " +
            "<rect id='D14' class='TrzeciaKlasa' x='120' y='700' width='25' height='25' rx='5'/> " +
            "<rect id='D15' class='TrzeciaKlasa' x='120' y='800' width='25' height='25' rx='5'/> " +
            "<rect id='D16' class='TrzeciaKlasa' x='120' y='850' width='25' height='25' rx='5'/> " +


            "<rect id='E1' class='pierwszaKlasa' x='150' y='1' width='25' height='25' rx='5'/> " +
            "<rect id='E2' class='pierwszaKlasa' x='150' y='50' width='25' height='25' rx='5'/> " +
            "<rect id='E3' class='pierwszaKlasa' x='150' y='100' width='25' height='25' rx='5'/> " +
            "<rect id='E4' class='pierwszaKlasa' x='150' y='150' width='25' height='25' rx='5'/> " +
            "<rect id='E5' class='pierwszaKlasa' x='150' y='200' width='25' height='25' rx='5'/> " +
            "<rect id='E6' class='pierwszaKlasa' x='150' y='250' width='25' height='25' rx='5'/> " +
            "<rect id='E7' class='drugaKlasa' x='150' y='300' width='25' height='25' rx='5'/> " +
            "<rect id='E8' class='drugaKlasa' x='150' y='400' width='25' height='25' rx='5'/> " +
            "<rect id='E9' class='drugaKlasa' x='150' y='450' width='25' height='25' rx='5'/> " +
            "<rect id='E10' class='drugaKlasa' x='150' y='500' width='25' height='25' rx='5'/> " +
            "<rect id='E11' class='drugaKlasa' x='150' y='550' width='25' height='25' rx='5'/> " +
            "<rect id='E12' class='TrzeciaKlasa' x='150' y='600' width='25' height='25' rx='5'/> " +
            "<rect id='E13' class='TrzeciaKlasa' x='150' y='650' width='25' height='25' rx='5'/> " +
            "<rect id='E14' class='TrzeciaKlasa' x='150' y='700' width='25' height='25' rx='5'/> " +
            "<rect id='E15' class='TrzeciaKlasa' x='150' y='800' width='25' height='25' rx='5'/> " +
            "<rect id='E16' class='TrzeciaKlasa' x='150' y='850' width='25' height='25' rx='5'/> " +


            "<rect id='F1' class='pierwszaKlasa' x='180' y='1' width='25' height='25' rx='5'/> " +
            "<rect id='F2' class='pierwszaKlasa' x='180' y='50' width='25' height='25' rx='5'/> " +
            "<rect id='F3' class='pierwszaKlasa' x='180' y='100' width='25' height='25' rx='5'/> " +
            "<rect id='F4' class='pierwszaKlasa' x='180' y='150' width='25' height='25' rx='5'/> " +
            "<rect id='F5' class='pierwszaKlasa' x='180' y='200' width='25' height='25' rx='5'/> " +
            "<rect id='F6' class='pierwszaKlasa' x='180' y='250' width='25' height='25' rx='5'/> " +
            "<rect id='F7' class='drugaKlasa' x='180' y='300' width='25' height='25' rx='5'/> " +
            "<rect id='F8' class='drugaKlasa' x='180' y='400' width='25' height='25' rx='5'/> " +
            "<rect id='F9' class='drugaKlasa' x='180' y='450' width='25' height='25' rx='5'/> " +
            "<rect id='F10' class='drugaKlasa' x='180' y='500' width='25' height='25' rx='5'/> " +
            "<rect id='F11' class='drugaKlasa' x='180' y='550' width='25' height='25' rx='5'/> " +
            "<rect id='F12' class='TrzeciaKlasa' x='180' y='600' width='25' height='25' rx='5'/> " +
            "<rect id='F13' class='TrzeciaKlasa' x='180' y='650' width='25' height='25' rx='5'/> " +
            "<rect id='F14' class='TrzeciaKlasa' x='180' y='700' width='25' height='25' rx='5'/> " +
            "<rect id='F15' class='TrzeciaKlasa' x='180' y='800' width='25' height='25' rx='5'/> " +
            "<rect id='F16' class='TrzeciaKlasa' x='180' y='850' width='25' height='25' rx='5'/> " +
            "Sorry, your browser does not support inline SVG. " +
            "</svg>"
    } else if (daneRezerwacji[0] === DaneSamolotu[1].miasto) {
        zmiennySamolot.style.backgroundImage = "url("+SamolotMaly+")";
        
        svgSamolot.innerHTML =
            "<svg width='150' height='880'>" +
            "<rect id='A1' class='pierwszaKlasa' x='1' y='1' width='25' height='25' rx='5'/> " +
            "<rect id='A2' class='pierwszaKlasa'x='1' y='50' width='25' height='25' rx='5'/> " +
            "<rect id='A3'class='pierwszaKlasa' x='1' y='100' width='25' height='25' rx='5'/> " +
            "<rect id='A4' class='pierwszaKlasa' x='1' y='150' width='25' height='25' rx='5'/> " +
            "<rect id='A5' class='pierwszaKlasa' x='1' y='200' width='25' height='25' rx='5'/> " +
            "<rect id='A6' class='pierwszaKlasa' x='1' y='250' width='25' height='25' rx='5'/> " +
            "<rect id='A7' class='drugaKlasa' x='1' y='300' width='25' height='25' rx='5'/> " +
            "<rect id='A8' class='drugaKlasa' x='1' y='400' width='25' height='25' rx='5'/> " +
            "<rect id='A9' class='drugaKlasa' x='1' y='450' width='25' height='25' rx='5'/> " +
            "<rect id='A11' class='drugaKlasa' x='1' y='500' width='25' height='25' rx='5'/> " +
            "<rect id='A11' class='drugaKlasa' x='1' y='550' width='25' height='25' rx='5'/> " +
            "<rect id='A12' class='TrzeciaKlasa' x='1' y='600' width='25' height='25' rx='5'/> " +
            "<rect id='A13' class='TrzeciaKlasa' x='1' y='650' width='25' height='25' rx='5'/> " +
            "<rect id='A14' class='TrzeciaKlasa' x='1' y='700' width='25' height='25' rx='5'/> " +
            "<rect id='A15' class='TrzeciaKlasa' x='1' y='800' width='25' height='25' rx='5'/> " +
            "<rect id='A16' class='TrzeciaKlasa' x='1' y='850' width='25' height='25' rx='5'/> " +


            "<rect id='B1' class='pierwszaKlasa' x='30' y='1' width='25' height='25' rx='5'/> " +
            "<rect id='B2' class='pierwszaKlasa' x='30' y='50' width='25' height='25' rx='5'/> " +
            "<rect id='B3' class='pierwszaKlasa' x='30' y='100' width='25' height='25' rx='5'/> " +
            "<rect id='B4' class='pierwszaKlasa' x='30' y='150' width='25' height='25' rx='5'/> " +
            "<rect id='B5' class='pierwszaKlasa' x='30' y='200' width='25' height='25' rx='5'/> " +
            "<rect id='B6' class='pierwszaKlasa' x='30' y='250' width='25' height='25' rx='5'/> " +
            "<rect id='B7' class='drugaKlasa' x='30' y='300' width='25' height='25' rx='5'/> " +
            "<rect id='B8' class='drugaKlasa' x='30' y='400' width='25' height='25' rx='5'/> " +
            "<rect id='B9' class='drugaKlasa' x='30' y='450' width='25' height='25' rx='5'/> " +
            "<rect id='B10' class='drugaKlasa' x='30' y='500' width='25' height='25' rx='5'/> " +
            "<rect id='B11' class='drugaKlasa' x='30' y='550' width='25' height='25' rx='5'/> " +
            "<rect id='B12' class='TrzeciaKlasa' x='30' y='600' width='25' height='25' rx='5'/> " +
            "<rect id='B13' class='TrzeciaKlasa' x='30' y='650' width='25' height='25' rx='5'/> " +
            "<rect id='B14' class='TrzeciaKlasa' x='30' y='700' width='25' height='25' rx='5'/> " +
            "<rect id='B15' class='TrzeciaKlasa' x='30' y='800' width='25' height='25' rx='5'/> " +
            "<rect id='B16' class='TrzeciaKlasa' x='30' y='850' width='25' height='25' rx='5'/> " +


            "<rect id='C1' class='pierwszaKlasa' x='90' y='1' width='25' height='25' rx='5'/> " +
            "<rect id='C2' class='pierwszaKlasa' x='90' y='50' width='25' height='25' rx='5'/> " +
            "<rect id='C3' class='pierwszaKlasa' x='90' y='100' width='25' height='25' rx='5'/> " +
            "<rect id='C4' class='pierwszaKlasa' x='90' y='150' width='25' height='25' rx='5'/> " +
            "<rect id='C5' class='pierwszaKlasa' x='90' y='200' width='25' height='25' rx='5'/> " +
            "<rect id='C6' class='pierwszaKlasa' x='90' y='250' width='25' height='25' rx='5'/> " +
            "<rect id='C7' class='drugaKlasa' x='90' y='300' width='25' height='25' rx='5'/> " +
            "<rect id='C8' class='drugaKlasa' x='90' y='400' width='25' height='25' rx='5'/> " +
            "<rect id='C9' class='drugaKlasa' x='90' y='450' width='25' height='25' rx='5'/> " +
            "<rect id='C10' class='drugaKlasa' x='90' y='500' width='25' height='25' rx='5'/> " +
            "<rect id='C11' class='drugaKlasa' x='90' y='550' width='25' height='25' rx='5'/> " +
            "<rect id='C12' class='TrzeciaKlasa' x='90' y='600' width='25' height='25' rx='5'/> " +
            "<rect id='C13' class='TrzeciaKlasa' x='90' y='650' width='25' height='25' rx='5'/> " +
            "<rect id='C14' class='TrzeciaKlasa' x='90' y='700' width='25' height='25' rx='5'/> " +
            "<rect id='C15' class='TrzeciaKlasa' x='90' y='800' width='25' height='25' rx='5'/> " +
            "<rect id='C16' class='TrzeciaKlasa' x='90' y='850' width='25' height='25' rx='5'/> " +


            "<rect id='D1' class='pierwszaKlasa' x='120' y='50' width='25' height='25' rx='5'/> " +
            "<rect id='D2' class='pierwszaKlasa' x='120' y='1' width='25' height='25' rx='5'/> " +
            "<rect id='D3' class='pierwszaKlasa' x='120' y='100' width='25' height='25' rx='5'/> " +
            "<rect id='D4' class='pierwszaKlasa' x='120' y='150' width='25' height='25' rx='5'/> " +
            "<rect id='D5' class='pierwszaKlasa' x='120' y='200' width='25' height='25' rx='5'/> " +
            "<rect id='D6' class='pierwszaKlasa' x='120' y='250' width='25' height='25' rx='5'/> " +
            "<rect id='D7' class='drugaKlasa' x='120' y='300' width='25' height='25' rx='5'/> " +
            "<rect id='D8' class='drugaKlasa' x='120' y='400' width='25' height='25' rx='5'/> " +
            "<rect id='D9' class='drugaKlasa' x='120' y='450' width='25' height='25' rx='5'/> " +
            "<rect id='D10' class='drugaKlasa' x='120' y='500' width='25' height='25' rx='5'/> " +
            "<rect id='D11' class='drugaKlasa' x='120' y='550' width='25' height='25' rx='5'/> " +
            "<rect id='D12' class='TrzeciaKlasa' x='120' y='600' width='25' height='25' rx='5'/> " +
            "<rect id='D13' class='TrzeciaKlasa' x='120' y='650' width='25' height='25' rx='5'/> " +
            "<rect id='D14' class='TrzeciaKlasa' x='120' y='700' width='25' height='25' rx='5'/> " +
            "<rect id='D15' class='TrzeciaKlasa' x='120' y='800' width='25' height='25' rx='5'/> " +
            "<rect id='D16' class='TrzeciaKlasa' x='120' y='850' width='25' height='25' rx='5'/> " +

            "Sorry, your browser does not support inline SVG. " +
            "</svg>"
    } else {
        zmiennySamolot.style.backgroundImage = "url("+Odrzutowiec+")";
        svgSamolot.innerHTML =
            "<svg width='30' height='470'>" +
            "<rect id='A1' class='pierwszaKlasa' x='1' y='180' width='25' height='25' rx='5'/> " +
            "<rect id='A2' class='drugaKlasa' x='1' y='230' width='25' height='25' rx='5'/> " +
            "<rect id='A3'class='TrzeciaKlasa' x='1' y='300' width='25' height='25' rx='5'/> " +
            "<rect id='A4' class='TrzeciaKlasa' x='1' y='350' width='25' height='25' rx='5'/> " +
            "<rect id='A5' class='TrzeciaKlasa' x='1' y='440' width='25' height='25' rx='5'/> " +
            "Sorry, your browser does not support inline SVG. " +
            "</svg>"
    }
    let time = template.querySelector('#time');
    let nowyElementTime = StworzZdjecie(IconTime, "time");
    time.insertBefore(nowyElementTime, time.childNodes[0]);
    let czasLotu = document.createElement('span');
    time.appendChild(czasLotu); 
    let plane = template.querySelector('#plane');
    let nowyElementPlane = StworzZdjecie(IconPlane, "plane");
    plane.insertBefore(nowyElementPlane, plane.childNodes[0]);
    let WybranySamolot = document.createElement('span');
    plane.appendChild(WybranySamolot);  
    
    for (let i = 0; i < DaneSamolotu.length; i++) {
        if(DaneSamolotu[i].miasto===daneRezerwacji[0]){
            czasLotu.innerHTML = DaneSamolotu[i].czas;
            WybranySamolot.innerHTML = DaneSamolotu[i].samolot;
            // znalezionyLot = DaneSamolotu[i];
        }
    }
    let baggage = template.querySelector('#baggage');
    baggage.appendChild(StworzZdjecie(IconBaggage, 'baggage'));  
    return template;
}

export function obliczCene(daneRezerwacji) {
    let znalezionyLot;
    for (let i = 0; i < DaneSamolotu.length; i++) {
        if(DaneSamolotu[i].miasto===daneRezerwacji[0]){
            znalezionyLot = DaneSamolotu[i];
        }
    }
    let cena = 0;
    let A = 'A';
    let B = 'B';
    let C = 'C';
    let D = 'D';
    let E = 'E';
    let F = 'F';

    for(let i = 5; i < daneRezerwacji.length; i++) {
        let PobranaLitera = daneRezerwacji[i].substring(0, 1);
        if(PobranaLitera===A||PobranaLitera===B){
            cena+=znalezionyLot.pierwszaKlasa;
        }
        if(PobranaLitera===C||PobranaLitera===D||PobranaLitera===E){
            cena+=znalezionyLot.drugaKlasa;
        }
        if(PobranaLitera===F){
            cena+=znalezionyLot.trzeciaKlasa;
        }

         // taryfa
    if(daneRezerwacji[3]) {
        if(daneRezerwacji[3] === 'Premium Economy + 280zł') {
            cena += znalezionyLot.premiumEconomy;
        } else if(daneRezerwacji[3] === 'Economy + 0zł') {
            cena += znalezionyLot.economy;
        } else if(daneRezerwacji[3] === 'Business + 650zł') {
            cena += znalezionyLot.business;
        }
    }
    // bagaz
    if(daneRezerwacji[4]) {
        cena += znalezionyLot.dodatkowyBagaz;
    }
    }

   
    const cenaSpan = document.querySelector('#zamowienie span');
    cenaSpan.innerText = cena;
}

export function ustawDodatkowyBagaz(daneRezerwacji) {
    daneRezerwacji[4] = document.getElementById('dodatkowyBagaz').checked;
    obliczCene(daneRezerwacji);
}

export function ustawTaryfe(daneRezerwacji) {
    daneRezerwacji[3] = document.getElementById('taryfy').selectedOptions[0].text;
    obliczCene(daneRezerwacji);
}

export function ustawMiejsca(el, daneRezerwacji) {
      let maxIloscOsob = daneRezerwacji[2];
      let kliknieteMiejsceKolor = 'yellow';
      let zajeteMiejsceKolor = 'red';
      let neutralneMiejsceKolor = 'white';
      let wszystkieMiejsca = document.querySelectorAll('rect');
      wszystkieMiejsca = Array.from(wszystkieMiejsca);
      let zaznaczoneMiejsca = wszystkieMiejsca.filter(function(miejsce) {
          if(miejsce.style.fill === kliknieteMiejsceKolor || miejsce.id == el.id) {
              return el;
          }
      });
      if (el.style.fill === zajeteMiejsceKolor || maxIloscOsob < zaznaczoneMiejsca.length) {
        return;
      }
      if (el.style.fill === kliknieteMiejsceKolor) {
        el.style.fill = neutralneMiejsceKolor;
        document.getElementById("wyswietlMiejsca").innerHTML = null;
        for (let i = 5; i < daneRezerwacji.length; i++) {
          if (daneRezerwacji[i] == el.id) {
            daneRezerwacji[i] = '';
          }
          document.getElementById("wyswietlMiejsca").innerHTML += daneRezerwacji[i]+" ";
        }
      } else {
        let wybraneMiejsce = el.id;
        el.style.fill = kliknieteMiejsceKolor;
        daneRezerwacji.push(wybraneMiejsce);
        document.getElementById("wyswietlMiejsca").innerHTML = null;
        for (let i = 5; i < daneRezerwacji.length; i++) {
            document.getElementById("wyswietlMiejsca").innerHTML += daneRezerwacji[i]+" ";
        };
      }
      obliczCene(daneRezerwacji);
}