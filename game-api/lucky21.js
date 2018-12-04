module.exports = (deck, dealer) => {
    dealer.shuffle(deck);
    let card0 = dealer.draw(deck);
    let card1 = dealer.draw(deck);
    let state = {
        deck: deck,
        dealer: dealer,
        cards: [
            card0,
            card1,
        ],
        // The card that the player thinks will exceed 21.
        card: undefined,
    };
    return {
        state: state,
        // Is the game over (true or false).
        isGameOver: (game) => {
            // TODO
        },
        // Has the player won (true or false).
        playerWon: (game) => {
            // TODO
        },
        // The highest score the cards can yield without going over 21 (integer).
        getCardsValue: (game) => {
            let arrOfAces = [];
            let arrOfRest = [];
            parseCard = (card) => {
                return parseInt(card.substr(0,2));
            }

            for (let i = 0 ; i < game.state.cards.length ; i++) {
                let value = parseCard(game.state.cards[i]);
                if (value === 1) {
                    arrOfAces.push(1);
                } else if (value > 10) {
                    arrOfRest.push(10);
                } else {
                    arrOfRest.push(value);
                }
            }

            let maxValueOfAces = 11 + arrOfAces.length - 1;
            let sumOfRest = arrOfRest.reduce((sum, curr) => {
                return sum + curr;
            })

            if (sumOfRest + maxValueOfAces > 21) {
                return sumOfRest + arrOfAces.length;
            } else {
                return sumOfRest + maxValueOfAces;
            }

        },
        // The value of the card that should exceed 21 if it exists (integer or undefined).
        getCardValue: (game) => {
            // TODO
        },

        // The cards value + the card value if it exits (integer).
        getTotal: (game) => {
            // TODO
        },
        // The player's cards (array of strings).
        getCards: (game) => {
            return game.state.cards;
        },
        // The player's card (string or undefined).
        getCard: (game) => {
            return game.state.card;
        },
        // Player action (void).
        guess21OrUnder: (game) => {
            game.state.cards = [...game.state.cards, dealer.draw(game.state.deck)];
        },
        // Player action (void).
        guessOver21: (game) => {
            game.state.card = dealer.draw(game.state.deck);
        },
    };
};