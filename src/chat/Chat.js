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





// import React, { useState, useEffect } from 'react';
// import useSocket from 'use-socket.io-client';
// import { useImmer } from 'use-immer';

// const Messages = props => props.data.map(m => m[0] !== '' ? (<li><strong>{m[0]}</strong> : <div className="innermsg">{m[1]}</div></li>) : (<li className="update">{m[1]}</li>) );

// const Online = props => props.data.map(m => <li id={m[0]}>{m[1]}</li>);

// const Chat = () => {
//   const [id, setId] = useState('');
//   const [nameInput, setNameInput] = useState('');
//   const [room, setRoom] = useState('');
//   const [input, setInput] = useState('');

//   const [socket] = useSocket('https://open-chat-naostsaecf.now.sh');
//   socket.connect();

//   const [messages, setMessages] = useImmer([]);
//   const [online, setOnline] = useImmer([]);

//   useEffect(()=>{
//     socket.on('message que',(nick,message) => {
//       setMessages(draft => {
//         draft.push([nick,message])
//       })
//     });

//     socket.on('update',message => setMessages(draft => {
//       draft.push(['',message]);
//     }));

//     socket.on('people-list',people => {
//       let newState = [];
//       for(let person in people){
//         newState.push([people[person].id,people[person].nick]);
//       }
//       setOnline(draft=>{draft.push(...newState)});
//       console.log(online)
//     });

//     socket.on('add-person',(nick,id)=>{
//       setOnline(draft => {
//         draft.push([id,nick])
//       })
//     });

//     socket.on('remove-person',id=>{
//       setOnline(draft => draft.filter(m => m[0] !== id))
//     });

//     socket.on('chat message',(nick,message)=>{
//       setMessages(draft => {draft.push([nick,message])})
//     });
//   });

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!nameInput) {
//       return alert("Name can't be empty");
//     }
//     setId(nameInput);
//     socket.emit("join", nameInput,room);
//   };

//   const handleSend = e => {
//     e.preventDefault();
//     if(input !== ''){
//       socket.emit('chat message',input,room);
//       setInput('');
//     }
//   };

//   return id ? (
//     <section style={{display:'flex',flexDirection:'row'}} >
//       <ul id="messages"><Messages data={messages} /></ul>
//       <ul id="online"> &#x1f310; : <Online data={online} /> </ul>
//       <div id="sendform">
//         <form onSubmit={e => handleSend(e)} style={{display: 'flex'}}>
//             <input id="m" onChange={e=>setInput(e.target.value.trim())} /><button style={{width:'75px'}} type="submit">Send</button>
//         </form>
//       </div>
//     </section>
//   ) : (
//     <div style={{ textAlign: 'center', margin: '30vh auto', width: '70%' }}>
//       <form onSubmit={event => handleSubmit(event)}>
//         <input id="name" onChange={e => setNameInput(e.target.value.trim())} required placeholder="What is your name .." /><br />
//         <input id="room" onChange={e => setRoom(e.target.value.trim())} placeholder="What is your room .." /><br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Chat;