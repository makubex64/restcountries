import {  useNavigate, useLocation, Link  } from 'react-router-dom';
import Skeleton                       from 'react-loading-skeleton'
import { useState, useEffect}         from 'react';
import axios                   from 'axios';

 

export default function CountryID(){


const navigate = useNavigate();
const location = useLocation();
let   data     = location.state;

// currencies
const curre       = data.currencies;
const valueCurre  = Object.values(curre)


// languajes
const lang        = data.languages
const valueLang   = Object.values(lang)

// countrys border
const border      = data.borders;
const valueBorder = Object.values(border)

const nullBorders = ["N", "/", "A"];



  return(

        <div className="container py-5"> 

           <button
            className="btn btn-primary btn-block"
            type="button"
            onClick={() => {
                     navigate(-1);
                   }}
                 >
                Back
          </button>

         
          <div className="row py-5">          
          <div className="col-md-5 mt-5">
            <img className="img-fluid" src={data.flag.large} alt={data.name} height="300" width="450"/>
          </div>

          <div className="col-md-7 mt-5">
           <h4 className="text-uppercase fw-bold">{data.name}</h4>

          <div className="row mt-4">
          <div className="col aja">
            <p>Official Name: {" "} <span>{data.official_name}</span></p>
            <p>Capital:    {" "}    <span>{data.capital}</span> </p>
            <p>Region:     {" "}    <span>{data.region}</span>  </p>
            <p>Sub Region: {" "}    <span>{data.subregion}</span>  </p>
            <p>Area:       {" "}    <span>{data.area} {" km"}</span>   </p>
          </div>

          <div className="col aja">
            <p>Population: {" "} <span>{data.population}</span> </p>

            <p>Currencies: {" "} 
            {
               valueCurre.map((item, id)=>{
                if(item.name && item.symbol){
                  return(
                    <span key={id} > 
                    {item.name}
                    {" - "}
                    {"Symbol: "}
                    {item.symbol}
                    </span>
                    );

                }else if(!item.symbol){
                  return(
                    <span key={id}>
                    {item.name}
                    {" - "}
                    {"Symbol: "}
                    {"currently no symbol"}
                    </span>
                    )

                }
               
                
               })
            }
            </p>

            <p>Languages: {" "}
            
              
                {
                  valueLang.map((item, id)=>{
                    return(
                      
                        <span key={id}>
                          { (id ? ', ' : '') + item }
                        </span>
                      )
                  })
                }
              
            
            </p>
          </div>             
          </div>

           
            <div className="aja">
              <p>Border: {" "}
                  {
                    valueBorder.map((val, id)=>{

                      return(
                        <span className="badge bg-secondary me-1" key={id}>
                         {val}
                        </span>
                        ) 



                    })
                  } 
              </p>
            </div>
          
          </div>
                     

          
          </div>
        </div>
    )
}

