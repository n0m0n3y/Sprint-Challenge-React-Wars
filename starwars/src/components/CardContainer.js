import React, 
{useState, useEffect} from 'react';
import StarWarsCard from "./StarWarsCard";
import axios from "axios";


const CardContainer = ()=>{
    const [characters, setCharacters] = useState([]);


    useEffect(()=>{
      
        axios.get("https://swapi.co/api/people/")
        .then(responce =>{
          console.log(responce.data.results);
          setCharacters(responce.data.results)
          
        })
        .catch(error =>{
    console.log("Something is wrong.",error);
        
        })
      },[]);
    return (
        <div>
        {characters.map((el,i) => (
            <StarWarsCard
              key={i}
              name={el.name}
            />
          ))}
          ))
        </div>
    );
};

export default CardContainer;