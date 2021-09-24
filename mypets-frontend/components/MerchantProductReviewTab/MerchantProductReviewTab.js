import { useState } from 'react'
import { 
    Box,
    Flex,
    Stack,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    useToast
} from "@chakra-ui/react"

import MerchantReviewsList from '../MerchantReviewsList/MerchantReviewsList'
import ProductSectionList from '../ProductSectionList/ProductSectionList'
import SortMenu from '../SortMenu/SortMenu'
import SectionHeader from '../SectionHeader/SectionHeader'
import AnimalList from '../AnimalList/AnimalList'

function MerchantProductReviewTab({ merchantProducts, categories, merchantReviews}) {

    const [sortMethod, setSortMethod] = useState('pop')
    const [selectedCategory, setSelectedCategory] = useState('All products')
    const fullCategories = ['All products'].concat(categories)
    const toast = useToast()

    const setCategorySelected = (cat) => {
        setCategoryToast(cat)
        setSelectedCategory(cat)
    }

    const setCategoryToast = (text) => toast({
        title: `Loading ${text}...`,
        status: 'info',
        duration: 3000,
        isClosable: true,
    })

    return (
        <Tabs variant='unstyled' size='md' defaultIndex={0} mt={12} p={0}>
            <TabList
                justifyContent='center'
            >
                <Tab 
                    rounded='full' 
                    _active={{ 
                        color: 'white', 
                        bgGradient: "linear(to-t, mypets.900, mypets.100)" 
                    }} 
                    _selected={{ 
                        color: 'white', 
                        bgGradient: "linear(to-t, mypets.900, mypets.100)" 
                    }}
                    mr={4}
                >
                    Products
                </Tab>
                <Tab 
                    rounded='full' 
                    _active={{ 
                        color: 'white', 
                        bgGradient: "linear(to-t, mypets.900, mypets.100)" 
                    }} 
                    _selected={{ 
                        color: 'white', 
                        bgGradient: "linear(to-t, mypets.900, mypets.100)" 
                    }}
                >
                    Reviews
                </Tab>
            </TabList>
            <TabPanels mt={4} px={0}>
                <TabPanel px={0}>
                    <Flex justifyContent='space-between' direction="row">
                        <Stack
                            w='100%'
                            direction="column"
                            spacing={{ base: 8, lg: 12 }}
                        >
                            <Stack
                                direction='row'
                                align='stretch'
                                justify='space-between'
                                display={{ base: 'none', lg: 'inherit' }}
                                bg='red.100'
                            >
                                <Box>
                                    <SectionHeader>
                                        Animal
                                    </SectionHeader>
                                    <AnimalList
                                        animals={pageAnimals}
                                        setSelectedAnimal={setSelectedAnimal}
                                    />
                                </Box>
                                <Spacer />
                                <SortMenu
                                    setSortMethod={setSortMethod}
                                />
                            </Stack>
                            <ProductSectionList 
                                products={merchantProducts} 
                                categories={fullCategories}
                                sortMethod={sortMethod}
                                setSortMethod={setSortMethod}
                                selectedAnimal=''
                            />
                        </Stack>
                        {/* <Stack
                            direction="column"
                            spacing={{ base: 8 }}
                            maxW='210px'
                            display={{ base: 'none', lg: 'inherit' }}
                        >
                            <SortMenu setSortMethod={setSortMethod}/>
                            <CategoryList
                                direction='column'
                                categories={fullCategories}
                                setSelectedCategory={setCategorySelected}
                            />
                        </Stack> */}
                    </Flex>
                </TabPanel>
                <TabPanel>
                    <MerchantReviewsList reviews={merchantReviews}/>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default MerchantProductReviewTab
