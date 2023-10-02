import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form } from 'react-bootstrap';

interface IconCardProps {
  icon: IconProp;
  name: string;
  onCopy?: (text: string) => void;
}

const IconCard = ({ icon, name, onCopy }: IconCardProps) => {
  const handleClick = async (text: string) => {
    const copied = await navigator.clipboard.writeText(text);
    if (onCopy) {
      onCopy(text);
    }
    console.log({ copied });
  };
  return (
    <>
      <span className="icon-list-item d-none"></span>
      <div className="border border-300 rounded-2 p-3 mb-4 text-center bg-white dark__bg-1000 shadow-sm">
        <FontAwesomeIcon icon={icon} className="text-900 fs-5" />
        <Form.Control
          onClick={() => handleClick(`<FontAwesomeIcon icon={${name}} />`)}
          type="text"
          readOnly
          value={`<FontAwesomeIcon icon={${name}} />`}
          className="text-center text-dark bg-200 dark__bg-1100 border-300 mt-3"
        />
      </div>
    </>
  );
};

export default IconCard;
