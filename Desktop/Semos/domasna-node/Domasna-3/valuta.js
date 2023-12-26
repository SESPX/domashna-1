// valuta.js

const valuta = {
    evroToDenar: function(evro) {
      return evro * 61.5; // Пример - Конверзија од евра во денари
    },
    evroToDolar: function(evro) {
      return evro * 1.12; // Пример - Конверзија од евра во долари
    },
    denarToDolar: function(denar) {
      return denar / 55.5; // Пример - Конверзија од денари во долари
    },
    dolarToEvro: function(dolar) {
      return dolar / 1.12; // Пример - Конверзија од долари во евра
    }
  };
  
  module.exports = valuta;

console.log(valuta.evroToDenar(100)); // Пример: Претвори 100 евра во денари
console.log(valuta.evroToDolar(100)); // Пример: Претвори 100 евра во долари
console.log(valuta.denarToDolar(1000)); // Пример: Претвори 1000 денари во долари
console.log(valuta.dolarToEvro(100)); // Пример: Претвори 100 долари во евра
