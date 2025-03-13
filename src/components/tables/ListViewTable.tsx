/* eslint-disable @typescript-eslint/no-explicit-any */
import AdvanceTable from 'components/base/AdvanceTable';
// import useAdvanceTable from 'hooks/useAdvanceTable';
// import AdvanceTableProvider from 'providers/AdvanceTableProvider';
// import { Link } from 'react-router-dom';
// import { ColumnDef } from '@tanstack/react-table';
// import { useFileManagerContext } from 'providers/FileManagerProvider';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faFolder,
//   faFileWord,
//   faFileExcel,
//   faFileInvoice,
//   faFileZipper,
//   faFilePdf,
//   faFileCsv
// } from '@fortawesome/free-solid-svg-icons';
// import classNames from 'classnames';
// import Avatar from 'components/base/Avatar';
// import AvatarDropdown from 'components/common/AvatarDropdown';
// import RevealDropdown, {
//   RevealDropdownTrigger
// } from 'components/base/RevealDropdown';
// import { Dropdown } from 'react-bootstrap';
// import useLightbox from 'hooks/useLightbox';
// import Lightbox from 'components/base/LightBox';
// import { useEffect, useRef, useState } from 'react';
// import { File } from '../../data/file-manager';

const ListViewTable = () => {
  return (
    <>
      <AdvanceTable
        tableProps={{
          className: 'phoenix-table fs-9 mb-0 border-top border-translucent'
        }}
        rowClassName="hover-actions-trigger btn-reveal-trigger position-static"
      />
    </>
  );
};

export default ListViewTable;
