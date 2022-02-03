import React from "react";
import {Card,CardGroup, Container,} from "react-bootstrap";
import js2 from "./images/js2.png";
import html from "./images/html.png";
import css from "./images/css.png";
import react2 from "./images/react2.png";
import bootstrap2 from "./images/bootstrap2.png";
import git from "./images/git.png";
import  styled from "styled-components"

const Skills = () =>{
  let data = [
    {
      title:"React",
      text:"two years of experience",
      icon:react2
    },
    {
      title:"CSS",
      text:"one year of experience ",
      icon:css
    },
    {
      title:"Javascript",
      text:"one year of experience ",
      icon:js2
    },
    {
      title:"HTML",
      text:"two year of experience ",
      icon:html
    },
    {
      title:"Bootstrap",
      text:"two year of experience ",
      icon:bootstrap2
    },
    {
      title:"Git",
      text:"two year of experience ",
      icon:git
    },
    {
      title:"Git",
      text:"two year of experience ",
      icon:css
    },
    {
      title:"Git",
      text:"two year of experience ",
      icon:js2
    },
  ]

  let result = data.map(element => {
    return(
      <div className="col-lg-3 col-md-4 p-3 cardContainer">
        
         <Card className="content">
          <Card.Img variant="top image" src={element.icon} />
          <Card.Body>
            <Card.Title>{element.title}</Card.Title>
            <Card.Text>
              {element.text}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </div>
     
    )
  });

    return (
        
       
        <Styled>
          
           <CardGroup className="container " >
             <div className="col-12 m-1">
             <div className='col-12 d-flex  justify-content-center' >
              <h3>Skills</h3>
              </div>
              <div className='text-secondary py-5'>
              I have more than 8 years' experience building rich web applications for clients all over the world. Below is a quick overview of my main technical skill sets and tools I use. Want to find out more about my experience?

              </div>
              </div>
              {result}
            
        </CardGroup>
        </Styled>
       
      )
}


const Styled = styled.div`
.-card-list{
  display: flex;
  flex-direction: row;
  }
.content{
  padding:3%;
  height: 100%;
  border-radius: 5px;
}

.cardContainer{
  margin:10px 0px;
  height: auto;
  max-height: 500px;
}

.image{
  height: 25vh;
  padding:30px;
}

.container{
  
}






`



export default Skills;