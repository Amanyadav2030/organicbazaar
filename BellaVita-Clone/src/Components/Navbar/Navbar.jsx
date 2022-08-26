import styles from './Navbar.module.css';
import { background, Center, Divider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import SkinCare from './SkinCare';
import HairCare from './HairCare';
import BodyCare from './BodyCare';
import Perfumes from './Perfumes';
import Combos from './Combos';
import { useReducer, useState } from 'react';
import { reducer } from './reducer';
import { funBodyCare, funCombos, funHairCare, funPerfumes, funSkinCare } from './Action';

const initState = {
    skincare: false,
    haircare: false,
    bodycare: false,
    perfumes: false,
    combos: false
}
export default function Navbar() {
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <nav style={{
            position: "sticky",
            top: '-1px',
            zIndex: 5,
            background: "white"
        }}>

            <ul id="navbarLinks" className={styles.Navbar}>
                <li><Link to='/'>SHOP ALL</Link></li>
                <Center height='30px' >
                    <Divider orientation='vertical' background='#0c322f33' border='1px' />
                </Center>
                <li><Link to='/'>NEW ARRIVALS</Link></li>
                <Center height='30px' >
                    <Divider orientation='vertical' background='#0c322f33' border='1px' />
                </Center>
                <li><Link to='/'>BESTSELLERS</Link></li>
                <Center height='30px' >
                    <Divider orientation='vertical' background='#0c322f33' border='1px' />
                </Center>
                <li onMouseEnter={() => dispatch(funSkinCare(true))} onMouseLeave={() => dispatch(funSkinCare(false))}>
                    <Link to='/'>SKIN CARE</Link>
                    {/* <SkinCare /> */}
                    {state.skincare && <SkinCare />}
                </li>
                <Center height='30px' >
                    <Divider orientation='vertical' background='#0c322f33' border='1px' />
                </Center>
                <li onMouseEnter={() => dispatch(funHairCare(true))} onMouseLeave={() => dispatch(funHairCare(false))}>
                    <Link to='/'>HAIR CARE</Link>
                    {state.haircare && <HairCare />}
                </li>
                <Center height='30px' >
                    <Divider orientation='vertical' background='#0c322f33' border='1px' />
                </Center>
                <li onMouseEnter={() => dispatch(funBodyCare(true))} onMouseLeave={() => dispatch(funBodyCare(false))}>
                    <Link to='/'>BODY CARE</Link>
                    {state.bodycare && <BodyCare />}
                </li>
                <Center height='30px' >
                    <Divider orientation='vertical' background='#0c322f33' border='1px' />
                </Center>
                <li onMouseEnter={() => dispatch(funPerfumes(true))} onMouseLeave={() => dispatch(funPerfumes(false))}>
                    <Link to='/'>PERFUMES</Link>
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

        </nav>
    )
}

// onMouseEnter={() => } onMouseLeave={() => }