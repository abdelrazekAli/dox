import "./userAccount.css";
import { Link } from "react-router-dom";

// Import components
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";
import Chatbot from "../../components/chatbot/Chatbot";

export default function UserAccount1() {
  return (
    <>
      <Navbar user={true} />
      <div className="settings user-account-1">
        <div className="container">
          <div className="box">
            <div className="texts fs-1">
              <h4>اعلاناتى</h4>
              <p className="m-0">بامكانك هنا إدارة اعلاناتك المنشورة</p>
            </div>
            <div className="btns ">
              <Link to={"/user-settings"} className="btn fs-1 second">
                الاعدادات
              </Link>
              <Link to={"/user-account"} className="btn fs-1 main">
                الاعلانات
              </Link>
            </div>
            <div className="body admin-settings">
              {false && (
                <div className="no-ads">
                  <img src="./assets/imgs/star.png" alt="" />
                  <p className="fs-1">لا يوجد اعلانات منشورة في الوقت الحالى</p>
                  <div className="btns ">
                    <Link to={"/new-ad"} className="add-box">
                      <button className="btn btn-add ">
                        <span className="fs-1"> اضف اعلان</span>
                        <img
                          className="add-icon"
                          src="./assets/imgs/add.png"
                          alt="add"
                        />
                      </button>
                    </Link>
                  </div>
                </div>
              )}
              <table className="styled-table fs-1">
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td colSpan={2}>الإعلانات المنشورة</td>
                  </tr>
                  <tr>
                    <td className="color-main">السعر</td>
                    <td className="color-main"></td>
                    <td className="color-main">اسم الاعلان</td>
                    <td></td>
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
                    <td>
                      <div className="edit-watch color-main">
                        <div className="edit-watch-ad">
                          <span>عدل الاعلان</span>
                          <img
                            src="./assets/imgs/icon-edit.png"
                            alt="icon-watch"
                          />
                        </div>
                        <div className="edit-watch-ad">
                          <span>شاهد الاعلان</span>
                          <img
                            src="./assets/imgs/icon-watch.png"
                            alt="icon-watch"
                          />
                        </div>
                      </div>
                    </td>
                    <td>اليوم</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Chatbot />
      <Footer />
    </>
  );
}
