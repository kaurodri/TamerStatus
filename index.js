var amizade = 20, TStatus = [], TAplicado = [];

{
    let categorias = ['AT', 'DEF', 'HP', 'DS'], banco = [];

    let c = 0;
    while (c < categorias.length) {
        banco.push([categorias[c], 0]);
        c++;
    };

    var statusT = new Map(banco);
}

{
    var classes = ['status', 'passivo', 'slots', 'aplica', 'equipamento1', 'equipamento2']
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
    let chapeuSt = [],
        oculosSt = [true, 0, 1, 100, 176],
        blusaSt = [true, 0, 2, 55, 450, 436],
        shortSt = [true, 0, 2, 55, 148, 141],
        luvaSt = [true, 210, 2, 130, 252, 257],
        botaSt = [true, 30, 1, 115, 3],
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
//console.log(luva);
//console.log(bota);

{
    if (luva.get(classes[0]) == true) {
        if (luva.get(classes[2]) == 2) {

            let e1 = Math.trunc((luva.get(classes[3]) * luva.get(classes[4])) / 100),
            e2 = Math.trunc((luva.get(classes[3]) * luva.get(classes[5])) / 100),
            
            tot = e1 + e2 + luva.get(classes[1]),
            
            tot1 = tot +129,
            
            tot2 = tot1 * amizade / 100;
            

            //console.log(status.set('AT', tot1));
            //console.log(status.set('AT', tot2));
        }
    }
}

{
    let categorias = ['AT', 'DEF', 'HP', 'DS']

    let c = 0;
    let ss = todos.length;
    while (c < 1) {

        const legenda = {
            'chapeu' : categorias[3],
            'oculos': categorias[3],
            'blusa': categorias[2],
            'short': categorias[1],
            'luva': categorias[0],
            'bota': null,
            'suit': null
        }

        /*
        let somaSlot1 = Math.trunc((todos[c].get(classes[3]) * todos[c].get(classes[4])) / 100),
        somaSlot2 = Math.trunc((todos[c].get(classes[3]) * todos[c].get(classes[4])) / 100),
        somaSlots = somaSlot1 + somaSlot2;

        // var todos = [chapeu, oculos, blusa, short, luva, bota, suit];

        

        
        if (todos[c].get(classes[0]) == true) {
            if (legenda[todos[c]] != null) {
                statusT.set(legenda[todos[c]], somaSlots);
                c++;
            } else {
                c++;
            }
        } else {
            console.log('esse é false');
            c++;
        }
        /*/
        console.log(todos[1].toString());
        c++

    }
    //console.log(statusT);
}