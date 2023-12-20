function c2f(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

// Primer povik na funkcijata
const celzijus = 25;
const farenhajt = c2f(celzijus);
console.log(`${celzijus} stepeni Celzijus se ednakvi na ${farenhajt} stepeni Farenhajt.`);
