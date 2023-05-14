import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import { currencyFormat } from 'helpers/utils';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Link } from 'react-router-dom';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import { ProductsTableProductType, productsTableData } from 'data/e-commerce/products';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from 'components/base/Badge';
import Rating from 'components/base/Rating';
import StarCheckbox from 'components/base/StarCheckbox';

const columns: ColumnDef<ProductsTableProductType>[] = [
  {
    id: 'productImage',
    accessorKey: '',
    cell: ({ row: { original } }) => {
      const { productImage } = original;
      return (
        <div className="rounded-2 border">
          <img src={productImage} alt="" width={53} />
        </div>
      );
    },
    meta: { cellProps: { className: 'py-0' } },
    enableSorting: false
  },
  {
    accessorKey: 'product',
    header: 'Product name',
    cell: ({ row: { original } }) => {
      const { product } = original;
      return (
        <Link to="#!" className="fw-semi-bold line-clamp-3">
          {product}
        </Link>
      );
    },
    meta: {
      headerProps: { style: { minWidth: 360 }, className: 'py-2' }
    }
  },
  {
    id: 'price',
    accessorFn: ({ price, priceMax, priceMin }) => `${price} ${priceMax} ${priceMin}`,
    header: 'Price',
    cell: ({ row: { original } }) => {
      const { price, priceMax, priceMin } = original;
      return price
        ? currencyFormat(price)
        : `${currencyFormat(priceMin!)} - ${currencyFormat(priceMax!)}`;
    },
    meta: {
      headerProps: { style: { width: 150 }, className: 'ps-4 text-end' },
      cellProps: { className: 'fw-bold ps-4 text-700 text-end' }
    }
  },
  {
    accessorKey: 'category',
    header: 'Category',
    meta: {
      headerProps: { style: { width: 350 }, className: 'ps-4' },
      cellProps: { className: 'fs-9 fw-semi-bold ps-4 text-600' }
    }
  },
  {
    id: 'tags',
    accessorFn: ({ tags }) => tags.join(''),
    header: 'Tags',
    cell: ({ row: { original } }) => {
      const { tags } = original;
      return tags.map(tag => (
        <Link key={tag} to="#!" className="text-decoration-none">
          <Badge variant="tag">{tag}</Badge>
        </Link>
      ));
    },
    meta: {
      headerProps: { style: { width: 250 }, className: 'ps-3' },
      cellProps: { className: 'd-flex flex-wrap gap-2' }
    }
  },
  {
    id: 'starred',
    accessorKey: '',
    cell: ({ row: { original } }) => {
      const { starred } = original;
      return <StarCheckbox />;
    },
    meta: {
      headerProps: { style: { width: 125 }, className: 'ps-4' },
      cellProps: { className: 'ps-4 text-center' }
    }
  },
  {
    accessorKey: 'vendor',
    header: 'Vendor',
    cell: ({ row: { original } }) => {
      const { vendor } = original;
      return <Link to="#!">{vendor}</Link>;
    },
    meta: {
      headerProps: { className: 'ps-4' },
      cellProps: { className: 'ps-4 fw-semi-bold text-start' }
    }
  },
  {
    accessorKey: 'publishedOn',
    header: 'Published on',
    meta: {
      headerProps: { style: { width: 50 }, className: 'ps-4' },
      cellProps: { className: 'text-600 ps-4' }
    }
  }
  // {
  //   id: 'action',
  //   cell: () => (
  //     <div className="d-flex gap-2 justify-content-end">
  //       <Button size="sm" variant="" className="text-500 hover-text-600">
  //         <FontAwesomeIcon icon="trash" />
  //       </Button>
  //       <Button className="fs-10 text-nowrap" startIcon={<FontAwesomeIcon icon="shopping-cart" />}>
  //         Add to cart
  //       </Button>
  //     </div>
  //   ),
  //   meta: {
  //     headerProps: { style: { width: '35%' } }
  //   }
  // }
];

const ProductsTable = () => {
  const table = useAdvanceTable({
    data: productsTableData,
    columns,
    pageSize: 10,
    pagination: true,
    sortable: true,
    selection: true
  });

  return (
    <div>
      <AdvanceTableProvider {...table}>
        <div className="border-y">
          <AdvanceTable tableProps={{ className: 'phoenix-table fs-9' }} />
          <AdvanceTableFooter pagination />
        </div>
      </AdvanceTableProvider>
    </div>
  );
};

export default ProductsTable;
