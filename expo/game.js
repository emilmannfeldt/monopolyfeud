import { Game } from 'boardgame.io/core';
import { fire } from './base';

function IsVictory(cells) {
  const positions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let pos of positions) {
    const symbol = cells[pos[0]];
    let winner = symbol;
    for (let i of pos) {
      if (cells[i] != symbol) {
        winner = null;
        break;
      }
    }
    if (winner != null) return true;
  }

  return false;
}

//fixa board.js så att något visuelt visas på de index rutorna spelarna är på. Fix sen en knapp som kör moves.walk().
//hur styr jag gtx vems tur det är osv? movesperturn=xxx? endTurn()? hur confar jag ctx??

//nästasteg:
//spara ner G och ctx till firebase under ett gametable. räcker det med att spara vid varje endturn? eller varje gång G ändras?
//skapa authenticering och inloggning. 
//firebase har ett table för games och ett för användare. under användare ser man vilka games användaren är delaktig i och den kan då välja att kolla på det.
//användarid/uid för spelarna måste sparas under G. då kan jag se vems tur det är. skicka notifikationer. 

//spelmässigt är nästa steg att ta in pengar, och gå förbi gå. rita upp alla squares. 
const Monopoly = Game({
  name: 'tic-tac-toe',
  numPlayers: 2,
  setup: () => ({
    players: [{
      position: 0,
      visualPosition: 0,
      piece: "bil",
    }, {
      position: 0,
      visualPosition: 0, 
      piece: "båt",
    }
    ],
    squares: [
      { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" }, { text: "sqr1" },
    ]
  }),

  moves: {
    clickCell(G, ctx, id) {
      const cells = [...G.cells];

      if (cells[id] === null) {
        cells[id] = ctx.currentPlayer;
      }

      return { ...G, cells };
    },
    walk(G, ctx, roll) {
      let steps = 0;
      for (let i = 0; i < roll.length; i++) {
        steps = steps + roll[i];
      }
      let nextG = G;
      nextG.players[ctx.currentPlayer].position = (nextG.players[ctx.currentPlayer].position + steps) % 40;
      if (!nextG.die) {
        nextG.die = [];
      }
      nextG.die.push(roll);
      nextG.hasMoved = roll[0] !== roll[1];
      return nextG;
    },
    updateVisualPos(G, ctx) {
      let nextG = G;
      nextG.players[ctx.currentPlayer].visualPosition = (nextG.players[ctx.currentPlayer].visualPosition + 1) % 40;
      return nextG;

    },
    endTurn(G, ctx) {
      let nextG = G;
      nextG.die = null;
      nextG.hasMoved = false;
      ctx.events.endTurn();
      return nextG;

    }
  },

  flow: {

  },
});

export default Monopoly;