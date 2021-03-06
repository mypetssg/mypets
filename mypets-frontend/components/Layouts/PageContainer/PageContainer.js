import { Container } from "@chakra-ui/react";

export default function PageContainer({ isFooter, children, ...props }) {
  return (
    <Container
      maxW={{ lg: "1200px" }}
      px={{ base: 4, xl: 0 }}
      pt={{ base: 10, lg: 14 }}
      mx="auto"
      {...props}
    >
      {children}
    </Container>
  );
}
