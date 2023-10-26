import { faPencil, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge, { BadgeBg } from 'components/base/Badge';
import Button from 'components/base/Button';
import FeatherIcon from 'feather-icons-react';

const defaultTags = [
  {
    label: 'Feature',
    icon: 'package',
    bg: 'primary'
  },
  {
    label: 'Completed',
    icon: 'check',
    bg: 'success'
  },
  {
    label: 'Issue',
    icon: 'alert-triangle',
    bg: 'warning'
  },
  {
    label: 'Bug',
    icon: 'alert-octagon',
    bg: 'danger'
  }
];
const TagsForm = () => {
  return (
    <div>
      <p className="mb-4">
        These will be the <b>Tags</b> for your tasks/cards of your Kanban board.
        Tags are labels to allow easy &amp; simpler classification of tasks.
      </p>
      <div className="d-flex flex-column gap-5">
        {defaultTags.map(tag => (
          <div className="position-relative kanban-tag" key={tag.label}>
            <Badge
              variant="phoenix"
              bg={tag.bg as BadgeBg}
              className="d-flex flex-between-center fs-9 px-4 py-2 kanban-tag-badge"
              iconPosition="end"
            >
              <span className="badge-label text-capitalize lh-base">
                {tag.label}
              </span>
              <FeatherIcon icon={tag.icon} size={12} className="ms-1" />
            </Badge>
            <div className="position-absolute top-0 end-0 d-flex">
              <Button
                variant="phoenix-secondary"
                className="fs-9 bg-transparent lh-1 kanban-tag-action-icons me-1"
              >
                <FontAwesomeIcon icon={faPencil} transform="shrink-5" />
              </Button>
              <Button
                variant="phoenix-danger"
                className="fs-9 bg-transparent lh-1 kanban-tag-action-icons"
              >
                <FontAwesomeIcon icon={faTrash} transform="shrink-5" />
              </Button>
            </div>
          </div>
        ))}
        <Button
          variant="phoenix-secondary"
          startIcon={<FontAwesomeIcon icon={faPlus} className="me-2" />}
          className="w-100 bg-100 fs-9"
        >
          Create Custom Tag
        </Button>
      </div>
    </div>
  );
};

export default TagsForm;
