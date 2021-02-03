
import React, { useContext, useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { userContext } from '../../App';
import './appoinment.css'

const AppoinmentServiceBox = ({ data }) => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
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
                        <h3 className="brand-text text-center">{data.name}</h3>
                    </ModalHeader>
                    <ModalBody>
                        <form action="http://localhost:4000/addAppoinment" method="post">
                            <div class="form-group">
                                <input type="text" class="form-control" id="service" name="service" placeholder="Service" Value={data.name} />
                                <input type="time" class="form-control" id="time" name="time" placeholder="Time" />
                                <input type="text" class="form-control" id="name" name="name" placeholder="Name" Value={loggedInUser.displayName} />
                                <input type="text" class="form-control" id="phone" name="phone" placeholder="Phone Number" />
                                <input type="email" class="form-control" id="email" name="email" placeholder="Email" Value={loggedInUser.email} />
                                <input type="date" class="form-control" id="date" name="date" placeholder="Date" />
                                <input type="submit" className="btn btn-brand" value="SEND" />
                            </div>
                        </form>
                    </ModalBody>
                </Modal>
            </div>
        </div>
    );
};


// <ModalFooter>
// <Button variant="secondary" onClick={handleClose}>Close</Button>
// <Button variant="primary">Understood</Button>
// </ModalFooter>

export default AppoinmentServiceBox;