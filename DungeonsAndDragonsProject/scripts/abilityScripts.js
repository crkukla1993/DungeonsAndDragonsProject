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
    var dieArr = [];
    var rand = null;
    findAbility(ability);
    die0 = new Image(45, 45);
    die1 = new Image(45, 45);
    die2 = new Image(45, 45);
    die3 = new Image(45, 45);
    if (cell.children.length > 0) {
        cell.replaceChild(die0, cell.children[0]);
        cell.replaceChild(die1, cell.children[1]);
        cell.replaceChild(die2, cell.children[2]);
        cell.replaceChild(die3, cell.children[3]);
    }
    else {
        cell.appendChild(die0);
        cell.appendChild(die1);
        cell.appendChild(die2);
        cell.appendChild(die3);
    }
    dieArr[0] = rand = rollRand(1, 6);
    setImgSource(die0, rand);
    dieArr[1] = rand = rollRand(1, 6);
    setImgSource(die1, rand);
    dieArr[2] = rand = rollRand(1, 6);
    setImgSource(die2, rand);
    dieArr[3] = rand = rollRand(1, 6);
    setImgSource(die3, rand);

    dieArr.sort(function (a, b) { return a - b; });
    var total = dieArr[1] + dieArr[2] + dieArr[3];
    txtbx.value = total;
}

function setImgSource(die, rand) {
    switch (rand) {
        case 1:
            die.src = d1.src.toString();
            break;
        case 2:
            die.src = d2.src.toString();
            break;
        case 3:
            die.src = d3.src.toString();
            break;
        case 4:
            die.src = d4.src.toString();
            break;
        case 5:
            die.src = d5.src.toString();
            break
        case 6:
            die.src = d6.src.toString();
            break;
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