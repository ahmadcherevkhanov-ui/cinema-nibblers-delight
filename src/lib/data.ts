import steakImg from "@/assets/dish-steak.jpg";
import waffleImg from "@/assets/dish-waffle.jpg";
import croquettesImg from "@/assets/dish-croquettes.jpg";
import beerImg from "@/assets/dish-beer.jpg";

export const dishes = [
  { name: "Biefstuk met pepersaus", desc: "Met huisgemaakte frieten", img: steakImg, price: "€24" },
  { name: "Kaaskroketten", desc: "Goudbruin, met frieten en citroen", img: croquettesImg, price: "€18" },
  { name: "Wafel & vanilleijs", desc: "Met een cappuccino erbij", img: waffleImg, price: "€11" },
  { name: "Sint-Idesbaldus Bruin", desc: "Lokaal abdijbier van het vat", img: beerImg, price: "€5" },
];

export const reviews = [
  {
    name: "Angela Lefevre",
    text: "Gezellige plek met vlotte en supervriendelijke bediening. De steak was ronduit heerlijk en perfect gebakken.",
    when: "6 maanden geleden",
  },
  {
    name: "Jean Philip Wymeersch",
    text: "Cinema K-fe is een vaste waarde in Koksijde. Lasagne, rundstartaar en de suggesties zijn gewoon lekker. Dimitri en zijn team — constante van kwaliteit en service.",
    when: "een jaar geleden",
  },
  {
    name: "Robin Dedoncker",
    text: "Ideale plek voor een lekker diner voor de film. Vriendelijke service en ruime parking. Wij gaan hier al jaren.",
    when: "2 jaar geleden",
  },
  {
    name: "Melanie D",
    text: "We gaan er al jaren. Vriendelijke bediening, lekker eten en super aangenaam om er iets te drinken voor je een filmpje gaat bekijken.",
    when: "2 jaar geleden",
  },
];

export const hours = [
  ["Maandag", "11:30 – 21:00"],
  ["Dinsdag", "11:30 – 21:00"],
  ["Woensdag", "Gesloten"],
  ["Donderdag", "Gesloten"],
  ["Vrijdag", "11:30 – 22:00"],
  ["Zaterdag", "11:30 – 22:00"],
  ["Zondag", "11:30 – 20:00"],
];
