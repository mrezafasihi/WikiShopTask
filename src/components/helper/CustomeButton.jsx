
function CustomeButton({ title, style, onClick }) {
  return (
    <button onClick={onClick} className={`${style}  `}>
      {title}
    </button>
  );
}

export default CustomeButton;
