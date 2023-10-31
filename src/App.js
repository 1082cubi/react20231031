function App() {
  // jsx가 js 코드로 변환됨
  // 따라서 js 키워드를 사용 할 수 없음
  return (
    <>
      {/*  class 속성은 className으로 작성*/}
      <div className="header">lorem ipsum</div>
      <div className="error">lorem ipsum</div>
      {/*for 속성은 htmlFor로 작성 */}
      <div>
        <label htmlFor="nameInput">이름</label>
        <input type="text" id="nameInput" />
      </div>
      <div>
        <label htmlFor="ageInput">이름</label>
        <input type="text" id="ageInput" />
      </div>
      {/*  */}
      <div className={}></div>
    </>
  );
}

function BigImage() {
  return <h1>큰 이미지</h1>;
}
function SmallImage() {
  return <h1>작은 이미지</h1>;
}
export default App;
