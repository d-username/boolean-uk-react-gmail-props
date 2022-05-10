import Emails from "./emails.js";

function Main(props) {
  return (
    <main className="emails">
      <Emails
        filteredEmails={props.filteredEmails}
        toggleRead={props.toggleRead}
        toggleStar={props.toggleStar}
      />
    </main>
  );
}

export default Main;
