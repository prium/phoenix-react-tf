import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';

const KanbanAddBoardCard = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Button
      variant="phoenix-primary"
      className="d-flex flex-center h-100 w-100 fs-7 fw-semi-bold"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faPlusCircle} className="fs-8 me-2" />
      Create New Board
    </Button>
  );
};

export default KanbanAddBoardCard;
