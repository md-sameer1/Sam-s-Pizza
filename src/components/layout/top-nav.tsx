import {
  AppBar,
  Badge,
  badgeClasses,
  Box,
  Button,
  Container,
  IconButton,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import PizzaSVG from "@/components/svg-icons/pizza-svg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRouter } from "next/router";

interface TopNavProps {
  children: React.ReactNode;
}

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

const TopNav: React.FC<TopNavProps> = ({ children }) => {
  const router = useRouter();

  const handlePageNavigation = (page: string) => () => {
    if (page === "Home") {
      router.push("/home");
    } else if (page === "Menu") {
      router.push("/pizza-menu");
    }
  };
  return (
    <div>
      <AppBar
        position="sticky"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          bgcolor: "#ffac0e",
          borderRadius: "50px",
          paddingX: 5,
        }}>
        <Box>
          <Toolbar>
            <Box>
              <PizzaSVG width={60} height={70} />
            </Box>

            <Typography
              fontStyle={"italic"}
              fontWeight={"bold"}
              sx={{ color: "black" }}
              fontFamily={"cursive"}
              variant="h5">{`Sam's Pizzeria`}</Typography>
          </Toolbar>
        </Box>

        <Box sx={{ marginRight: "200px" }}>
          <Button onClick={handlePageNavigation("Home")}>
            <Typography
              fontFamily={"cursive"}
              fontSize={"20px"}
              sx={{ textTransform: "none", color: "black" }}>
              Home
            </Typography>
          </Button>
          <Button onClick={handlePageNavigation("Menu")}>
            <Typography
              fontFamily={"cursive"}
              fontSize={"20px"}
              sx={{ textTransform: "none", color: "black" }}>
              Menu
            </Typography>
          </Button>
        </Box>

        <Box>
          <IconButton>
            <ShoppingCartIcon fontSize="medium" />
            <CartBadge badgeContent={1} color="secondary" />
          </IconButton>
        </Box>
      </AppBar>

      <Container>{children}</Container>
    </div>
  );
};

export default TopNav;
