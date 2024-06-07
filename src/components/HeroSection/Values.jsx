import React from "react";
import styled from "styled-components";
// import { ChevronRight } from "react-feather";

const Values = (props) => {
  return (
    <Container>
      <img src={props.img} />
      <h1 className="title">{props.title}</h1>
      <p className="description">{props.description}</p>
     
    </Container>
  );
};

export default Values;

const Container = styled.div`

  height: 300px;
  width: 100%;
  color: black;
  display:flex;
  padding: 0px 50px 0px 0px;
  flex-direction:column;
  align-items:left;
  justify-content:space-evenly;
  gap:20px;
img{
  height:70px;
  width:70px;
}
.title{
  font-size:30px;
  font-weight:normal;
}
.description{
  font-size:16px;
}

 

 
    
  
`;
