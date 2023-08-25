import React from 'react';
import { ItemCount } from './ItemCount';
import { Button } from 'react-bootstrap';
import { useHover } from "../hooks/useHover";
import { NavLink } from 'react-router-dom'

export function Item({id, image, artist, title, url}){
  const {isHovered, handleMouseEnter, handleMouseLeave} = useHover()

      return (
       <div className={ `item-card ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
        <img src={url} alt="" className="item-image" />
        <div className={`item-info ${isHovered ? 'visible' : ''}`}>
          <h4>{artist}</h4>
          <h4>{title}</h4>
          <NavLink to={`/catalog/${id}`}>
            <Button className="view-description">View Description</Button>
          </NavLink>
          <ItemCount/>
        </div>
      </div>
    );
};

//require(`/public/images/${image}`)