import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';


export const AddContact = () => {

    // Retrieve actions from store
    const { store, actions } = useContext(Context)

    // Update "contacts" objetcts with new entries
    const [newContact, setNewContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    })


    // Add contact (handle submit)
    const handleSubmit = (e) => {
        // Prevent refreshing after submit
        e.preventDefault();
        actions.checkFormFields(newContact);

        
        // Clear input fields after submit
        setNewContact({
            name: "",
            email: "",
            phone: "",
            address: "",
        })

    }

    return (
        <>
            <div className='container mt-5 mb-1'>
                 <form onSubmit={handleSubmit}>

                    <div className='mb-3'>
                        <h2 className='formHeader mt-1'>Add a new contact</h2>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Full name</label>
                        <input name="name" type="text" class="form-control" placeholder='Jane Doe' value={newContact.name} onChange={(e) => setNewContact({...newContact, name: e.target.value})} required></input>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input name="email" type="email" class="form-control" placeholder='user@email.com' value={newContact.email} onChange={(e) => setNewContact({...newContact, email: e.target.value})} required ></input>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Phone number</label>
                        <input name="phone" type="text" class="form-control" placeholder='5555-5555' value={newContact.phone} onChange={(e) => setNewContact({...newContact, phone: e.target.value})} required></input>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input name="address" type="text" class="form-control" placeholder='Street, City, Country.' value={newContact.address} onChange={(e) => setNewContact({...newContact, address: e.target.value}) } required></input>
                    </div>

                    <Link to="/">
                        <button type="submit" class="formCancelButton btn">Back to list</button>
                    </Link>

                    
                    <button type="submit" class="formAddButton btn">Save contact</button>
                    

                </form>


            </div>
        </>
    )
}

