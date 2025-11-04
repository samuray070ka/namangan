import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Images
import DefoultImg from '../assets/rayon__img.png'

// Icons
import { FaRegImage } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiUploadCloud } from 'react-icons/fi';
import { IoClose } from "react-icons/io5";

// Components
import Result from '../components/Result';
import Statistika from '../components/Statistika';

const Unicorn = () => {
    const [modal, setModal] = useState(false)
    const { slog } = useParams();

    // ✅ useState bilan boshqariladigan ro'yxat
    const [tumanlar, setTumanlar] = useState([
        { slog: "slog1", id: 1, title: "Поп миршикори мчж", desc: "Дата изменения | 18:37", image: DefoultImg, icon: FaRegImage, del__icon: RiDeleteBin6Line },
        { slog: "slog2", id: 2, title: "Поп миршикори мчж", desc: "Дата изменения | 18:37", image: DefoultImg, icon: FaRegImage, del__icon: RiDeleteBin6Line },
        { slog: "slog3", id: 3, title: "Поп миршикори мчж", desc: "Дата изменения | 18:37", image: DefoultImg, icon: FaRegImage, del__icon: RiDeleteBin6Line },
        { slog: "slog4", id: 4, title: "Поп миршикори мчж", desc: "Дата изменения | 18:37", image: DefoultImg, icon: FaRegImage, del__icon: RiDeleteBin6Line },
        { slog: "slog5", id: 5, title: "Поп миршикори мчж", desc: "Дата изменения | 18:37", image: DefoultImg, icon: FaRegImage, del__icon: RiDeleteBin6Line },
        { slog: "slog6", id: 6, title: "Поп миршикори мчж", desc: "Дата изменения | 18:37", image: DefoultImg, icon: FaRegImage, del__icon: RiDeleteBin6Line }
    ]);

    // ✅ Ma'lumotni o'chirish funksiyasi - TO'G'RI VERSIYA
    const handleDelete = (id) => {
        // Yangi ro'yxat yaratamiz (o'chirilayotgan id dan tashqari)
        const updatedTumanlar = tumanlar.filter(item => item.id !== id);

        // State ni yangilaymiz
        setTumanlar(updatedTumanlar);
    };

    const tuman = tumanlar.find(item => item.slog === slog);

    if (!tuman) {
        return (
            <div className="tuman-detail">
                <h2>Tuman topilmadi</h2>
                <Link to="/">← Ortga qaytish</Link>
            </div>
        );
    }

    return (
        <div className="container">
            <Result />
            <Statistika />
            <div className='swiper_all'>
                <h1 className='swiper_h1'>Районлар</h1>
                <div className="swiper">
                    {tumanlar.length > 0 ? (
                        tumanlar.map((item, index) => (
                            <div key={item.id} className='swiper_slide'>
                                <div className='swiper_hr'></div>
                                <div className='swiper_flex unicorn_slide'>
                                    <Link to={`/${item.slog}/${item.id}`} className='link'>
                                        <div className="swiper_text">
                                            <h2>{item.title}</h2>
                                            <h6>{item.desc}</h6>
                                        </div>
                                    </Link>
                                    <div className="swiper_edit">
                                        <div className="swiper_edit-img">
                                            <img
                                                src={item.image}
                                                onClick={() => setModal(!modal)}
                                                alt="rayon"
                                            />
                                            <div className="swiper_edit-icon">
                                                <item.icon className='img-icon' />
                                            </div>
                                        </div>
                                        <div className="swiper_del-icon">
                                            <item.del__icon
                                                className='del-icon'
                                                onClick={() => handleDelete(item.id)}
                                                style={{ cursor: "pointer" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="empty-state">
                            <p>Hech qanday tuman qolmadi</p>
                        </div>
                    )}

                    {modal && (
                        <div className="modal">
                            <div className="photo-section">
                                <div className="photo-box">
                                    <IoClose className='close-btn' onClick={() => setModal(!modal)} />
                                    <FiUploadCloud className="upload-icon" />
                                    <p className="upload-text">
                                        Нажмите что бы загрузить свои <br /> рисунки
                                    </p>
                                    <span className="upload-types">Jpg, Png, Svg.</span>
                                    <button className="upload-btn">Загрузить фото</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Unicorn;