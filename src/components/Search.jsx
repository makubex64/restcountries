import { useState } from 'react';
import { Link, useOutletContext } from "react-router-dom";
import NotFound from './NotFound' 

import "../Styles.css";



const Search = ({data, items})=>{


	const [query, setQuery]       = useState("");
  const [filter, setFilter]     = useState("");
  const [paginate, setPaginate] = useState(24);
  const [theme, setTheme] = useOutletContext();
  

  const themeStyles = {

    themeIcon: {
      color:       theme === "Light" ? "white" : ""
    },

    themeInput:{
      background:  theme === "Light" ? "rgb(43, 57, 69)" : "",
      borderColor: theme === "Light" ? "transparent" : "", 
      color:       theme === "Light" ? "white" : "",
      

    },

    themeSelect:{
      background:  theme === "Light" ? "rgb(43, 57, 69)" : "",
      borderColor: theme === "Light" ? "transparent" : "",
      color:       theme === "Light" ? "white" : ""
    },

    themeCard:{
      background:  theme === "Light" ? "rgb(43, 57, 69)" : "",
      color:       theme === "Light" ? "white" : "",
    },


  }

  

  
  const search_parameters = Object.keys(Object.assign({}, ...data));
  const filter_items = [...new Set(data.map(item => item.region))];

// region or continents and all countrys
   const search = items => {
        return items.filter(
            item =>
                item.region.includes(filter) &&
                search_parameters.some(parameter =>
                    item[parameter]
                    .toString()                    
                    .toLowerCase()                    
                    .includes(query)

                    ||

                    item[parameter]
                    .toString()                    
                    .toUpperCase()                    
                    .includes(query)

                    

                    )
        );
    } 


  // paginate
  const load_more = (e)=>{
    setPaginate((prevValue)=> prevValue + paginate)
  }


	return(
    <>

      <div className="row mt-5 justify-content-between align-items-center">

      {/* input */}
      <div className="input-wrapper col-md-6 col-lg-6 col-xl-5 align-self-start">
        <i style={themeStyles.themeIcon} className="bi bi-search fw-bold"></i>
            <input
              style={themeStyles.themeInput}
              className="form-control" 
              type="search" 
              placeholder="Search"
              aria-label="Search"
              onChange={e => setQuery(e.target.value)}
              />
                    
        </div>  


      {/* select */}
      <div className="col-6 col-md-6 col-lg-3 col-xl-2">
      <select
        style={themeStyles.themeSelect}
        className="form-select"
        onChange={e => setFilter(e.target.value) }
      >

        <option value="" >All Regions</option>

        {
          filter_items.map((item, id)=>(
          <option                       
          key={id}
          onClick={e => setOption(e.target.value) } 
          value={item}>

           {item} 

          </option>
          ))

        }

        </select>
        
      </div>
        
          
        </div>
      
    

     {/* lalala */}

        <div className="row">

          <div 
          style={{display: search(data).length > 0 ? "block" : "none"}}
          className="col-12 mb-5">
            <h1 className="display-6 mt-5 text-center text-secondary-emphasis text-secondary-emphasis">
            Countries Around the World
            </h1>
            <hr/>                                
          </div>

        </div> 


        <div className="row justified-content-center">       

          { 
            search(data).length > 0 ?

            search(data)
            .slice(0, paginate)
            .map((item)=>(

               <div
                className=" col-md-6 col-lg-4 col-xl-3 mb-4" 
                key={item.alpha3Code}>

               <Link
                style={themeStyles.themeCard}
                state={item}
                className="lalala-link" 
                to={ `/country/${item.alpha3Code}` }
                >
                <div
                style={themeStyles.themeCard}
                 className="card lalala" >

                

                  <img src={item.flag.large} alt={item.name} />
                    <div className="aja-lala card-body">

                      <p className=" fs-6 fw-bold mb-1">
                      {item.name}
                      </p>

                      <p className="mb-0 ">
                      Region: {" "} 
                      <span>{item.region}</span>
                      </p>

                      <p className="mb-0 ">
                      Capital: {" "} 
                      <span>{item.capital}</span>
                      </p>
                      <p className="mb-0 ">
                      Population: {" "} 
                      <span>{item.population}</span>
                      </p>
                      
                    </div>
                    
                  
                </div>
                </Link>

              </div>

            )) : <NotFound/>
          }

        </div>

        <div className="container text-center mb-5">
          <button 
          style= {{display: query  ? 'none' : ''}}        
          className="col align-self-center btn btn-primary btn-lg" 
          onClick={load_more}>
          Load More
          </button>

        </div>



  </>
		)
}
export default Search