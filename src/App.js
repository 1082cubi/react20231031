function App() {
  const myStuyle = {
    // js object
    color: "blue",
    backgroundcolor: "gold", // lowerCamelCase
    fontSize: "70px",
    testAlign: "center",
  }; // js object
  return (
    <>
      {/*  style 속성은 객체로 주어야 함 */}
      <div style={myStuyle}>lorem ipsum dolor</div>
      <hr />
      <div
        style={{ color: "red ", backgroundColor: "yellow", fontSize: "30px" }}
      >
        lorm ipum dolor.
      </div>
    </>
  );
}

export default App;
