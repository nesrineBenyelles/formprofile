import React from 'react'
import logoWhite from './logoWhite.png'
export default function NavCompte() {
  return (
    <nav className="navbarCompte">
    <img src={logoWhite} className='logo'></img>

      <ul className="navbar__menu">
        <li className="navbarCompte__item">
          <a className="navbarCompte__link" href="#">
            Accueil
          </a>
        </li>
        <li className="navbarCompte__item">
          <a className="navbarCompte__link" href="#">
            Votre Compte
          </a>
        </li>
        <li className="navbarCompte__item sousmenu">
          <a className="navbarCompte__link" href="#">
           Vos Dossiers
          </a>
          <ul class="navbar__sousmenu">
             <li class="navbarCompte__itemsousmenu"><a class="navbarCompte__linksousmenu" href="#">Vos Dossiers</a></li>
             <li class="navbarCompte__itemsousmenu"><a class="navbarCompte__linksousmenu" href="#">Ouvrir un nouveau dossier</a></li>
    </ul>
        </li>
        <li className="navbarCompte__item">
          <a className="navbarCompte__link" href="#">
            Nous contacter
          </a>
        </li>
      </ul>
    </nav>
  )
}
