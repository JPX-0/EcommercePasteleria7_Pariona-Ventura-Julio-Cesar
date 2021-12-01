import CartWidget from "./navbar/CartWidget"
import Hamburguer from "./main/buttons/Hamburguer";
import NavWidget from "./navbar/NavWidget";

const NavBar = () => {
  return (
    <nav className="header__container">
      <NavWidget title="Pasteleria Yuumy" type="Logo"/>
      <ul className="header__menu">
        <NavWidget title="Inicio"/>
        <NavWidget title="Tienda"/>
        <NavWidget title="Ofertas"/>
        <li className="header__list header__list--dropdown">
          <p className="header__title">Categorias</p>
          <ol className="header__category">
            <NavWidget title="Cumpleaño" type="category"/>
            <NavWidget title="Eventos" type="category"/>
            <NavWidget title="Quinceañero" type="category"/>
            <NavWidget title="Romántico" type="category"/>
          </ol>
        </li>
        <CartWidget/>
      </ul>
      <Hamburguer/>
    </nav>
  )};
export default NavBar;