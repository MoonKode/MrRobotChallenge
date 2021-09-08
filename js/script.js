/* Ter em consideraçao que todo o codigo esta escrito de forma a que todos os terminais sejam hackados,
logo, assim que acabar a bateria, teremos sempre os 4 terminais completos, dai nao haver necessidade de
 codar condiçao que nos permita ter menos de 4 terminais completos no fim */

var userName = '';
var user = '';
var battery = 100;
var hackedTerminals = 0;
var arrayTestControl = "abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
var outboundTraffic = ['0', 'O', ')', '8', '-', 'a', '-', ')', '2', ')', '1', '-'];
var passcode = '';
var passcodes = [
    [1, 4, 4, 1],
    [1, 2, 3, 1],
    [2, 6, 0, 8],
    [5, 5, 5, 5],
    [4, 3, 4, 3]
];


async function mainscreen() {
    if (battery > 0) {
        document.getElementById('percentBattery').innerHTML = battery;
        document.getElementById('usern').innerHTML = userName;
        document.getElementById('screen').style.display = 'none';
        document.getElementById('mainscreen').style.display = '';
        document.getElementById('terminal1').style.display = 'none';
        document.getElementById('terminal2').style.display = 'none';
        document.getElementById('terminal3').style.display = 'none';
        document.getElementById('terminal4').style.display = 'none';
        document.getElementById("hackter").innerHTML = hackedTerminals;
    } else {
        document.getElementById('percentBattery').innerHTML = battery;
        document.getElementById('usern').innerHTML = userName;
        document.getElementById('screen').style.display = 'none';
        document.getElementById('mainscreen').style.display = '';
        document.getElementById('nobattery').style.display = 'none';
        document.getElementById('terminal1').style.display = 'none';
        document.getElementById('terminal2').style.display = 'none';
        document.getElementById('terminal3').style.display = 'none';
        document.getElementById('terminal4').style.display = 'none';
        document.getElementById("hackter").innerHTML = hackedTerminals;
        await sleep(2000);
        document.getElementById('percentBattery').innerHTML = battery;
        document.getElementById('usern').innerHTML = userName;
        document.getElementById('screen').style.display = 'none';
        document.getElementById('mainscreen').style.display = 'none';
        document.getElementById('nobattery').style.display = '';
        document.getElementById('terminal1').style.display = 'none';
        document.getElementById('terminal2').style.display = 'none';
        document.getElementById('terminal3').style.display = 'none';
        document.getElementById('terminal4').style.display = 'none';
        document.getElementById("hackter").innerHTML = hackedTerminals;
        await sleep(4000);
        document.getElementById("shutdown").style.display = '';
        await sleep(5000);
        window.close();
    }

}

const checkUser = () => {
    while (userName === '') {
        userName = document.getElementById("input1").value;
        if (userName === '') {
            userName = prompt("Please enter a username")
            document.getElementById("input1").value = userName;
        }
    }
    mainscreen();
}

/*---------------------------------------Terminal 1------------------------------------------*/
const terminal1 = () => {
    document.getElementById('screen').style.display = 'none';
    document.getElementById('mainscreen').style.display = 'none';
    document.getElementById('terminal1').style.display = '';
}

const checkPass = () => {
    var pwd = document.getElementById('terminal1text').value;
    if (pwd == "CapitalismDidNothingWrong") {
        document.getElementById("checkpassword").style.display = 'none';
        document.getElementById("passwordcorrect").style.display = '';
        document.getElementById('wrongpass').style.display = 'none';
    } else {
        document.getElementById("passwordcorrect").style.display = 'none';
        document.getElementById('wrongpass').style.display = '';
    }
}
/*------------------------------------------------------Terminal 2 ------------------------------------*/

const terminal2 = () => {
    document.getElementById('screen').style.display = 'none';
    document.getElementById('mainscreen').style.display = 'none';
    document.getElementById('terminal2').style.display = '';
}
const bruteForce = async () => {
    var resultlist = [];
    var correctGuesses = 0;
    while (correctGuesses < 4) {
        var guess = 0;
        guess = Math.floor((Math.random() * 3) + 1);
        switch (guess) {
            case 1:
                correctGuesses += 1;
                resultlist.push("Got " + correctGuesses + "!");
                break;
            case 2:
                correctGuesses = 0;
                resultlist.push("Oh Sh*t .. got caught.. gonna try again");
                break;
            case 3:
                resultlist.push("Processing....");
                break;
        }
    }
    document.getElementById("butBruteForce").style.display = 'none';
    for (var i = 0; i < resultlist.length; i++) {
        document.getElementById("corguess").innerHTML = resultlist[i];
        await sleep(1000);

    }
    await sleep(2000);
    document.getElementById("corguess").innerHTML += " <br>Filling Password: "
    for (var f = 0; f < 4; f++) {
        await sleep(500);
        document.getElementById("corguess").innerHTML += " *";
    }
    await sleep(1000);
    document.getElementById("ter2").style.display = "none";
    document.getElementById("passwordcorrect1").style.display = "";
}

