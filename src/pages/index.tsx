import { Box, Button, Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/pizza-menu");
  };

  return (
    <>
      <Head>
        <title>{`Sam's Pizza`}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
        }}>
        <main>
          <Box>
            <Typography>{`Welcome to Sam's Pizza`}</Typography>
            <Typography>{`This is the landing Page...`}</Typography>
            <Typography>{`Auth Page is Comming soon...`}</Typography>
          </Box>
          <Box>
            <Button
              onClick={handleClick}>{`Go to Product Details Page`}</Button>
          </Box>
        </main>
      </div>
    </>
  );
}
