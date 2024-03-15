import { useEffect, useState } from 'react';
import { Bowler } from '../types/Bowler';
import { Team } from '../types/Team';

function BowlerList() {
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);
  const [teamData, setTeamData] = useState<Team[]>([]);

  useEffect(() => {
    const fetchBowlerData = async () => {
      const rsp = await fetch('http://localhost:5296/Bowler/Bowler');
      const b = await rsp.json();
      setBowlerData(b);
    };
    fetchBowlerData();
  }, []);

  useEffect(() => {
    const fetchTeamData = async () => {
      const Trsp = await fetch('http://localhost:5296/Bowler/Team');
      const t = await Trsp.json();
      setTeamData(t);
    };
    fetchTeamData();
  }, []);

  const filteredBowlerData = bowlerData.filter((b) => {
    const teamName = teamData.find(
      (team) => team.teamID === b.teamID,
    )?.teamName;
    return teamName === 'Marlins' || teamName === 'Sharks';
  });

  return (
    <>
      <div className="row">
        <h4 className="text-center">
          This page is about bowlers and what team they play for.
        </h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredBowlerData.map((b) => (
            <tr key={b.bowlerID}>
              <td>
                {b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}
              </td>
              <td>
                {teamData.find((team) => team.teamID === b.teamID)?.teamName}
              </td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
