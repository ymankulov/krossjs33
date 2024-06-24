import React from "react";
import bg from "../../assets/images/bg-home.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
    let nav = useNavigate()
  return (
    <div
      style={{
        background: `url(${bg}) no-repeat center/cover`,
        minHeight: "80vh",
      }}
    >
      <div className="container">
        <div className="h-[550px]"></div>
        <div className="flex items-center gap-5 justify-center">
          <button onClick={() => nav("/admin")} className="text-2xl font-bold w-[200px] h-[60px] bg-white">
            ADD TO CART
          </button>
          <button onClick={() => nav("/product")} className="text-2xl font-bold w-[200px] h-[60px] bg-black text-white border-2 border-solid border-white">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
