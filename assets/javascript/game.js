$(document).ready(function() {

    //object construction function.
    function player(name = "default", healthPoints = 0, attackPower = 0, counterAttackPower = 0, baseAttackPower = 0) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.attackPower = attackPower;
        this.counterAttackPower = counterAttackPower;
        this.baseAttackPower = baseAttackPower;
    }

    //instance objects of characters
    var rey = new player("Rey", healthPoints = 100, attackPower = 27, counterAttackPower = 10, baseAttackPower = 27);
    var kyloRen = new player("Kylo Ren", healthPoints = 150, attackPower = 9, counterAttackPower = 25, baseAttackPower = 9);
    var finn = new player("Finn", healthPoints = 120, attackPower = 13, counterAttackPower = 10, baseAttackPower = 13);
    var generalHux = new player("General Hux", healthPoints = 130, attackPower = 10, counterAttackPower = 20, baseAttackPower = 10);


    var rpgGame = {
        selectedPlayer: null,
        opponent: null,
        wins: 0,
        insertPlayer: 0,
        insertOpponent: 0,
    };
    console.log(rpgGame);
    //inserts selected player into rpgGame and sends enemies to enemy section.
    $('.players').on('click', function() {
        if (rpgGame.selectedPlayer === null && rpgGame.opponent === null) {
            if ($(this).text() === ' Rey') {
                rpgGame.selectedPlayer = rey;
                console.log('hi', rpgGame);
                $('#Finn').appendTo('#Stage-2');
                $('#General-Hux').appendTo('#Stage-2');
                $('#Kylo-Ren').appendTo('#Stage-2');
            } else if ($(this).text() === ' Finn') {
                rpgGame.selectedPlayer = finn;
                console.log(rpgGame);
                $('#Rey').appendTo('#Stage-2');
                $('#General-Hux').appendTo('#Stage-2');
                $('#Kylo-Ren').appendTo('#Stage-2');
            } else if ($(this).text() === ' General Hux') {
                rpgGame.selectedPlayer = generalHux;
                console.log(rpgGame);
                $('#Rey').appendTo('#Stage-2');
                $('#Finn').appendTo('#Stage-2');
                $('#Kylo-Ren').appendTo('#Stage-2');
            } else if ($(this).text() === ' Kylo Ren') {
                rpgGame.selectedPlayer = kyloRen;
                console.log(rpgGame);
                $('#Rey').appendTo('#Stage-2');
                $('#General-Hux').appendTo('#Stage-2');
                $('#Finn').appendTo('#Stage-2');
            }
        }
    });
    //inserts selected opponent into rpgGame and sends opponent to defender section.
    $('.players').on('click', function() {
        if ($(this).text() === ' Rey') {
            rpgGame.opponent = rey;
            console.log(rpgGame);
            $('#Rey').appendTo('#Stage-4');
        } else if ($(this).text() === ' Finn') {
            rpgGame.opponent = finn;
            console.log('yo', rpgGame);
            $('#Finn').appendTo('#Stage-4');
        } else if ($(this).text() === ' General Hux') {
            rpgGame.opponent = generalHux;
            console.log(rpgGame);
            $('#General-Hux').appendTo('#Stage-4');
        } else if ($(this).text() === ' Kylo Ren') {
            rpgGame.opponent = kyloRen;
            console.log(rpgGame);
            $('#General-Hux').appendTo('#Stage-4');
        }
    });
    //attacks opponent and immediate counter attack by opponent.
    $('').on('click', )
});
