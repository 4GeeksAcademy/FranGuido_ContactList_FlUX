import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
// useNavigate Hook to acces react router and navigate
import { Link, useParams, useNavigate } from 'react-router-dom';


export const EditContact = () => {

    const { store, actions } = useContext(Context)
    const { id } = useParams()
    const navigate = useNavigate();

    // Update state of edited contact

    const [editedContact, setEditedContact] = useState({
        name: store.contacts[id - 1].name,
        email: store.contacts[id - 1].email,
        phone: store.contacts[id - 1].phone,
        address: store.contacts[id - 1].address,
    })


    // Add edited contact to list
    const handleSubmit = (e) => {
        e.preventDefault();
        actions.editContact(parseInt(id), editedContact);
        (navigate("/")); // returns to contact list
    }


    return (
        <>
            <div className='container mt-5 mb-1'>
                <form onSubmit={handleSubmit}>

                    <div className='mb-3'>
                        <h2 className='formHeader mt-1'>Edit contact</h2>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Full name</label>
                        <input name="name" type="text" class="form-control" placeholder='Jane Doe' value={editedContact.name} onChange={(e) => setEditedContact({ ...editedContact, name: e.target.value })} ></input>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input name="email" type="email" class="form-control" placeholder='user@email.com' value={editedContact.email} onChange={(e) => setEditedContact({ ...editedContact, email: e.target.value })} ></input>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Phone number</label>
                        <input name="phone" type="text" class="form-control" placeholder='5555-5555' value={newContact.phone} onChange={(e) => setEditedContact({ ...editedContact, phone: e.target.value })} ></input>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input name="address" type="text" class="form-control" placeholder='Street, City, Country.' value={newContact.address} onChange={(e) => setEditedContact({ ...editedContact, address: e.target.value })}></input>
                    </div>

                    <Link to="/">
                        <button type="submit" class="formCancelButton btn">Cancel</button>
                    </Link>


                    <button type="submit" class="formAddButton btn">Save contact</button>

                </form>
            </div>
        </>
    )
}

