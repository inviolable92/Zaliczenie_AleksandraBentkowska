import _ from 'lodash';
import uzytkownik from '../uzytkownik.json';

export function stronaLogowania() {
    return  "(<div class='container'>"+
    "<div class='box1'><h1>Zarezerwuj<br> swój lot</h1><p>Jeśli nie boisz się wirusów to leć z nami w podróż życia</p></div>" + 
    "<div class='boxDodatki'>" +
    "<h2>Zaloguj się</h2><p>aby kontynuować</p>"+
            "<label for='fname'>Wprowadź login:</label><br> " +
            "<input type='text' id='fname' name='fname' placeholder='Login' value='marcindlubis'><br>" +
            "<label for='sname'>Wpowadź hasło:</label> " +
            "<input type='password' id='sname' name='sname' placeholder='*********' value='poprosze5'><br>" +
            "<button id='potwierdz'>Zaloguj</button><br>" +
            "<p id='error'><p>" +
        "</div>"+
    "</div>";
  }

export function logowanie(wpisanaNazwaUzytkownika, wpisaneHaslo) {
    if(wpisanaNazwaUzytkownika === uzytkownik.login && wpisaneHaslo === uzytkownik.haslo) {
        return true;
    } else {
        return false;
    }
}
