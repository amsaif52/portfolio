import './App.scss';
import Sidebar from './components/sidebar/sidebar.js';
import Content from './components/content/content.js'
function App() {
  return (
    <div className="container">
      <Sidebar/>
      <Content/>
    </div>
  );
}

export default App;
