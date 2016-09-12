d1 = new Image(); d1.src = 'images/dice/1.png';
d2 = new Image(); d2.src = 'images/dice/2.png';
d3 = new Image(); d3.src = 'images/dice/3.png';
d4 = new Image(); d4.src = 'images/dice/4.png';
d5 = new Image(); d5.src = 'images/dice/5.png';
d6 = new Image(); d6.src = 'images/dice/6.png';
d1R = new Image(); d1R.src = 'images/dice/1R.png';
d2R = new Image(); d2R.src = 'images/dice/2R.png';
d3R = new Image(); d3R.src = 'images/dice/3R.png';
d4R = new Image(); d4R.src = 'images/dice/4R.png';
d5R = new Image(); d5R.src = 'images/dice/5R.png';
d6R = new Image(); d6R.src = 'images/dice/6R.png';
interval0 = undefined;
random = new Random();

function rollForScores() {
    rollForAbility('str');
    rollForAbility('dex');
    rollForAbility('con');
    rollForAbility('int');
    rollForAbility('wis');
    rollForAbility('cha');
}

function rollForAbility(ability) {
    this.ability = ability;
    if (interval0 === undefined) {
        var dieArr = [];
        var rand = null;
        var count0 = 0;
        var count1 = 0;
        var count2 = 0;
        var count3 = 0;
        
            findAbility(ability, this.cell, this.txtbx);

            this.die0 = new Image(45, 45);
            this.die1 = new Image(45, 45);
            this.die2 = new Image(45, 45);
            this.die3 = new Image(45, 45);
            die0.style.display = 'none';
            die1.style.display = 'none';
            die2.style.display = 'none';
            die3.style.display = 'none';

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
            $(die0).fadeIn(500);
            $(die1).fadeIn(500);
            $(die2).fadeIn(500);
            $(die3).fadeIn(500);
            interval0 = setInterval(function () {
                if (count0 >= 10) {
                    clearInterval(interval0);
                }
                else {
                    dieArr[0] = rollRand(1, 6);
                    setImgSource(die0, dieArr[0]);
                    count0++;
                }
            }, 50);

            interval1 = setInterval(function () {
                if (count1 >= 10) {
                    clearInterval(interval1);
                }
                else {
                    dieArr[1] = rollRand(1, 6);
                    setImgSource(die1, dieArr[1]);
                    count1++;
                }
            }, 50);

            interval2 = setInterval(function () {
                if (count2 >= 10) {
                    clearInterval(interval2);
                }
                else {
                    dieArr[2] = rollRand(1, 6);
                    setImgSource(die2, dieArr[2]);
                    count2++;
                }
            }, 50);

            interval3 = setInterval(function () {
                if (count3 >= 10) {
                    clearInterval(interval3);
                    var arr = dieArr.slice();
                    setDieAsLowest(arr);
                    dieArr.sort(function (a, b) { return a - b; });
                    var total = dieArr[1] + dieArr[2] + dieArr[3];
                    txtbx.value = total;
                    interval0 = undefined;
                }
                else {
                    dieArr[3] = rollRand(1, 6);
                    setImgSource(die3, dieArr[3]);
                    count3++;
                }
            }, 50);
            fadeOutDice(die0, die1, die2, die3);
        
    }
}

function fadeOutDice(di0, di1, di2, di3) {
    setTimeout(function () {
        $(di0).fadeOut(500);
        $(di1).fadeOut(500);
        $(di2).fadeOut(500);
        $(di3).fadeOut(500);
    }, 3000);
}

function setDieAsLowest(arr) {
    var tmp = arr.slice();
    tmp.sort(function (a, b) { return a - b; });
    switch (arr.indexOf(tmp[0])) {
        case 0:
            setMinImgSource(die0, tmp[0]);
            break;
        case 1:
            setMinImgSource(die1, tmp[0]);
            break;
        case 2:
            setMinImgSource(die2, tmp[0]);
            break;
        case 3:
            setMinImgSource(die3, tmp[0]);
            break;
    }
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
            break;
        case 6:
            die.src = d6.src.toString();
            break;
    }
}
function setMinImgSource(die, num) {
    switch (num) {
        case 1:
            die.src = d1R.src.toString();
            break;
        case 2:
            die.src = d2R.src.toString();
            break;
        case 3:
            die.src = d3R.src.toString();
            break;
        case 4:
            die.src = d4R.src.toString();
            break;
        case 5:
            die.src = d5R.src.toString();
            break;
        case 6:
            die.src = d6R.src.toString();
            break;
    }
}

function rollRand(min, max) {
    return random.integer(min, max);
}

function findAbility(ability, cell, txtbx) {
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