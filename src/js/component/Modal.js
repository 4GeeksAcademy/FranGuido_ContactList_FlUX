import React, { useContext } from 'react';
import { Context } from '../store/appContext';

export const Modal = () => {

    const { store, actions } = useContext(Context);

    // Showing after page done loading
    if (!store.showModal) return null;


    // Closing alert on modal
    const handleClose = () => {actions.shutModal()}

    return (
        <>
            <div class="modal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Oooops!</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h5>You must fill all the fields before submitting.</h5>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

