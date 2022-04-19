import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Item from './Item.js';

import './List.css'


function List () {
  const [list, setList] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { data } = await axios({
        method: 'GET',
        url: 'http://3.36.234.106:1208'
      }) 

      setList(data.list)
    })()
  }, [])

  function goWrite() {
    Navigate(`/write`)
  } 

  return (
    <div className="List">
      <table className="List">
        {list.map((o) => { return (<Item item={o} key={o.no} /> )})}
      </table>
  
      <button className="goWrite" onClick={goWrite}>글쓰기</button>
    </div>
  )
};

export default List;