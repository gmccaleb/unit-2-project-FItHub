import { Trash } from "lucide-react";

function TrashButton({ onClick }) {
  return (
    <button className="trash-btn" onClick={onClick}>
      <Trash size={18} />
    </button>
  );
}

export default TrashButton;
