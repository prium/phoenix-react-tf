import {
  UilEnvelope,
  UilEnvelopeBlock,
  UilEnvelopeCheck,
  UilEnvelopeOpen,
  UilEnvelopeUpload,
  UilEnvelopes
} from '@iconscout/react-unicons';

export interface StatType {
  id: number;
  icon: JSX.Element;
  emailCount: string;
  title: string;
}
export const stats: StatType[] = [
  {
    id: 1,
    icon: <UilEnvelope className="mb-1 text-primary" size={31.25} />,
    emailCount: '28,00',
    title: 'Total Emails'
  },
  {
    id: 2,
    icon: <UilEnvelopeUpload className="mb-1 text-info" size={31.25} />,
    emailCount: '1,866',
    title: 'Emails Sent'
  },
  {
    id: 3,
    icon: <UilEnvelopes className="mb-1 text-primary" size={31.25} />,
    emailCount: '1,366',
    title: 'Emails Delivered'
  },
  {
    id: 4,
    icon: <UilEnvelopeOpen className="mb-1 text-info" size={31.25} />,
    emailCount: '1,200',
    title: 'Emails Opened'
  },
  {
    id: 5,
    icon: <UilEnvelopeCheck className="mb-1 text-success" size={31.25} />,
    emailCount: '900',
    title: 'Emails Clicked'
  },
  {
    id: 6,
    icon: <UilEnvelopeBlock className="mb-1 text-danger" size={31.25} />,
    emailCount: '500',
    title: 'Emails Bounce'
  }
];
