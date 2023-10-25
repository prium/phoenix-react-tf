import { FloatingLabel, Form } from 'react-bootstrap';

const BoardForm = () => {
  return (
    <>
      <div className="mt-6 border-bottom-0">
        <p className="mb-4">
          This will be the <b>Name</b> and description of your Kanban board. You
          and other admins can edit the name in future. The name can contain
          letters, numbers &amp; punctuation.{' '}
        </p>
      </div>
      <FloatingLabel label="Board Name" className="mb-4">
        <Form.Control type="text" placeholder="Board Name" />
      </FloatingLabel>
      <FloatingLabel label="Board type" className="mb-4">
        <Form.Select>
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </FloatingLabel>
      <FloatingLabel label="Description (Optional)">
        <Form.Control
          as="textarea"
          placeholder="Description"
          style={{ height: 128 }}
        />
      </FloatingLabel>
    </>
  );
};

export default BoardForm;
