import { Box, Spacer, Stack } from "@chakra-ui/react";

import SectionHeader from "../../Layouts/SectionHeader/SectionHeader";
import AnimalList from "../../Common/AnimalList/AnimalList";
import SortMenu from "../../Common/SortMenu/SortMenu";

function index({ pageAnimals, setSelectedAnimal, setSortMethod }) {
  "page animal in animal category selection: ", pageAnimals;
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      align="stretch"
      justify="space-between"
    >
      <Box mb={{ base: 2, md: 0 }}>
        <SectionHeader>Animal</SectionHeader>
        <AnimalList
          animals={pageAnimals}
          setSelectedAnimal={setSelectedAnimal}
        />
      </Box>
      <Spacer />
      <SortMenu setSortMethod={setSortMethod} />
    </Stack>
  );
}

export default index;
