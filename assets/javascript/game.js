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

    var moveCharacter = function() {
        $("#Finn").appendTo("Stage-2");
    };
    moveCharacter();

});
