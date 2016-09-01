d1 = new Image();
d1.src = 'images/dice/1.png';
d2 = new Image();
d2.src = 'images/dice/2.png';
d3 = new Image();
d3.src = 'images/dice/3.png';
d4 = new Image();
d4.src = 'images/dice/4.png';
d5 = new Image();
d5.src = 'images/dice/5.png';
d6 = new Image();
d6.src = 'images/dice/6.png';

function rollForAbility(ability) {
    findAbility(ability);
    die0 = new Image(45, 45);
    die1 = new Image(45, 45);
    die2 = new Image(45, 45);
    die3 = new Image(45, 45);
    cell.appendChild(die0);
    cell.appendChild(die1);
    cell.appendChild(die2);
    cell.appendChild(die3);
    var rand = rollRand(1, 6);
    switch (rand) {
        case 1:
            die0.src = d1.src.toString();
        case 2:
            die0.src = d2.src.toString();
        case 3:
            die0.src = d3.src.toString();
        case 4:
            die0.src = d4.src.toString();
        case 5:
            die0.src = d5.src.toString();
        case 6:
            die0.src = d6.src.toString();
    }
    
    
}

function rollRand(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function findAbility(ability) {
    switch (ability) {
        case 'str':
            cell = document.getElementById('cellStr');
            txtbx = document.getElementById('txtStr');
            break;
        case 'dex':
            cell = document.getElementById('cellDex');
            txtbx = document.getElementById('txtDex');
            break;
        case 'con':
            cell = document.getElementById('cellCon');
            txtbx = document.getElementById('txtCon');
            break;
        case 'int':
            cell = document.getElementById('cellInt');
            txtbx = document.getElementById('txtInt');
            break;
        case 'wis':
            cell = document.getElementById('cellWis');
            txtbx = document.getElementById('txtWis');
            break;
        case 'cha':
            cell = document.getElementById('cellCha');
            txtbx = document.getElementById('txtCha');
            break;
    }
}