import "./deleteCard.css";

export default function DeleteCard({ img }) {
  return (
    <div className="delete-card">
      <img
        className="delete-card-img"
        src={`./assets/imgs/admin-settings/${img}`}
        alt="img cart"
      />
      <button className="btn fs-1">
        حذف
        <img src="./assets/imgs/delete.png" alt="delete icon" />
      </button>
    </div>
  );
}
