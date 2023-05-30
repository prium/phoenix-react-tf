import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import ProjectsTopSection from 'components/modules/project-management/ProjectsTopSection';
import ProjectListTable, { projectListTableColumns } from 'components/tables/ProjectListTable';
import { defaultBreadcrumbItems } from 'data/commonData';
import { projectSummaryTableData } from 'data/project-management/projectSummaryTableData';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Link } from 'react-router-dom';

const ProjectListView = () => {
  const table = useAdvanceTable({
    data: projectSummaryTableData,
    columns: projectListTableColumns,
    pageSize: 10,
    pagination: true,
    sortable: true
  });

  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <AdvanceTableProvider {...table}>
        <div className="d-flex flex-wrap mb-4 gap-3 gap-sm-6 align-items-center">
          <h2 className="mb-0">
            Projects
            <span className="fw-normal text-700 ms-3">({projectSummaryTableData.length})</span>
          </h2>
          <Link className="btn btn-primary px-5" to="/">
            <FontAwesomeIcon icon="plus" className="me-2" />
            Add new project
          </Link>
        </div>
        <ProjectsTopSection />
        <ProjectListTable />
      </AdvanceTableProvider>
    </div>
  );
};

export default ProjectListView;
