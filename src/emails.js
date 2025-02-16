import Email from "./email.js";

function Emails(props) {
  return (
    <ul>
      {props.filteredEmails.map((email, index) => (
        <Email
          email={email}
          index={index}
          toggleRead={props.toggleRead}
          toggleStar={props.toggleStar}
          setOpenedEmail={props.setOpenedEmail}
        />
      ))}
    </ul>
  );
}

export default Emails;
