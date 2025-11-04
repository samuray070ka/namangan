import React from 'react'
import './Components.css'

// Icons
import { FaRegFolderOpen } from "react-icons/fa6";

// Images
import Img from '../assets/image.png'

function Statistika() {
    const info = [
        {
            id: 1,
            icon: FaRegFolderOpen,
            color: "#00d097",
            num: 71,
            title: "Kichik sanoat zonalar",
            background: "#FFFFFF"
        },
        {
            id: 2,
            icon: FaRegFolderOpen,
            color: "#fdc748",
            num: "64 095",
            title: "Ishki kuchi",
            background: "#FFFFFF"
        },
        {
            id: 3,
            icon: FaRegFolderOpen,
            color: "#15c0e6",
            num: 1.25,
            title: "Bank mablag‘lari (mlrd so‘m)",
            background: "#FFFFFF"
        },
        {
            id: 4,
            icon: FaRegFolderOpen,
            color: "#6d5dd3",
            num: 76,
            title: "Eksport (mln dollar)",
            background: "#FFFFFF"
        },
        {
            id: 5,
            icon: FaRegFolderOpen,
            color: "#15c0e6",
            num: 820.8,
            title: "Umumiy maydon (ga)",
            background: "#FFFFFF"
        },
        {
            id: 6,
            icon: FaRegFolderOpen,
            color: "#fdc748",
            num: 8.675,
            title: "O‘z mablag‘lari (trln so‘m)",
            background: "#FFFFFF"
        },
        {
            id: 7,
            icon: FaRegFolderOpen,
            color: "#6d5dd3",
            num: 1285,
            title: "Loyihalar",
            background: "#FFFFFF"
        },
        {
            id: 8,
            icon: FaRegFolderOpen,
            color: "#00d097",
            num: 8.875,
            title: "Loyiha qiymati (trln so‘m)",
            background: "#FFFFFF"
        },
    ]
    return (
        <div className='statistika'>
            <div className="container">
                <h2 className='title'>Кичик ва ёшлар саноат зоналар тўгрисида йиғма маълумот</h2>
                <div className="pages">
                    <div className="work">
                        <div className="text">
                            <h2>875</h2>
                            <span>Мавжуд бўш иш ўринлари</span>
                        </div>
                        <div className="img">
                            <img src={Img} alt="" />
                        </div>
                    </div>
                    {info.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="page">
                                <item.icon color={item.color} className='icon' />
                                <h2>{item.num}</h2>
                                <span>{item.title}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Statistika;