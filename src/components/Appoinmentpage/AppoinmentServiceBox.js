
import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import './appoinment.css'

const AppoinmentServiceBox = ({ data }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="col-md-4 my-4">
            <div className="innerContainer">
                <h3 className="brand-text text-center">{data.name}</h3>
                <h4 className="text-center">{data.time}</h4>
                <p className="text-center">10 Space available</p>
                <button className="btn btn-brand" id="center-btn" onClick={handleShow}>Book Appoinment</button>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <ModalHeader closeButton>
                        <ModalTitle>{data.name}</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <form>
                            <div class="form-group">
                                
                                <input type="time" class="form-control" id="time" name="time" placeholder="Time" />
                                <input type="text" class="form-control" id="name" name="name" placeholder="Name" />
                                <input type="number" class="form-control" id="phone" name="phone" placeholder="Phone Number" />
                                <input type="email" class="form-control" id="email" name="email" placeholder="Email" />
                                <input type="date" class="form-control" id="date" name="date" placeholder="Date" />

                            </div>
                            
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                    </Button>
                        <Button variant="primary">Understood</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    );
};

export default AppoinmentServiceBox;