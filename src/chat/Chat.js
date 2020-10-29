// functional import
import React from 'react'
import { motion } from 'framer-motion'
import styles from './chat.module.css'
import ChatRight from '../components/chat.right/ChatRight'
import ChatLeft from '../components/chat.left/ChatLeft'


function Chat() {

 return (
  <motion.div className={styles.chat}
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   transition={{ duration: 1.5 }}
  >
   <motion.div className={styles.overlay}>

    <ChatLeft />
    <ChatRight />

   </motion.div>
  </motion.div>
 )
}

export default Chat