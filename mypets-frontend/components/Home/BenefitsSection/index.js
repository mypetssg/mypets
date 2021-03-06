import { Box, SimpleGrid } from "@chakra-ui/react";
import SectionHeader from "../../Layouts/SectionHeader/SectionHeader";
import BenefitCard from "./BenefitCard";
import PageContainer from "../../Layouts/PageContainer/PageContainer";

function index({ benefits, spacing = 4, ...props }) {
  return (
    <Box bg="mypets.400">
      <PageContainer pb={{ base: 8, lg: 12 }} {...props}>
        <SectionHeader textAlign="center">{benefits.Header}</SectionHeader>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={spacing}>
          {benefits.benefit.map((benefit, i) => (
            <BenefitCard key={`benefit_${i}`} benefit={benefit} />
          ))}
        </SimpleGrid>
      </PageContainer>
    </Box>
  );
}

export default index;
