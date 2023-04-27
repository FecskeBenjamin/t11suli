//1.-feladat:
function DiakInfo(nev, csoport, tipus) {
    var diakNev = nev;
    if (csoport !== 0) {
        diakNev = "Team ".concat(diakNev);
    }
    if (tipus == true) {
        diakNev += "Junior Frontend";
    }
    else {
        diakNev += "Webprogramozó";
    }
    return diakNev;
}
;
var eredmeny1 = DiakInfo("Minta Márton", 8, true);
console.log(eredmeny1);
//2.-feladat:
function magatSzorg(jegy) {
    var szorgalom;
    var magatartas;
    if (jegy == 5) {
        szorgalom = "Példás";
        magatartas = "Példás";
    }
    else if (jegy == 4) {
        szorgalom = "Jó";
        magatartas = "Jó";
    }
    else if (jegy == 3) {
        szorgalom = "Változó";
        magatartas = "Változó";
    }
    else if (jegy == 2) {
        szorgalom = "Hanyag";
        magatartas = "Rossz";
    }
    return [szorgalom, magatartas];
}
var eredmeny2 = magatSzorg(2);
console.log(eredmeny2);
//3.-feladat:
function HarommalOszthatokSzama(szamok) {
    var szamlalo = 0;
    for (var i = 0; i < szamok.length; i++) {
        if (szamok[i] % 3 == 0) {
            szamlalo++;
        }
    }
    return szamlalo;
}
var eredmeny3 = HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20]);
console.log(eredmeny3);
//4.-feladat:
function Nyeroszamok(mennyiseg, alsoHatar, felsoHatar) {
    var also;
    var felso;
    if (alsoHatar < felsoHatar) {
        also = alsoHatar;
        felso = felsoHatar;
    }
    else {
        also = felsoHatar;
        felso = alsoHatar;
    }
    var nySzamok = [];
    while (nySzamok.length < mennyiseg) {
        var randomNumber = Math.floor(Math.random() * (felso - also + 1) + also);
        if (!nySzamok.includes(randomNumber) === -1) {
            nySzamok.push(randomNumber);
        }
    }
    return nySzamok;
}
;
