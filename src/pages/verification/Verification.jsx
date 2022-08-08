import "./verification.css";
import { Link } from "react-router-dom";

export default function Verification() {
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
            <h3 className="fs-1">التحقق من بريدك الالكترونى</h3>
            <p className="fs-1">
              للتحقق من البريد الالكترونى قمنا بارسال
              <br />
              كلمة مرور لمرة واحدة الى بريدك
            </p>
            <div className="inputs">
              <h4 className="mt-10">ادخال كلمة المرور لمرة واحدة</h4>
              <input type="password" />
              <button className="fs-1">
                <Link to={"/user-account"}>أنشئ حسابك على دوكس</Link>
              </button>
            </div>
            <h4 className="text-center instruct color-blue ">
              <Link to={"/reset-pass"} className="color-blue">
                اعادة ارسال كلمة المرور لمرة واحدة
              </Link>
            </h4>
            <div className="login">
              <h4 className="d-inline ">هل لديك حساب بالفعل؟</h4>
              <Link className="color-blue f-bold" to={"/login"}>
                تسجيل الدخول
              </Link>
            </div>
          </div>

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
