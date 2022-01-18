import type { NextPage } from "next";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

const Home: NextPage = () => {
  return (
    <div className="bg-black ">
      <Header />
      <Main />
    </div>
  );
};

export default Home;
