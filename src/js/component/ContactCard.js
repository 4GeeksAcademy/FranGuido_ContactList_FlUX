import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link, useParams } from 'react-router-dom';


export const ContactCard = () => {

    const { store, actions } = useContext(Context)

    const { id } = useParams()

    // Delete contact functionality
    const handleDeleteClick = (contact) => {
        actions.deleteContact(contact);
        
    }

    return (

        <>
            {store.contacts.map((contact, id) =>
                <div className="card mb-3 mt-4" key={id}>
                    <div className="row g-0">
                        <div className="imageDiv col-md-2">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="img-fluid rounded-circle" alt="..."></img>
                        </div>
                        <div className="cardContent col-md">
                            <div className="card-body">
                                <h6 className="card-title"><b>{contact.name}</b></h6>
                                <p className="card-text"> <i className='fas fa-envelope-open'> </i>  {contact.email}</p>
                                <p className="card-text"> <i className='fas fa-mobile-alt'> </i> {contact.phone} </p>
                                <p className="card-text"> <i className='fas fa-address-book'> </i> {contact.address}</p>
                            </div>
                        </div>
                        <div className="buttonsSection col-md-1">
                            <Link to={`/edit/${contact.id}`}>
                                <i className="fas fa-pencil-alt"></i>
                            </Link>
                            <i className="fas fa-trash-alt ms-3" onClick={() => handleDeleteClick(contact)}></i>
                        </div>
                    </div>
                </div>

            )
            };

        </>
    )
}

