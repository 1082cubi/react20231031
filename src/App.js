import { MyElem, city, MyContainer } from "./MyBox";
import aaggee from "./component/MyElem";
import MyBox from "./component/MyBox";
import { person, country } from "./component";

function App() {
  return (
    <>
      <h1>{city}</h1>
      <h1>{aaggee}</h1>
      <MyContainer />
      <h1>
        {person.age},{person.name}
      </h1>
      <h1>{country}</h1>
    </>
  );
}

export default App;
