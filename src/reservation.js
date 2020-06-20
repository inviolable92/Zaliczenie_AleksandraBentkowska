import _ from 'lodash';

function toString(dateToString) {
    let dd = String(dateToString.getDate()).padStart(2, '0');
    let mm = String(dateToString.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = dateToString.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
}

export function stronaRezerwacji() {
  let template = document.querySelector('#reservation');
  template = template.content.cloneNode(true);
  let inputDate = template.querySelector('#date');
  let today = new Date(Date.now());
  today = toString(today);
  inputDate.setAttribute("value", today);
  let oneYearFromNow = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
  oneYearFromNow = toString(oneYearFromNow);
  let DayNow = new Date().toISOString().split("T")[0];
  inputDate.setAttribute("max", oneYearFromNow);
  inputDate.setAttribute("min", DayNow);

  return template;
}

export function dataPrzekroczylaRok() {
    var oneYearFromNow = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
    var chosenDate = document.getElementById('date').valueAsDate;
    if(+chosenDate > +oneYearFromNow) {
      chosenDate = oneYearFromNow;
    }
    var dd = String(chosenDate.getDate()).padStart(2, '0');
    var mm = String(chosenDate.getMonth() + 1).padStart(2, '0'); 
    var yyyy = chosenDate.getFullYear();
   
    return yyyy + '-' + mm + '-' + dd;
    
}