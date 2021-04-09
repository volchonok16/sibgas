import React from 'react'

export const Lmz = () => {
    return (
        <section className='brends'>
            <h2 className='brends__title'>ОАО Лмз</h2>
            <div className='brends__container'>
                <img className='brends__container--logo' src={require('./../../../assets/lmz.jpg')} alt='lmz' />
                <p className='brends__container--description'>Описание компании и все такое </p>
            </div>
        </section>
    )
}
