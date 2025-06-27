import { Form } from 'react-bootstrap';

function Searcher({ value, onChange }) {  


     return (
    <Form.Control
      type="text"
      placeholder="Buscar producto..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mb-4"
    />
  );
}  


export default Searcher;