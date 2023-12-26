// sunceviGodini.js

const svetlosniGodini = {
    kmToAU: function(kilometri) {
      return kilometri / 149.6; // Конверзија од километри во астрономски единици
    },
    AToKm: function(astronomskaEdinica) {
      return astronomskaEdinica * 149.6; // Конверзија од астрономски единици во километри
    }
  };
  
  module.exports = svetlosniGodini;

console.log(svetlosniGodini.kmToAU(149600000)); // Пример: Претвори 149600000 км во астрономски единици
console.log(svetlosniGodiniGodini.AToKm(1)); // Пример: Претвори 1 астрономска единица во километри

  