import "./adminSettings2.css";

// Import components
import AdminNavbar from "../../components/header/AdminNavbar";

export default function AdminSettings2() {
  return (
    <>
      <div className="admin-settings">
        <AdminNavbar page={"sponsoredAd"} admin={true} />
        <div className="fill-container">
          <div className="title-input">
            <h2 className="fs-1">الإعلانات المنشورة</h2>

            <div className="search-input ">
              <input
                type="text"
                placeholder="رقم عملية الدفع"
                className="fs-1"
              />
              <img src="./assets/imgs/search.png" alt="search" />
            </div>
          </div>
          <div className="table-box">
            <table className="styled-table fs-1">
              <tbody>
                <tr>
                  <td></td>
                  <td className="color-main">صورة الاعلان</td>
                  <td className="color-main">رقم عملية الدفع</td>
                  <td className="color-main">التاريخ</td>
                </tr>
                <tr>
                  <td>
                    <div className="btns">
                      <div className="delete-card">
                        <button className="btn fs-1">
                          حذف
                          <img
                            src="./assets/imgs/delete.png"
                            alt="delete icon"
                          />
                        </button>
                      </div>
                      <div className="delete-card">
                        <button className="btn fs-1">
                          اضافة
                          <img
                            src="./assets/imgs/add.png"
                            alt="delete icon"
                            className="w-20"
                          />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <img
                      src={"./assets/imgs/admin-settings/1_sm.png"}
                      alt="img cart"
                      className="scale-hover"
                    />
                  </td>
                  <td>39992658103</td>
                  <td>اليوم</td>
                </tr>
                <tr>
                  <td>
                    <div className="btns">
                      <div className="delete-card">
                        <button className="btn fs-1">
                          حذف
                          <img
                            src="./assets/imgs/delete.png"
                            alt="delete icon"
                          />
                        </button>
                      </div>
                      <div className="delete-card">
                        <button className="btn fs-1">
                          اضافة
                          <img
                            src="./assets/imgs/add.png"
                            alt="delete icon"
                            className="w-20"
                          />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <img
                      src={"./assets/imgs/admin-settings/2_sm.png"}
                      alt="img cart"
                      className="scale-hover"
                    />
                  </td>
                  <td>39587658103</td>
                  <td>امس</td>
                </tr>
                <tr>
                  <td>
                    <div className="btns">
                      <div className="delete-card">
                        <button className="btn fs-1">
                          حذف
                          <img
                            src="./assets/imgs/delete.png"
                            alt="delete icon"
                          />
                        </button>
                      </div>
                      <div className="delete-card">
                        <button className="btn fs-1">
                          اضافة
                          <img
                            src="./assets/imgs/add.png"
                            alt="delete icon"
                            className="w-20"
                          />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <img
                      src={"./assets/imgs/admin-settings/3_sm.png"}
                      alt="img cart"
                      className="scale-hover"
                    />
                  </td>
                  <td>49827506324</td>
                  <td>24/11/2021</td>
                </tr>
                <tr>
                  <td>
                    <div className="btns">
                      <div className="delete-card">
                        <button className="btn fs-1">
                          حذف
                          <img
                            src="./assets/imgs/delete.png"
                            alt="delete icon"
                          />
                        </button>
                      </div>
                      <div className="delete-card">
                        <button className="btn fs-1">
                          اضافة
                          <img
                            src="./assets/imgs/add.png"
                            alt="delete icon"
                            className="w-20"
                          />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <img
                      src={"./assets/imgs/admin-settings/4_sm.png"}
                      alt="img cart"
                      className="scale-hover"
                    />
                  </td>
                  <td>95863215478</td>
                  <td>2/12/2020</td>
                </tr>
                <tr>
                  <td>
                    <div className="btns">
                      <div className="delete-card">
                        <button className="btn fs-1">
                          حذف
                          <img
                            src="./assets/imgs/delete.png"
                            alt="delete icon"
                          />
                        </button>
                      </div>
                      <div className="delete-card">
                        <button className="btn fs-1">
                          اضافة
                          <img
                            src="./assets/imgs/add.png"
                            alt="delete icon"
                            className="w-20"
                          />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <img
                      src={"./assets/imgs/admin-settings/5_sm.png"}
                      alt="img cart"
                      className="scale-hover"
                    />
                  </td>
                  <td>95687123654</td>
                  <td>25/10/2020</td>
                </tr>
                <tr>
                  <td>
                    <div className="btns">
                      <div className="delete-card">
                        <button className="btn fs-1">
                          حذف
                          <img
                            src="./assets/imgs/delete.png"
                            alt="delete icon"
                          />
                        </button>
                      </div>
                      <div className="delete-card">
                        <button className="btn fs-1">
                          اضافة
                          <img
                            src="./assets/imgs/add.png"
                            alt="delete icon"
                            className="w-20"
                          />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <img
                      src={"./assets/imgs/admin-settings/6_sm.png"}
                      alt="img cart"
                      className="scale-hover"
                    />
                  </td>
                  <td>58462315789</td>
                  <td>4/4/2020</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
