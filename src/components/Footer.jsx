import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"
import {Facebook,Instagram,Youtube,Linkedin} from 'react-feather'
const Footer = () => {
  return (
    <Container>
      
    <div className="Box1">
     <div className="Box1-sub-Box1">
     <h1>Celestial Software and Networks</h1>
     <ul>
     <li><Link to="#" className="link"> Courses</Link></li>
     <li><Link to="#"  className="link"> Services</Link></li>
     <li><Link to="#"  className="link"> About Us</Link></li>
     <li><Link to="#"  className="link"> Join Us</Link></li>
     <li><Link to="#"  className="link"> Contacts</Link></li>
     </ul>
     </div>
     <div className="Box1-sub-Box2">
      <h3>Phone:+91 999999999</h3>
      <h3>Email: sales@ceson.co.in</h3>
      <h3>Contact Us: info@ceson.co.in</h3>
      <h3>Address: Chennai, India</h3>
     </div>
    </div>
    <div className="Box2">
      <span className="copyright">©CESON 2023</span>
      <span  className="icons">
        <Instagram/>
        <Youtube/>
        <Linkedin/>
        <Facebook/>
      </span>
    </div>
  </Container>
  )
}

export default Footer
 
const Container = styled.div`
  
  height:420px;
  width:100%;
  background-color: white;
  display:flex;
  flex-direction:column;
  padding:50px 165px 0px 165px;

  .Box1{
    height:300px;
    width:100%;
    display:flex;
    justify-content: space-between;
    align-items:center;
  
    border-bottom: 3px solid  lightgray;

    .Box1-sub-Box1{
     height:300px;
     width:50%;
      display:flex;
      flex-direction:column;
      justify-content:space-evenly;
      align-items:left;

      ul{
        display:flex;
        align-items:center;
        justify-content:space-between;
        list-style:none;
        
      }
      .link{
        text-decoration:none;
        font-size:20px;
        color:black;
        font-weight:bold;
      }

    }

      .Box1-sub-Box2{
       
        height:300px;
        width:28%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:left;
        h3{
          font-size:20px;
        }

      }

    }

    
      .Box2{
        height:100px;
        width:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;

        }
        h1{
   font-size:30px;
        }
         
         .icons{
          display:flex;
          justify-content: center;
          align-items:center;
          font-size:20px;
          gap:30px;
          font-weight:bold;

         }
         .copyright{
          font-size:20px;
          font-weight:bolder;
         }
      



  

`