function App() {
  return (
    <>
      <MyComp name={"흥민"} address={"신촌"} age={33} city={"서울"} />
      <MyComp address={"강남"} age={322} city={"부산"} />
      <MyComp address={"런던"} city={"영국"} />
      <MyComp name="희찬" age={24} city={"파리"} />
    </>
  );
}

function MyComp({ name = "anonymous", address, city, age = 100 }) {
  return (
    <div>
      <p>
        {name} 온 {age}세 이고 {address}, {city}에 산다
      </p>
    </div>
  );
}

export default App;
