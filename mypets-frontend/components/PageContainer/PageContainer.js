import { Container } from '@chakra-ui/react'

function PageContainer({ children, ...props }) {
    return (
        <Container
            minH={{ md: '100vh' }}
            maxW={{ lg: "1200px" }}
            px={{ base: 4, xl: 0 }}
            py={{ base: 4, lg: 12 }}
            {...props}
        >
            {children}
        </Container>
    )
}

export default PageContainer
