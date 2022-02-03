import React from "react"
import { Button } from "react-bootstrap";
import styled from "styled-components";
const Info = props =>{
return(
    <Style className="container-lg ">
        <div className="col-12 content ">
            <div className="m-3 name">
               
                <h2> Hello mi name is Nicolas</h2>
            </div>
            <div className="m-3 description">
            I'm a full-stack developer specialised in frontend and backend development for complex scalable web apps. I write about web development on my blog and regularly speak at various web conferences and meetups. Want to know how I may help your project? Check out my project case studies and resume.
            </div>
            <div className="m-3">
                <Button>
                    Hire me
                </Button>
            </div>
            
        </div>
    </Style>)
}

const Style = styled.div`
color:white;
height:30vh;
padding: 1%;
background:black;
padding-left: 5%;
padding-right: 5%;

font-size: 18px;
font-family: Georgia, 'Times New Roman', Times, serif;
.name{
    font-size: 26px;    
}

.content{
    display: flex;
    flex-direction: column;
}
`

export default Info;