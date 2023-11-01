import css from "../style/mystyle.css";
export function MyText() {
  return (
    <div>
      {/*red 배경색, white 글자색 */}
      {/*src/style/mystyle.css 파일 생성*/}
      {/*MyText.js 에서 mystyle.css import 하기 */}
      <h1 className={"{css.error} ${css.coffice} ${css.special}"}>lorem</h1>
      <h1 className={[css.coffee, css.special, css.error].join("")}></h1>
    </div>
  );
}
