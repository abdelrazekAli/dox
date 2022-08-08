import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="auth auth-login ">
        <div className="container ">
          {/* Header */}
          <Link to={"/"}>
            <div className="dox">
              D<span className="text-dark">o</span>X
            </div>
          </Link>
          {/* Auth card */}
          <div className="card w-40">
            <h3 className="fs-1">تسجيل الدخول</h3>
            <div className="inputs">
              <h4 className="mt-10">البريد الالكترونى</h4>
              <input type="email" />
              <h4 className="mt-10">كلمة المرور</h4>
              <input type="password" />
              <Link to={"/user-account-1"} className="fs-1 button">
                تسجيل الدخول
              </Link>
            </div>
            <h4 className="text-center instruct">
              بتسجيلك للدخول ، فإنك توافق على شروط <br />
              الاستخدام والبيع و الشراء و سياسة الخصوصية
            </h4>
            <div className="login">
              <Link className="color-blue f-bold" to={"/"}>
                هل نسيت كلمة المرور؟
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
