import { Link } from "react-router-dom";
import "./header.css";

export default function Navbar({ user }) {
  return (
    <div className="navbar">
      <div className="container">
        <Link to={"/"} className="logo-box">
          <img src="./assets/imgs/logo.png" className="logo" alt="logo" />

          <div className="dox">
            D<span className="text-light">o</span>X
          </div>
        </Link>
        {!user && (
          <>
            <Link to={"/sponsored-ad"} className="btns mx-1-2">
              <div className="add-box">
                <button className="btn btn-add btn-add-custom ">
                  <span className="fs-1">اعلان ممول</span>
                  <img
                    className="add-icon"
                    src="./assets/imgs/add.png"
                    alt="add"
                  />
                </button>
              </div>
            </Link>
            <div className="search-input mr-2">
              <input
                type="text"
                placeholder="البحث عن المنتجات"
                className="fs-1"
              />
              <img src="./assets/imgs/search.png" alt="search" />
            </div>
          </>
        )}
        <div className="btns ">
          <Link to={"/new-ad"} className="add-box">
            <button className="btn btn-add ">
              <span className="fs-1"> اضف اعلان</span>
              <img className="add-icon" src="./assets/imgs/add.png" alt="add" />
            </button>
          </Link>
          {user ? (
            <Link to={"/user-account"} className="add-box mr-7">
              <button className="btn btn-add btn-auth  text-light  ">
                <span className="fs-1">حسابى</span>
                <img
                  className="add-icon w-22"
                  src="./assets/imgs/person.png"
                  alt="add"
                />
              </button>
            </Link>
          ) : (
            <>
              <Link to={"/register"} className="text-light btn btn-auth fs-1">
                انشاء حساب
              </Link>
              <Link to={"/login"} className="text-light btn btn-auth fs-1">
                تسجيل الدخول
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
