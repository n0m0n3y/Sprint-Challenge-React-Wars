import React from "react";
// import "./index.css";
import { Card,  CardBody,
    CardTitle, CardText } from 'reactstrap'



const StarWarsCard = props => {
  //console.log(props.birth_year)
    return (
   
        <Card style={{margin:"10%", opacity:"0.9", backgroundColor:"Tan", color:"Black" }}>
        <CardBody >
      <CardTitle className="title">Name: {props.name}</CardTitle>
      
        <CardText>Height: {props.height}</CardText>
        <CardText>Mass: {props.mass}</CardText>
        <CardText>Hair color: {props.hair}</CardText>
        <CardText>Eye color: {props.eyes}</CardText>
        <CardText>Gender: {props.gender}</CardText>
        
       
       
       
      </CardBody>
    </Card>
  )
};
 
export default  StarWarsCard;