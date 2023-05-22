import './App.css';
import { useSelector } from 'react-redux';
import AllRoutes from './components/AllRoutes';
import { Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
function App() {
  const store = useSelector((store)=>store)
  console.log(store)
  return (
    <div className="App">
     <Flex  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"} p={"4px"} gap={"20px"} bg={"#fff"}>
      <img src='https://img.icons8.com/?size=1x&id=16368&format=png' alt ="prof"/>
        <Link to="/Add"><Button bg={"none"}>Add New Book</Button></Link>
      
      <Link to = "/"><Button bg={"none"}>Home</Button></Link>
     </Flex>
     <AllRoutes/>
    </div>
  );
}

export default App;
