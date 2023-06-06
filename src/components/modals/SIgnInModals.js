import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../features/authSlice';
import { useCookies } from 'react-cookie';

export default function SignInModal(props) {
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);
    const [cookies, setCookie] = useCookies(['token', 'refresh_token']);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        if (props.show === true) {
            setShow(true);
        }
    }, [props.show]);

    const handleClose = () => {
        setShow(false);
    };

    const handleSaveChanges = async (e) => {
        e.preventDefault()
        try {

            const result = await dispatch(login(formData)).unwrap();
            setCookie('token', result.access_token, { path: '/' });

            handleClose();
        } catch (err) {
            setMessage(err.message);
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Sigin untuk melanjutkan pembayaran</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form >
                    <Form.Group className="mb-3" controlId="email">
                        {message && (
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        )}
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            value={formData.email}
                            onChange={e => setFormData({
                                ...formData, ...{ email: e.target.value }
                            })}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={e => setFormData({
                                ...formData, ...{ password: e.target.value }
                            })}
                        />
                    </Form.Group>

                    <div className="d-grid gap-2 sign-button">
                        <Button
                            type="sumbit"
                            variant="custome"
                            onClick={handleSaveChanges}
                        >
                            sign in
                        </Button>
                    </div>
                    <div className="sign-up">
                        <p>Don't Have account yet?
                            <Link to='/register'><strong> Sign Up</strong> </Link>
                        </p>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    );
}
