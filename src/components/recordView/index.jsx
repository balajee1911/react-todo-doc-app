import "./style.scss";
import DeleteIcon from "../../asserts/deleteIcon.svg";

const RecordView = ({
  index,
  record,
  openDeleteWarning,
  setDeleteData,
  setShowOptions,
  showOptions,
}) => {
  return (
    <div className="records__view__component">
      <div
        className={"record__view"}
        key={index}
        onClick={() => setShowOptions(index !== showOptions ? index : null)}
      >
        <p className="page__content">{record?.title}</p>
        <p className="page__content">{record?.description}</p>
        <p className="page__content">{record?.priority}</p>
        <p className="page__content">
          {record?.createdAt
            ? new Date(record.createdAt)?.toLocaleString()
            : "Date Not Found"}
        </p>
        <p className="page__content">
          {record?.updatedAt
            ? new Date(record.updatedAt)?.toLocaleString()
            : "Date Not Found"}
        </p>
      </div>
      {showOptions === index && (
        <div className="options">
          <button className="edit__button">Edit Record</button>
          <img
            src={DeleteIcon}
            alt="Delete Icon"
            onClick={() => {
              openDeleteWarning(true);
              setDeleteData(record?._id);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default RecordView;
