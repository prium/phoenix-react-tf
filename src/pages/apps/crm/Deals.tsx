import {
  faFileExport,
  faFilter,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import SearchBox from 'components/common/SearchBox';
import { defaultBreadcrumbItems } from 'data/commonData';
import { dealColumnsData } from 'data/crm/deals';
import { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useMainLayoutContext } from 'providers/MainLayoutProvider';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import DealColumn from 'components/modules/crm/deals/DealColumn';
import AddDealModal from 'components/modules/crm/deals/AddDealModal';

const Deals = () => {
  const { setContentClass } = useMainLayoutContext();
  const [dealColumns, setDealColumns] = useState(dealColumnsData);
  const [openAddDealModal, setOpenAddDealModal] = useState(false);

  useEffect(() => {
    setContentClass('vh-100');

    return () => {
      setContentClass('');
    };
  }, []);

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (destination) {
      const updatedColumns = [...dealColumns];

      const deal = updatedColumns
        .find(column => column.id === source.droppableId)
        ?.deals.splice(source.index, 1)[0];

      if (deal) {
        updatedColumns
          .find(column => column.id === destination.droppableId)
          ?.deals.splice(destination.index, 0, deal);
      }

      setDealColumns(updatedColumns);
    }
  };

  return (
    <div className="d-flex flex-column h-100">
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="mb-6">
        <h2 className="mb-4">Deals</h2>
        <Row className="g-3 justify-content-between mb-4">
          <Col xs="auto">
            <Button
              variant="primary"
              className="me-4"
              startIcon={<FontAwesomeIcon icon={faPlus} className="me-2" />}
            >
              Add Deal
            </Button>
            <Button
              variant="link"
              className="text-900 px-0"
              startIcon={
                <FontAwesomeIcon icon={faFileExport} className="fs-9 me-2" />
              }
            >
              Export
            </Button>
          </Col>
          <Col xs="auto">
            <div className="d-flex">
              <SearchBox placeholder="Search by name" className="me-2" />
              <Form.Select>
                <option value="deals">Deals</option>
              </Form.Select>
              <Button variant="phoenix-secondary" className="px-3 ms-2">
                <FontAwesomeIcon
                  icon={faFilter}
                  transform="down-3"
                  className="text-primary"
                />
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex-1 d-flex gap-4 scrollbar">
          {dealColumns.map(col => (
            <Droppable key={col.id} droppableId={col.id}>
              {provided => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <DealColumn
                    column={col}
                    handleOpenAddModal={() => setOpenAddDealModal(true)}
                    key={col.id}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>

      <AddDealModal
        show={openAddDealModal}
        handleClose={() => setOpenAddDealModal(false)}
      />
    </div>
  );
};

export default Deals;