/*-------------------------------------------------Terminal 3------------------------------------------*/
const terminal3 = () => {
    document.getElementById('screen').style.display = 'none';
    document.getElementById('mainscreen').style.display = 'none';
    document.getElementById('terminal3').style.display = '';
    for (i = 0; i < outboundTraffic.length; i++) {
        document.getElementById('decrypted').innerHTML += outboundTraffic[i] + "                 ";
    }
}

const searchForCharacter = async (testsubject, control) => {
    for (var x in testsubject) {
        for (var y in control) {
            if (control[y] == testsubject[x]) {
                passcode += control[y];
                document.getElementById("dec1").style.display = '';
                document.getElementById("deckey").style.display = '';
                document.getElementById('dec1').innerHTML += control[y];
                await sleep(1000);
            }
        }
    }
}

const trashOut = () => {
    document.getElementById("butTrash").style.display = 'none';
    searchForCharacter(outboundTraffic, arrayTestControl);
    /* Just for show off.. ;)  could have done it all here, but felt like  passing arguments */
    pwcorr();
}

const pwcorr = async () => {
    await sleep(9000);
    document.getElementById('ter3').style.display = 'none';
    document.getElementById('passwordcorrect3').style.display = '';
}

/* --------------------------------------------------Terminal 4 --------------------------------*/
const terminal4 = () => {
    document.getElementById('screen').style.display = 'none';
    document.getElementById('mainscreen').style.display = 'none';
    document.getElementById('terminal4').style.display = '';
}

async function findcomb() {
    for (x in passcodes) {
        even = 0;

        for (y in passcodes[x]) {
            if (passcodes[x][y] % 2 == 0) {
                even += 1;
            }
            if (even == 4) {
                var correctPass = passcodes[x];
                var num = x;
            }

        }
        var frase = (x + " - " + passcodes[x] + " This passcode has " + even + " even numbers." + "<br>")
        document.getElementById("arrays").innerHTML += frase;
        document.getElementById('findcorrectcombination').style.display = 'none';
        await sleep(1000);
    }
    var passwd = '';
    for (i in passcodes[num]) {
        passwd += passcodes[num][i].toString();
    }
    await sleep(2000);
    document.getElementById('arrays').innerHTML += ("<br>Found it ! Sub-Array with position " + num + " has the magic number! -->  " + passcodes[num]);
    await sleep(2000);
    document.getElementById('arrays').innerHTML += ("<br><br>So here's your passcode:   " + passwd)
    await sleep(5000);
    document.getElementById('ter4').style.display = 'none';
    document.getElementById('passwordcorrect4').style.display = '';
}

/*----------------------------------------------------Other Stuff-------------------------------*/
function drainBattery() {
    battery -= 25;
    document.getElementById("batt").innerHTML = battery;
    document.getElementById("p1").style.display = 'none';
    document.getElementById("p2").style.display = '';
}

function backtomain1() {
    document.getElementById("button1").disabled = true;
    document.getElementById("button1").innerHTML = "HACKED";
    hackTerminals();
    drainBattery();
    mainscreen();
}

function backtomain2() {
    document.getElementById("button2").disabled = true;
    document.getElementById("button2").innerHTML = "HACKED";
    hackTerminals();
    drainBattery();
    mainscreen();
}

function backtomain3() {
    document.getElementById("button3").disabled = true;
    document.getElementById("button3").innerHTML = "HACKED";
    hackTerminals();
    drainBattery();
    mainscreen();
}

function backtomain4() {
    document.getElementById("button4").disabled = true;
    document.getElementById("button4").innerHTML = "HACKED";
    hackTerminals();
    drainBattery();
    mainscreen();
}

function hackTerminals() {
    hackedTerminals += 1;
    document.getElementById("hackter").innerHTML = hackedTerminals;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
