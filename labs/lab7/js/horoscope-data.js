var zodiac = "Taurus";
var month = "May";
var day = 10;
var luckyNum = 11;
var horoscope = "You're gonna do great things today!";
var doIBeleive = true;

document.getElementById("sign").innerHTML = zodiac;
document.querySelector(".birthday").innerHTML += `${month} ${day}th`;
document.querySelector(".luckyNum").innerHTML += luckyNum;
const paras = document.querySelectorAll("p");
paras[0].innerHTML = horoscope;
paras[1].innerHTML = `<strong>${doIBeleive}</strong>`;

var Taurusmoodrate = 3.0;
var Virgomoodrate = 3.3
var Piscesmoodrate = 3.6
var averagemoodrate = Taurusmoodrate + Virgomoodrate + Piscesmoodrate/3
paras[2].innerHTML =
 `Today's mood rating for Taurus: ${Taurusmoodrate} out of 5. <br/>
    Today's mood rating for Virgo: ${Virgomoodrate} out of 5. <br/>
    Today's mood rating for Pisces: ${Piscesmoodrate} out of 5. <br/>
    The average mood rating for Virgo, Pices, and Taurus is: ${averagemoodrate}`;
var signs = ['Capricorn','Aquarius','Pisces','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius']
var thatsMySign = signs[4];
var DevinSign = signs[8];
var EthanSign = signs[2];
paras[3].innerHTML = `My zodiac sign is: ${thatsMySign}`;
paras[4].innerHTML = `Devin's zodiac sign is: ${DevinSign}`;
paras[5].innerHTML = `Ethan's zodiac sign is: ${EthanSign}`;

var consthoroscopes = [
  "Today is a day for new beginnings. Embrace change and seize opportunities.",
  "Your determination will lead to success today. Stay focused on your goals.",
  "Communication is key today. Express yourself clearly and listen to others.",
  "Trust your intuition. It will guide you in making the right decisions.",
  "Your creativity shines today. Use it to inspire and lead others.",
  "Pay attention to the details. Your meticulous work will pay off.",
  "Balance is essential. Find harmony in all aspects of your life.",
  "Embrace transformation. Let go of what no longer serves you.",
  "Adventure awaits. Explore new horizons and expand your horizons.",
  "Hard work leads to success. Keep pushing toward your goals.",
  "Your unique perspective is an asset. Share your ideas with others.",
  "Trust your emotions. They will guide you in making the right choices."
];

consthoroscopes[2] = `Make sure the people are around you are people you can trust. Keep yourself safe today.`
var Myconsthoroscopes = consthoroscopes[2];
var Devinconsthoroscopes = consthoroscopes[6];
var Ethanconsthoroscopes = consthoroscopes[4];

paras[3].innerHTML += `<br> Taurus Horoscope: ${Myconsthoroscopes}`;
paras[4].innerHTML += `<br> Virgo Horoscope: ${Devinconsthoroscopes}`;
paras[5].innerHTML += `<br> Pisces Horoscope: ${Ethanconsthoroscopes}`;