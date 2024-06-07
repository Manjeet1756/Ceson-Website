import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
       
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Container = styled.div`
    height: 100px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 150px;
    background-color: ${scrolled ? 'rgba(217, 217, 217, 0.5)': "transparent"};
    position: fixed;
     z-index:1000;
    top: 0;
/* backdrop-filter:blur(28px); */
    /* left: 0;
    right:0;
    bottom:0; */

    .img-div {
     max-height: 75px;
      max-width: 75px;
      margin-top:0;
    }
    img {
      max-height: 100%;
      max-width: 100%;
      object-fit: cover;
      filter:brightness(1.2);

    }

    .header-listItems {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      text-decoration: none;
      margin-left: 150px;
      gap: 18px;

      .items {
        list-style: none;
        text-decoration: none;
        color: black;
        font-weight: bold;
        font-size: 20px;
        color: white;
        padding: 5px;

        &:hover {
          
          color: #0079ff;
        }
      }
    }

  @media (max-width:780px) {

         .Container{

          max-width:780px;
          max-height:60px;
          padding: 20px;

         }
  }

  `;

  return (
    <Container className="Container">
      <div className="img-div">
      <Link to="/Home" className="items">
      <img src="final_ceson_logo.png" alt="" />
            </Link>
      </div>

      <div>
        <ul className="header-listItems">
          <li>
            <Link to="/Home" className="items">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="items">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/Services" className="items">
              Services
            </Link>
          </li>
          <li>
            <Link to="/Client" className="items">
              Courses
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="items">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
   
    </Container>
  );
};

export default Header;
