function App() {
  const number = Math.ceil(Math.random() * 100);
  const isLarge = number > 50;
  const isSmall = number <= 50;
  return (
    <>
      <h1>난수 : {number}</h1>
      <h1>{number > 50 ? "큰수" : "작은 수"}</h1>
      <div>{number > 50 ? <BigImage /> : <smallImage />}</div>
      <div>{isLarge && <h1>큰 수다 </h1>}</div>
      <div>{isLarge || <h1>작은 수다 </h1>}</div>
    </>
  );
}

// built-in component는 소문자로 시작
// component 명은 꼭 대문자로 시작
// return 문을 가져야함
// return 값은 보통 JSX 코드
function BigImage() {
  return <h1>큰 이미지</h1>;
}
function smallImage() {
  return <h3></h3>;
}
export default App;
