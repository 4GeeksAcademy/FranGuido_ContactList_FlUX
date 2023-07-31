import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import { ContactCard } from '../component/ContactCard';

import "../../styles/home.css";

export const Contact = () => {

  const {store, actions} = useContext(Context)

  return (
    <>
    <div className="container">
      <div>
        <Link to="/add">
        <button className="btn btn-success">Add a New Contact</button>
        </Link>
      </div>
      <div> <ContactCard/> </div>
    </div>
    </>
  )
}

