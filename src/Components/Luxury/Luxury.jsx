import { Box, SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import styles from './luxury.module.css'
export default function Luxury() {
    return (
        <div className={styles.luxury}>
            <SimpleGrid columns={[2, null, 5]} spacing='40px'>
                <Box className={styles.box} >
                    <Link to='/'>
                        <img className={styles.image} src="https://cdn.shopify.com/s/files/1/0561/9256/5292/files/category_tile_men_680x680.jpg?v=1652265181" alt="" />
                    </Link>
                </Box>
                <Box className={styles.box}>
                    <Link to='/'>
                        <img className={styles.image} src="https://cdn.shopify.com/s/files/1/0561/9256/5292/files/category_tile_women_680x680.jpg?v=1652265252" alt="" />
                    </Link>
                </Box>
                <Box className={styles.box}>
                    <Link to='/'>
                        <img className={styles.image} src="https://cdn.shopify.com/s/files/1/0561/9256/5292/files/category_tile_little_luxuries_680x680.jpg?v=1652266061" alt="" />
                    </Link>
                </Box>
                <Box className={styles.box}>
                    <Link to='/'>
                        <img className={styles.image} src="https://cdn.shopify.com/s/files/1/0561/9256/5292/files/category_tile_unisex_680x680.jpg?v=1652266096" alt="" />
                    </Link>
                </Box>
                <Box className={styles.box}>
                    <Link to='/'>
                        <img className={styles.image} src="https://cdn.shopify.com/s/files/1/0561/9256/5292/files/category_tile_giftsets_680x680.jpg?v=1652266120" alt="" />
                    </Link>
                </Box>
            </SimpleGrid>

        </div>

    )
}