import Button from "../reusable/Button";

function ConfirmModal({ message, onConfirm, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="modal">

        <p className="modal-message">{message}</p>

        <div className="modal-actions">
          <Button
            type="button"
            className="modal-btn cancel"
            onClick={onCancel}
            text="Cancel"
          />

          <Button
            type="button"
            className="modal-btn confirm"
            onClick={onConfirm}
            text="Delete"
          />
        </div>

      </div>
    </div>
  );
}

export default ConfirmModal;