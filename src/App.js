
function App() {
  return (
    <div >
      <MyComponent1 />
      {
        <div>
          <h1>hello Component</h1>
        </div>
      }
      <MyComponent2 />
      {
          <div>
                <p>lorem ipsum alkdjf alkdjf</p>
                <ul>
                    <li>lorem</li>
                    <li>ipsum</li>
                    <li>dolor</li>
                </ul>
                </div>
      }
    </div>
  );
}
function MyComponent1() {

              return(
            <>
                <h3>할 수 있다.</h3>
                <h3>해보자</h3>
            </>
              )
}
function MyComponent2() {
    return(
        <>
            <div>
                <h1>가즈아</h1>
                <h1>호잇</h1>
            </div>
        </>
    );
}

export default App;
