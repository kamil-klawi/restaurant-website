import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';
import alafrancaiseLogo from '../../assets/images/a_la_francaise_logo.png';
import s from './Header.module.scss';
import { useStore } from '../../store/useStore';
import { useEffect, useState } from 'react';

function Header() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1350);
  const cartItems = useStore((state) => state.cartItems);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1350);
  }, []);

  const handleHamurger = () => {
    setOpen(!isOpen);
  };

  const handleLanguage = (language: string) => {
    changeLanguage(language);
    localStorage.setItem('lang', language);
  };

  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <a href="" className={s.nav__logo}>
          <img
            src={alafrancaiseLogo}
            alt="a la francaise logo"
            width={269}
            height={80}
          />
        </a>
        <MenuList />
        <div className={s.nav__lang}>
          <button onClick={() => handleLanguage('en')} className={s.lang__link}>
            en
          </button>
          <span>|</span>
          <button
            onClick={() => handleLanguage('pl')}
            className={`${s.lang__link} ${s.lang__link_active}`}
          >
            pl
          </button>
        </div>
        {isMobile && (
          <button onClick={handleHamurger}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
            </svg>
          </button>
        )}
        <a href="/cart" className={s.nav__cart}>
          <CartIcon />
          &nbsp;
          <span className="font-bold">{cartItems.length}</span>
        </a>
      </nav>
    </header>
  );
}

function MenuList() {
  const path = window.location.pathname.replace('/', '');
  const { t } = useTranslation();
  return (
    <ul className={s.nav__list}>
      <li className={s.nav__item}>
        <a
          href="/"
          className={`${s.nav__link} ${path == '' ? s.nav__link_active : ''}`}
        >
          {t('navigation.header.bonjour')}
        </a>
      </li>
      <li className={s.nav__item}>
        <a
          href="/menu"
          className={`${s.nav__link} ${
            path == 'menu' ? s.nav__link_active : ''
          }`}
        >
          {t('navigation.header.menu')}
        </a>
      </li>
      <li className={s.nav__item}>
        <a
          href="/special_offers"
          className={`${s.nav__link} ${
            path == 'special_offers' ? s.nav__link_active : ''
          }`}
        >
          {t('navigation.header.specialOffer')}
        </a>
      </li>
      <li className={s.nav__item}>
        <a
          href="/store"
          className={`${s.nav__link} ${
            path == 'store' ? s.nav__link_active : ''
          }`}
        >
          {t('navigation.header.store')}
        </a>
      </li>
      <li className={s.nav__item}>
        <a
          href="/contact"
          className={`${s.nav__link} ${
            path == 'contact' ? s.nav__link_active : ''
          }`}
        >
          {t('navigation.header.contact')}
        </a>
      </li>
    </ul>
  );
}

function CartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      />
    </svg>
  );
}

export default Header;
