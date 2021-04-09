import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export const Navigator = () => {

    let [isOpenProductPages, setIsOpenProductPages] = useState(false);
    const onClickOpenProductPages = () => {
        setIsOpenProductPages(!isOpenProductPages)
    }
    console.log(isOpenProductPages)

    return (
        <nav className="nav">
            <Link to={'/'} className="nav__logo"></Link>
            <div className="nav__link-container">
                <Link className="nav__link nav__main-link" to="/">
                    Главная
        </Link>
                <Link onMouseOver={onClickOpenProductPages} onMouseLeave={onClickOpenProductPages} className="nav__link nav__product-link" to="/product">
                    Продукция
        </Link>
                <Link className="nav__link nav__about-link " to="/description">
                    О компании
        </Link>
                <Link className="nav__link nav__about-link " to="/contacts">
                    Контакты
        </Link>
            </div>
            <div className='nav__description'>
                <div>
                    <a href="tel:+79831233314"> +7(983)123-33-14</a>
                    <p className='nav__description--adress' >ул. Станционная 2А <br /> Новосибирск</p>
                </div>
                <div className='nav__description--mail'>
                    <a href="mailto:info@seg-nsk.ru">info@seg-nsk.ru</a>
                    <p className='nav__description--mail-hours'>Пн - Пт <br /> с 9:00 до 18:00</p>
                </div>
            </div>


            {isOpenProductPages ? (
                <div className='nav__over'>
                    <p>KEKWNj uhsachj</p>
                    <p>KEKWNj uhsachj</p>
                    <p>KEKWNj uhsachj</p>
                    <p>KEKWNj uhsachj</p>
                    <p>KEKWNj uhsachj</p>
                    <p>KEKWNj uhsachj</p>
                </div>) : (<></>)}

        </nav>
    );
};
