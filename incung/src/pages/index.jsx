import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import HomeMain from "../pages/home-3";
// import HomeMain from "../components/home";

const index = () => {
  return (
    <>
      <Seo pageTitle="Home-3" />
      <HomeMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
