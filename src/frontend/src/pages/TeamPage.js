import {React, useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import {MatchDetailsCard} from '../components/MatchDetailsCard';
import {MatchSmallCard} from '../components/MatchSmallCard';
import { PieChart } from 'react-minimal-pie-chart';
import './TeamPage.scss';

export const TeamPage =  () => {

  const [team, setTeam] = useState({matchList: []});
  const {teamName} = useParams();
  useEffect(
    () => {
      const fetchMatch = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}`);
        const data = await response.json();
        setTeam(data);
      };
      fetchMatch();
    }, [teamName]
  );


  if(!team || !team.teamName){
    return "<h1>Team Not Found </h1>"
  }
  return (
    <div className="TeamPage">
    <div className="team-name-section">
        <h1 className="team-name">{team.teamName}</h1>
    </div>
    <div className="win-loss-section">
        Wins / Losses
        <PieChart
            data={[
                { title: 'Losses', value: team.totalMatches - team.totalWins, color: '#a34d5d' },
                { title: 'Wins', value: team.totalWins, color: '#4da375' },
            ]}
            />
    </div>
    <div className="match-detail-section">
        <h3>Latest Matches</h3>
        <MatchDetailsCard teamName={team.teamName} match={team.matchList[0]}/>
    </div>
    {team.matchList.slice(1).map(match => <MatchSmallCard key={match.id} teamName={team.teamName} match={match} />)}
    <div className="more-link">
    <Link to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}>More </Link>
    </div>
    </div>
  );
}
