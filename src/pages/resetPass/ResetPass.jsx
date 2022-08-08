import "./resetPass.css";
import { Link } from "react-router-dom";

export default function ResetPass() {
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
            <h3 className="fs-1">المساعدة الخاصة بكلمة المرور</h3>
            <p className="fs-1">
              يُرجى إدخال البريد الالكترونى
              <br />
              المقترن بحسابك في دوكس
            </p>
            <div className="inputs">
              <h4 className="mt-10">البريد الالكترونى</h4>
              <input type="email" />
              <button className="fs-1">
                <Link to={"/user-account"}>متابعة</Link>
              </button>
            </div>
            <div className="text-center instruct color-blue "></div>
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
