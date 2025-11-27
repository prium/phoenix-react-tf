import { faFileExport, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import SearchBox from 'components/common/SearchBox';
import AlbumItems from 'components/modules/gallery/AlbumItems';
import { defaultBreadcrumbItems } from 'data/commonData';

const Album = () => {
  return (
    <>
      <PageBreadcrumb items={defaultBreadcrumbItems} className='mb-3' />
      <div className='mb-9'>
        <h2 className='mb-5'>Album</h2>
        <div className='d-flex justify-content-between gap-3 flex-wrap'>
          <div>
            <Button variant="primary" className='me-4'>
              <FontAwesomeIcon icon={faPlus} className='me-2' />
              Add New
            </Button>
            <Button variant="link" className='px-0 me-4 text-body'>
              <FontAwesomeIcon icon={faFileExport} className='me-2 fs-9' />
              Export
            </Button>
          </div>
          <SearchBox placeholder='Search by name' />
        </div>
        <AlbumItems />
      </div>
    </>
  );
};

export default Album;
