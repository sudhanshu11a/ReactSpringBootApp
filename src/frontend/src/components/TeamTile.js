import { React } from 'react';
import { Link } from 'react-router-dom';

import './TeamTile.scss';
export const TeamTile = ({team}) => {


    return (
        <div className="TeamTile">
            <h1>
                    <Link src={team.teamName} to={`/teams/${team.teamName}`}>
                        <img src={`../logo/${team.teamLogo}`} alt={team.teamName} height={200} width={200}/>
                    </Link>
                </h1>
        </div>
    )
}