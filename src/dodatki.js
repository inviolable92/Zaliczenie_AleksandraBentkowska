import _ from 'lodash';
import tablicaLotow from '../samoloty.json';

export function stronaPodsumowania(daneRezerwacji) {
  let template = document.querySelector('#podsumowanie');
  template = template.content.cloneNode(true);
  let spanList = template.querySelectorAll('span');
  let boxTemplate = template.querySelector('.box');
  for(let i=0; i<spanList.length; i++) {
    spanList[i].innerHTML = daneRezerwacji[i];
  }
  let cena = 0;
  let obliczonaCena = document.createElement('p');
  obliczonaCena.id = 'obliczonaCena';

  let znalezionyLot;
  for(let i = 0; i < tablicaLotow.length; i++) {
    if(tablicaLotow[i].miasto == daneRezerwacji[0]){
      znalezionyLot = tablicaLotow[i];
    }
  }
 
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
          obliczonaCena.innerHTML += 'Miejsce ' + daneRezerwacji[i] + ": " + znalezionyLot.pierwszaKlasa + "zł + ";
      }
      if(PobranaLitera===C||PobranaLitera===D||PobranaLitera===E){
          cena+=znalezionyLot.drugaKlasa;
          obliczonaCena.innerHTML += 'Miejsce ' + daneRezerwacji[i] + ": " + znalezionyLot.drugaKlasa + "zł + ";
      }
      if(PobranaLitera===F){
          cena+=znalezionyLot.trzeciaKlasa;
          obliczonaCena.innerHTML += 'Miejsce ' + daneRezerwacji[i] + ": " + znalezionyLot.trzeciaKlasa + "zł + ";
      }

      if(daneRezerwacji[4]) {
        cena += znalezionyLot.dodatkowyBagaz;
        obliczonaCena.innerHTML += "Dodatkowy bagaz: " + znalezionyLot.dodatkowyBagaz + " + " ;
      }  

    let premiumEconomy = 'Premium Economy + 280zł';
    let economy = 'Economy + 0zł';
    let business = 'Business + 650zł';
    if(daneRezerwacji[3] === premiumEconomy) {
      cena += znalezionyLot.premiumEconomy;
      obliczonaCena.innerHTML += 'Premium Economy: 280zł <br>'  ;
    } else if(daneRezerwacji[3] === economy) {
      cena += znalezionyLot.economy;
      obliczonaCena.innerHTML += 'Economy: 0zł <br>'  ;
    } else if(daneRezerwacji[3] === business) {
      cena += znalezionyLot.business;
      obliczonaCena.innerHTML += 'Business: 650zł <br> ' ;
    }

    
  }
  obliczonaCena.innerHTML += "<br>Suma: " + "<br>" + "<span id='cenaID'>"+ cena + "zł" +"<span>";
  template.querySelector('.box').appendChild(obliczonaCena)
  


  ////dodawanie do miejsca

  return template;
}