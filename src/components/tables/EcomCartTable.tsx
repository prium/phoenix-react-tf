import { CartItemType } from 'data/ecommerce';
import { currencyFormat } from 'helpers/utils';

interface EcomCartTableProps {
  products: CartItemType[];
}

const EcomCartTable = ({ products }: EcomCartTableProps) => {
  return (
    <table className="table fs-9 mb-0 border-top border-200">
      <thead>
        <tr>
          <th scope="col" />
          <th scope="col" style={{ minWidth: 250 }}>
            PRODUCTS
          </th>
          <th scope="col" style={{ width: 80 }}>
            COLOR
          </th>
          <th scope="col" style={{ width: 150 }}>
            SIZE
          </th>
          <th className="text-end" scope="col" style={{ width: 300 }}>
            PRICE
          </th>
          <th className="ps-5" scope="col" style={{ width: 200 }}>
            QUANTITY
          </th>
          <th className="text-end" scope="col" style={{ width: 250 }}>
            TOTAL
          </th>
          <th className="text-end pe-0" scope="col" />
        </tr>
      </thead>
      <tbody className="list" id="cart-table-body">
        {products.map(product => (
          <tr className="cart-table-row btn-reveal-trigger" key={product.id}>
            <td className="align-middle white-space-nowrap py-0">
              <div className="border rounded-2">
                <img src={product.image} alt={product.name} width={53} />
              </div>
            </td>
            <td className="products align-middle">
              <a className="fw-semi-bold mb-0 line-clamp-2" href="#!">
                {product.name}
              </a>
            </td>
            <td className="color align-middle white-space-nowrap fs-9 text-900">{product.color}</td>
            <td className="size align-middle white-space-nowrap text-700 fs-9 fw-semi-bold">
              {product.size}
            </td>
            <td className="price align-middle text-900 fs-9 fw-semi-bold text-end">
              {currencyFormat(product.price)}
            </td>
            <td className="quantity align-middle fs-8 ps-5">
              <div className="input-group input-group-sm flex-nowrap" data-quantity="data-quantity">
                <button className="btn btn-sm px-2" data-type="minus">
                  -
                </button>
                <input
                  className="form-control text-center input-spin-none bg-transparent border-0 px-0"
                  type="number"
                  min={1}
                  defaultValue={2}
                  aria-label="Amount (to the nearest dollar)"
                />
                <button className="btn btn-sm px-2" data-type="plus">
                  +
                </button>
              </div>
            </td>
            <td className="total align-middle fw-bold text-1000 text-end">
              {currencyFormat(product.total)}
            </td>
            <td className="align-middle white-space-nowrap text-end pe-0 ps-3">
              <button className="btn btn-sm text-500 hover-text-600 me-2">
                <svg
                  className="svg-inline--fa fa-trash"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="trash"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  data-fa-i2svg
                >
                  <path
                    fill="currentColor"
                    d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"
                  />
                </svg>
                {/* <span class="fas fa-trash"></span> Font Awesome fontawesome.com */}
              </button>
            </td>
          </tr>
        ))}

        <tr className="cart-table-row btn-reveal-trigger">
          <td className="text-1100 fw-semi-bold ps-0 fs-8" colSpan={6}>
            Items subtotal :
          </td>
          <td className="text-1100 fw-bold text-end fs-8">$691</td>
          <td />
        </tr>
      </tbody>
    </table>
  );
};

export default EcomCartTable;
