import React from 'react';

const TodoListItem = () => {
  return (
    <div className="d-flex hover-actions-trigger py-3 border-top">
      <input
        className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined"
        type="checkbox"
        id="checkbox-todo-0"
        data-event-propagation-prevent="data-event-propagation-prevent"
      />
      <div
        className="row justify-content-between align-items-md-center btn-reveal-trigger border-200 gx-0 flex-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
          <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
            <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-0 me-2 line-clamp-1 text-900">
              Designing the dungeon
            </label>
            <div className="badge badge-phoenix ms-auto fs--2 badge-phoenix-primary">
              <span className="fw-bold badge-label">DRAFT</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
          <div className="d-flex lh-1 align-items-center">
            <button className="btn p-0 text-700 fs--2 me-2">
              <svg
                className="svg-inline--fa fa-paperclip me-1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="paperclip"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg
              >
                <path
                  fill="currentColor"
                  d="M364.2 83.8C339.8 59.39 300.2 59.39 275.8 83.8L91.8 267.8C49.71 309.9 49.71 378.1 91.8 420.2C133.9 462.3 202.1 462.3 244.2 420.2L396.2 268.2C407.1 257.3 424.9 257.3 435.8 268.2C446.7 279.1 446.7 296.9 435.8 307.8L283.8 459.8C219.8 523.8 116.2 523.8 52.2 459.8C-11.75 395.8-11.75 292.2 52.2 228.2L236.2 44.2C282.5-2.08 357.5-2.08 403.8 44.2C450.1 90.48 450.1 165.5 403.8 211.8L227.8 387.8C199.2 416.4 152.8 416.4 124.2 387.8C95.59 359.2 95.59 312.8 124.2 284.2L268.2 140.2C279.1 129.3 296.9 129.3 307.8 140.2C318.7 151.1 318.7 168.9 307.8 179.8L163.8 323.8C157.1 330.5 157.1 341.5 163.8 348.2C170.5 354.9 181.5 354.9 188.2 348.2L364.2 172.2C388.6 147.8 388.6 108.2 364.2 83.8V83.8z"
                />
              </svg>
              {/* <span class="fas fa-paperclip me-1"></span> Font Awesome fontawesome.com */}2
            </button>
            <p className="text-700 fs--2 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
              12 Nov, 2021
            </p>
            <div className="hover-md-hide hover-xl-show hover-xxl-hide">
              <p className="text-700 fs--2 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl border-300">
                12:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute"
        style={{ top: '23%' }}
        data-event-propagation-prevent="data-event-propagation-prevent"
      >
        <div
          className="hover-actions end-0"
          data-event-propagation-prevent="data-event-propagation-prevent"
        >
          <button
            className="btn btn-phoenix-secondary btn-icon me-1 fs--2 text-900 px-0 me-1"
            data-event-propagation-prevent="data-event-propagation-prevent"
          >
            <svg
              className="svg-inline--fa fa-pen-to-square"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="pen-to-square"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg
            >
              <path
                fill="currentColor"
                d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z"
              />
            </svg>
            {/* <span class="fas fa-edit"></span> Font Awesome fontawesome.com */}
          </button>
          <button
            className="btn btn-phoenix-secondary btn-icon fs--2 text-danger px-0"
            data-event-propagation-prevent="data-event-propagation-prevent"
          >
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
        </div>
      </div>
    </div>
  );
};

export default TodoListItem;
