import Head from 'next/head'
import { Container, Box, Img, Stack, HStack, VStack, Text, Flex, SimpleGrid, Heading, Button, } from "@chakra-ui/react"
import Navbar from "../components/Navbar/Navbar"
import SortMenu from '../components/SortMenu/SortMenu'
import MerchantSectionList from '../components/MerchantSectionList/MerchantSectionList'
import ProductSectionList from '../components/ProductSectionList/ProductSectionList'
import CategoryList from '../components/CategoryList/CategoryList'
import { API_PRODUCTS_URL, API_CATEGORIES_URL, API_MERCHANTS_URL } from '../utils/urls'

export default function Home({ products, categories, merchants }) {

  // console.log('downloading new products...')
  // console.log(products)
  // console.log(categories)
  // console.log(merchants)

  return (
    <>
      <Navbar />
      <Container maxW="1200px" mb={6}>
        <Box mt={4}>
          <Img boxSize="100%" objectFit="cover" src="/MachoPawz_banner@2x@2x.png" alt="merchant banner"></Img>
        </Box>
        <Flex justifyContent='space-between' direction="row">
          <Flex direction="column" w="100%" mr={12}>
            <MerchantSectionList merchants={merchants}/>
            <ProductSectionList products={products}/>
          </Flex>
          <Flex direction="column" w='210px'>
            <SortMenu />
            <CategoryList categories={categories}/>
          </Flex>
        </Flex>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  // Fetch merchants, products 
  const product_res = await fetch(`${API_PRODUCTS_URL}`)
  const products = await product_res.json()

  const category_res = await fetch(`${API_CATEGORIES_URL}`)
  const categories = await category_res.json()

  const merchant_res = await fetch(`${API_MERCHANTS_URL}`)
  const merchants = await merchant_res.json()

  // Return as props
  return {
    props: {
      products,
      categories,
      merchants
    }
  }
}



