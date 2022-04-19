import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser';
// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import moment from 'moment';
import axios from 'axios';
import ReplyList from './ReplyList.js';
import './Read.css'


function Read () {
  const params = useParams();
  const [document, setDocument] = useState({});
  
  
  const no = Number(params.no ?? 1);

  useEffect(() => {
    (async () => {
      const { data } = await axios({
        method: 'GET',
        url: `http://3.36.234.106:1208/${no}`   
      })
      
      setDocument(data.document);

    })()
  }, []);


  // class HtmlComponent extends React.Component {
  //   render() { 
  //     const html = document.contents
     
      return (
        <div className='Read'>
          <div className='title'>{document.title}</div>
          <div className='author'>{document.author}</div>
          <div className='contents'> {document.contents ? parse(document.contents): '' }</div> 
          <div className='datetime'>{moment(document.datetime).format('YYYY-MM-DD HH:mm:ss')}</div>
          <ReplyList no={no} replyList={document.reply} document={document} setDocument={setDocument} />
          
        </div>
      
      );
   

}

export default Read;