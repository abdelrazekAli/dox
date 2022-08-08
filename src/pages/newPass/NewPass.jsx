import "./newPass.css";
import { Link } from "react-router-dom";

export default function Page16() {
  return (
    <>
      <div className="auth auth-pass">
        <div className="container ">
          {/* Header */}
          <Link to={"/"}>
            <div className="dox">
              D<span className="text-dark">o</span>X
            </div>
          </Link>
          {/* Auth card */}
          <div className="card w-40">
            <h3 className="fs-1">إنشاء كلمة سر جديدة</h3>
            <div className="inputs">
              <h4 className="mt-10">كلمة المرور جديدة</h4>
              <input type="password" />
              <h4 className="mt-10"> إعادة إدخال كلمة المرور</h4>
              <input type="password" />
              <button className="fs-1">
                <Link to={"/user-account"}>احفظ التغيرات وسجل دخولك</Link>
              </button>
            </div>
          </div>
          <p className="instructions">
            <span>:نصائح لكلمة سر آمنة</span>
            <br />
            <span>
              .استخدم 8 أحرف على الأقل، من الأفضل أن تستخدم تركيبة من الأرقام
              والحروف
            </span>
            <br />
            <span>.لا تستخدم نفس كلمة المرور التي استخدمتها معنا سابقاً</span>
            <br />
            <span>
              لا تستخدم كلمات القاموس أو اسمك أو عنوان بريدك الإلكتروني أو رقم
              الموبايل
              <br />
              .أو معلومات شخصية أخرى يمكن الحصول عليها بسهولة
            </span>
            <br />
            <span>.لا تستخدم نفس كلمة المرور لحسابات متعددة على الإنترنت</span>
          </p>
          {/* Footer */}
        </div>
        <div className="footer"></div>
        <div className="conditios">
          <Link className="item" to={"/"}>
            <span className="color-blue f-bold">سياسة الخصوصية</span>
            <img src="./assets/imgs/privacy-policy.png" alt="icon" />
          </Link>
          <Link className="item" to={"/"}>
            <span className="color-blue f-bold">شروط الاستخدام</span>
            <img src="./assets/imgs/contract.png" alt="icon" />
          </Link>
        </div>
        <h4 className="text-center f-bold fs-1 mt-10 mb-1">
          https://www.dox.com
        </h4>
      </div>
    </>
  );
}
