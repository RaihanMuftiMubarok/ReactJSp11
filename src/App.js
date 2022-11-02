import logo from "./logo.svg";
import "./App.css";

function App() {
  const userLogged = "Raihan";
  const userLoggedJSX = <strong>Raihan for waifu </strong>;

  return (
    <div className="App">
      <div className="Foto">
        <img src="rubik.jpg" />
      </div>
      <div className="Deskripsi">
        <p className="Cate">RUBIK'S CUBE</p>
        <h1 className="Title">XIAOMI GIIKER</h1>
        <p className="Price">$ 46.15</p>
        <p className="Info">
          In the age of modern technologies and information society,
          modernization has not bypassed even such puzzles as the Rubik's Cube!
          It is surprising and unusual to hear such a phrase as “smart cube”,
          however, progress does not stand still and you can already see
          instances of this GiiKER Super Cube i3s puzzle from the global brand
          XiaoMi.
        </p>
        <div>
          <p><b>Type</b></p>
          <button className="s">2x2</button>
          <button className="m">3x3</button>
          <button className="l">4x4</button>
          <button className="xl">5x5</button>
        </div>
        <div>
        <button className="buy">BUY NOW</button>
        <button className="add">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

export default App;
