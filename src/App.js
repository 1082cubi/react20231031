import MyBox, { city, country, adderss } from "./compnent/MyBox";
import { address } from "./component/MyBox";
import MyElem, { address as myAddress } from "./compnent/MyElem";

//as로 named export 값을 import할 때 별칭을 줄 수 있음
function App() {
  return (
    <>
      <h1>{address}</h1>
      <h1>{myAddress}</h1>
      <MyElem />
      <MyElem />
    </>
  );
}

export default App;
