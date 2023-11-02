import {
  faBars,
  faCircleXmark,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import PhoenixFloatingLabel from 'components/base/PhoenixFloatingLabel';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import { ChangeEvent } from 'react';
import { Form } from 'react-bootstrap';
import { CreateBoardFormData } from './CreateBoardWizardForm';
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable
} from 'react-beautiful-dnd';

const ColumnItem = ({
  className,
  label,
  index
}: {
  className?: string;
  label: string;
  index: number;
}) => {
  const { formData, setFormData } = useWizardFormContext<CreateBoardFormData>();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: 'name' | 'color'
  ) => {
    setFormData({
      ...formData,
      columns: formData.columns.map((column, ind) =>
        ind === index ? { ...column, [field]: e.target.value } : column
      )
    });
  };

  const handleClear = () => {
    setFormData({
      ...formData,
      columns: formData.columns.map((column, ind) =>
        ind === index ? { ...column, name: '' } : column
      )
    });
  };

  return (
    <div className={classNames(className, 'd-flex gap-3')}>
      <PhoenixFloatingLabel
        label={label}
        className="flex-1"
        startComponent={<FontAwesomeIcon icon={faBars} />}
        endComponent={
          <button className="btn p-0 lh-1" onClick={handleClear}>
            <FontAwesomeIcon className="text-300" icon={faCircleXmark} />
          </button>
        }
      >
        <Form.Control
          type="text"
          placeholder="Board Name"
          value={formData.columns[index].name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange(e, 'name')
          }
        />
      </PhoenixFloatingLabel>

      <div>
        <Form.Control
          type="color"
          className="kanban-color-picker"
          value={formData.columns[index].color}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange(e, 'color')
          }
        />
      </div>
    </div>
  );
};

const ColumnForm = () => {
  const { formData, setFormData } = useWizardFormContext<CreateBoardFormData>();

  const handleAddNewColumn = () => {
    const updatedFormData = { ...formData };
    updatedFormData.columns.push({
      name: '',
      color: '#000000'
    });
    setFormData(updatedFormData);
  };

  const onDragEnd = (droppedItem: DropResult) => {
    if (!droppedItem.destination) return;
    const updatedFormData = { ...formData };
    const reorderedItem = updatedFormData.columns.splice(
      droppedItem.source.index,
      1
    )[0];
    updatedFormData.columns.splice(
      droppedItem.destination.index,
      0,
      reorderedItem
    );
    setFormData(updatedFormData);
  };

  return (
    <div>
      <p className="mb-4">
        These will be the <b>Columns</b> of your Kanban board. They represent
        discrete stages in work process. Columns can be Edited, Removed,
        Rearranged or Added in future.
      </p>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {formData.columns?.map((column, index) => (
                <Draggable
                  key={column.name}
                  draggableId={column.name}
                  index={index}
                >
                  {provided => (
                    <>
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ColumnItem
                          key={index}
                          className="mb-5"
                          label={`Column ${index + 1}`}
                          index={index}
                        />
                      </div>
                    </>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <Button
        variant="phoenix-secondary"
        startIcon={<FontAwesomeIcon icon={faPlus} />}
        className="w-100 bg-100 fs-9"
        size="lg"
        onClick={handleAddNewColumn}
      >
        Add New Column
      </Button>
    </div>
  );
};

export default ColumnForm;
