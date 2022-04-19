
import ReplyItem from './ReplyItem';
import ReplyWrite from './ReplyWrite'

function ReplyList ({ no, replyList, document, setDocument }) {
  

  const number = Number(no);
  return (
    <div className="ReplyList">
      {replyList?.map((o) => { return (<ReplyItem replyItem={o} key={o.no}/>)})}
      <ReplyWrite no={number} document={document} setDocument={setDocument}/>
    </div>
  );


};


export default ReplyList;