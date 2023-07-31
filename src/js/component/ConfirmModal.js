import React, { useContext } from 'react';
import { Context } from '../store/appContext';

export const ConfirmModal = () => {

    const { store, actions } = useContext(Context)

    // handling modal alert message
    // Show when page done loading
    if (!store.showModal) return null;

    const handleDelete = () => {
        actions.deleteContact(store.contactDeleted);
        actions.shutModal();
    }

    const handleClose = () => {
        actions.close();
    }


    return (
        <>

            <div class="modal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Wait a moment!</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                        </div>
                        <div class="modal-body">
                            <h5>Do you really want to delete this contact?</h5>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Cancel</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={handleDelete}>Delete</button>

                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

