import Emails from "./emails.js";
import OpenedEmail from "./openedMail.js";
import { useState } from "react";

function Main(props) {
  const [openedEmail, setOpenedEmail] = useState("");

  return (
    <main className="emails">
      {openedEmail === "" ? (
        <Emails
          filteredEmails={props.filteredEmails}
          toggleRead={props.toggleRead}
          toggleStar={props.toggleStar}
          setOpenedEmail={setOpenedEmail}
        />
      ) : (
        <OpenedEmail
          openedEmail={openedEmail}
          setOpenedEmail={setOpenedEmail}
        />
      )}
    </main>
  );
}

export default Main;
