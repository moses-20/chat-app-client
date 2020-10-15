// functional import
import React, { useState, useEffect, useRef } from 'react'
import io from 'socket.io-client'

// compositional import
import { motion } from 'framer-motion'
import styles from './chat.module.css'
import ChatRight from '../components/chat.right/ChatRight'
import ChatLeft from '../components/chat.left/ChatLeft'


function Chat() {
 const socketRef = useRef()

 const [ userId, setUserId ] = useState()
 // const [ inbox, setInbox ] = useState([])
 // const [ outbox, setOutbox ] = useState('')


 useEffect(() => {
  socketRef.current = io.connect('http://localhost:5000')
  socketRef.current.on('your id', id => {
   setUserId(id)
  })

  console.log(userId)
 }, [ userId ])
 return (
  <motion.div className={styles.chat}
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   // transition={{ duration: 3 }}
  >
   <motion.div className={styles.overlay}>

    <ChatLeft />
    <ChatRight />

   </motion.div>
  </motion.div>
 )
}

export default Chat