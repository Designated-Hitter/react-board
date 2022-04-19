import {useNavigate} from 'react-router-dom';


import './Item.css';

function Item ({item, setList, list}) {
  const navigate = useNavigate();
  function goRead () {
    
    navigate (`/read/${item.no}`);

  };

  return (
    <tbody>
      <tr className="Item" onClick={goRead}>
        <td className="no">{item.no}</td>
        <td className="title">{item.title}</td>
        <td className="author">{item.author}</td>
        <td className="contents">{item.contents}</td>
        <td className="datetime">{item.datetime}</td>
        
      </tr>
    </tbody>
  );


};


export default Item;