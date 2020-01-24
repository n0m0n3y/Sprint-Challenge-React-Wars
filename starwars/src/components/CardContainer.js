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
          setCharacters(responce.data.results);
          const char = responce.data.results;
             console.log(char)
        })
        .catch(error =>{
    console.log("Something is wrong.",error);
        
        })
      },[]);

      

    return (
        <div>
      
        {console.log(characters)}
        {characters.map((char, index) => {
            
           return( 
            <StarWarsCard
            key ={index}
            name={char.name}
            height={char.height}
            mass={char.mass}
            hair={char.hair_color}
            eyes={char.eye_color}
            gender={char.gender}
           
            />)
        })}
     
       
       </div>
    );
};

export default CardContainer;