import {React, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {MatchDetailsCard} from '../components/MatchDetailsCard';
import { YearSelector } from '../components/YearSelector';
import './MatchPage.scss';

export const MatchPage =  () => {

  const [matches, setMatches] = useState([]);
  const {teamName, year} = useParams();
  useEffect(
    () => {
      const fetchMatches = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches?year=${year}`);
        const data = await response.json();
        setMatches(data);
      };
      fetchMatches();
    }, [teamName, year]
  );

  return (
    <div className="MatchPage">
    <div className="year-selector">
        <h3> Select Year </h3>
        <YearSelector teamName={teamName} />
    </div>
    <div>
        
        <h1 className="page-heading">{teamName} matches in {year}</h1>
        {
            matches?
            matches.map(match => <MatchDetailsCard key={match.id} teamName={teamName} match={match} />)
            :"Match not Found"
        }
    </div>

</div>
  );
}
