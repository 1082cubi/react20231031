import "../style/style2.css";

export function Mycontainer() {
  return (
    <div>
      <h1 className="bosClass">lorem ipsum</h1>
      <h1 className={[style.boxClass, style.error, style.note].join}>
        lorem ipsum dolor
      </h1>
    </div>
  );
}
