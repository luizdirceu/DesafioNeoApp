
import axios from 'axios';
import md5 from 'md5';
import { useEffect } from 'react';
import './App.css';


function App() {

  const publicKey = "ed5f7efbf95097c3265cb61e1196ec92"
  const privateKey = "3fe3664283d5e512d97866ba9b77c58e20be9d70"
  const time = Number(new Date())
  const hash = md5(time + privateKey + publicKey)
  useEffect(()=>{
getQuadrinhos()
  }, [])
  const getQuadrinhos = async () => {
    try {
      const response = await axios.get(`https://gateway.marvel.com:443/v1/public/comics?ts=${time}&apikey=${publicKey}&hash=${hash}`)
      console.log(response.data)
    } catch (error) {
      console.log(error.response)
    }
  }
  return (
    <div className="App">

    </div>
  );
}

export default App;
