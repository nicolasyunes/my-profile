import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import react2 from "./images/react2.png";
import bootstrap2 from "./images/bootstrap2.png";
import git from "./images/git.png";
import styled from 'styled-components';


export default function Projects() {


  return (
    <Styled>
      <Carousel variant="dark" className='carousel container py-5'>
          <div className='col-12 d-flex  justify-content-center' >
              <h3>Projects</h3>
          </div>
          <div className='text-secondary py-5'>
          I have more than 8 years' experience building rich web applications for clients all over the world. Below is a quick overview of my main technical skill sets and tools I use. Want to find out more about my experience?

          </div>
          <div>
                <Carousel.Item >
                <div className='col-12 justify-content-center d-flex'>
                <img
                className=""
                src={react2}
                alt="First slide"
                height={150}
                />
                
                </div>
                <Carousel.Caption>
                    <div className='col-12'> 
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                
                </Carousel.Caption>
            </Carousel.Item>
          </div>
          
  
</Carousel>
    </Styled>
  );
}

const Styled = styled.div`
background-color:#fff;
margin:15px 0px;
.carousel-inner{
    height: 500px;
}



`
