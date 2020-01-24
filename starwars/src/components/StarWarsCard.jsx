import React from "react";
// import "./index.css";
import { Card,  CardBody,
    CardTitle, CardText } from 'reactstrap'



const StarWarsCard = props => {
  console.log(props)
    return (
   
        <Card>
      <CardTitle className="title">Name: {props.name}</CardTitle>
      <CardBody>
        <CardText>Height: {props.hight}</CardText>
        <CardText>Mass: {props.mass}</CardText>
        <CardText>Hair color: {props.hair_color}</CardText>
        <CardText>Skin color: {props.skin_color}</CardText>
        <CardText>Eye color: {props.eye_color}</CardText>
        <CardText>Birth Year: {props.birth_year}</CardText>
        <CardText>Gender: {props.gender}</CardText>
       
      </CardBody>
    </Card>
  )
};
 
export default  StarWarsCard;