import "./adminSettings1.css";
import { useState } from "react";

// Import components
import AdminNavbar from "../../components/header/AdminNavbar";
import DeleteCard from "../../components/deleteCard/DeleteCard";

// Import Companies data
import { MainCompaniesData } from "../../dummyData";
import { FavCompaniesData } from "../../dummyData";

export default function AdminSettings1() {
  // Show & Hide sections
  const [hideUpdateLogo, setHideUpdateLogo] = useState(false);
  const [hideUpdateMain, setHideUpdateMain] = useState(false);
  const [hideUpdateFav, setHideUpdateFav] = useState(false);
  // Upload imgs
  const [logo, setLogo] = useState(null);
  const [background, setBackground] = useState(null);
  const [img, setImg] = useState(null);
  const [img2, setImg2] = useState(null);

  return (
    <>
      <div className="admin-settings">
        <AdminNavbar page={"update"} admin={true} />

        <div className="fill-container">
          <div className="box">
            <div className="body">
              {/* Logo and background update */}
              <div
                className="header fs-1"
                onClick={() => setHideUpdateLogo(!hideUpdateLogo)}
              >
                <img src="./assets/imgs/chevron-down.png" alt="chevron-down" />
                <span>تحديث اللوجو و خلفية الموقع</span>
              </div>
              {!hideUpdateLogo && (
                <div className="admin-settings-cards grid-4  d-rtl">
                  <div className="card">
                    <div className="update-logo-box">
                      <div className="logo-header ">
                        <div className="logo-box">
                          {logo ? (
                            <img
                              src={URL.createObjectURL(logo)}
                              alt="img"
                              className="img-obj"
                            />
                          ) : (
                            <>
                              <img
                                src="./assets/imgs/logo.png"
                                className="logo"
                                alt="logo"
                              />
                              <div className="dox">
                                D<span className="text-light">o</span>X
                              </div>
                            </>
                          )}
                        </div>

                        <label className="img-box" htmlFor="logo">
                          <input
                            id="logo"
                            type="file"
                            accept="image/*"
                            onChange={(e) => setLogo(e.target.files[0])}
                            hidden
                          />
                          <img
                            src="./assets/imgs/add-image.png"
                            alt="add img"
                            className="add-img"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="btns">
                      <button className="btn fs-1 custom-main">احفظ</button>
                    </div>
                  </div>
                  <DeleteCard img={"nc-unsplas-1.png"} />
                  <label htmlFor="background">
                    <input
                      id="background"
                      type="file"
                      accept="image/*"
                      onChange={(e) => setBackground(e.target.files[0])}
                      hidden
                    />
                    {background ? (
                      <img
                        src={URL.createObjectURL(background)}
                        alt="img"
                        className="img-url"
                      />
                    ) : (
                      <img
                        src="./assets/imgs/add-image-2x.png"
                        alt="add img"
                        className="dirct-img"
                      />
                    )}
                  </label>
                </div>
              )}
              {/*  Main companies update*/}
              <div
                className="header fs-1"
                onClick={() => setHideUpdateMain(!hideUpdateMain)}
              >
                <img src="./assets/imgs/chevron-down.png" alt="chevron-down" />
                <span>تحديث الصفحات الرئيسية للشركات</span>
              </div>
              {!hideUpdateMain && (
                <div className="admin-settings-cards grid-4 d-rtl">
                  {MainCompaniesData.map((c) => (
                    <DeleteCard key={c.id} img={c.img} />
                  ))}

                  <label htmlFor="img">
                    <input
                      id="img"
                      type="file"
                      accept="image/*"
                      onChange={(e) => setImg(e.target.files[0])}
                      hidden
                    />
                    {img ? (
                      <img
                        src={URL.createObjectURL(img)}
                        alt="img"
                        className="img-url"
                      />
                    ) : (
                      <img
                        src="./assets/imgs/add-image-2x.png"
                        alt="add img"
                        className="dirct-img"
                      />
                    )}
                  </label>
                </div>
              )}
              {/*  Fav companies update*/}
              <div
                className="header fs-1"
                onClick={() => setHideUpdateFav(!hideUpdateFav)}
              >
                <img src="./assets/imgs/chevron-down.png" alt="chevron-down" />
                <span>تحديث الشركات المميزة</span>
              </div>
              {!hideUpdateFav && (
                <>
                  <div className="admin-settings-cards">
                    {/* cars */}
                    <span className="fs-1">سيارات</span>
                    <div className="grid-4 d-rtl">
                      {FavCompaniesData.map(
                        (c) =>
                          c.type === "cars" && (
                            <DeleteCard key={c.id} img={c.img} />
                          )
                      )}
                    </div>
                    {/* property */}
                    <span className="fs-1">عقارات</span>
                    <div className="grid-4 d-rtl">
                      {FavCompaniesData.map(
                        (c) =>
                          c.type === "property" && (
                            <DeleteCard key={c.id} img={c.img} />
                          )
                      )}
                    </div>
                    {/* mobiles */}
                    <span className="fs-1">موبايلات</span>
                    <div className="grid-4 d-rtl">
                      {FavCompaniesData.map(
                        (c) =>
                          c.type === "mobiles" && (
                            <DeleteCard key={c.id} img={c.img} />
                          )
                      )}
                    </div>
                    {/* accessories */}
                    <span className="fs-1">اكسسوارات</span>
                    <div className="grid-4 d-rtl">
                      {FavCompaniesData.map(
                        (c) =>
                          c.type === "accessories" && (
                            <DeleteCard key={c.id} img={c.img} />
                          )
                      )}
                    </div>
                    {/* medical supplies */}
                    <span className="fs-1">مستلزمات طبية</span>
                    <div className="grid-4 d-rtl">
                      {FavCompaniesData.map(
                        (c) =>
                          c.type === "medical" && (
                            <DeleteCard key={c.id} img={c.img} />
                          )
                      )}
                    </div>
                    {/* electronics & home appliances */}
                    <span className="fs-1">الكترونيات وأجهزة منزلية</span>
                    <div className="grid-4 d-rtl">
                      {FavCompaniesData.map(
                        (c) =>
                          c.type === "electronics" && (
                            <DeleteCard key={c.id} img={c.img} />
                          )
                      )}
                    </div>
                    {/* home furniture - decor */}
                    <span className="fs-1">اثاث منزلى - ديكور</span>
                    <div className="grid-4 d-rtl">
                      {FavCompaniesData.map(
                        (c) =>
                          c.type === "home" && (
                            <DeleteCard key={c.id} img={c.img} />
                          )
                      )}
                      <label htmlFor="img2">
                        <input
                          id="img2"
                          type="file"
                          accept="image/*"
                          onChange={(e) => setImg2(e.target.files[0])}
                          hidden
                        />
                        {img2 ? (
                          <img
                            src={URL.createObjectURL(img2)}
                            alt="img"
                            className="img-url"
                          />
                        ) : (
                          <img
                            src="./assets/imgs/add-image-2x.png"
                            alt="add img"
                            className="dirct-img"
                          />
                        )}
                      </label>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
