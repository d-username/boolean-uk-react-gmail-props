function OpenedMail(props) {
  return (
    <article>
      <div>
        <h1>You seccussfully opened the email.</h1>
      </div>

      <header>
        <div>
          <div>
            <h2>{props.openedEmail.title}</h2>
            <em>{props.openedEmail.sender}</em>
          </div>
          <div>
            <p>
              to me <em>my_address@email.com</em>
            </p>
          </div>
        </div>
        <div>
          <p>10 May 2022, 18:30</p>
        </div>
      </header>

      <section>
        <button onClick={() => props.setOpenedEmail("")}>Back to emails</button>
      </section>
    </article>
  );
}

export default OpenedMail;
