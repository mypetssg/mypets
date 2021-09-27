import { useEffect, useState } from 'react'
import {
    SimpleGrid,
    Box
} from '@chakra-ui/react'

import SectionHeader from '../SectionHeader/SectionHeader'
import ProductListCard from '../ProductListCard/ProductListCard'

function ProductList({ heading, products, sortMethod, selectedAnimal, selectedMerchants }) {
    const [listProducts, setListProducts] = useState(products)

    const sortProductsAscending = (products) => {
        products.sort((a, b) => (a.variants[0].price < b.variants[0].price) ? -1: 1)
    }

    const sortProductsDescending = (products) => {
        products.sort((a, b) => (a.variants[0].price < b.variants[0].price) ? 1: -1)
    }

    const sortProductsPopularity = (products) => {
        products.sort((a, b) => (a.rating < b.rating) ? 1: -1)
    }

    if (sortMethod == 'asc') {
        sortProductsAscending(products)
    } else if (sortMethod == 'desc') {
        sortProductsDescending(products)
    } else if (sortMethod == 'pop') {
        sortProductsPopularity(products)
    }

    const filterProductsByAnimalMerchants = (products, animal, selectedMerchants) => {
        if (animal != '') {
            if (selectedMerchants) {
                console.log('selected merchants checked!')
                const filteredProducts = products.filter((product) => {
                    if (product.animal.name == animal && 
                        selectedMerchants.includes(product.merchant.name)) {
                        return product
                    }
                })
                return filteredProducts
            } else {
                const filteredProducts = products.filter((product) => {
                    if (product.animal.name == animal) {
                        return product
                    }
                })
                return filteredProducts
            }
        } else {
            return products
        }
    }

    useEffect(() => {
        const productByAnimal = filterProductsByAnimalMerchants(products, selectedAnimal, selectedMerchants)
        setListProducts(productByAnimal)

        console.log('animal filter selected: ', selectedAnimal)
        console.log('products filtered by animal: ', productByAnimal)
    }, [selectedMerchants])

    

    return (
        <Box>
            <SectionHeader>
                {heading}
            </SectionHeader>
            <SimpleGrid
                columns={{ base: 2, md: 4, lg: 4, xl: 5 }}
                spacing={{ base: 4 }}
            >
                {listProducts.map((product, index) => (
                    <ProductListCard product={product} key={index} />
                ))}
            </SimpleGrid>
        </Box>
    )
}

export default ProductList
