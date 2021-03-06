import { useState } from "react";
import {
  Spacer,
  Box,
  Flex,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useToast,
} from "@chakra-ui/react";

import ProductSectionList from "../../Product/ProductSectionList/ProductSectionList";
import SortMenu from "../../Common/SortMenu/SortMenu";
import SectionHeader from "../../Layouts/SectionHeader/SectionHeader";
import AnimalList from "../../Common/AnimalList/AnimalList";
import { getAnimals } from "../../../utils/urls";

function MerchantProductReviewTab({
  merchantProducts,
  categories,
  merchantReviews,
}) {
  const [sortMethod, setSortMethod] = useState("pop");
  const [selectedCategory, setSelectedCategory] = useState("All products");
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const toast = useToast();

  // const setCategoryToast = (text) => toast({
  //     title: `Loading ${text}...`,
  //     status: 'info',
  //     duration: 3000,
  //     isClosable: true,
  // })

  return (
    <Flex justifyContent="space-between" direction="row" mt={8}>
      <Stack w="100%" direction="column" spacing={{ base: 8, lg: 12 }}>
        <Stack
          direction="row"
          align="stretch"
          justify="space-between"
          display={{ base: "none", lg: "inherit" }}
          // bg='red.100'
        >
          <Box>
            <SectionHeader>Animal</SectionHeader>
            <AnimalList
              animals={getAnimals(merchantProducts)}
              setSelectedAnimal={setSelectedAnimal}
            />
          </Box>
          <Spacer />
          <SortMenu setSortMethod={setSortMethod} />
        </Stack>
        <ProductSectionList
          products={merchantProducts}
          categories={categories}
          sortMethod={sortMethod}
          setSortMethod={setSortMethod}
          selectedAnimal={selectedAnimal}
        />
      </Stack>
    </Flex>
    // <Tabs variant="unstyled" size="md" defaultIndex={0} p={0}>
    //   <TabList justifyContent="center">
    //     <Tab
    //       rounded="full"
    //       _active={{
    //         color: "white",
    //         bgGradient: "linear(to-t, mypets.900, mypets.100)",
    //       }}
    //       _selected={{
    //         color: "white",
    //         bgGradient: "linear(to-t, mypets.900, mypets.100)",
    //       }}
    //       mr={4}
    //     >
    //       Products
    //     </Tab>
    //     {/* <Tab
    //       rounded="full"
    //       _active={{
    //         color: "white",
    //         bgGradient: "linear(to-t, mypets.900, mypets.100)",
    //       }}
    //       _selected={{
    //         color: "white",
    //         bgGradient: "linear(to-t, mypets.900, mypets.100)",
    //       }}
    //     >
    //       Reviews
    //     </Tab> */}
    //   </TabList>
    //   <TabPanels mt={4} px={0}>
    //     <TabPanel px={0}>

    //     </TabPanel>
    //     {/* <TabPanel>
    //       <MerchantReviewsList reviews={merchantReviews} />
    //     </TabPanel> */}
    //   </TabPanels>
    // </Tabs>
  );
}

export default MerchantProductReviewTab;
