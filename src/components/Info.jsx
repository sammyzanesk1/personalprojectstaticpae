import worklady from "../assets/worklady.jpg";

export default function Info() {
  return (
    <div>
      <section className="section--info">
        <div className="img--container">
          <img className="info--img" src={worklady} />
        </div>
        <div className="info--container">
          <h1 className="info--name">Sammy King </h1>
          <h3 className="info--role">Frontend Developer</h3>
          <h5 className="info--company">SammyZane LLC</h5>
          <button className="btn info--btn">
            <i className="fa-solid fa-envelope"></i> Email
          </button>
        </div>
      </section>
    </div>
  );
}
