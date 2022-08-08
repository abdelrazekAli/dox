import "./adDetails.css";

// Import components
import Slider from "../../components/slider/Slider";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";
import Chatbot from "../../components/chatbot/Chatbot";

export default function AdDetails() {
  return (
    <>
      <Navbar user={true} />
      <div className="ad-show">
        <div className="fill-container">
          <div className="header">
            <div className="title fs-1">
              <p> اسم الاعلان</p> <br /> عنوان الاعلان<span>|</span> تم إضافة
              الإعلان في 04:30 ص , 18 ديسمبر2021
            </div>
            <div className="btns">
              <button className="btn fs-1 f-bold">15,000,000 ج,م</button>
              <button className="fs-1 f-bold btn-icon">
                01155596710
                <img
                  className="add-icon"
                  src="./assets/imgs/phone.png"
                  alt="add"
                />
              </button>
            </div>
          </div>
          <Slider
            imgs={["car-cover.png", "car-cover-2.png", "car-cover-3.png"]}
          />
          <table className="styled-table fs-1">
            <tbody>
              <tr>
                <td>كيو 7</td>
                <td>موديل</td>
                <td className="color-main">مرسيدس</td>
                <td>الفئة</td>
              </tr>
              <tr>
                <td>معروض للبيع</td>
                <td>نوع الاعلان</td>
                <td className="color-main">15,000,000</td>
                <td>السعر</td>
              </tr>
              <tr>
                <td>رمادى</td>
                <td>اللون</td>
                <td className="color-main">جديد</td>
                <td>الحالة</td>
              </tr>
              <tr>
                <td>95,000</td>
                <td>كيلومترات</td>
                <td className="color-main">2021</td>
                <td>السنة</td>
              </tr>
              <tr>
                <td>اوتوماتيك</td>
                <td>ناقل للحركة</td>
                <td className="color-main">سيدان</td>
                <td>نوع الهيكل</td>
              </tr>
              <tr>
                <td>2200</td>
                <td>المحرك ( سى سى )</td>
                <td className="color-main">بنزين</td>
                <td>نوع الوقود</td>
              </tr>
              <tr className="no-border">
                <td colSpan={2} className="text-center">
                  إطارات خاصة
                </td>
                <td className="color-main">تكييف</td>
                <td>الاضافات</td>
              </tr>
              <tr className="no-border">
                <td colSpan={2} className="text-center">
                  فتحة سقف
                </td>
                <td className="color-main">مقاعد جلد</td>
                <td></td>
              </tr>
              <tr className="no-border">
                <td colSpan={2} className="text-center">
                  شاشة تعمل بالمس
                </td>
                <td className="color-main">وسائد هوائية</td>
                <td></td>
              </tr>
              <tr className="no-border">
                <td colSpan={2} className="text-center">
                  سنتر لوك
                </td>
                <td className="color-main">حامل السقف</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Chatbot />
      <Footer />
    </>
  );
}
