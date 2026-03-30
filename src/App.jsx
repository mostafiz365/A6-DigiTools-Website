import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import CartSection from "./Components/CartSection/CartSection";
import GuideSection from "./Components/GuideSection/GuideSection";
import NavBar from "./Components/NavBar/NavBar";
import PricingCarts from "./Components/PricingCarts/PricingCarts";
import UsersNumber from "./Components/UsersNumber/UsersNumber";
import WorkflowSection from "./Components/WorkflowSection/WorkflowSection";
import Footer from "./Components/Footer/Footer";

const fetchPricingData = async() => {
  const res = await fetch('PricingData.json');
  return res.json();
}

function App() {
  const pricingDataPromise = fetchPricingData();

  const [navCount, setNavCount] = useState(0);

  const handleNavCount = () => {
    
  }

  return (
    <>
    <NavBar navCount={navCount} setNavCount={setNavCount}></NavBar>
    <Banner></Banner>
    <UsersNumber></UsersNumber>

    <CartSection handleNavCount={handleNavCount} navCount={navCount} setNavCount={setNavCount}></CartSection>

    <GuideSection></GuideSection>
    <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
     <PricingCarts pricingDataPromise={pricingDataPromise}></PricingCarts>
    </Suspense>

    <WorkflowSection></WorkflowSection>

    <Footer></Footer>
    </>
  );
}

export default App;
