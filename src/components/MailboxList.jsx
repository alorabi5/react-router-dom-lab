import { Link } from "react-router-dom";

const MailboxList = (props) => {
  
  const mailList = props.mailboxes.map((mailboxe, idx) => (
    <Link key={idx} to={`/mailboxes/${mailboxe._id}`}>
      <li>Mailbox {mailboxe._id}</li>
    </Link>
  ));
  
  return (
    <>
      <h2>Mailbox List</h2>
      <ul>{mailList}</ul>
    </>
  );
};

export default MailboxList;