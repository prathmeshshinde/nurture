import "./App.css";
import { Menu } from "./components/Menu";
import { Section } from "./components/Section";
import { Custom } from "./components/Custom";
import { Api } from "./components/api";

function App() {
  const [item] = Api();

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <div className="section-top">
        <h3>Lorem Ipsum is simply dummy text of the printing</h3>
      </div>
      <div className="section-hero" style={{ display: "flex" }}>
        <Menu />
        <Section />
        <Custom />
      </div>
    </div>
  );
}

export default App;
