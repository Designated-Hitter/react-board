import { Routes, Route } from 'react-router-dom'

import List from './List.js';
import Write from './Write.js'
import Read from './Read.js';
import Update from './Update.js';

function Main () {

  return (
    <div className="Main">
      <label>메인</label>
      <Routes>
        <Route path='/' element={ <List /> } />
        <Route path='/write' element={ <Write /> } />
        <Route path='/read/:no' element={ <Read /> } />
        <Route path='/update' element={ <Update /> } />
      </Routes>
    </div>
  )


};




export default Main;