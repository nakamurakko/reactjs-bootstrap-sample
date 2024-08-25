import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, NavDropdown } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import './App.css';

export default function App() {

  return (
    <>
      <Navbar className='bg-body-tertiary' expand='lg' sticky='top'>
        <Container fluid>
          <NavDropdown title='ReactJS Bootstrap sample'>
            <NavDropdown.Item href='/button-sample'>Button sample</NavDropdown.Item>
            <NavDropdown.Item href='/modal-sample'>Modal sample</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );

}
