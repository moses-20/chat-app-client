import React, { useState } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './login.module.css'

function Login() {

 const [ user, setUser ] = useState({
  username: '',
  password: ''
 })

 const history = useHistory()

 const handleLogIn = (e) => {
  e.preventDefault()
 
  const username = user.username
  const password = user.password
 
  axios.post('http://localhost:5000/api/login', { username, password })
  .then(res => {
   if(res.data) {
    history.push('/chat')
    console.log(res.data)
   } else {
   history.push('/signup')
   }
  })
  .catch(err => {
   console.log(err)
  })
 }

 return (
  <div className={styles.login}>

   <motion.div className={styles.nav}
    initial={{ y: -150 }}
    animate={{ y: 50 }}
    transition={{ type: 'spring', stiffness: 120 }}
   >
    <Link to='/'>
     <h2> Go Home </h2>
    </Link>
   </motion.div>

   <motion.form
    //  form attributes
    className={styles.form}

    // motion attributes
    initial={{ opacity: 0, y: 130 }}
    animate={{ opacity: 1, y: 130 }}
    transition={{ delay: 0.5 }}
   >

    <input
     type='text'
     required
     value={user.username}
     onChange={e => setUser({ ...user, username: e.target.value })}
     placeholder='enter your username'
    />

    <input 
     type='password'
     required
     placeholder='enter your password'
     value={user.password}
     onChange={e => setUser({ ...user, password: e.target.value})}
    />

    <input
     className={styles.submit} 
     type='submit'
     value='Log In'
     onClick={e => { handleLogIn(e) }}
    />
   </motion.form>
  </div>

 )
}

export default Login