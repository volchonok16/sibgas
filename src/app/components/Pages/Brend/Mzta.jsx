import React from 'react'

export const Mzta = () => {
    return (
        <section className='brends'>
            <h2 className='brends__title'>МЗТА</h2>
            <div className='brends__container'>
                <img className='brends__container--logo' src={require('./../../../assets/mzta.jpg')} alt='Mzta' />
                <p className='brends__container--description'>Описание компании и все такое </p>
            </div>
        </section>
    )
}
