import worklady from "../assets/worklady.jpg";
import { MdEmail } from "react-icons/md";
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
          <button className="btn mail--btn">
            <MdEmail size="1.4em" className="mail--icon" />
            <span className="mail--text">Email</span>
          </button>
        </div>
      </section>
    </div>
  );
}
