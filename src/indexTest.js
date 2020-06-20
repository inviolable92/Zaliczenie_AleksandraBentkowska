import _ from 'lodash';
import './style.scss';
import Logo from './assets/icon.png';
import * as reservation from './reservation.js';
import * as places from './places.js';
import * as dodatki from './dodatki.js';

let daneRezerwacji = [null, null, null, null, null];

function StworzHeader() {
  let header = document.createElement('header');
  const logo = new Image();
  logo.src = Logo;
  logo.id = 'logo1';
  header.appendChild(logo);
  let wylogujBtn = document.createElement('button');
  wylogujBtn.id = 'wyloguj';
  wylogujBtn.innerHTML = 'WYLOGUJ';
  wylogujBtn.addEventListener('click', function () {
    sessionStorage.setItem("zalogowany", "nie");
    document.location.href = '/index.html';
  });
  header.appendChild(wylogujBtn);
  return header;
}

function pokazWidok(ktoryWidok, metoda) {
  if (document.querySelector('div')) {
    document.querySelector('div').remove();
  }
  document.body.id = ktoryWidok;
  document.body.appendChild(metoda);
}

function pokazPodsumowanie() {
  pokazWidok('podsumowanie', dodatki.stronaPodsumowania(daneRezerwacji));
}

function pokazWidokMiejsc() {
  pokazWidok('miejsca', places.stronaMiejsc(daneRezerwacji));
  let data = document.getElementById('date');
  data.innerHTML += daneRezerwacji[1];
  let pokazMiasto = document.getElementById("wybraneMiejsce");
  pokazMiasto.innerHTML += daneRezerwacji[0];
  let pokazOsoby = document.getElementById("osoby");
  pokazOsoby.innerHTML += daneRezerwacji[2];
  
  let miejsca = document.getElementsByTagName('rect');
  miejsca = Array.from(miejsca);

  miejsca.forEach(el => {
    el.addEventListener('click', places.ustawMiejsca.bind(this, el, daneRezerwacji));
  });

  document.getElementById('wstecz').addEventListener('click', function () {
    clearInterval(idInterwalu);
    pokazWidokRezerwacji();
  });



 
  czasoMierz()
  let idInterwalu = window.setInterval(czasoMierz, 1000);

  function czasoMierz(){  
  let i;
  let BylZoltyElement = false;
  let SprawdzMiejsca = document.querySelectorAll('rect');
  for(i=0; i<SprawdzMiejsca.length; i++){
    if(SprawdzMiejsca[i].style.fill==='yellow'){
      BylZoltyElement = true;
      break
    }
  }
  if (BylZoltyElement===false){
    document.getElementById('potwierdz').disabled=true;
    
  }
  else{
    document.getElementById('potwierdz').disabled=false;     
    }
 }


  document.getElementById('potwierdz').addEventListener('click', function () {
  clearInterval(idInterwalu);

    if (!daneRezerwacji[4]) {
      daneRezerwacji[4] = document.getElementById('dodatkowyBagaz').checked;
    }
    if (!daneRezerwacji[3]) {
      daneRezerwacji[3] = document.getElementById('taryfy').selectedOptions[0].text;
    }
    pokazPodsumowanie();
  });
  document.querySelector('#taryfy').addEventListener('click', places.ustawTaryfe.bind(this, daneRezerwacji));
  document.querySelector('#dodatkowyBagaz').addEventListener('click', places.ustawDodatkowyBagaz.bind(this, daneRezerwacji));
  
  document.getElementById("wyswietlMiejsca").innerHTML = null;
  for (let i = 5; i < daneRezerwacji.length; i++) {
      if (daneRezerwacji[i] === '') {}
      else {
        let pokolorujMiejsce = document.querySelector(`#${daneRezerwacji[i]}`);
        pokolorujMiejsce.style.fill = 'yellow';
        document.getElementById("wyswietlMiejsca").innerHTML += daneRezerwacji[i];
      }
  }
  if (daneRezerwacji[4]) {
    document.getElementById('dodatkowyBagaz').checked = daneRezerwacji[4];
  }
  if (daneRezerwacji[3]) {
    document.getElementById('taryfy').selectedOptions[0].text = daneRezerwacji[3];
  }
  places.obliczCene(daneRezerwacji);

}

function pokazWidokRezerwacji() {
  pokazWidok('rezerwacja', reservation.stronaRezerwacji());
  document.getElementById('potwierdz').addEventListener('click', function () {
    let chosenDate = reservation.dataPrzekroczylaRok();
    daneRezerwacji[0] = document.getElementById('miasta').selectedOptions[0].text;
    daneRezerwacji[1] = chosenDate;
    daneRezerwacji[2] = document.getElementById('osoby').selectedOptions[0].text;
    pokazWidokMiejsc();
  });

  if (daneRezerwacji[0]) {
    let optionsSelect = document.getElementById('miasta').options;
    for(let i =0; i<optionsSelect.length; i++) {
      if(optionsSelect[i].text == daneRezerwacji[0]) {
        optionsSelect[i].selected = 'selected';
      }
    }
  }
  if (daneRezerwacji[1]) {
    document.getElementById('date').value = daneRezerwacji[1];
  }
  if (daneRezerwacji[2]) {
    let optionsSelect = document.getElementById('osoby').options;
    for(let i =0; i<optionsSelect.length; i++) {
      if(optionsSelect[i].text == daneRezerwacji[2]) {
        optionsSelect[i].selected = 'selected';
      }
    }
  }
}

if (document.querySelector('h6') && sessionStorage.getItem("zalogowany") === 'tak') {
  window.setTimeout(function () {
    sessionStorage.setItem("zalogowany", "nie");
    document.location.href = '/index.html';
  }, 180000);
  document.body.appendChild(StworzHeader());
  pokazWidokRezerwacji();
} else if (document.querySelector('h6')) {
  document.location.href = '/index.html';
}

