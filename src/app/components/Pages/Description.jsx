import React, { useState } from 'react'
import Logo from './../../assets/logo.png'
import { Requisite } from '../Pages/Requisite'

export const Description = () => {

    let [isRequisitePages, setIsRequisitePage] = useState(false);
    const RequisitePages = () => {
        setIsRequisitePage(!isRequisitePages)
    }

    console.log(isRequisitePages)

    return (
        <section className='description'>
            <div>
                <div className='description__title'>
                    <h2>Описание компании</h2>
                </div>
                <div className='description__container'>
                    <img className='description__container--logo' src={Logo} alt='logo' />
                    <div className='description__container--description'>
                        <p >О Компании
                        ООО “СИБЭНЕРГОГАЗ” - Официальный поставщик ведущих заводов-производителей оборудования для инфраструктурных
                    и промышленных объектов: вода, нефть, газ и другие сферы промышленности.</p>
                        <h2 className='description__title'>Направления деятельности:</h2>
                        <p >• НЕФТЬ И ГАЗ:<br />- линейные магистральные сети,<br />- компрессорные станции,<br />
                    - НПЗ,<br />- газораспределительные станции,
                    <br />- хранилища газа,<br />- установки по перекачке сжиженных газов, <br />• ТЕПЛОВЫЕ СЕТИ <br /> • ТЕПЛОВЫЕ И ПАРОВЫЕ ЭЛЕКТРОСТАНЦИИ <br />
                    • ВОДОКАНАЛИЗАЦИОННЫЕ наружные СЕТИ <br /> • СТАНЦИИ ВОДОПОДГОТОВКИ <br /> • Другие сферы промышленности</p>
                    Мы предлагаем<br /> полный комплекс услуг по подбору,<br /> комплектации, сопровождению.<br />
                        <h2 className='description__title'>География деятельности</h2>
                        <p> Наша компания работает на всей территории Российской Федерации.<br /></p>
                        <h2 className='description__title'>Доставка</h2><p> Широкая география деятельности нашей компании обязывает нас сотрудничать со многими транспортными компаниями.</p>
                    Наши специалисты всегда помогут произвести расчет стоимости доставки груза, оформить заявку и предоставят данные для отслеживания груза.
                    <h2 className='description__title'>Качество и гарантия</h2>
                        <p> На правах официального дилера ООО «СИБЭНЕРГОГАЗ» несет все гарантийные обязательства в соответствии<br />
                    с договоренностями и официальной документацией завода-изготовителя.
                    Оцените положительный результат в сотрудничестве с нашей компанией!</p>
                    </div>
                </div>
                <div>
                    <button onClick={RequisitePages} className='description__button'>Реквизиты</button>
                </div>
            </div>
            <div>
                {isRequisitePages ? (<div className='requisite'><Requisite /></div>) : <> </>}
            </div>

            <div className='description__line'>
                <hr />
            </div>


            <div className='description__chief'>
                <h2 className='description__chief--title'>Наши партнеры</h2>
                <div className='description__chief--container'>
                    <img className='description__chief--container-photo' src='https://polymus.ru/media/cache/dc/70/dc70224031a4ad5d8f0a5ced566cd87a.jpg' alt='boss' />
                    <p>Имя фамилия (приходит из state)</p>
                </div>
            </div>

        </section>
    )
}