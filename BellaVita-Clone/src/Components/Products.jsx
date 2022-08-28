import styles from './Products.module.css';
import { SimpleGrid } from '@chakra-ui/react'
import Card from './Card';
export default function Products({ data }) {
    return (
        <SimpleGrid className={styles.gridContainer} columns={[2, 2, 4]} spacing='25px'>
            {
                data?.map((item) => (
                    <Card Hover={item.Hover} key={item.id} Image={item.Image} brand={item.brand} title={item.title} id={item.id} status={item.status} rating={item.rating} disPrice={item.disPrice} realPrice={item.realPrice} />
                ))
            }

        </SimpleGrid>
    )
}