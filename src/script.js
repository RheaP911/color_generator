function generateColors() {
    const hexElements = [
        document.getElementById('hexcode1'),
        document.getElementById('hexcode2'),
        document.getElementById('hexcode3'),
        document.getElementById('hexcode4'),
        document.getElementById('hexcode5')
    ];
    const cards = [
        document.getElementById('card1'),
        document.getElementById('card2'),
        document.getElementById('card3'),
        document.getElementById('card4'),
        document.getElementById('card5')
    ];

    const letters = 'ABCDEF0123456789';

    function generateHex() {
        let hex = "#";
        for (let i = 0; i < 6; i++) {
            hex += letters[Math.floor(Math.random() * letters.length)];
        }
        return hex;
    }

    let hexCodes = hexElements.map(() => generateHex());
    hexElements.forEach((el, i) => {
        el.innerText = hexCodes[i];
        cards[i].style.backgroundColor = hexCodes[i];
    });

    cards.forEach((card, index) => {
        card.replaceWith(card.cloneNode(true)); 
        let newCard = document.getElementById(`card${index + 1}`);
        
        newCard.addEventListener("click", () => {
            navigator.clipboard.writeText(hexCodes[index]).then(() => {
                alert(`Hex code ${hexCodes[index]} copied to clipboard!`);
            }).catch(err => {
                console.error("Failed to copy text", err);
            });
        });
    });
}
