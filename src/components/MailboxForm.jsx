import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = (props) => {

  const navigate = useNavigate();

  const [mailbox, setMailbox] = useState({
    _id: props.mailboxeId + 1,
    boxSize: "",
    boxholder: "",
  });

  const handleChange = (event) => {
    setMailbox({
      ...mailbox,
      [event.target.className]: event.target.value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    props.addBox(mailbox);
    navigate("/mailboxes");
  }

  return (
    <>
      <h1>New Mailbox</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="boxholder">Enter a Boxholder:</label>
        <input
          className="boxholder"
          type="text"
          id="boxholder"
          placeholder="Boxholder name"
          onChange={handleChange}
        />
        <label htmlFor="boxSize" id="boxSize">
          Select a Box Size:
        </label>
        <select onChange={handleChange} className="boxSize" id="boxSize">
          <option value="">--Please choose an option--</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MailboxForm;