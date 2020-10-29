// functional import
import React, {useState, useEffect, useRef } from 'react'
import io from 'socket.io-client'

// compositional import
import { motion } from 'framer-motion'
import styles from './chatRight.module.css'

function ChatRight() {
  const socketRef = useRef()

  const [userId, setUserId] = useState()
  // const [messages, setMessages] = useState([])
  // const [message, setMessage] = useState('')

  useEffect(() => {
   socketRef.current = io.connect('http://localhost:5000')
   socketRef.current.on('your id', id => {
    setUserId(id)
   })

  }, [])

  console.log(userId)

 return (
  <motion.div className={styles.right}>
   
  </motion.div>
 );
}

export default ChatRight