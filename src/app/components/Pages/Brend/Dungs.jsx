import React from 'react'

export const Dungs = () => {
    return (
        <section className='brends'>
            <h2 className='brends__title'>DUNGS</h2>
            <div className='brends__container'>
                <img className='brends__container--logo' src={require('./../../../assets/dungs.jpg')} alt='dungs' />
                <p className='brends__container--description'>Описание компании и все такое </p>
            </div>
        </section>
    )
}
