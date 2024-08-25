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

          </NavDropdown>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );

}
