import moment from 'moment';


function ReplyItem ({replyItem}) {



  return (
    <table>
      <tbody>
        <tr className="reply">
          <td className="reply-no">{replyItem.no}</td>
          <td className="reply-author">{replyItem.author}</td>
          <td className="reply-comment">{replyItem.comment}</td>
          <td className="reply-datetime">{moment(replyItem.datetime).format('YYYY-MM-DD HH:mm:ss')}</td>
        </tr>
      </tbody>
    </table>
  )


};


export default ReplyItem;