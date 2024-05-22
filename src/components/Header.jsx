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
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 60px 150px;
    background-color: ${scrolled ? 'rgba(217, 217, 217, 0.5)': "transparent"};
    position: fixed;
    top: 0px;
    left: 0px;

    .img-div {
      height: 100px;
      width: 100px;
    }
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
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
    

  `;

  return (
    <Container>
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
