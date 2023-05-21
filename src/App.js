import './App.css';
import { useSelector } from 'react-redux';
import PostBook from './components/PostBook';
import Books from './components/Books';
import AllRoutes from './components/AllRoutes';
import { Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
function App() {
  const store = useSelector((store)=>store)
  console.log(store)
  return (
    <div className="App">
     <Flex p={"4px"} gap={"20px"} bg={"teal.100 "}>
      <img src='https://img.icons8.com/?size=1x&id=16368&format=png' alt ="prof"/>
      <Button>
        <Link to="/Add">Add New Book</Link>
      </Button>
      <Button>
      <Link to = "/">Home</Link>
      </Button>
     </Flex>
     <AllRoutes/>
    </div>
  );
}

export default App;
