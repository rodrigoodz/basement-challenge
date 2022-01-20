import { GetStaticProps, NextPage } from "next";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { Product } from "../product/types";

interface Props {
  products: Product[];
}

const Home: NextPage<Props> = ({ products }) => {
  return (
    <div className="bg-black ">
      <Header />
      <Main products={products} />
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props, any> = async () => {
  const products: Product[] = await import("../product/mock.json").then(
    (res) => res.default
  );

  return {
    props: {
      products,
    },
  };
};

export default Home;
