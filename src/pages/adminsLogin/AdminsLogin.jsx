import "./adminsLogin.css";

export default function AdminsLogin() {
  return (
    <div className="admins-login fs-1">
      <div className="logo-header mt-2 ">
        <div className="logo-box">
          <img src="./assets/imgs/logo.png" className="logo" alt="logo" />
          <div className="dox">
            D<span className="text-light">o</span>X
          </div>
        </div>
      </div>
      <h2 className="text-light">System Adminstrator</h2>
      <h2 className="text-reflect">System Adminstrator</h2>
      <div className="input mt-1">
        <span className="text-light">Admin</span>
        <input type="email" className="ml-1 fs-1" />
      </div>
      <div className="input">
        <span className="text-light">Password</span>
        <input type="password" className="fs-1" />
      </div>
      <div className="btns">
        <button className="btn fs-1">Log In</button>
      </div>
    </div>
  );
}
