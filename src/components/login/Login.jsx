import { useState } from "react";
import { Button, Card, Col, Form, FormGroup, Row, Alert } from "react-bootstrap";

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const VALID_EMAIL = "admin@books.com";
    const VALID_PASSWORD = "1234";

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (email === VALID_EMAIL && password === VALID_PASSWORD) {
            onLogin();
        } else {
            setError("Email o contraseña incorrectos");
        }
    };

    return (
        <Card className="mt-5 mx-3 p-3 px-5 shadow">
            <Card.Body>
                <Row className="mb-2">
                    <h5>¡Bienvenidos a Books Champion!</h5>
                </Row>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <FormGroup className="mb-4">
                        <Form.Control
                            type="email"
                            required
                            placeholder="Ingresar email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </FormGroup>
                    <FormGroup className="mb-4">
                        <Form.Control
                            type="password"
                            required
                            placeholder="Ingresar contraseña"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </FormGroup>
                    <Row>
                        <Col />
                        <Col md={6} className="d-flex justify-content-end">
                            <Button variant="secondary" type="submit">
                                Iniciar sesión
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};


export default Login;