// function copyCode(text) {
//     var copyText = document.getElementsByClassName('hexcode');

//     // select text field
//     copyText.select();
//     copyText.setSelectionRange(0, 99999);

//     navigator.clipboard.writeText(copyText.innerText);
//     alert("Hex code copied!")
// }

function generatePallete() {
    const hex1 = document.getElementById('hexcode1');
    const hex2 = document.getElementById('hexcode2');
    const hex3 = document.getElementById('hexcode3');
    const hex4 = document.getElementById('hexcode4');
    const hex5 = document.getElementById('hexcode5');
    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');
    const card3 = document.getElementById('card3');
    const card4 = document.getElementById('card4');
    const card5 = document.getElementById('card5');

    const letters = ['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9'];
    
    let length = letters.length;

    let randomCode1 = "";
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * length);
        randomCode1 += letters[randomIndex];
        hexCode1 = "#" + randomCode1
    }

    let randomCode2 = "";
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * length);
        randomCode2 += letters[randomIndex];
        hexCode2 = "#" + randomCode2
    }

    let randomCode3 = "";
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * length);
        randomCode3 += letters[randomIndex];
        hexCode3 = "#" + randomCode3
    }

    let randomCode4 = "";
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * length);
        randomCode4 += letters[randomIndex];
        hexCode4 = "#" + randomCode4
    }

    let randomCode5 = "";
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * length);
        randomCode5 += letters[randomIndex];
        hexCode5 = "#" + randomCode5
    }

    hex1.innerHTML = hexCode1;
    hex2.innerHTML = hexCode2;
    hex3.innerHTML = hexCode3;
    hex4.innerHTML = hexCode4;
    hex5.innerHTML = hexCode5;

    card1.style.backgroundColor = hexCode1;
    card2.style.backgroundColor = hexCode2;
    card3.style.backgroundColor = hexCode3;
    card4.style.backgroundColor = hexCode4;
    card5.style.backgroundColor = hexCode5;

}