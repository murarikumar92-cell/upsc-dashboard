import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Leaderboard from './pages/Leaderboard';
import QuizPlay from './pages/QuizPlay';
function App(){return (<Router><Routes><Route path='/' element={<Leaderboard/>}/><Route path='/play' element={<QuizPlay/>}/></Routes></Router>);}
export default App;