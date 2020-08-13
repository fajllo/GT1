const warGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]
//
const olPar = document.createElement("ol");

for(game of warGames){
  const {homeTeam, awayTeam} = game;
  const gameLi = document.createElement("li");
  const {team:hTeam, points:hPoints} = homeTeam;
  const {team:aTeam, points:aPoints} = awayTeam;

  const teamNames = `${hTeam} VS ${aTeam}`;
  let score;
  if(aPoints > hPoints){
     score = `${hPoints} - <b>${aPoints}</b>`;

  }
  else{
     score = `<b>${hPoints}</b> - ${aPoints}`;
  }
  const winner = hTeam === "Golden State" ? homeTeam : awayTeam;
  gameLi.classList.add(winner.isWinner ? "win":"lose");
  gameLi.innerHTML = ` ${teamNames} ${score}`

  olPar.append(gameLi);
 
}



document.body.prepend(olPar);