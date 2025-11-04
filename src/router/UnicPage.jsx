import React from 'react'
import { Link } from 'react-router-dom'
import Result from '../components/Result'
import Statistika from '../components/Statistika'

function UnicPage() {
    const tumanlar = [
        {
            slog: "slog1",
            id: 1,
            title: "Поп миршикори мчж",
            desc: "Дата изменения | 18:37"
        },
        {
            slog: "slog2",
            id: 2,
            title: "Поп миршикори мчж",
            desc: "Дата изменения | 18:37"
        },
        {
            slog: "slog3",
            id: 3,
            title: "Поп миршикори мчж",
            desc: "Дата изменения | 18:37"
        },
        {
            slog: "slog4",
            id: 4,
            title: "Поп миршикори мчж",
            desc: "Дата изменения | 18:37"
        },
        {
            slog: "slog5",
            id: 5,
            title: "Поп миршикори мчж",
            desc: "Дата изменения | 18:37"
        },
        {
            slog: "slog6",
            id: 6,
            title: "Поп миршикори мчж",
            desc: "Дата изменения | 18:37"
        }
    ]
    return (
        <div className='container'>
            <Result />
            <Statistika />

            <div className='swiper_all'>
                <h1 className='swiper_h1'>Поп миршикори мчж</h1>
                <div className="swiper">
                    {
                        tumanlar.map((item, index) => {
                            return (
                                <Link
                                    key={index} className='swiper_slide'
                                    to={`/${item.slog}`}
                                >
                                    <div className='swiper_hr'></div>
                                    <div className='swiper_flex'>
                                        <h2>{item.title}</h2>
                                        <h6>{item.desc}</h6>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default UnicPage
