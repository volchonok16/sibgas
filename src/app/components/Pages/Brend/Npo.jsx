import React from 'react'

export const Npo = () => {
    return (
        <section className='brends'>
            <h2 className='brends__title'>НПО АЗТА</h2>
            <div className='brends__container'>
                <img className='brends__container--logo' src={require('./../../../assets/npo.jpg')} alt='Npo' />
                <p className='brends__container--description'>Описание компании и все такое </p>
            </div>
        </section>
    )
}
