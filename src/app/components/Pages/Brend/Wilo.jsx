import React from 'react'

export const Wilo = () => {
    return (
        <section className='brends'>
            <h2 className='brends__title'>Wilo</h2>
            <div className='brends__container'>
                <img className='brends__container--logo' src={require('./../../../assets/wilo.jpg')} alt='wilo' />
                <p className='brends__container--description'></p>
            </div>
        </section>
    )
}
