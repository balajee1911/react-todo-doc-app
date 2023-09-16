import "./style.scss";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import CloseIcon from "../../../asserts/closeIcon.svg";
import DeleteIcon from "../../../asserts/deleteIcon.svg";

const DeleteDialog = ({ open, setOpen, setWarnResponse }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      aria-describedby="alert-dialog-slide-description"
      onClose={handleClose}
      className="delete__dialog__component"
    >
      <DialogTitle>
        <div className="closeIcon">
          <img
            src={CloseIcon}
            alt="Close Icon"
            className="cursor__pointer"
            onClick={() => handleClose()}
          />
        </div>
      </DialogTitle>
      <DialogContent>
        <div className="delete__dialog__content">
          <img src={DeleteIcon} alt="Delete Icon" />
          <h2 className="heading__content">Are you sure?</h2>
          <p className="page__content">
            Do you really want to delete these records?
          </p>
        </div>
      </DialogContent>
      <DialogActions>
        <div className="delete__dialog__action_buttons">
          <button
            className="submit__button cursor__pointer"
            onClick={() => handleClose()}
          >
            Cancel
          </button>
          <button
            className="submit__button cursor__pointer delete__button"
            onClick={() => {
              handleClose();
              setWarnResponse(true);
            }}
          >
            Delete
          </button>
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
