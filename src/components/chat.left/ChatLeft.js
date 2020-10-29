import React from 'react'
import { motion } from 'framer-motion'
import styles from './chatLeft.module.css'

function ChatLeft() {
 return (
  <motion.div className={styles.left}>
   <div className={styles.leftTop}> <h2> MEST-Hall </h2> </div>
   <div className={styles.leftMiddle}> Active Chats </div>
   <div className={styles.leftBottom}> extra... </div>
  </motion.div>
 );
}

export default ChatLeft