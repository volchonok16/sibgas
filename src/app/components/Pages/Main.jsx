import * as React from 'react'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';


export const Main = () => {

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,

    };

    return (
        <section className='main'>
            <div className='main__photo'>
                <h3 className='main__photo--title'>ОФИЦИАЛЬНЫЙ ДИЛЕР</h3>
                <p className='main__photo--description'>Инфраструктура, Нефть, Газ, Промышленность.</p>
                <form action='/product'>
                    <button className='main__photo--button'>Продукция</button>
                </form>
            </div>
            <h2 className='main__title'>Бренды</h2>
            <div>
                <Slider {...settings}>
                    <Link to={'/npo'}>
                        <img src={require('./../../assets/npo.jpg')} alt='npo' />
                    </Link>
                    <Link to={'/dungs'}>
                        <img src={require('./../../assets/dungs.jpg')} alt='dungs' />
                    </Link>
                    <Link to={'/mzta'}>
                        <img src={require('./../../assets/mzta.jpg')} alt='mzta' />
                    </Link>
                    <Link to={'/kvant'}>
                        <img src={require('./../../assets/kvant.jpg')} alt='kvant' />
                    </Link>
                    <Link to={'#'}>
                        <img src={require('./../../assets/lmz.jpg')} alt='lmz' />
                    </Link>
                    <Link to={'#'}>
                        <img src={require('./../../assets/pedrollo.jpg')} alt='pedrollo' />
                    </Link>
                    <Link to={'#'}>
                        <img src={require('./../../assets/riello.jpg')} alt='riello' />
                    </Link>
                    <Link to={'#'}>
                        <img src={require('./../../assets/grund.jpg')} alt='grund' />
                    </Link>
                    <Link to={'/wilo'}>
                        <img className='main__img' src={require('./../../assets/wilo.jpg')} alt='wilo' />
                    </Link>
                    <Link to={'#'}>
                        <img className='main__img' src={require('./../../assets/buderus.jpg')} alt='buderus' />
                    </Link>
                    <Link to={'#'}>
                        <img className='main__img' src={require('./../../assets/tecofi.jpg')} alt='tecofi' />
                    </Link>
                    <Link to={'#'}>
                        <img className='main__img' src={require('./../../assets/valtec.jpg')} alt='valtec' />
                    </Link>
                    <Link to={'#'}>
                        <img className='main__img' src={require('./../../assets/zetkama.png')} alt='zetkama' />
                    </Link>
                </Slider>
                <div className='main__container'>
                    <div>
                        <h2 className='main__container--title'>Коммерческое предложение</h2>
                        <p>«Сибэнергогаз» имеет честь предложить Вам сотрудничество по вопросам комплектации
                        Вашего предприятия промышленным оборудованием. Богатый опыт наших сотрудников и многолетние
                        наработки в сфере поставок промышленного оборудования позволяют предоставить нашим клиентам
                        наиболее выгодные условия работы, а так же максимальный сервис при комплектации заказов.</p>
                        <h4 className='main__container--title'>Наша компания готова стабильно обеспечивать Ваше предприятие оборудованием следующей номенклатуры:</h4>
                        <h4 className='main__container--title'>1.Трубопроводная арматура:</h4>
                        <p>Задвижки, вентили, клапаны, затворы, краны шаровые стальные и латунные, регуляторы давления, фильтры, электропривода</p>
                        <h4 className='main__container--title'>2. Детали трубопровода</h4>
                        <p>Отводы, фланцы, переходы, заглушки, тройники, фитинги, метизы изготовленные из разных материалов и разного исполнения</p>
                        <h4 className='main__container--title'>3.Насосное оборудование</h4>
                        <p>Консольные, центробежные, погружные (ЭЦВ) , химические, топливные, многоступенчатые, а так же Европейского производства (Wilo, Grundfoss, Espa, Calpeda)</p>
                        <h4 className='main__container--title'>Газовое оборудование</h4>
                        <p>(Газорегуляторные пункты шкафные, блочные-ГРПШ, ПГБ, транспортабельные котельные установки-ТКУ, пункты учета расхода газа-ПУРГ ,горелки, спутниковая телеметрия,
                             газовые краны и задвижки, регуляторы давления газа, счетчики расхода газа, фильтры, клапаны предохранительные и запорные, системы газаонализа</p>
                        <h4 className='main__container--title'>5. Приборы КИПиА</h4>
                        <p>Приборы измерения, регулирования, приборы учета и автоматизации</p>
                        <h4 className='main__container--title'>6. Котельное оборудование</h4>
                        <p>Энергетическая арматура, пластинчатые теплообменники, дымососы, газовые котлы и горелки, станции водоподготовки, баки мембранные и расширительные а так же модульные котельные установки,
                             и другие виды котельного оборудования</p>
                        <h4 className='main__container--title'>7. Трубы</h4>
                        <p>Труба из полиэтилена марки ПЭ-100, напорные трубы ГОСТ 18599-2001 диаметр 20-400, Трубы для газопроводов ГОСТ Р 50838-2009 диаметр 20-400, Фитинги с закладными электронагревателями, 
                            компрессионные соединительные детали, Фитинги литые (спигот), Аппараты (производство Россия) для муфтовой сварки ПЭ труб и фитингов, сварочные аппараты для контактно-стыковой сварки
                             диаметром 63-1600.Полипропиленовые и металлопластиковые трубы и фитинги. Пластиковая канализация</p>

                    </div>
                    <img className='main__container--img' src={require('./../../assets/Neft.png')} alt='Neft' />
                </div>
            </div>

        </section>
    )
}


