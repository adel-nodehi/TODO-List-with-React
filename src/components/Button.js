export default function Button({
  bgColor,
  textColor = "#000",
  onClick,
  children,
}) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
