import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './home.module.css'

function Home() {
 return (
  <div className={styles.home}>

    <motion.h1
     initial={{ y: -500 }}
     animate={{ y: 200 }}
     transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
    > Welcome to MEST Hall </motion.h1>

    <motion.div className={styles.nav}
     initial={{ opacity: 0, x: 0, y: 150 }}
     animate={{ opacity: 1 }}
     transition={{ delay: 0.5, duration: 1 }}
    >

     <Link to='/signup'>
      <motion.h2> SIGN UP </motion.h2>
     </Link>

     <Link to='/login'>
      <motion.h2> LOG IN </motion.h2>
     </Link>

    </motion.div>

  </div>
 );
}

export default Home