//1.-feladat:
function DiakInfo(nev: string, csoport: number, tipus: boolean): any {
    let diakNev: string = nev;
    if (csoport !== 0) {
        diakNev = `Team ${diakNev}`;
    }
    if (tipus == true) {
        diakNev += "Junior Frontend";
    }
    else {
        diakNev += "Webprogramozó";
    }
    return diakNev;
};
let eredmeny1: string = DiakInfo("Minta Márton", 8, true);
console.log(eredmeny1);



//2.-feladat:
function magatSzorg(jegy: number): [string, string] {
    let szorgalom: string;
    let magatartas: string;
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
let eredmeny2: any = magatSzorg(2);
console.log(eredmeny2);

//3.-feladat:
function HarommalOszthatokSzama(szamok: Array<number>): number {
    let szamlalo: number = 0;
    for (let i = 0; i < szamok.length; i++) {
        if (szamok[i] % 3 == 0) {
            szamlalo++;
        }
    }
    return szamlalo;
}
let eredmeny3: number = HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20]);
console.log(eredmeny3);

//4.-feladat:
function Nyeroszamok(mennyiseg: number, alsoHatar: number, felsoHatar: number): Array<number> {

    let also: number;
    let felso: number;
    if (alsoHatar < felsoHatar) {
        also = alsoHatar;
        felso = felsoHatar;
    }
    else {
        also = felsoHatar;
        felso = alsoHatar;
    }
    let nySzamok: number[] = [];
    while (nySzamok.length < mennyiseg) {
        let randomNumber: number = Math.floor(Math.random() * (felso - also + 1) + also);
        if (!nySzamok.includes(randomNumber) === -1) {
            nySzamok.push(randomNumber);
        }
    }
    return nySzamok;
};

