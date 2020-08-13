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

const makeData = (games,targetTeam)=>{
const olPar = document.createElement("ol");
for(game of games){
  const gameLi = document.createElement("li");
  gameLi.innerHTML = scoreLine(game)
  isWinner(game,targetTeam);
  gameLi.classList.add(isWinner(game,targetTeam) ? "win":"lose");
  olPar.append(gameLi);
}
return olPar;
};

const scoreLine = ({homeTeam,awayTeam}) =>{
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
  return ` ${teamNames} ${score}`;
};

const isWinner = ({homeTeam,awayTeam},targetTeam) => {
  const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
  return target.isWinner;

};

const chart1 = makeData(warGames,"Houston");
const chart2 = makeData(warGames,"Golden State");

document.querySelector("#GS").append(chart2);
document.querySelector("#HO").append(chart1);



