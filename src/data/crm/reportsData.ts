import { BadgeBg } from 'components/base/Badge';
import team32 from 'assets/img/team/32.webp';
import team35 from 'assets/img/team/35.webp';
import team59 from 'assets/img/team/59.webp';
import team18 from 'assets/img/team/18.webp';

export interface SellerReport {
  reportStage: string;
  totalCount: number;
  status: {
    label: string;
    type: BadgeBg;
  };
}

export interface DealsReport {
  dealName: string;
  dealOwner: {
    avatar?: string;
    name: string;
    profileLink: string;
  };
  accountName: string;
  stage: {
    label: string;
    value: number;
  };
  amount: {
    value: number;
    trending: 'up' | 'down';
  };
}

export const sellersReportData: SellerReport[] = [
  {
    reportStage: 'Analysis',
    totalCount: 64,
    status: {
      label: '+15.21%',
      type: 'info'
    }
  },
  {
    reportStage: 'Statement',
    totalCount: 40,
    status: {
      label: '+05.21%',
      type: 'warning'
    }
  },
  {
    reportStage: 'Action',
    totalCount: 45,
    status: {
      label: '+22.12%',
      type: 'primary'
    }
  },
  {
    reportStage: 'Offering',
    totalCount: 62,
    status: {
      label: '-14.21%',
      type: 'danger'
    }
  },
  {
    reportStage: 'Interlocation',
    totalCount: 82,
    status: {
      label: '-14.21%',
      type: 'danger'
    }
  }
];

export const dealsReportData: DealsReport[] = [
  {
    dealName: 'Jo_Td01',
    dealOwner: {
      name: 'Ally Aagaard',
      profileLink: '#!'
    },
    accountName: 'Themewagon',
    stage: {
      label: 'Analysis',
      value: 20
    },
    amount: {
      value: 140,
      trending: 'down'
    }
  },
  {
    dealName: 'Printing Dimensions',
    dealOwner: {
      avatar: team35,
      name: 'Alex Abadi',
      profileLink: '#!'
    },
    accountName: 'Black Box',
    stage: {
      label: 'Statement',
      value: 40
    },
    amount: {
      value: 214,
      trending: 'up'
    }
  },
  {
    dealName: 'MM_TD_120',
    dealOwner: {
      avatar: team32,
      name: 'Kylia Abbott',
      profileLink: '#!'
    },
    accountName: 'Hunter Leader',
    stage: {
      label: 'Action',
      value: 50
    },
    amount: {
      value: 412,
      trending: 'up'
    }
  },
  {
    dealName: 'Truhlar And Truhlar Attys',
    dealOwner: {
      avatar: team32,
      name: 'Kylia Abbott',
      profileLink: '#!'
    },
    accountName: 'Eagle Eye',
    stage: {
      label: 'Offering',
      value: 60
    },
    amount: {
      value: 110,
      trending: 'up'
    }
  },
  {
    dealName: 'Morlong Associates',
    dealOwner: {
      avatar: team59,
      name: 'Lyla Nicole',
      profileLink: '#!'
    },
    accountName: 'Black Box',
    stage: {
      label: 'Negotiation',
      value: 100
    },
    amount: {
      value: 325,
      trending: 'down'
    }
  },
  {
    dealName: 'Product Order',
    dealOwner: {
      avatar: team18,
      name: 'Hunter Leader',
      profileLink: '#!'
    },
    accountName: 'Themewagon',
    stage: {
      label: 'Negotiation',
      value: 100
    },
    amount: {
      value: 198,
      trending: 'down'
    }
  },
  {
    dealName: 'Feltz Printing Service',
    dealOwner: {
      name: 'Ally Aagaard',
      profileLink: '#!'
    },
    accountName: 'Themewagon',
    stage: {
      label: 'Offering',
      value: 80
    },
    amount: {
      value: 142,
      trending: 'up'
    }
  },
  {
    dealName: 'Flat Plate SP',
    dealOwner: {
      name: 'Ally Aagaard',
      profileLink: '#!'
    },
    accountName: 'Eagle Eye',
    stage: {
      label: 'Offering',
      value: 80
    },
    amount: {
      value: 457,
      trending: 'up'
    }
  },
  {
    dealName: 'Evacuated Tube',
    dealOwner: {
      name: 'Ally Aagaard',
      profileLink: '#!'
    },
    accountName: 'Hunter Leader',
    stage: {
      label: 'Action',
      value: 100
    },
    amount: {
      value: 120,
      trending: 'down'
    }
  },
  {
    dealName: 'Product Delivery',
    dealOwner: {
      avatar: team35,
      name: 'Alex Abadi',
      profileLink: '#!'
    },
    accountName: 'Themewagon',
    stage: {
      label: 'Analysis',
      value: 100
    },
    amount: {
      value: 150,
      trending: 'down'
    }
  },
  {
    dealName: 'Product Order',
    dealOwner: {
      avatar: team18,
      name: 'Hunter Leader',
      profileLink: '#!'
    },
    accountName: 'Themewagon',
    stage: {
      label: 'Negotiation',
      value: 100
    },
    amount: {
      value: 140,
      trending: 'down'
    }
  },
  {
    dealName: 'Feltz Printing Service',
    dealOwner: {
      name: 'Ally Aagaard',
      profileLink: '#!'
    },
    accountName: 'Themewagon',
    stage: {
      label: 'Offering',
      value: 80
    },
    amount: {
      value: 122,
      trending: 'up'
    }
  },
  {
    dealName: 'Flat Plate SP',
    dealOwner: {
      name: 'Ally Aagaard',
      profileLink: '#!'
    },
    accountName: 'Eagle Eye',
    stage: {
      label: 'Offering',
      value: 80
    },
    amount: {
      value: 321,
      trending: 'up'
    }
  },
  {
    dealName: 'Evacuated Tube',
    dealOwner: {
      name: 'Ally Aagaard',
      profileLink: '#!'
    },
    accountName: 'Hunter Leader',
    stage: {
      label: 'Action',
      value: 100
    },
    amount: {
      value: 104,
      trending: 'down'
    }
  },
  {
    dealName: 'Product Delivery',
    dealOwner: {
      avatar: team35,
      name: 'Alex Abadi',
      profileLink: '#!'
    },
    accountName: 'Themewagon',
    stage: {
      label: 'Analysis',
      value: 100
    },
    amount: {
      value: 124,
      trending: 'down'
    }
  }
];
