import React from 'react'
import { motion } from 'framer-motion'
import styles from './chatRight.module.css'

function ChatRight() {
 return (
  <motion.div className={styles.right}>
   <div className={styles.rightTop}> chat topic </div>
   <div className={styles.rightMiddle}> room </div>
   <div className={styles.rightBottom}> input </div>
  </motion.div>
 );
}

export default ChatRight