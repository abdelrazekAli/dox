import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <div className="auth">
        <div className="container ">
          {/* Header */}
          <Link to={"/"}>
            <div className="dox">
              D<span className="text-dark">o</span>X
            </div>
          </Link>
          {/* Auth card */}
          <div className="card w-40">
            <h3 className="fs-1">انشاء حساب</h3>
            <div className="inputs">
              <div className="name d-flex">
                <input type="text" placeholder="الاسم الاخير" />
                <input type="text" placeholder="الاسم الاول" />
              </div>
              <input type="email" placeholder="البريد الالكتروني" />
              <input type="password" placeholder="كلمة المرور" />
              <input type="password" placeholder="اعادة ادخال كلمة المرور" />
              <input type="tel" placeholder="رقم الموبيل" />
              <h4 className="mt-10">الجنس</h4>
              <div className="radios ">
                <div className="radio">
                  <input type="radio" id="women" value="Women" name="type" />
                  <label for="women">انثى</label>
                </div>
                <div className="radio">
                  <input type="radio" id="man" value="Man" name="type" />
                  <label for="man">ذكر</label>
                </div>
              </div>

              <button className="fs-1">
                <Link to={"/verification"}>متابعة</Link>
              </button>
            </div>
            <h4 className="text-center instruct">
              من خلال إنشاء حساب ، فإنك توافق على شروط <br />
              الاستخدام والبيع و الشراء و سياسة الخصوصية
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
