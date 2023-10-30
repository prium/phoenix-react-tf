import { Col, Row } from 'react-bootstrap';
import boardIcon from 'assets/img/kanban/board.png';
import boardIllustration from 'assets/img/kanban/board-light.png';
import boardIllustrationDark from 'assets/img/kanban/board-dark.png';
import CreateBoardWizardForm from 'components/modules/kanban/create-board/CreateBoardWizardForm';

const CreateBoard = () => {
  return (
    <div className="mb-9">
      <Row className="mb-8">
        <Col xs={6}>
          <div className="d-flex align-items-center mb-3">
            <img src={boardIcon} alt="" className="me-3" />
            <h1 className="mb-0 text-1100 fw-semi-bold">Phoenix Kanban</h1>
          </div>
          <p className="mb-0">
            Create a Kanban board by following the steps below
          </p>
        </Col>
      </Row>
      <Row className="kanban-create-board">
        <Col xs={12} xl={6} xxl={5}>
          <CreateBoardWizardForm />
        </Col>
        <Col xs={12} xl={6} xxl={7} className="text-center kanban-board-bg">
          <img
            src={boardIllustration}
            alt=""
            className="d-dark-none mt-5 position-sticky"
          />
          <img
            src={boardIllustrationDark}
            alt=""
            className="d-light-none mt-5 position-sticky"
          />
        </Col>
      </Row>
    </div>
  );
};

export default CreateBoard;
