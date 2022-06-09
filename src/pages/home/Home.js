
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Axios from 'axios';
import './style/Home.css';

function Home(props) {

    const [dateSession, setDateSession] = useState();
    const [timeSession, setTimeSession] = useState();
    const [linkSession, setLinkSession] = useState();
    const [loading, setLoading] = useState(false);
    const [linkSessionCreated, setLinkSessionCreated] = useState("");

    const handleDateSession = (event) => {
        var fullDate = new Date(event.target.value);
        var day = fullDate.getDate();
        var month = fullDate.getMonth() + 1;
        var year = fullDate.getFullYear();
        setDateSession(day + "/" + month + "/" + year)
    }

    const handleTimeSession = (event) => {
        setTimeSession(event.target.value);
    }

    const handleLinkSession = (event) => {
        setLinkSession(event.target.value);
    }

    const createSession = () => {
        setLoading(true);
        Axios.post('https://re9euy0dja.execute-api.us-east-1.amazonaws.com/default/cineminha', {
            "action": "set",
            "time": dateSession + " " + timeSession + ":00:0000",
            "src": linkSession
        }).then(session => {
            console.log(session)
            setLinkSessionCreated(window.location.href + "/" + session.data.body);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        });
    }

    return (
        <div className="home-page">
            <Container>
                <h1>Bem vindo ao Cineminha</h1>
                <h2>Crie a sessão abaixo e gere o link para você e seus amigos assistirem juntos ao fime.</h2>
                <Form className="align-items-center">
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="dateSession">
                                <Form.Label>Data da sessão</Form.Label>
                                <Form.Control onChange={(e) => handleDateSession(e)} type="date" placeholder="Data da sessão" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="timeSession">
                                <Form.Label>Hora da sessão</Form.Label>
                                <Form.Control onChange={(e) => handleTimeSession(e)} type="time" placeholder="Hora da sessão" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-12" controlId="linkSession">
                        <Form.Label>Link do filme</Form.Label>
                        <Form.Control onChange={(e) => handleLinkSession(e)} type="text" placeholder="Link do filme" />
                    </Form.Group>
                    <Button onClick={() => createSession()} disabled={loading} variant="outline-light">Criar sessão</Button>
                </Form>
                {linkSessionCreated !== '' ?
                    <Form.Group className="mb-12" controlId="linkSession">
                        <Form.Label>Link da sessão</Form.Label>
                        <Form.Control disabled value={linkSessionCreated} type="text" placeholder="Link da sessão" />
                    </Form.Group>
                    :
                    ""
                }
            </Container>
        </div>
    );
}

export default Home;