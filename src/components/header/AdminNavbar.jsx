import "./header.css";
import { Link } from "react-router-dom";

export default function AdminNavbar({ page, admin }) {
  return (
    <>
      <div className="logo-header ">
        <Link to={"/"}>
          <div className="logo-box">
            <img src="./assets/imgs/logo.png" className="logo" alt="logo" />
            <div className="dox">
              D<span className="text-light">o</span>X
            </div>
          </div>
        </Link>
      </div>
      {admin && (
        <div className="btns">
          <Link
            to={"/admin-settings-2"}
            className={
              "btn fs-1 f-bold second " + (page === "sponsoredAd" ? "main" : "")
            }
          >
            <span>اعلان ممول</span>
          </Link>
          <Link
            to={"/admin-settings-3"}
            className={
              "btn fs-1 f-bold second " + (page === "settings" ? "main" : "")
            }
          >
            <span>الاعدادات</span>
          </Link>
          <Link
            to={"/admin-settings-4"}
            className={
              "btn fs-1 f-bold second " + (page === "delete" ? "main" : "")
            }
          >
            <span>حذف اعلان</span>
          </Link>
          <button
            className={
              "btn fs-1 f-bold second " + (page === "update" ? "main" : "")
            }
          >
            <Link to={"/admin-settings-1"}>
              <span>تحديث</span>
            </Link>
          </button>
        </div>
      )}
    </>
  );
}
