import { useState } from 'react';

import axios from 'axios';



function ReplyWrite ({no, document, setDocument}) {

  const [replyAuthor, setReplyAuthor] = useState('');
  const [replyPassword, setReplyPassword] = useState('');
  const [replyContents, setReplyContents] = useState('');

  function handleReplyAuthor (event) {  
    setReplyAuthor(event.target.value);
  };

  function handleReplyPassword(event) {
    setReplyPassword(event.target.value);
  };

  function handleReplyContents(event) {
    setReplyContents(event.target.value);
  }

  async function goWriteReply () {
    const { data } = await axios({
      
      method: "POST",
      url: `http://3.36.234.106:1208/${no}`,
      data: {
        comment: replyContents,
        author: replyAuthor,
        password: replyPassword
      }})

      if (data.success) {
        setReplyAuthor('');
        setReplyPassword('');
        setReplyContents('');
        setDocument({...document, reply: data.reply});
      }


  }

  return(
    <div className='writeReply'>
      <input className='replyAuthor' type="text" value={replyAuthor} onChange={handleReplyAuthor}></input>
      <input className='replyPassword' type="password" value={replyPassword} onChange={handleReplyPassword}></input>
      <input className='replyContents' type="text" value={replyContents} onChange={handleReplyContents}></input>
      <button className="writeReply" onClick={goWriteReply}>댓글쓰기</button>
    </div>
  )
}
export default ReplyWrite