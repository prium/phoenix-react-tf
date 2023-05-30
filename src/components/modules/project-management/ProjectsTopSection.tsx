import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FilterTab from 'components/common/FilterTab';
import SearchBox from 'components/common/SearchBox';
import ToggleViewButton from 'components/common/ToggleViewbutton';
import FourGrid from 'components/icons/FourGrid';
import NineGrid from 'components/icons/NineGrid';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { ChangeEvent, useMemo } from 'react';
import { Col, Row } from 'react-bootstrap';

const ProjectsTopSection = () => {
  const { setGlobalFilter, getPrePaginationRowModel } = useAdvanceTableContext();

  const tabItems = useMemo(() => {
    const getDataCount = (label: string) =>
      getPrePaginationRowModel().rows.filter(
        ({ original: { status } }: any) => status.label === label
      ).length;

    return [
      {
        label: 'All',
        value: 'all',
        columnId: 'status',
        count: getPrePaginationRowModel().rows.length
      },
      {
        label: 'Ongoing',
        value: 'ongoing',
        columnId: 'status',
        count: getDataCount('ongoing')
      },
      {
        label: 'Cancelled',
        value: 'cancelled',
        columnId: 'status',
        count: getDataCount('cancelled')
      },
      {
        label: 'Completed',
        value: 'completed',
        columnId: 'status',
        count: getDataCount('completed')
      },
      { label: 'Critical', value: 'critical', columnId: 'status', count: getDataCount('critical') }
    ];
  }, [getPrePaginationRowModel]);

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(e.target.value || undefined);
  };

  return (
    <Row className="g-3 justify-content-between align-items-end mb-4">
      <Col xs={12} sm="auto">
        <FilterTab tabItems={tabItems} />
      </Col>
      <Col xs={12} sm="auto">
        <div className="d-flex align-items-center gap-1">
          <SearchBox
            onChange={handleSearchInputChange}
            placeholder="Search projects"
            style={{ maxWidth: '30rem' }}
            className="me-3"
          />
          <ToggleViewButton tooltip="List view" active>
            <FontAwesomeIcon icon="list" className="fs-10" />
          </ToggleViewButton>
          <ToggleViewButton tooltip="Board view">
            <NineGrid />
          </ToggleViewButton>
          <ToggleViewButton tooltip="Card view">
            <FourGrid />
          </ToggleViewButton>
        </div>
      </Col>
    </Row>
  );
};

export default ProjectsTopSection;
