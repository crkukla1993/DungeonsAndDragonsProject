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
random = new Random();

function rollForScores() {
    
    rollForAbility('str', undefined, undefined, undefined, undefined);
    rollForAbility('dex');
    rollForAbility('con');
    rollForAbility('int');
    rollForAbility('wis');
    rollForAbility('cha');
}

function rollForAbility(ability, interval0, interval1, interval2, interval3) {
    this.ability = ability;
    var dieArr = [];
    var rand = null;
    var count0 = 0;
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    this.interval0 = interval0;
    this.interval1 = interval1;
    this.interval2 = interval2;
    this.interval3 = interval3;
    this.cell = findAbilityCell(ability);
    this.txtbx = findAbilityTxtBx(ability);

        this.die0 = new Image(45, 45);
        this.die1 = new Image(45, 45);
        this.die2 = new Image(45, 45);
        this.die3 = new Image(45, 45);
        this.die0.style.display = 'none';
        this.die1.style.display = 'none';
        this.die2.style.display = 'none';
        this.die3.style.display = 'none';

        if (this.cell.children.length > 0) {
            this.cell.replaceChild(this.die0, this.cell.children[0]);
            this.cell.replaceChild(this.die1, this.cell.children[1]);
            this.cell.replaceChild(this.die2, this.cell.children[2]);
            this.cell.replaceChild(this.die3, this.cell.children[3]);
        }
        else {
            this.cell.appendChild(this.die0);
            this.cell.appendChild(this.die1);
            this.cell.appendChild(this.die2);
            this.cell.appendChild(this.die3);
        }
        $(this.die0).fadeIn(500);
        $(this.die1).fadeIn(500);
        $(this.die2).fadeIn(500);
        $(this.die3).fadeIn(500);
        this.interval0 = setInterval(function () {
            if (count0 >= 10) {
                clearInterval(this.interval0);
            }
            else {
                dieArr[0] = rollRand(1, 6);
                setImgSource(this.die0, dieArr[0]);
                count0++;
            }
        }, 50);

        this.interval1 = setInterval(function () {
            if (count1 >= 10) {
                clearInterval(this.interval1);
            }
            else {
                dieArr[1] = rollRand(1, 6);
                setImgSource(this.die1, dieArr[1]);
                count1++;
            }
        }, 50);

        this.interval2 = setInterval(function () {
            if (count2 >= 10) {
                clearInterval(this.interval2);
            }
            else {
                dieArr[2] = rollRand(1, 6);
                setImgSource(this.die2, dieArr[2]);
                count2++;
            }
        }, 50);

        this.interval3 = setInterval(function () {
            if (count3 >= 10) {
                clearInterval(this.interval3);
                var arr = dieArr.slice();
                setDieAsLowest(arr);
                dieArr.sort(function (a, b) { return a - b; });
                var total = dieArr[1] + dieArr[2] + dieArr[3];
                this.txtbx.value = total;
                this.interval0 = undefined;
            }
            else {
                dieArr[3] = rollRand(1, 6);
                setImgSource(this.die3, dieArr[3]);
                count3++;
            }
        }, 50);
        fadeOutDice(this.die0, this.die1, this.die2, this.die3);
        
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

function findAbilityCell(ability) {
    var cell = null;
    switch (ability) {
        case 'str':
            cell = document.getElementById('cellStr');
            break;
        case 'dex':
            cell = document.getElementById('cellDex');
            break;
        case 'con':
            cell = document.getElementById('cellCon');
            break;
        case 'int':
            cell = document.getElementById('cellInt');
            break;
        case 'wis':
            cell = document.getElementById('cellWis');
            break;
        case 'cha':
            cell = document.getElementById('cellCha');
            break;
    }
    return cell;
}
function findAbilityTxtBx(ability) {
    var txtbx = null;
    switch (ability) {
        case 'str':
            txtbx = document.getElementById('txtStr');
            break;
        case 'dex':
            txtbx = document.getElementById('txtDex');
            break;
        case 'con':
            txtbx = document.getElementById('txtCon');
            break;
        case 'int':
            txtbx = document.getElementById('txtInt');
            break;
        case 'wis':
            txtbx = document.getElementById('txtWis');
            break;
        case 'cha':
            txtbx = document.getElementById('txtCha');
            break;
    }
    return txtbx;
}