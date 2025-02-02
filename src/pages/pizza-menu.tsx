import TopNav from "@/components/layout/top-nav";
import React from "react";

const PizzaMenu = () => {
  return (
    <TopNav>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
        }}>
        {`Sam's Pizzeria`}
      </div>
    </TopNav>
  );
};

export default PizzaMenu;
