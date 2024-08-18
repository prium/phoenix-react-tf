import {
  faCheck,
  faFile,
  faGrip,
  faImages,
  faLocationDot,
  faMugSaucer,
  faShieldHalved,
  faUsd,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

export interface wizardHeaderInterface {
  icon: IconDefinition;
  label: string;
}

export const addPropertyWizardHeader: wizardHeaderInterface[] = [
  {
    icon: faFile,
    label: 'Info'
  },
  {
    icon: faLocationDot,
    label: 'Location'
  },
  {
    icon: faMugSaucer,
    label: 'Amenities'
  },
  {
    icon: faImages,
    label: 'Photos'
  },
  {
    icon: faUsd,
    label: 'Finance'
  },
  {
    icon: faShieldHalved,
    label: 'Policies'
  },
  {
    icon: faCheck,
    label: 'Done'
  }
];
export const addRoomWizardHeader: wizardHeaderInterface[] = [
  {
    icon: faFile,
    label: 'Details'
  },
  {
    icon: faUsd,
    label: 'Pricing'
  },
  {
    icon: faGrip,
    label: 'Amenities'
  },
  {
    icon: faImages,
    label: 'Photos'
  },
  {
    icon: faCheck,
    label: 'Done'
  }
];
