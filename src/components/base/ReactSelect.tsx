import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select, { ClearIndicatorProps, DropdownIndicatorProps, components } from 'react-select';
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';

const ClearIndicator = (props: ClearIndicatorProps) => {
  const {
    innerProps: { ref, ...restInnerProps }
  } = props;
  return (
    <div {...restInnerProps} ref={ref} className="me-2">
      <div className="text-primary fs-9">clear</div>
    </div>
  );
};

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <FontAwesomeIcon icon="angle-down" className="fs-9 text-900" />
    </components.DropdownIndicator>
  );
};

const ReactSelect = ({ ...rest }: StateManagerProps) => {
  return (
    <Select
      closeMenuOnSelect={false}
      components={{ ClearIndicator, DropdownIndicator }}
      classNamePrefix="react-select"
      {...rest}
    />
  );
};

export default ReactSelect;
