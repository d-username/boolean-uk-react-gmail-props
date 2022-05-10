import Emails from "./emails.js";
import OpenedEmail from "./openedMail.js";

function Main(props) {
  return (
    <main className="emails">
      {props.openedEmail === "" ? (
        <Emails
          filteredEmails={props.filteredEmails}
          toggleRead={props.toggleRead}
          toggleStar={props.toggleStar}
          openMail={props.openMail}
        />
      ) : (
        <OpenedEmail />
      )}
    </main>
  );
}

export default Main;
