import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import mainImg from "../../assets/images/kite.png";
import mainImg2 from "../../assets/images/console.png";
import mainImg3 from "../../assets/images/coin.png";
import mainImg4 from "../../assets/images/kiteconnect.png";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl={mainImg}
        productname="Kite"
        productDiscription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3&hl=en_IN."
        appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
      />
      <RightSection
        imageUrl={mainImg2}
        productname="Console"
        productDiscription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      />
      <LeftSection
        imageUrl={mainImg3}
        productname="Coin"
        productDiscription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="coin"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3&hl=en_IN."
        appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
      />
      <RightSection
        imageUrl={mainImg4}
        productname="Kite"
        productDiscription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3&hl=en_IN."
        appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
      />
      <Universe/>
    </>
  );
}
export default ProductsPage;
