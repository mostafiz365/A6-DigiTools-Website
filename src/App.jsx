import "./App.css";
import Banner from "./Components/Banner/Banner";
import CartSection from "./Components/CartSection/CartSection";
import GuideSection from "./Components/GuideSection/GuideSection";
import NavBar from "./Components/NavBar/NavBar";
import UsersNumber from "./Components/UsersNumber/UsersNumber";

function App() {
  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <UsersNumber></UsersNumber>

    <CartSection></CartSection>

    <GuideSection></GuideSection>
    </>
  );
}

export default App;
