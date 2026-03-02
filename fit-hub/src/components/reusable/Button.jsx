function Button({ text, onClick, type = "button", className = "" }) {
  return (
    <button type={type} onClick={onClick} className={`${className}-btn`}>
      {text}
    </button>
  );
}

export default Button;
