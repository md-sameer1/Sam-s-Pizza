import TopNav from "@/components/layout/top-nav";
import { Box } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <TopNav>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
        }}>
        Home
      </Box>
    </TopNav>
  );
};

export default Home;
