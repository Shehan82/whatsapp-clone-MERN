import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import { useState, useEffect } from 'react';
import axios from './axios';

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync')
    .then((response)=>{
      setMessages(response.data);
    })
  }, [])

  console.log(messages);

  useEffect(() => {
    var pusher = new Pusher('bae7fff4f6e77102979d', {
      cluster: 'eu'
    });
 
    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      // alert(JSON.stringify(data));
      setMessages([...messages, data]);
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages])

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar/>
        <Chat messages={messages}/>
      </div>
      
    </div>
  );
}

export default App;
