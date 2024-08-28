import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import MailboxForm from "./components/MailboxForm";
import MailboxList from "./components/MailboxList";
import MailboxDetails from "./components/MailboxDetails";


const App = () => {
  const [mailboxes, setMailboxes] = useState([]);


  const addBox = (newMailbox) => {
    setMailboxes([...mailboxes, newMailbox]);
  };

  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route
          path="/new-mailbox"
          element={
            <MailboxForm mailboxeId={mailboxes.length} addBox={addBox} />
          }
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
      </Routes>
    </>
  );
};

export default App;
