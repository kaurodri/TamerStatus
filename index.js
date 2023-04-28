var amizade = 35, TStatus = [], TAplicado = [];

{
    let categorias = ['AT', 'DEF', 'HP', 'DS'], banco = [];

    let c = 0;
    while (c < categorias.length) {
        banco.push([categorias[c], 0]);
        c++;
    };

    var status = new Map(banco);
}

{
    var classes = ['status', 'slots', 'aplica', 'equipamento1', 'equipamento2']
    let categorias = classes, banco = [];

    let c = 0;
    while (c < categorias.length) {
        if (categorias[c] == categorias[0]) {
            banco.push([categorias[c], false]);
        } else {
            banco.push([categorias[c], 0]);
        }
        c++;
    };


    var chapeu = new Map(banco),
        oculos = new Map(banco),
        blusa = new Map(banco),
        short = new Map(banco),
        luva = new Map(banco),
        bota = new Map(banco),
        suit = new Map(banco);
    var todos = [chapeu, oculos, blusa, short, luva, bota, suit];
}

{
    let chapeuSt = [true, 2, 100, 300],
        oculosSt = [],
        blusaSt = [],
        shortSt = [],
        luvaSt = [],
        botaSt = [true, 1, 115, 3],
        suitSt = [];

    const legenda = {
        chapeuSt: chapeu,
        oculosSt: oculos,
        blusaSt: blusa,
        shortSt: short,
        luvaSt: luva,
        botaSt: bota,
        suitSt: suit
    }

    let varias = [chapeuSt, oculosSt, blusaSt, shortSt, luvaSt, botaSt, suitSt]

    let c = 0, k = 0;
    while (k < todos.length && c <= varias[k].length) {
        if (varias[k].length == 0) {
            k++;
        } else {
            todos[k].set(classes[c], varias[k][c]);
            c++;
            if (c == varias[k].length) {
                k++;
                c = c * 0;
            }
        }
    }
}
console.log(chapeu);
console.log(bota);