function App() {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <MyComp />
      <MyComp />
      <MyComp />
    </div>
  );
}
function MyComp() {
  const name = "흥민";
  return (
    <>
      <div style={{ backgroundColor: "blue", color: "yellow" }}>{name}</div>;
    </>
  );
}

export default App;
