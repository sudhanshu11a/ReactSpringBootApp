import {React} from 'react';
import {Link} from 'react-router-dom';
import './MatchSmallCard.scss';

export const MatchSmallCard =  ({teamName, match}) => {
  if(!match) return null;
  const otherTeam = match.team1===teamName? match.team2: match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  const isMatchWon = teamName === match.winner;
  return (
    <div className={isMatchWon ? 'MatchSmallCard won-card' : 'MatchSmallCard lost-card'}>
     <h3>vs <Link to={otherTeamRoute}>{otherTeam}</Link></h3>
     <p>{match.winner} won by {match.resultMargin} {match.result}</p>
    </div>
  );
}
