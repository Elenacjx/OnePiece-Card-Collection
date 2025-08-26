const cardInfo = document.getElementByClassName("card");

const cardDetails = [{
    "card name": "Tashigi (SP) - Legacy of the Master (OP12)",
    price: 95,
    "set name": "Legacy of the master",
    "card number": "OP06-050",
    color: "Blue",
    rarity: "SP",
    type: "Navy",
    cost:1,
    power: 2000,
    attribute: "Slash",
    "product details": "[On Play] Look at 5 cards from the top of your deck; reveal up to 1 'Navy' type card other than [Tashigi] and add it to your hand. Then, place the rest at the bottom of your deck in any order."

},
{
    "card name": "Sanji (070) (Alternate Art) - Legacy of the Master (OP12)",
    price: 15,
    "set name": "Legacy of the master",
    "card number": "OP12-070",
    color: "Purple",
    rarity: "R",
    type: "Character",
    cost:3,
    power: 5000,
    attribute: "Strike",
    "product details": "This Character gains +1000 power for every 5 Events in your trash. If this Character would be removed from the field by your opponent's effect, you may return 1 DON!! card from your field to your DON!! deck instead."
},
{
    "card name": "Koala (086) (Alternate Art) - Legacy of the Master (OP12)",
    price: 15,
    "set name": "Legacy of the master",
    "card number": "OP12-086",
    color: "Black",
    rarity: "R",
    type: "Character",
    cost: 1,
    power: 2000,
    attribute: "Strike",
    "product details": "[On Play] If your Leader has the 'Revolutionary Army' type, look at 3 cards from the top of your deck; reveal up to 1 'Revolutionary Army' type card other than [Koala] or up to 1 [Nico Robin] and add it to your hand. Then, trash the rest."
},
{
    "card name": "Roronoa Zoro (113) - Legacy of the Master Release Event Cards (OP12 RE)",
    price: 5,
    "set name": "Legacy of the master",
    "card number": "OP12-113",
    color: "Yellow",
    rarity: "UC",
    type: "Character",
    cost:5,
    power: 6000,
    "counter+": 1000,
    attribute: "Strike",
    "product details": "[On K.O.] If your Leader has the 'Supernovas' type, play up to 1 'Supernovas' type Character card with a cost of 4 or less from your hand rested.[Trigger] K.O. up to 1 of your opponent's Characters with a cost of 1 or less and add this card to your hand."
}
];

const getDetail = (id) => {
    if (id === cardDetails[id]){
        console.table(cardDetails[id]);
    }
}