import "./Styles/App.scss"
import "./Styles/intro.scss"
import "./Styles/section.scss"
import Intro from "./Components/Intro";
import Section from "./Components/Section";
function App() {
  return (
    <>
      <Intro />
      <Section  heading={"Welcome to FazalMahiFilms"} text={"Hy, I am Fazal-e-Rabi a proffesional photographer"} btnText={"See Portfolio"}/>
    </>
  );
}

export default App;
