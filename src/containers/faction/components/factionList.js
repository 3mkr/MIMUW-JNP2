import { HOLD } from '../const';

const factionsList = [
    {
        name: "Rój",
        group: "Półświatek",
        tier: 4,
        hold: HOLD.M,
        relations: {
            'Ministerstwo Ochrony': 2,
            'Konsulat Wysp Sztyletowych': 1,
            'Krąg Ognia': -3,
            'Niewidoczni': -2,
            'Wrony': -2,
            'Upiory': -1
        },
        clock: {
            name: null,
            source: "Rój",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x

    },
    {
        name: "Niewidoczni",
        group: "Półświatek",
        tier: 4,
        hold: HOLD.M,
        relations: {
            "Błękitne Płaszcze": 2,
            "Więzienie Żelazny Hak": 2,
            "Zapomniane Bóstwa": 1,
            "Szyfranci": 1,
            "Kałamarzyści": -1,
            "Rój": -2,
            "Strażnicy Dusz": -3
        },
        clock: {
            name: null,
            source: "Niewidoczni",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Krąg Ognia",
        group: "Półświatek",
        tier: 3,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Krąg Ognia",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Lord Scurlock",
        group: "Półświatek",
        tier: 3,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Lord Scurlock",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Srebrne Ćwieki",
        group: "Półświatek",
        tier: 3,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Srebrne Ćwieki",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Czerwone Szarfy",
        group: "Półświatek",
        tier: 2,
        hold: HOLD.S,
        relations: {

        },
        clock: {
            name: null,
            source: "Czerwone Szarfy",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Siekacze",
        group: "Półświatek",
        tier: 2,
        hold: HOLD.S,
        relations: {

        },
        clock: {
            name: null,
            source: "Siekacze",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Siostry Ściemne",
        group: "Półświatek",
        tier: 2,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Siostry Ściemne",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Szare Płaszcze",
        group: "Półświatek",
        tier: 2,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Szare Płaszcze",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Szlifierze",
        group: "Półświatek",
        tier: 2,
        hold: HOLD.S,
        relations: {

        },
        clock: {
            name: null,
            source: "Szlifierze",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Upiory",
        group: "Półświatek",
        tier: 2,
        hold: HOLD.S,
        relations: {

        },
        clock: {
            name: null,
            source: "Upiory",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Wrony",
        group: "Półświatek",
        tier: 2,
        hold: HOLD.S,
        relations: {

        },
        clock: {
            name: null,
            source: "Wrony",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Zaciemniacze",
        group: "Półświatek",
        tier: 2,
        hold: HOLD.S,
        relations: {

        },
        clock: {
            name: null,
            source: "Zaciemniacze",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Ogary Mgieł",
        group: "Półświatek",
        tier: 1,
        hold: HOLD.S,
        relations: {

        },
        clock: {
            name: null,
            source: "Ogary Mgieł",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Pancerny Ulf",
        group: "Półświatek",
        tier: 1,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Pancerny Ulf",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Zagubieni",
        group: "Półświatek",
        tier: 1,
        hold: HOLD.S,
        relations: {

        },
        clock: {
            name: null,
            source: "Zagubieni",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Siły Zbrojne Imperium",
        group: "Instytucje",
        tier: 6,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Siły Zbrojne Imperium",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Poławiacze Lewiatanów",
        group: "Instytucje",
        tier: 5,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Poławiacze Lewiatanów",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Ministerstwo Ochrony",
        group: "Instytucje",
        tier: 5,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Ministerstwo Ochrony",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Rada Miejska",
        group: "Instytucje",
        tier: 5,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Rada Miejska",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Iskrownicy",
        group: "Instytucje",
        tier: 4,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Iskrownicy",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Strażnicy Dusz",
        group: "Instytucje",
        tier: 4,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Strażnicy Dusz",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Więzienie Żelazny Hak",
        group: "Instytucje",
        tier: 4,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Więzienie Żelazny Hak",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Aspiranci",
        group: "Instytucje",
        tier: 3,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Aspiranci",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Błękitne Płaszcze",
        group: "Instytucje",
        tier: 3,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Błękitne Płaszcze",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Konsulat Iruwii",
        group: "Instytucje",
        tier: 3,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Konsulat Iruwii",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Konsulat Skowlanu",
        group: "Instytucje",
        tier: 3,
        hold: HOLD.S,
        relations: {

        },
        clock: {
            name: null,
            source: "Konsulat Skowlanu",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Brygada",
        group: "Instytucje",
        tier: 2,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Brygada",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Konsulat Seweros",
        group: "Instytucje",
        tier: 1,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Konsulat Seweros",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Konsulat Wysp Sztyletowych",
        group: "Instytucje",
        tier: 1,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Konsulat Wysp Sztyletowych",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Fundamentaliści",
        group: "Pracownicy",
        tier: 4,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Fundamentaliści",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Dokerzy",
        group: "Pracownicy",
        tier: 3,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Dokerzy",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Gondolierzy",
        group: "Pracownicy",
        tier: 3,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Gondolierzy",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Marynarze",
        group: "Pracownicy",
        tier: 3,
        hold: HOLD.S,
        relations: {

        },
        clock: {
            name: null,
            source: "Marynarze",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Robotnicy",
        group: "Pracownicy",
        tier: 3,
        hold: HOLD.S,
        relations: {

        },
        clock: {
            name: null,
            source: "Robotnicy",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Dorożkarze",
        group: "Pracownicy",
        tier: 2,
        hold: HOLD.S,
        relations: {

        },
        clock: {
            name: null,
            source: "Dorożkarze",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Kałamarzyści",
        group: "Pracownicy",
        tier: 2,
        hold: HOLD.S,
        relations: {

        },
        clock: {
            name: null,
            source: "Kałamarzyści",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Szyfranci",
        group: "Pracownicy",
        tier: 2,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Szyfranci",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Majchry Kolejowe",
        group: "Pracownicy",
        tier: 2,
        hold: HOLD.S,
        relations: {

        },
        clock: {
            name: null,
            source: "Majchry Kolejowe",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Służący",
        group: "Pracownicy",
        tier: 2,
        hold: HOLD.S,
        relations: {

        },
        clock: {
            name: null,
            source: "Służący",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Biała Korona",
        group: "Mieszczanie",
        tier: 5,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Biała Korona",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Jasnomurze",
        group: "Mieszczanie",
        tier: 4,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Jasnomurze",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Pierwomurze",
        group: "Mieszczanie",
        tier: 4,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Pierwomurze",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Sześć Wież",
        group: "Mieszczanie",
        tier: 3,
        hold: HOLD.S,
        relations: {

        },
        clock: {
            name: null,
            source: "Sześć Wież",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Bigowy Wądół",
        group: "Mieszczanie",
        tier: 2,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Bigowy Wądół",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Doki",
        group: "Mieszczanie",
        tier: 2,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Doki",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Jedwabny Brzeg",
        group: "Mieszczanie",
        tier: 2,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Jedwabny Brzeg",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Nocny Targ",
        group: "Mieszczanie",
        tier: 2,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Nocny Targ",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Węglowa Grań",
        group: "Mieszczanie",
        tier: 2,
        hold: HOLD.S,
        relations: {

        },
        clock: {
            name: null,
            source: "Węglowa Grań",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Wronia Stopa",
        group: "Mieszczanie",
        tier: 2,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Wronia Stopa",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Burobagnie",
        group: "Mieszczanie",
        tier: 1,
        hold: HOLD.S,
        relations: {

        },
        clock: {
            name: null,
            source: "Burobagnie",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Charłakowa Jama",
        group: "Mieszczanie",
        tier: 1,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Charłakowa Jama",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Kościół Cielesnej Ekstazy",
        group: "Odszczepieńcy",
        tier: 4,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Kościół Cielesnej Ekstazy",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Horda",
        group: "Odszczepieńcy",
        tier: 3,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Horda",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Pojednani",
        group: "Odszczepieńcy",
        tier: 3,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Pojednani",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Ścieżka Szeptów",
        group: "Odszczepieńcy",
        tier: 3,
        hold: HOLD.M,
        relations: {

        },
        clock: {
            name: null,
            source: "Ścieżka Szeptów",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Skowlańscy Uchodźcy",
        group: "Odszczepieńcy",
        tier: 3,
        hold: HOLD.S,
        relations: {

        },
        clock: {
            name: null,
            source: "Skowlańscy Uchodźcy",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Zapomniane Bóstwa",
        group: "Odszczepieńcy",
        tier: 3,
        hold: HOLD.S,
        relations: {

        },
        clock: {
            name: null,
            source: "Zapomniane Bóstwa",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Łupieżcy Martwych Ziem",
        group: "Odszczepieńcy",
        tier: 2,
        hold: HOLD.S,
        relations: {

        },
        clock: {
            name: null,
            source: "Łupieżcy Martwych Ziem",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    },
    {
        name: "Płacząca Pani",
        group: "Odszczepieńcy",
        tier: 2,
        hold: HOLD.S,
        relations: {

        },
        clock: {
            name: null,
            source: "Płacząca Pani",
            target: null,
            type: null,
            filled: 0,
            max: 0
        },
        //x
    }
];

export default factionsList;