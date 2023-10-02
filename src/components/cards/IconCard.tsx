import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconscout/react-unicons';
import Unicon from 'components/base/Unicon';
import { PropsWithChildren, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

interface IconCardProps {
  icon: IconProp | Icon | string;
  name: string;
  iconFamily: 'font-awesome' | 'unicons' | 'feather';
  onCopy?: (text: string) => void;
}

const IconCard = ({
  icon,
  name,
  onCopy,
  iconFamily,
  children
}: PropsWithChildren<IconCardProps>) => {
  const [text, setText] = useState('');

  const handleClick = async () => {
    const copied = await navigator.clipboard.writeText(text);
    if (onCopy) {
      onCopy(text);
    }
    console.log({ copied });
  };

  useEffect(() => {
    if (iconFamily === 'font-awesome') {
      setText(`<FontAwesomeIcon icon={${name}} />`);
    }
    if (iconFamily === 'unicons') {
      setText(`<Unicon icon={${name}} />`);
    }
    if (iconFamily === 'feather') {
      setText(`<FeatherIcon icon='${name}' />`);
    }
  }, []);

  return (
    <div className="border border-300 rounded-2 p-3 mb-4 text-center bg-white dark__bg-1000 shadow-sm">
      {iconFamily === 'font-awesome' && (
        <FontAwesomeIcon icon={icon as IconProp} className="text-900 fs-5" />
      )}
      {iconFamily === 'unicons' && (
        <Unicon icon={icon as Icon} className="text-900 fs-5" />
      )}
      {iconFamily === 'feather' && (
        <FeatherIcon icon={icon} className="text-900" size={16} />
      )}
      {children}
      <Form.Control
        onClick={handleClick}
        type="text"
        readOnly
        value={text}
        className="text-center text-dark bg-200 dark__bg-1100 border-300 mt-3"
      />
    </div>
  );
};

export default IconCard;
