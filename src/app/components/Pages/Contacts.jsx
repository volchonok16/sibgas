import React from 'react';


export const Contacts = () => {
    return (
        <section className='contacts'>

            <div className='contacts__title'>
                <h2>Контакты ООО "СИБЭНЕРГОГАЗ"</h2>
            </div>
            <div className='contacts__description'>
                <div className='contacts__description--des'>
                    <p>&#8226; 630032, г.Новосибирск, ул. Станционная 2А </p>
                </div>
                <div className='contacts__description--des'>
                    <p> &#8226; Телефон:</p>
                    <a href="tel:+79831233314">+7(983)123-33-14</a>
                </div>
                <div className='contacts__description--des'>
                    <p>&#8226; Email: </p>
                    <a href="mailto:info@seg-nsk.ru">info@seg-nsk.ru</a>
                </div>
            </div>
            <div className='contacts__line' >
            <hr />
            </div>


            <div className='contacts'>
                <h2 className='contacts__container--description'>Наше местонахождение</h2>
                <iframe className='contacts__container--map' title='Наше местонахождение' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2288.5657686118275!2d82.
                8783969511713!3d54.99824698026189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42dfe
                6bf26c79d29%3A0xa3016da390709425!2z0YPQuy4g0KHRgtCw0L3RhtC40L7QvdC90LDRjywgMtCQLCDQndC-0LLQv
                tGB0LjQsdC40YDRgdC6LCDQndC-0LLQvtGB0LjQsdC40YDRgdC60LDRjyDQvtCx0LsuLCA2MzAwMzI!5e0!3m2!1sru!2sru!4v1614455768703!5m2!1sru!2sru"
                    width="1440" height="593"></iframe>
            </div>
        </section>
    )
}