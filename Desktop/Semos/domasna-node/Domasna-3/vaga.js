const vaga = {
    gramToKilogram: function (grams) {
      return grams / 1000;
    },
    kilogramToGram: function (kilograms) {
      return kilograms * 1000;
    }
  };
  
  module.exports = vaga;
  // Во датотеката каде што сакате да го користите модулот vaga.js
console.log(vaga.gramToKilogram(1500)); // Пример: Претвори 1500 грами во килограми
console.log(vaga.kilogramToGram(2.5)); // Пример: Претвори 2.5 килограми во грами
