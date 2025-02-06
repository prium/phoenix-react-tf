import {
  faCss3Alt,
  faDropbox,
  faGoogleDrive,
  faHtml5
} from '@fortawesome/free-brands-svg-icons';
import {
  faCircleInfo,
  faClock,
  faCloud,
  faFile,
  faFileLines,
  faFileWord,
  faFileZipper,
  faFolder,
  faHeart,
  faImage,
  faShareNodes,
  faTrash,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface TreeViewItem {
  id?: string;
  name: string;
  badge?: number;
  dot?: string;
  show?: boolean;
  icon?: IconDefinition;
  children?: TreeViewItem[];
}

interface TreeviewCollapseItemProps {
  item: TreeViewItem;
  treeviewId: string;
}

const TreeviewListItem = ({ item }: { item: TreeViewItem }) => {
  return (
    <li className="treeview-list-item">
      <div className="treeview-item">
        <a href="#!" className="flex-1 ps-2 ms-2">
          <p className="treeview-text text-nowrap">
            {item.icon ? (
              <FontAwesomeIcon
                icon={item.icon}
                className={classNames('treeview-icon', {
                  'text-info-light': item.id === '2-3'
                })}
              />
            ) : (
              <span className={`treeview-icon}`} />
            )}

            {item.name}
            {item.dot && <span className={`treeview-dot bg-${item.dot}`} />}
          </p>
        </a>
      </div>
    </li>
  );
};

const TreeviewCollapseItem = ({
  item,
  treeviewId
}: TreeviewCollapseItemProps) => {
  const [open, setOpen] = useState(item.show);
  return (
    <li className="treeview-list-item">
      <Link
        to=""
        role="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="treeview-collapse-item"
      >
        <p className="treeview-text text-nowrap">
          <FontAwesomeIcon
            icon={faFolder}
            className={classNames('treeview-icon', {
              'text-info-light': item.id === '2-3'
            })}
          />
          {item.name}
          {item.badge && <span className="treeview-badge">{item.badge}</span>}
          {item.dot && <span className={`treeview-dot bg-${item.dot}`} />}
        </p>
      </Link>
      <Collapse in={open}>
        <ul
          className="treeview-list treeview-border"
          id={`${treeviewId}-${item.id}`}
          data-show={item.show || false}
        >
          {item.children?.map((child, index) =>
            child.children ? (
              <TreeviewCollapseItem
                key={index}
                item={child}
                treeviewId="treeviewExample"
              />
            ) : (
              <TreeviewListItem key={index} item={child} />
            )
          )}
        </ul>
      </Collapse>
    </li>
  );
};

const TreeView = () => {
  const treeviewItems = [
    {
      name: 'My Drive',
      id: '1-1',
      show: true,
      children: [
        {
          name: 'Illustrations',
          id: '2-1',
          badge: 3,
          dot: 'danger',
          children: [
            {
              name: 'Read.txt',
              icon: faFileLines
            },
            {
              name: 'error.jpg',
              icon: faImage
            },
            {
              name: 'Illustration.zip',
              icon: faFileZipper
            }
          ]
        },
        {
          name: 'UI Design',
          id: '2-2',
          children: [
            {
              name: 'Pages.zip',
              icon: faFileZipper
            }
          ]
        },
        {
          name: 'Brand Identity',
          id: '2-3',
          children: [
            {
              name: 'information.doc',
              icon: faFileWord
            }
          ]
        },
        {
          name: 'Source Code',
          id: '2-4',
          children: [
            {
              name: 'getting-started.html',
              icon: faHtml5
            },
            {
              name: 'Source Code.zip',
              icon: faFileZipper
            }
          ]
        },
        {
          name: 'Code Backup',
          id: '2-5',
          show: true,
          children: [
            {
              name: 'Files',
              id: '3-1',
              children: [
                {
                  name: 'main.zip',
                  icon: faFileZipper
                }
              ]
            },
            {
              name: 'Report.docx',
              icon: faFile
            },
            {
              name: 'backup.zip',
              icon: faFileZipper
            }
          ]
        },
        {
          name: 'Landing',
          id: '2-6',
          show: true,
          children: [
            {
              name: 'Landing.png',
              icon: faImage
            },
            {
              name: 'Images',
              id: '3-2',
              children: [
                {
                  name: 'images.zip',
                  icon: faFileZipper
                }
              ]
            },
            {
              name: 'index.html',
              icon: faHtml5
            },
            {
              name: 'Style.css',
              icon: faCss3Alt
            }
          ]
        },
        {
          name: 'Travel',
          id: '2-7',
          badge: 4,
          dot: 'danger',
          show: true,
          children: [
            {
              name: 'Files',
              id: '3-3',
              children: [
                {
                  name: 'main.zip',
                  icon: faFileZipper
                }
              ]
            },
            {
              name: 'index.html',
              icon: faHtml5
            },
            {
              name: 'Style.css',
              icon: faCss3Alt
            },
            {
              name: 'Notes.txt',
              icon: faFileLines
            }
          ]
        },
        {
          name: 'Phoenix.html',
          icon: faHtml5
        }
      ]
    },
    {
      name: 'Shared with me',
      icon: faShareNodes
    },
    {
      name: 'Recent',
      icon: faClock
    },
    {
      name: 'Favourite',
      icon: faHeart
    },
    {
      name: 'Spam',
      icon: faCircleInfo
    },
    {
      name: 'Trash',
      icon: faTrash
    },
    {
      name: 'Google Drive',
      icon: faGoogleDrive
    },
    {
      name: 'Dropbox',
      icon: faDropbox
    },
    {
      name: 'One Drive',
      icon: faCloud
    }
  ];

  return (
    <>
      <ul className="mb-0 treeview" id="treeviewExample">
        {treeviewItems.map((item, index) =>
          item.children ? (
            <TreeviewCollapseItem
              key={index}
              item={item}
              treeviewId={`tree${index}`}
            />
          ) : (
            <TreeviewListItem key={index} item={item} />
          )
        )}
      </ul>
    </>
  );
};

export default TreeView;
