import "./adminSettings3.css";
import { useState } from "react";

// Import components
import AdminNavbar from "../../components/header/AdminNavbar";

export default function AdminSettings3() {
  // Show & Hide sections
  const [hideAddAdmin, setHideAddAdmin] = useState(false);
  const [hideUpdatePass, setHideUpdatePass] = useState(false);
  const [hideDeleteAdmin, setHideDeleteAdmin] = useState(false);
  const [hideDeleteUser, setHideDeleteUser] = useState(false);
  return (
    <>
      <div className="admin-settings">
        <AdminNavbar page={"settings"} admin={true} />
        <div className="fill-container">
          <div className="box">
            <div className="body">
              {/* Add admin */}
              <div
                className="header fs-1"
                onClick={() => setHideAddAdmin(!hideAddAdmin)}
              >
                <img src="./assets/imgs/chevron-down.png" alt="chevron-down" />
                <span>إضافة مشرف</span>
              </div>
              {!hideAddAdmin && (
                <div className="admin-settings-cards auth ">
                  {/* Auth card */}
                  <div className="card w-40">
                    <div className="inputs">
                      <div className="name d-flex">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                      </div>
                      <input type="tel" placeholder="Phone Number" />
                      <input type="password" placeholder="Password" />
                      <input type="password" placeholder="Confirm Password" />
                      <h4 className="mt-10">Gender ?</h4>
                      <div className="radios ">
                        <div className="radio">
                          <input
                            type="radio"
                            id="male"
                            value="Male"
                            name="type"
                          />
                          <label for="women">Male</label>
                        </div>
                        <div className="radio">
                          <input
                            type="radio"
                            id="female"
                            value="Female"
                            name="type"
                          />
                          <label for="female">Female</label>
                        </div>
                      </div>
                      <h4 className="mt-10">Mission ?</h4>
                      <div className="radios ">
                        <div className="radio">
                          <input
                            type="radio"
                            id="update"
                            value="Update"
                            name="type"
                          />
                          <label for="update">Update</label>
                        </div>
                        <div className="radio">
                          <input
                            type="radio"
                            id="delete"
                            value="Delete"
                            name="type"
                          />
                          <label for="delete">Delete</label>
                        </div>
                      </div>
                      <div className="auth-add">
                        <button className="fs-1 text-light">Add</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Update password */}
              <div
                className="header fs-1"
                onClick={() => setHideUpdatePass(!hideUpdatePass)}
              >
                <img src="./assets/imgs/chevron-down.png" alt="chevron-down" />
                <span>تغيير كلمة السر</span>
              </div>
              {!hideUpdatePass && (
                <div className="settings">
                  <div className="settings-inputs">
                    <input
                      type="password"
                      placeholder="كلمة السر الحالية"
                      className="fs-1"
                    />
                    <input
                      type="password"
                      placeholder="كلمة السر الجديدة"
                      className="fs-1"
                    />
                    <input
                      type="password"
                      placeholder="إعادة كلمة السر الجديدة"
                      className="fs-1"
                    />
                    <div className="btns">
                      <button className="btn fs-1 main">احفظ</button>
                    </div>
                  </div>
                </div>
              )}
              {/* Delete admin */}
              <div
                className="header fs-1"
                onClick={() => setHideDeleteAdmin(!hideDeleteAdmin)}
              >
                <img src="./assets/imgs/chevron-down.png" alt="chevron-down" />
                <span>حذف مشرف</span>
              </div>
              {!hideDeleteAdmin && (
                <div className="table-box delete-admin">
                  <table className="styled-table fs-1">
                    <tbody>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="color-main">رقم الموبيل</td>
                        <td className="color-main">اسم المشرف</td>
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
                          </div>
                        </td>
                        <td></td>
                        <td></td>
                        <td>+20123456789</td>
                        <td>Admin 1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
              {/* Delete user */}
              <div
                className="header fs-1 mt-2"
                onClick={() => setHideDeleteUser(!hideDeleteUser)}
              >
                <img src="./assets/imgs/chevron-down.png" alt="chevron-down" />
                <span>حذف مستخدم</span>
              </div>
              {!hideDeleteUser && (
                <div className="delete-user">
                  <div className="title-input search-user-admin">
                    <div className="search-input ">
                      <input
                        type="text"
                        placeholder="اسم المستخدم"
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
                          <td></td>
                          <td></td>
                          <td className="color-main">رقم الموبيل</td>
                          <td className="color-main">اسم المستخدم</td>
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
                            </div>
                          </td>
                          <td></td>
                          <td></td>

                          <td>+20123456789</td>
                          <td>User 1</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
