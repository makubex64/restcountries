import {useState, useEffect }  from "react";
import axios                   from 'axios';
import Loader                  from './components/Loader';
import Search                  from './components/Search';


function App() {

  const [items, setItems]   = useState([]);
  const [error, setError]   = useState(null);
  const [loaded, setLoaded] = useState(false);

  const getData = async ()=>{
    const url = `https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json`;
    const res = await axios.get(url, {mode:'cors'})
    .then( response => {
     setLoaded(true)
     setItems(response.data);

    },
    error =>{
      setLoaded(true);
      setError(error);
    }

  );  
};

  useEffect(() => {
      
     setTimeout(()=>{
       getData();
     }, 1000)
    
  }, []);

const data = Object.values(items);



if (error)   return <> 
                      <div className="mt-2">
                        { error.message }
                      </div>  
                    </> ;
                    
if (!loaded) return <> 
                        <div className="row justified-content-center mt-5 pt-5">
                          <Loader/> 
                       </div> 
                     </>
  
    return (
      <>
      
          
          <Search data={data} items={items} />

      </>
      
    );
  }
  

 

export default App;

