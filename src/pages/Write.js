import { useState, useRef, Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import axios from 'axios'

import './Write.css'

function Write () {
  const navigate = useNavigate()
  const [author, setAuthor] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  function handleAuthor (event) {  
    setAuthor(event.target.value);
  };
  
  function handlePassword(event) {
    setPassword(event.target.value);
  };

  function handleTitle(event) {
    setTitle(event.target.value);
  }

  function handleContents(event, editor) {
    const data = editor.getData();
    console.log( { event, editor, data } );
    setContents(data)
  }

  async function clickWrite() {

    const { data } = await axios({
      
      method: "POST",
      url: 'http://3.36.234.106:1208/',
      data: {
        title: title,
        contents: contents,
        author: author,
        password: password
      }})
      console.log(contents)
      console.log(data);

      if (data.success) {
        navigate(`/read/${data.insertId}`)
      } else {
        prompt(`${data.error}`)
      };
    };
    
  
  return (
    <div className="Write">
      
      <div className="write-box">
        <div className='line1'>
          <input className='author' type='text' placeholder='아이디' value={author} onChange={handleAuthor}></input>
          <input className='password' type='password' placeholder="비밀번호" value={password} onChange={handlePassword}></input>
        </div>
        <div className='line2'>
          <input className='title' type='text' placeholder="제목" value={title} onChange={handleTitle}></input>
        </div>
        <div id='editor'>
        <CKEditor
          editor={ ClassicEditor }
          value={contents}
          onChange={handleContents}
        />
        </div>
      </div>
      <div className="write-button">
        <button className="write-button" onClick={clickWrite}>작성하기</button>
      </div>
    </div>
  )
}


export default Write;