import { Container } from "@chakra-ui/react";

export default function PageContainer({ isFooter, children, ...props }) {
  return (
    <Container
      maxW={{ lg: "1200px" }}
      px={{ base: 4, xl: 0 }}
      pt={{ base: 4, lg: 12 }}
      bg="red.100"
      mx="auto"
      // pb={isFooter == true ? { base: 4, lg: 12 } : { base: 512, lg: 96 }}
      {...props}
    >
      {children}
    </Container>
  );
}
