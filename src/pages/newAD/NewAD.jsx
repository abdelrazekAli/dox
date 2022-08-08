import "./newAd.css";
import { useState } from "react";

// Import components

import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";
import Chatbot from "../../components/chatbot/Chatbot";

export default function NewAd() {
  const [counter, setCounter] = useState(4096);
  const [img, setImg] = useState(null);
  const [img2, setImg2] = useState(null);
  const [img3, setImg3] = useState(null);
  const [img4, setImg4] = useState(null);
  const [img5, setImg5] = useState(null);
  const [img6, setImg6] = useState(null);
  return (
    <>
      <Navbar user={true} />
      <div className="ad-adver">
        <div className="container">
          <div className="box">
            <div className="head fs-1">أضف اعلان</div>
            <div className="body">
              <div className="inputs ">
                <div className="name">
                  <span>اسم الاعلان</span>
                  <input type="text" />
                </div>
                <div className="type">
                  <span>صنف الاعلان</span>
                  <div className="input position-relative d-flex ">
                    <input type="text" />
                    <img src="./assets/imgs/down-arrow.png" alt="icon" />
                  </div>
                  <div className="icons">
                    <img src="./assets/imgs/car.png" alt="icon" />
                    <img src="./assets/imgs/home.png" alt="home" />
                    <img src="./assets/imgs/mobile-phone.png" alt="mobile" />
                    <img src="./assets/imgs/accessory.png" alt="accessory" />
                    <img
                      src="./assets/imgs/diagnosis_1.png"
                      alt="diagnosis_1"
                      className=""
                    />
                    <img
                      src="./assets/imgs/electronics.png"
                      alt="electronics"
                      className=""
                    />
                    <img
                      src="./assets/imgs/furniture.png"
                      alt="furniture"
                      className=""
                    />
                  </div>
                </div>
                <div className="name-email">
                  <div className="email">
                    <span>الايميل</span>
                    <input type="email" />
                  </div>
                  <div className="name">
                    <span>الاسم</span>
                    <input type="text" />
                  </div>
                </div>
                <div className="details">
                  <div className="phone-desc">
                    <div className="phone">
                      <span>رقم الموبيل</span>
                      <input type="text" />
                    </div>
                    <div className="desc">
                      <span>اوصف اعلانك</span>
                      <div className="textarea">
                        <textarea
                          cols="22"
                          rows="6"
                          maxLength={4096}
                          onChange={(e) =>
                            setCounter(4096 - e.target.value.length)
                          }
                        ></textarea>
                        <span className="counter">
                          {counter} عدد الأحرف المتبقية
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="add-imgs">
                    <span className="title">أضف صورا لاعلانك</span>
                    <div className="imgs-inputs">
                      <label className="img-box" htmlFor="img1">
                        <input
                          id="img1"
                          type="file"
                          accept="image/*"
                          onChange={(e) => setImg(e.target.files[0])}
                          hidden
                        />
                        {img ? (
                          <img
                            src={URL.createObjectURL(img)}
                            alt="img"
                            className="img-obj"
                          />
                        ) : (
                          <img
                            src="./assets/imgs/add_1.png"
                            className="img-icon"
                            alt="icon"
                          />
                        )}
                      </label>
                      <label className="img-box" htmlFor="img2">
                        <input
                          id="img2"
                          type="file"
                          accept="image/*"
                          onChange={(e) => setImg2(e.target.files[0])}
                          hidden
                        />
                        {img2 ? (
                          <img
                            src={URL.createObjectURL(img2)}
                            alt="img"
                            className="img-obj"
                          />
                        ) : (
                          <img
                            src="./assets/imgs/add_1.png"
                            className="img-icon"
                            alt="icon"
                          />
                        )}
                      </label>
                      <label className="img-box" htmlFor="img3">
                        <input
                          id="img3"
                          type="file"
                          accept="image/*"
                          onChange={(e) => setImg3(e.target.files[0])}
                          hidden
                        />
                        {img3 ? (
                          <img
                            src={URL.createObjectURL(img3)}
                            alt="img"
                            className="img-obj"
                          />
                        ) : (
                          <img
                            src="./assets/imgs/add_1.png"
                            className="img-icon"
                            alt="icon"
                          />
                        )}
                      </label>
                      <label className="img-box" htmlFor="img4">
                        <input
                          id="img4"
                          type="file"
                          accept="image/*"
                          onChange={(e) => setImg4(e.target.files[0])}
                          hidden
                        />
                        {img4 ? (
                          <img
                            src={URL.createObjectURL(img4)}
                            alt="img"
                            className="img-obj"
                          />
                        ) : (
                          <img
                            src="./assets/imgs/add_1.png"
                            className="img-icon"
                            alt="icon"
                          />
                        )}
                      </label>
                      <label className="img-box" htmlFor="img5">
                        <input
                          id="img5"
                          type="file"
                          accept="image/*"
                          onChange={(e) => setImg5(e.target.files[0])}
                          hidden
                        />
                        {img5 ? (
                          <img
                            src={URL.createObjectURL(img5)}
                            alt="img"
                            className="img-obj"
                          />
                        ) : (
                          <img
                            src="./assets/imgs/add_1.png"
                            className="img-icon"
                            alt="icon"
                          />
                        )}
                      </label>
                      <label className="img-box" htmlFor="img6">
                        <input
                          id="img6"
                          type="file"
                          accept="image/*"
                          onChange={(e) => setImg6(e.target.files[0])}
                          hidden
                        />
                        {img6 ? (
                          <img
                            src={URL.createObjectURL(img6)}
                            alt="img"
                            className="img-obj"
                          />
                        ) : (
                          <img
                            src="./assets/imgs/add_1.png"
                            className="img-icon"
                            alt="icon"
                          />
                        )}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="submit-ad">
                  <div className="check">
                    <input type="checkbox" name="" />
                    بنشرك للإعلان، أنت توافق على شروط الإستخدام و قواعد النشر
                  </div>
                  <div className="btns my-1">
                    <div className="add-box">
                      <button className="btn btn-add  search-btn">
                        <span className="fs-1">أنشر الاعلان</span>
                        <img
                          className="add-icon"
                          src="./assets/imgs/add.png"
                          alt="add"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Chatbot />
      <Footer />
    </>
  );
}
