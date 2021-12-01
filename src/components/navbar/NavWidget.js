import imgLogo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

const NavWidget = (props) => {
  return (
    <>
      {
        props.type === "Logo" ?
        <Link to="/" className="header__logo">
          <img src={imgLogo} alt={props.title} className="header__logo-img"></img>
          <span className="header__logo-text">{props.title}</span>
        </Link> : 
        <li className="header__list">
          {
            props.title === "Inicio" ?
            <Link to="/" className="header__title">{props.title}</Link> :
            props.type === "category" ?
            <Link to={`/category/${props.title.toLowerCase()}`} className="header__title">{props.title}</Link> :
            <Link to={props.title.toLowerCase()} className="header__title">{props.title}</Link>
          }
        </li>
      }
    </>
  )};
export default NavWidget;