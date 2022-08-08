import "./adminSettings4.css";

// Import components
import AdminNavbar from "../../components/header/AdminNavbar";

export default function AdminSettings4() {
  return (
    <>
      <div className="admin-settings delete-ad-page">
        <AdminNavbar page={"delete"} admin={true} />
        <div className="fill-container">
          <div className="title-input">
            <h2 className="fs-1">الإعلانات المنشورة</h2>

            <div className="search-input ">
              <input type="text" placeholder="اسم الاعلان" className="fs-1" />
              <img src="./assets/imgs/search.png" alt="search" />
            </div>
          </div>
          <div className="table-box">
            <table className="styled-table fs-1">
              <tbody>
                <tr>
                  <td className="color-main">السعر</td>
                  <td className="color-main"></td>
                  <td className="color-main">اسم الاعلان</td>
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
                      <div>1,200,000 ج.م</div>
                    </div>
                  </td>
                  <td>
                    <img
                      src={"./assets/imgs/admin-settings/1_sm.png"}
                      alt="img cart"
                      className="scale-hover"
                    />
                  </td>
                  <td>مرسيدس</td>
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
                      <div>350,000 ج.م</div>
                    </div>
                  </td>
                  <td>
                    <img
                      src={"./assets/imgs/admin-settings/22_sm.png"}
                      alt="img cart"
                      className="scale-hover"
                    />
                  </td>
                  <td>سيارة تويوتاكورولا</td>
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
                      <div>15,200,000 ج.م</div>
                    </div>
                  </td>
                  <td>
                    <img
                      src={"./assets/imgs/admin-settings/33_sm.png"}
                      alt="img cart"
                      className="scale-hover"
                    />
                  </td>
                  <td>فيلا 3 طابق</td>
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
                      <div>1,200 ج.م</div>
                    </div>
                  </td>
                  <td>
                    <img
                      src={"./assets/imgs/admin-settings/44_sm.png"}
                      alt="img cart"
                      className="scale-hover"
                    />
                  </td>
                  <td>سوار مستورد</td>
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
                      <div>5,500 ج.م</div>
                    </div>
                  </td>
                  <td>
                    <img
                      src={"./assets/imgs/admin-settings/55_sm.png"}
                      alt="img cart"
                      className="scale-hover"
                    />
                  </td>
                  <td>موبايل اوبو</td>
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
                      <div>250,000 ج.م</div>
                    </div>
                  </td>
                  <td>
                    <img
                      src={"./assets/imgs/admin-settings/66_sm.png"}
                      alt="img cart"
                      className="scale-hover"
                    />
                  </td>
                  <td>جهاز قياس الضغط</td>
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
