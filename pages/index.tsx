import type { NextPage } from "next";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

const Home: NextPage = () => {
  return (
    <div className="bg-black ">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
