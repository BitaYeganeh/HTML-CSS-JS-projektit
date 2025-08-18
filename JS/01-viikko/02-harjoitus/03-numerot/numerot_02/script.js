// Määrittele funktio, joka muuntaa lämpötilan Fahrenheit-asteista Celsius-asteiksi.
// Tämä funktio käyttää kaavaa (Fahrenheit - 32) * 5/9
// Saatu lämpötila pyöristetään yhteen desimaaliin tarkkuuden vuoksi.


function FahrenheitToCelsius(Fahrenheit){
    let Celsius = ((Fahrenheit - 32) * 5 / 9);
return Celsius.toFixed(1);

}
let Fahrenheit = 21;
let Celsius1 = FahrenheitToCelsius(Fahrenheit);
console.log(`Fahrenheit ${Fahrenheit}: Celsius ${Celsius1}`);

///////WAY 2

Fahrenheit = 21;
let Celsius2 = ((Fahrenheit - 32) * 5 / 9);
Celsiustemp = Celsius2.toFixed(1);
console.log("Celsiustemp", Celsiustemp);