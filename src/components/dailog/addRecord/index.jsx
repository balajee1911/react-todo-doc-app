import "./style.scss";
import CloseIcon from "./../../../asserts/closeIcon.svg";
import { useForm } from "react-hook-form";
import { insertRecords } from "../../../services/services";

const AddRecord = ({ setOpen, open, getRecords }) => {
  const addRecords = async (data) => {
    const response = await insertRecords(data);
    alert("Record added successfully");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if (data) {
      setOpen(!open);
      addRecords(data);
      getRecords(true);
    }
  };

  return (
    <dialog className="add__record__component" open={open}>
      <img src={CloseIcon} alt="Close Icon" onClick={() => setOpen(!open)} />
      <div className="addRecord__component">
        <form
          className="create__record__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="title__input" className="heading__content">
            Title
          </label>
          <div className="input__field">
            <input
              className="title__input"
              placeholder="Enter your title"
              {...register("title", { required: true })}
            />
            {errors.title && <span>*Title is required</span>}
          </div>
          <label htmlFor="description__input" className="heading__content">
            Description
          </label>
          <textarea
            className="description__input"
            placeholder="Enter your description"
            {...register("description")}
          />
          <label htmlFor="priority__input" className="heading__content">
            Priority
          </label>
          <div className="input__field">
            <input
              type="number"
              min="1"
              max="5"
              className="priority__input"
              defaultValue="1"
              {...register("priority", { required: true })}
            />
            {errors.priority && (
              <span>*Please update priority of you record</span>
            )}
          </div>
          <button className="submit__button" type="submit">
            Create Record
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default AddRecord;
