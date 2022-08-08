import "./dropdown.css";

export default function Dropdown() {
  const optionsLink = (e) => {
    switch (e.target.value) {
      case "1":
        window.location.replace("/");
        break;
      case "2":
        window.location.replace("/");
        break;
      case "3":
        window.location.replace("/");
        break;
      case "4":
        window.location.replace("/");
        break;
      case "5":
        window.location.replace("/");
        break;
      case "6":
        window.location.replace("/");
        break;
      case "7":
        window.location.replace("/");
        break;
      case "8":
        window.location.replace("/");
        break;
      case "9":
        window.location.replace("/");
        break;
      default:
        break;
    }
  };
  return (
    <select
      name="cars"
      id="categories"
      className="custom-select fs-1"
      onChange={optionsLink}
    >
      <option disabled></option>
      <option value="1">سيارات للبيع</option>
      <option value="2">سيارات للايجار</option>
      <option value="3">عقارات للبيع</option>
      <option value="4">عقارات للايجار</option>
      <option value="6">موبايلات</option>
      <option value="5">اكسسوارات</option>
      <option value="6">مستلزمات طبيه</option>
      <option value="8">اثاث منزلى - ديكور</option>
      <option value="7">الكترونيات وأجهزة منزلية</option>
      <option disabled></option>
    </select>
  );
}
