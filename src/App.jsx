import "./App.css";
import Banner from "./Components/Banner/Banner";
import CartSection from "./Components/CartSection/CartSection";
import NavBar from "./Components/NavBar/NavBar";
import UsersNumber from "./Components/UsersNumber/UsersNumber";

function App() {
  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <UsersNumber></UsersNumber>

    <CartSection></CartSection>
    </>
  );
}

export default App;
