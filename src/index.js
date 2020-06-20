import _ from 'lodash';
import './style.scss';
import Logo from './assets/icon.png';
import * as login from './login.js';


function logo() {
  const logo = new Image();
  logo.src = Logo;
  logo.id = 'logo';
  return logo;
}

function pokazWidokLogowania() {
  if (sessionStorage.getItem("zalogowany") === 'tak') {
    document.location.href = '/test.html';
    return;
  }
  const cialoDokumentu = document.createElement('div');
  cialoDokumentu.id = 'logowanie';
  cialoDokumentu.innerHTML += login.stronaLogowania();
  const box1 = cialoDokumentu.getElementsByClassName('box1')[0];
  box1.insertBefore(logo(), box1.firstChild);
  document.body.appendChild(cialoDokumentu);
  document.getElementById('potwierdz').addEventListener('click', function () {
    let wpisanaNazwaUzytkownika = document.getElementById("fname").value;
    let wpisaneHaslo = document.getElementById("sname").value;
    let czyZalogowany = login.logowanie(wpisanaNazwaUzytkownika, wpisaneHaslo);
    if (czyZalogowany) {
      sessionStorage.setItem("zalogowany", "tak");
      document.location.href = '/test.html';
    }
    else {
      const error = document.getElementById("error");
      error.innerHTML = "Niepoprawny login lub hasło";
    }
  });
}
pokazWidokLogowania();