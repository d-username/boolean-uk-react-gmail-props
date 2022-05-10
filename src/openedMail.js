function OpenedMail() {
  return (
    <article className="email-content">
      {/* email title */}
      <div className="title">
        <h1>Welcome to Flaticon</h1>
      </div>
      {/* email header */}
      <header className="email-content--header">
        <div className="avatar"></div>
        <div className="email-info">
          <div className="sender-info">
            <h2>Freepik Company</h2>
            <em>&lt;no-reply@freepik.com&gt;</em>
          </div>
          <div className="user-info">
            <p>
              to me <em>&lt;nicolas@boolean.co.uk&gt;</em>
            </p>
          </div>
        </div>
        <div className="date-info">
          <p>17 March 2021, 09:33</p>
        </div>
        <div className="email-action-icons">
          {/* <ul>
            <li>
              <img className="icon" src={backArrow} alt="reply button" />
            </li>
            <li>
              <img className="icon" src={rateStarButton} alt="star button" />
            </li>
            <li>
              <img className="icon" src={rubbishButton} alt="delete button" />
            </li>
          </ul> */}
        </div>
      </header>
      {/* email body */}
      <section className="email-body">
        <div className="content">
          {/* <img src={flaticonWelcomeImage} alt="Flaticon welcome message" /> */}
          <h1>Successfully opened this email.</h1>
          <p>Hello Hello..........</p>
        </div>
      </section>
      {/* email actions */}
      <section className="email-actions">
        <button>Reply</button>
        <button>Forward</button>
      </section>
    </article>
  );
}

export default OpenedMail;
