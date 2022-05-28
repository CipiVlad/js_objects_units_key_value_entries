// ------------------------lev 1-2 ----------------------------------------

let person = {
    name: "John",
    alter: 23,
    sagNameAlter: function () {
        alert(person.name + person.alter);
    }


}

// console.log(person.name, person.alter)
// person.sagNameAlter();

// ------------------------lev 1-4 ----------------------------------------


let unsereHaustiere = [
    {
        tiertyp: "Katze",

        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ]

    }

];
// console.log([unsereHaustiere[0].names[1]]);
// console.log([unsereHaustiere[1].names[2]]);
// console.log([unsereHaustiere[1].names]);

// // das zu pushende Array
// let arraynew = ['Snoopy'];
// // Push array to object
// unsereHaustiere.push(arraynew);

// console.log(unsereHaustiere)



// var Obj = [{
//     arrayOne: [""],
//     arrayTwo: [""]
// }];

// // Array to be inserted
// var arraynew = ['Geeks', 'for', 'Geeks'];

// // Push an array to object
// Obj.push(arraynew);

// console.log(Obj);


// --------------------------lvl--1 -5------------------------------------

// let unserLager = {
//     schreibtisch: {
//         schublade: "Hefter"
//     },
//     schrank: {
//         "Obere Schublade": {
//             Ordner1: "Dokumente",
//             Ordner2: "Geheimnisse"
//         },
//         "Untere Schublade": "Cola"
//     }
// };

// // console.log(unserLager.schrank["Untere Schublade"])
// // console.log(unserLager.schreibtisch.schublade)
// // console.log(unserLager.schrank["Obere Schublade"].Ordner2)


// // --------------------------lvl--1 -6------------------------------------
// let myMusic = [
//     {
//         artist: "The Beatles",
//         title: "Abbey Road",
//         release_year: 1969,
//         medium: ["LP", "CD", "MC", "Download"],
//         gold: true
//     },
//     {
//         artist: "Pink Floyd",
//         title: "Dark Side of the Moon",
//         release_year: 1978,
//         medium: ["CS", "CD", "LP", "Download"],
//         gold: true
//     },
//     {
//         artist: "Led Zeppelin",
//         title: "Led Zeppelin IV",
//         release_year: 1971,
//         medium: ["CS", "LP", "Download"],
//         gold: true
//     },
//     {
//         artist: "Metallica",
//         title: "Kill ’Em All und Ride the Lightning",
//         release_year: 1983,
//         medium: ["LP", "CD", "MC", "Download"],
//         gold: true
//     }
// ];


// console.log(myMusic[0])
// console.log(myMusic[1].medium[3])
// console.log(myMusic[1].gold)
// console.log(myMusic[2].release_year)
// console.log(myMusic[3].release_year)
// console.log(myMusic[3].medium[2])
// console.log(myMusic[3].title)
// console.log(myMusic[2].title)
// console.log(myMusic[1].artist)



// let txt = myMusic[3].title
// const word = txt.split(' ');
// console.log(word[4]);

// let txt2 = myMusic[2].title;
// const word2 = txt2.split(' ');
// console.log(word2[2]);

// let txt3 = myMusic[1].artist;
// const word3 = txt3.split(' ');
// console.log(word3[1]);


// --------------------------lvl--1 -7------------------------------------

let myMusic = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];


// verbindung zu html div "list"
// const list = document.querySelector('.list');

// // function

// const addList = (object, element) => {
//     object.forEach(item => {
//         const p = document.createElement('h1');
//         const li = document.createElement('p');
//         const med = document.createElement('li')
//         p.textContent = item.artist;
//         li.textContent = item.title;
//         med.textContent = item.medium;
//         element.appendChild(p);
//         element.appendChild(li);
//         element.appendChild(med);
//     });
// }
// addList(myMusic, list);


// myMusic.forEach((elt) => {
//     console.log(elt.artist);
//     console.log(elt.title);
//     console.log(elt.medium);

//     if (elt.release_year < 1975) {
//         console.log(elt.release_year);
//     }
// })

// --------------------------lvl--1 -8------Objects Arrays Loop Accessing------------------------------

let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

// console.log([studentData])
// studentData.forEach((item) => {

//     console.log(item.name)
//     console.log(item.coop)
//     console.log(item.emails)
// });

// const newArray = studentData.map((item) => {
//     // console.log(item.address.city)
//     return item.address.city.slice(0, 8)
// })
// console.log(newArray)




// ---------lvl2_1---------------

let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];


console.log(edelMetallPreise)


// greife auf alle name mit forEach zu
let forEachEMP = [];

edelMetallPreise.forEach(item => {
    console.log(item.name);
    forEachEMP.push(item.name);
});

console.table(forEachEMP);

// greife auf alle name mit map() zu

let mapEMP = edelMetallPreise.map((item) => {
    return item.name;
})
console.table(mapEMP);

// greife auf alle preiseGramEuro mit forEach() zu

edelMetallPreise.forEach(item => {
    console.table(item.preiseGramEuro)
    forEachEMP.push(item.preiseGramEuro);
});
console.table(forEachEMP);

// greife auf alle preiseGramEuro mit map() zu

let mapEMP2 = [];
mapEMP2 = edelMetallPreise.map((item) => {
    return item.preiseGramEuro;
})

console.table(mapEMP2);

// greife auf alle veraenderung mit forEach zu

let forEachEMP2 = [];

edelMetallPreise.forEach((item) => {
    console.table(item.veraenderung);
    forEachEMP2.push(item.veraenderung);
})
console.table(forEachEMP2);

// for (let item of forEachEMP2) {
//     console.table(item.veraenderung);
// }
// console.log(forEachEMP2);

// greife auf alle veraenderung mit map zu
let mapEMP3 = [];

mapEMP3 = edelMetallPreise.map((item) => {
    return item.veraenderung;
})
console.table(mapEMP3);


//Verwende filter() und greife auf preiseGramEuro die teurer als 50 Euro zu 

console.table(mapEMP2)

const filter = edelMetallPreise.filter(item => item.preiseGramEuro > 50);
console.table(filter);




// ---------2-2 Array Object sort () Singers

const singers = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];
// console.log(singers)

// LÖSCHEN von gewünschtem Array-Item ??
non_period_active = singers.filter(item => item.period_active !== "1960");
console.table(non_period_active)

console.table(non_period_active.sort(function (a, b) {
    if (a.name > b.name)
        return 1;
    else {
        return -1;
    }
}));





