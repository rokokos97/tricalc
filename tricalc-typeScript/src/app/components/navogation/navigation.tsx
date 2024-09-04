import SwimBlock from '../swimBlock'
import RunBlock from '../runBlock'
import TriBlock from '../triBlock'
import { Route, Routes } from 'react-router'
import { NavLink } from 'react-router-dom'
import styles from './navigation.module.css'
import { access } from 'fs/promises'
import {useState} from 'react'
import { getEventListeners } from 'stream'
import { number } from 'prop-types'

interface INavigation {
    name:string
    id: number | string
    isActive: boolean
}

const Navigation = () => {
    const [navigation, setNavigation] = ([
        {
            name: 'RUNNING',
            id: 1,
            isActive: true,
            children: 
        },
        {
            name: 'SWIMMING',
            id: 2,
            isActive: false,
        },{
            name: 'TRIATHLON',
            id: 3,
            isActive: false,
        }
        
    ])

   const [navActive, setNavActive] = useState(styles.navActive) 
   const handleClick = () => {
    
   }
  return (
        <>
           <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink to='/'>
                            <span
                                 className={navActive}
                                 id='1'
                                 onClick={()=>handleClick()}
                            >RUNNING</span>
                        </NavLink>  
                    </li>
                    <li >
                        <NavLink to='/swimming'>
                            SWIMMING
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/triathlon'>
                            TRIATHLON
                        </NavLink>
                    </li>
                </ul>
            </nav>
           <Routes>
                <Route index element={<RunBlock/>}/>
                <Route path='/swimming' element={<SwimBlock/>}/>
                <Route path='/triathlon' element={<TriBlock/>}/>
           </Routes>
        </>
  )
}

export default Navigation
