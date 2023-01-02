import styles from './Navbar.module.css';
import { background, Badge, Center, Divider, HStack } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import SkinCare from './SkinCare';
import HairCare from './HairCare';
import BodyCare from './BodyCare';
import Perfumes from './Perfumes';
import Combos from './Combos';
import { useEffect, useReducer, useState } from 'react';
import { reducer } from './reducer';
import { funBodyCare, funCombos, funHairCare, funPerfumes, funSkinCare } from './Action';

const initState = {
    skincare: false,
    haircare: false,
    bodycare: false,
    perfumes: false,
    combos: false
}
const links = [
    { page: 'SHOPALL', link: '/allproducts' },
    { page: 'BESTSELLER', link: '/bestseller' },
    { page: 'SKINCARE', link: '/skincare' },
    { page: 'HAIRCARE', link: '/haircare' },
    { page: 'BODYCARE', link: '/bodycare' },
    { page: 'PERFUMES', link: '/perfumes' },
]
export default function Navbar() {
    const [state, dispatch] = useReducer(reducer, initState);
    const redirect = useNavigate()
    useEffect(() => {
        console.clear();
    }, [])
    return (
        <nav style={{
            position: "sticky",
            top: '-1px',
            zIndex: 5,
            background: "white"
        }} className='Nav'>

            <ul id="navbarLinks" className={styles.Navbar}>
                <li><Link to='/allproducts'>SHOP ALL</Link></li>
                <Center height='30px' >
                    <Divider orientation='vertical' background='#0c322f33' border='1px' />
                </Center>
                <li><Link to='/'>NEW ARRIVALS</Link></li>
                <Center height='30px' >
                    <Divider orientation='vertical' background='#0c322f33' border='1px' />
                </Center>
                <li><Link to='/bestseller'>BESTSELLERS</Link></li>
                <Center height='30px' >
                    <Divider orientation='vertical' background='#0c322f33' border='1px' />
                </Center>
                <li onMouseEnter={() => dispatch(funSkinCare(true))} onMouseLeave={() => dispatch(funSkinCare(false))}>
                    <Link to='/skincare'>SKIN CARE</Link>
                    {/* <SkinCare /> */}
                    {state.skincare && <SkinCare />}
                </li>
                <Center height='30px' >
                    <Divider orientation='vertical' background='#0c322f33' border='1px' />
                </Center>
                <li onMouseEnter={() => dispatch(funHairCare(true))} onMouseLeave={() => dispatch(funHairCare(false))}>
                    <Link to='/haircare'>HAIR CARE</Link>
                    {state.haircare && <HairCare />}
                </li>
                <Center height='30px' >
                    <Divider orientation='vertical' background='#0c322f33' border='1px' />
                </Center>
                <li onMouseEnter={() => dispatch(funBodyCare(true))} onMouseLeave={() => dispatch(funBodyCare(false))}>
                    <Link to='/bodycare'>BODY CARE</Link>
                    {state.bodycare && <BodyCare />}
                </li>
                <Center height='30px' >
                    <Divider orientation='vertical' background='#0c322f33' border='1px' />
                </Center>
                <li onMouseEnter={() => dispatch(funPerfumes(true))} onMouseLeave={() => dispatch(funPerfumes(false))}>
                    <Link to='/perfumes'>PERFUMES</Link>
                    {state.perfumes && <Perfumes />}
                </li>
                <Center height='30px' >
                    <Divider orientation='vertical' background='#0c322f33' border='1px' />
                </Center>
                <li onMouseEnter={() => dispatch(funCombos(true))} onMouseLeave={() => dispatch(funCombos(false))}><Link to='/'>COMBOS</Link>

                    {state.combos && <Combos />}
                </li>
                <Center height='30px' >
                    <Divider orientation='vertical' background='#0c322f33' border='1px' />
                </Center>
                <li><Link to='/'>BUILD A BOX</Link> </li>
            </ul>
            <HStack background={'white !important'} p={'0.5rem'} className={styles.scroll} display={['flex', 'none', 'none']} overflow={'hidden'} overflowX={'auto'} w={['100%', '100%', null]}>
                {
                    links?.map((el) => (
                        <Badge onClick={() => redirect(el.link)} fontSize={'0.9rem'} variant='subtle' p={'0.4rem'} colorScheme='green'>
                            {el.page}
                        </Badge>
                    ))
                }
            </HStack>
        </nav>
    )
}

// onMouseEnter={() => } onMouseLeave={() => }