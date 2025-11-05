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
    const [modal, setModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null); // Modal ochilgan item ID
    const { slog } = useParams();

    const [tumanlar, setTumanlar] = useState([
        { id: 1, slug: "slog1", title: "Поп миршикори мчж", desc: "Дата изменения | 18:37", image: DefoultImg, icon: FaRegImage, del__icon: RiDeleteBin6Line },
        { id: 2, slug: "slog2", title: "Поп миршикори мчж", desc: "Дата изменения | 18:37", image: DefoultImg, icon: FaRegImage, del__icon: RiDeleteBin6Line },
        { id: 3, slug: "slog3", title: "Поп миршикори мчж", desc: "Дата изменения | 18:37", image: DefoultImg, icon: FaRegImage, del__icon: RiDeleteBin6Line },
        { id: 4, slug: "slog4", title: "Поп миршикори мчж", desc: "Дата изменения | 18:37", image: DefoultImg, icon: FaRegImage, del__icon: RiDeleteBin6Line },
        { id: 5, slug: "slog5", title: "Поп миршикори мчж", desc: "Дата изменения | 18:37", image: DefoultImg, icon: FaRegImage, del__icon: RiDeleteBin6Line },
        { id: 6, slug: "slog6", title: "Поп миршикори мчж", desc: "Дата изменения | 18:37", image: DefoultImg, icon: FaRegImage, del__icon: RiDeleteBin6Line }
    ]);

    const handleDelete = (id) => {
        setTumanlar(tumanlar.filter(item => item.id !== id));
    };

    // ✅ Rasm yuklash funksiyasi
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && selectedId) {
            const reader = new FileReader();
            reader.onload = () => {
                setTumanlar(prev =>
                    prev.map(item =>
                        item.id === selectedId ? { ...item, image: reader.result } : item
                    )
                );
            };
            reader.readAsDataURL(file);
        }
    };

    const openModal = (id) => {
        setSelectedId(id);
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
        setSelectedId(null);
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
                        tumanlar.map((item) => (
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
                                                onClick={() => openModal(item.id)}
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

                    {/* ✅ Modal */}
                    {modal && (
                        <div className="modal">
                            <div className="photo-section">
                                <div className="photo-box">
                                    <IoClose className='close-btn' onClick={closeModal} />
                                    <FiUploadCloud className="upload-icon" />
                                    <p className="upload-text">
                                        Нажмите что бы загрузить свои <br /> рисунки
                                    </p>
                                    <span className="upload-types">Jpg, Png, Svg.</span>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className='upload-btn'
                                        onChange={handleFileChange}
                                    />
                                    <button className='quyis' onClick={closeModal}>Yopish</button>
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
