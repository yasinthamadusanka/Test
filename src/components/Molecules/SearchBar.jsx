import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Form, Button, InputGroup } from 'react-bootstrap';

const SearchBar = () => (
  <Form className="d-flex flex-grow-1 mx-3">
    <InputGroup>
      <Form.Control
        type="search"
        placeholder="Search products..."
      />
      <Button variant="outline-primary">
        <i className="bi bi-search"></i>
      </Button>
    </InputGroup>
  </Form>
);

export default SearchBar;
