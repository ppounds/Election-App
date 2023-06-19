import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Candidates from "./candidates";
import Dashboard from "./Dashboard";
import Voters from "./voters";
import AddVoter from './voters/add';
import VoterList from './voters/list';
import AddCandidate from './candidates/add';
import CandidateList from './candidates/list';
import Positions from './positions';
import AddPositions from './positions/add';
import PositionsList from './positions/list';
export const MainApp = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route index element={<Dashboard />} />

                <Route path="voters" element={<Voters />} >
                    <Route path="add" element={<AddVoter />} />
                    <Route path="list" element={<VoterList />} />
                </Route>

                <Route path="candidates" element={<Candidates />} > 
                    <Route path='add' element={<AddCandidate />}/>
                    <Route path='list' element={<CandidateList/>}/>
                </Route>

                <Route path='positions' element={<Positions />}>
                    <Route path='add' element={<AddPositions />}/>
                    <Route path='list' element={<PositionsList/>}/>
                </Route>
                
            </Routes>
        </div>
    );
};

export default MainApp