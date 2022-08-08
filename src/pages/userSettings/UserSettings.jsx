import "./userSettings.css";
import { useState } from "react";
import { Link } from "react-router-dom";

// Import components
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";
import Chatbot from "../../components/chatbot/Chatbot";

export default function UserSettings() {
  const [hidePersonal, setHidePersonal] = useState(false);
  const [hidePasswords, setHidePasswords] = useState(false);
  return (
    <>
      <Navbar user={true} />
      <div className="settings">
        <div className="container">
          <div className="box">
            <div className="texts fs-1">
              <h4>اعدادات الحساب</h4>
              <p className="m-0">بامكانك هنا تغيير اعدادات حسابك</p>
            </div>
            <div className="btns ">
              <Link to={"/user-settings"} className="btn fs-1 main">
                الاعدادات
              </Link>
              <Link to={"/user-account"} className="btn fs-1 second">
                الاعلانات
              </Link>
            </div>
            <div className="body">
              {/* Personal Information */}
              <div
                className="header fs-1"
                onClick={() => setHidePersonal(!hidePersonal)}
              >
                <img src="./assets/imgs/chevron-down.png" alt="chevron-down" />
                <span>تغيير المعلومات الشخصية</span>
              </div>
              {!hidePersonal && (
                <div className="settings-inputs">
                  <input type="text" placeholder="الاسم" className="fs-1" />
                  <input
                    type="tel"
                    placeholder="رقم الموبيل"
                    className="fs-1"
                  />
                  <div className="btns">
                    <button className="btn fs-1 main">احفظ</button>
                  </div>
                </div>
              )}
              {/* Password Reset */}
              <div
                className="header fs-1"
                onClick={() => setHidePasswords(!hidePasswords)}
              >
                <img src="./assets/imgs/chevron-down.png" alt="chevron-down" />
                <span>تغيير كلمة السر</span>
              </div>
              {!hidePasswords && (
                <div className="settings-inputs">
                  <input
                    type="password"
                    placeholder="كلمة السر الحالية"
                    className="fs-1"
                  />
                  <input
                    type="password"
                    placeholder="كلمة السر الجديدة"
                    className="fs-1"
                  />
                  <input
                    type="password"
                    placeholder="إعادة كلمة السر الجديدة"
                    className="fs-1"
                  />
                  <div className="btns">
                    <button className="btn fs-1 main">احفظ</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Chatbot />
      <Footer />
    </>
  );
}
