import React from 'react'

export const Kvant = () => {
    return (
        <section className='brends'>
            <h2 className='brends__title'>KVANT</h2>
            <div className='brends__container'>
                <img className='brends__container--logo' src={require('./../../../assets/kvant.jpg')} alt='kvant' />
                <p className='brends__container--description'>Описание компании и все такое </p>
            </div>
        </section>
    )
}
