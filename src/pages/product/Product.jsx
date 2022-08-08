import "./product.css";
import { Ads1 } from "../../dummyData";

// Import components
import Slider from "../../components/slider/Slider";
import AdCard from "../../components/adCard/AdCard";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";
import Chatbot from "../../components/chatbot/Chatbot";
import FavCompanies from "../../components/favCompanies/FavCompanies";

export default function Product() {
  return (
    <>
      <Navbar />
      <div className="fill-container d-flex m-4">
        <Slider
          imgs={["car-cover.png", "car-cover-2.png", "car-cover-3.png"]}
        />
        <div className="search">
          <div className="position-relative btn-icon">
            <span className="mr-1 fs-1">سيارات للبيع</span>
            <img src="./assets/imgs/car.png" alt="car" />
          </div>
          <div className="inputs">
            <div className="input position-relative d-flex ">
              <input type="text" placeholder="موديل" />
              <img src="./assets/imgs/down-arrow.png" alt="icon" />
            </div>
            <div className="input position-relative d-flex ">
              <input type="text" placeholder="اختر الفئة" />
              <img src="./assets/imgs/down-arrow.png" alt="icon" />
            </div>
            <div className="input position-relative d-flex ">
              <input type="text" placeholder="السعر الى" />
              <img src="./assets/imgs/down-arrow.png" alt="icon" />
            </div>
            <div className="input position-relative d-flex ">
              <input type="text" placeholder="السعر من" />
              <img src="./assets/imgs/down-arrow.png" alt="icon" />
            </div>
            <div className="input position-relative d-flex ">
              <input type="text" placeholder="اللون" />
              <img src="./assets/imgs/down-arrow.png" alt="icon" />
            </div>
            <div className="input position-relative d-flex ">
              <input type="text" placeholder="الحالة" />
              <img src="./assets/imgs/down-arrow.png" alt="icon" />
            </div>
            <div className="input position-relative d-flex ">
              <input type="text" placeholder="كيلومترات" />
              <img src="./assets/imgs/down-arrow.png" alt="icon" />
            </div>
            <div className="input position-relative d-flex ">
              <input type="text" placeholder="السنة" />
              <img src="./assets/imgs/down-arrow.png" alt="icon" />
            </div>
            <div className="input position-relative d-flex ">
              <input type="text" placeholder="اختر الفئة" />
              <img src="./assets/imgs/down-arrow.png" alt="icon" />
            </div>
            <div className="input position-relative d-flex ">
              <input type="text" placeholder="ناقل الحركة" />
              <img src="./assets/imgs/down-arrow.png" alt="icon" />
            </div>
            <div className="input position-relative d-flex ">
              <input type="text" placeholder="المحرك (سى سى )" />
              <img src="./assets/imgs/down-arrow.png" alt="icon" />
            </div>
            <div className="input position-relative d-flex ">
              <input type="text" placeholder="نوع الوقود" />
              <img src="./assets/imgs/down-arrow.png" alt="icon" />
            </div>
            <div className="input position-relative d-flex ">
              <input type="text" placeholder="نوع الاعلان" />
              <img src="./assets/imgs/down-arrow.png" alt="icon" />
            </div>
            <div className="input position-relative d-flex ">
              <input type="text" placeholder="اضافات" />
              <img src="./assets/imgs/down-arrow.png" alt="icon" />
            </div>
          </div>
          <div className="btns my-1">
            <div className="add-box">
              <button className="btn btn-add  search-btn">
                <span className="fs-1">ابحث</span>
                <img
                  className="add-icon"
                  src="./assets/imgs/search.png"
                  alt="add"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <FavCompanies imgs={["n_1.png", "n_2.png", "n_3.png", "n_4.png"]} />

      <div className="container">
        <div className="ads">
          {Ads1.map((ad) => (
            <AdCard card={ad} key={ad.id} />
          ))}
        </div>
      </div>
      <Chatbot />
      <Footer />
    </>
  );
}
