import { Breadcrumb } from 'react-bootstrap';

export interface PageBreadcrumbItem {
  label: string;
  url?: string;
  active?: boolean;
}

const PageBreadcrumb = ({ items }: { items: PageBreadcrumbItem[] }) => {
  return (
    <Breadcrumb className="mb-2">
      {items.map(item => (
        <Breadcrumb.Item href={item.url} active={item.active} key={item.label}>
          {item.label}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default PageBreadcrumb;
