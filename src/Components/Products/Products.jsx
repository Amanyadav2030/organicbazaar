import styles from './Products.module.css';
import { SimpleGrid } from '@chakra-ui/react'
import Card from '../Card/Card';
import { useEffect } from 'react';
export default function Products({ data }) {
    useEffect(() => {
        console.clear();
    }, [])
    return (
        <SimpleGrid className={styles.gridContainer} columns={[2, 2, 4]} spacing={['2px', '25px', '25px']}>
            {
                data?.map((item) => (
                    <Card key={item._id} Hover={item.Hover} Img={item.Img} brand={item.brand} title={item.title} id={item._id} status={item.status} rating={item.rating} disPrice={item.disPrice} realPrice={item.realPrice} />
                ))
            }
        </SimpleGrid>
    )
}