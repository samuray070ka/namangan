import React from 'react'
import "./Page.css"
import Result from '../components/Result'
import Statistika from '../components/Statistika'

function Home() {
  return (
    <div className='home'>
        <div className="container">
            <div className="banner">
                <div className="dark">
                    <h1 className='dark_h1'>Управление малым производством в районе города Намангана</h1>
                    <div className='dark_hr'></div>
                    <p className='dark_p'>малая промышленная зона - (далее - Административный совет) - коллегиальный орган, созданный Президентом Республики Узбекистан или Кабинетом Министров Республики Узбекистан в общем составе, состоящий из представителей местных органов исполнительной власти и других организаций; .</p>
                </div>
            </div>

            <Result/>

            <Statistika/>

            <div className='swiper_all'>
                <h1 className='swiper_h1'>Туманлар</h1>
                <div className="swiper">
                    <div className='swiper_slide'>
                        <div className='swiper_hr'></div>
                        <div className='swiper_flex'>
                            <h2>Поп миршикори мчж</h2>
                            <h6>Дата изменения | 18:37</h6>
                        </div>
                    </div>
                    <div className='swiper_slide'>
                        <div className='swiper_hr'></div>
                        <div className='swiper_flex'>
                            <h2>Поп миршикори мчж</h2>
                            <h6>Дата изменения | 18:37</h6>
                        </div>
                    </div>
                    <div className='swiper_slide'>
                        <div className='swiper_hr'></div>
                        <div className='swiper_flex'>
                            <h2>Поп миршикори мчж</h2>
                            <h6>Дата изменения | 18:37</h6>
                        </div>
                    </div>
                    <div className='swiper_slide'>
                        <div className='swiper_hr'></div>
                        <div className='swiper_flex'>
                            <h2>Поп миршикори мчж</h2>
                            <h6>Дата изменения | 18:37</h6>
                        </div>
                    </div>
                    <div className='swiper_slide'>
                        <div className='swiper_hr'></div>
                        <div className='swiper_flex'>
                            <h2>Поп миршикори мчж</h2>
                            <h6>Дата изменения | 18:37</h6>
                        </div>
                    </div>
                    <div className='swiper_slide'>
                        <div className='swiper_hr'></div>
                        <div className='swiper_flex'>
                            <h2>Поп миршикори мчж</h2>
                            <h6>Дата изменения | 18:37</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about">
      <div className="about_left">
        <h2 className="about_title">О НАС</h2>
        <h3 className="about_subtitle">
          О мерах по созданию малых промышленных зон в Наманганской области
        </h3>
        <p className="about_code">ПР-3826</p>
        <p className="about_text">
          Эффективное использование производственных площадей и объектов
          государственных и государственных предприятий, благоприятных условий
          для активного инвестирования, дальнейшая поддержка развития
          конкурентных современных производств и малых предприятий, инженерии и
          коммуникаций, а также цель обеспечения местоположения в области
          программного обеспечения, где создана производственная инфраструктура,
          и в то же время создание новых рабочих мест в промышленном мире и
          повышение занятости и благосостояния населения :
        </p>

        <button className="about_btn">ПОДРОБНЕЕ</button>
      </div>

      <div className="about_right">
        <div className="about_box">
          <p className="about_num">10 000+</p>
          <p className="about_desc">Новых рабочих <br /> мест</p>
        </div>
        <div className="about_box">
          <p className="about_num">100%</p>
          <p className="about_desc">Готовность <br /> коммуникаций</p>
        </div>
        <div className="about_box">
          <p className="about_num">45+</p>
          <p className="about_desc">Промышленных <br /> зон</p>
        </div>
        <div className="about_box">
          <p className="about_num">10 лет</p>
          <p className="about_desc">Аренда без <br /> надбавок</p>
        </div>
      </div>
            </div>
        </div>
    </div>
  )
}

export default Home