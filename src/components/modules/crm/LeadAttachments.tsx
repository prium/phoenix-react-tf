import classNames from 'classnames';
import { attachments } from 'data/project-management/todoListData';
import FileListItem from '../project-management/todo-list/FileListItem';

const LeadAttachments = ({ className }: { className?: string }) => {
  return (
    <div className={classNames(className)} id="attachments">
      <h2 className="mb-4">Attachments</h2>
      {attachments.map((attachment, index) => (
        <FileListItem
          key={attachment.name}
          attachment={attachment}
          className={classNames('border-dashed', {
            'border-top': index === 0,
            'border-bottom-0': index === attachments.length - 1
          })}
        />
      ))}
    </div>
  );
};
export default LeadAttachments;
