function generateColors() {
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

    function generateHex() {
        let hex = "#";
        for (let i = 0; i < 6; i++) {
            let randomIndex = Math.floor(Math.random() * length);
            hex += letters[randomIndex];
        }
        return hex;
    }

    let hexCode1 = generateHex();
    let hexCode2 = generateHex();
    let hexCode3 = generateHex();
    let hexCode4 = generateHex();
    let hexCode5 = generateHex();



    hex1.innerText = hexCode1;
    hex2.innerText = hexCode2;
    hex3.innerText = hexCode3;
    hex4.innerText = hexCode4;
    hex5.innerText = hexCode5;

    card1.style.backgroundColor = hexCode1;
    card2.style.backgroundColor = hexCode2;
    card3.style.backgroundColor = hexCode3;
    card4.style.backgroundColor = hexCode4;
    card5.style.backgroundColor = hexCode5;

    // Add click event to copy hex code
    function addCopyListener(card, hexCode) {
        card.addEventListener("click", () => {
            navigator.clipboard.writeText(hexCode).then(() => {
                alert(`Hex code ${hexCode} copied to clipboard!`);
            }).catch(err => {
                console.error("Failed to copy text", err);
            });
        });
    }

    addCopyListener(card1, hexCode1);
    addCopyListener(card2, hexCode2);
    addCopyListener(card3, hexCode3);
    addCopyListener(card4, hexCode4);
    addCopyListener(card5, hexCode5);
}
