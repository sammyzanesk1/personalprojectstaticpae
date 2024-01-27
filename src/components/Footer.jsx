import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <span className="footer--icons">
          <FaGithubSquare color="white" size="2.3rem" />
        </span>
        <span className="footer--icons">
          <FaInstagramSquare color="white" size="2.3rem" />
        </span>
        <span className="footer--icons">
          <FaLinkedin color="white" size="2.3rem" />
        </span>
        <span className="footer--icons">
          <FaSquareFacebook color="white" size="2.3rem" />
        </span>
        <span className="footer--icons">
          <FaSquareXTwitter color="white" size="2.3rem" />
        </span>
      </div>
    </footer>
  );
}
