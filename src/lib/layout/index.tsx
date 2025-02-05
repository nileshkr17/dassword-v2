import { Box, Flex } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Blur from "../components/Blur";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      margin="0 auto"
      maxWidth={{ base: 800, md: "80vw" }}
      transition="0.5s ease-out"
    >
      <Blur
        position={"absolute"}
        top={-100}
        left={-100}
        style={{ filter: "blur(80px)" }}
      />
      <Blur
        position={"fixed"}
        bottom={-100}
        right={-100}
        style={{ filter: "blur(80px)" }}
        transform={"scaleX(-1) scaleY(-1)"}
      />
      <Flex wrap="wrap" margin="8" minHeight="90vh">
        <Header />
        <Box width="full" as="main" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Flex>
    </Box>
  );
};

export default Layout;
