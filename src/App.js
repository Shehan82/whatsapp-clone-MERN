import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {

  useEffect(() => {
    var pusher = new Pusher('bae7fff4f6e77102979d', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      alert(JSON.stringify(data));
    });

  }, [])

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar/>
        <Chat/>
      </div>
      
    </div>
  );
}

export default App;
