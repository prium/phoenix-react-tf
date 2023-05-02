import dayjs from 'dayjs';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const EcomProfilePersonalInfo = () => {
  return (
    <Row className="g-3 mb-5">
      <Col xs={12} lg={6}>
        <label className="form-label text-1000 fs-0 ps-0 text-capitalize lh-sm" htmlFor="fullName">
          Full name
        </label>
        <input className="form-control" id="fullName" type="text" placeholder="Full name" />
      </Col>
      <Col xs={12} lg={6}>
        <label className="form-label text-1000 fs-0 ps-0 text-capitalize lh-sm" htmlFor="gender">
          Gender
        </label>
        <select className="form-select" id="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary">Non-binary</option>
          <option value="not-to-say">Prefer not to say</option>
        </select>
      </Col>
      <Col xs={12} lg={6}>
        <label className="form-label text-1000 fs-0 ps-0 text-capitalize lh-sm" htmlFor="email">
          Email
        </label>
        <input className="form-control" id="email" type="text" placeholder="Email" />
      </Col>
      <Col xs={12} lg={6}>
        <Row className="g-2 gy-lg-0">
          {/* <label className="form-label text-1000 fs-0 ps-1 text-capitalize lh-sm">
            Date of birth
          </label> */}
          <Col xs={6} sm={2} lg={3} xl={2}>
            <select className="form-select" id="date">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
              <option value={13}>13</option>
              <option value={14}>14</option>
              <option value={15}>15</option>
              <option value={16}>16</option>
              <option value={17}>17</option>
              <option value={18}>18</option>
              <option value={19}>19</option>
              <option value={20}>20</option>
              <option value={21}>21</option>
              <option value={22}>22</option>
              <option value={23}>23</option>
              <option value={24}>24</option>
              <option value={25}>25</option>
              <option value={26}>26</option>
              <option value={27}>27</option>
              <option value={28}>28</option>
              <option value={29}>29</option>
              <option value={30}>30</option>
            </select>
          </Col>
          <Col xs={6} sm={2} lg={3} xl={2}>
            <Form.Select>
              {dayjs.months().map(month => (
                <option value={month} key={month}>
                  {month.slice(0, 3)}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col xs={12} sm={8} lg={6} xl={8}>
            <Form.Select>
              {dayjs.months().map(month => (
                <option value={month} key={month}>
                  {month.slice(0, 3)}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
      </Col>
      <Col xs={12} lg={6}>
        <label
          className="form-label text-1000 fw-bold fs-0 ps-0 text-capitalize lh-sm"
          htmlFor="phone"
        >
          Phone
        </label>
        <input className="form-control" id="phone" type="text" placeholder="+1234567890" />
      </Col>
      <Col xs={12} lg={6}>
        <label
          className="form-label text-1000 fw-bold fs-0 ps-0 text-capitalize lh-sm"
          htmlFor="alternative_phone"
        >
          Alternative phone
        </label>
        <input
          className="form-control"
          id="alternative_phone"
          type="text"
          placeholder="+1234567890"
        />
      </Col>
      <Col xs={12} lg={4}>
        <label
          className="form-label text-1000 fw-bold fs-0 ps-0 text-capitalize lh-sm"
          htmlFor="facebook"
        >
          Facebook
        </label>
        <input className="form-control" id="facebook" type="text" placeholder="Facebook" />
      </Col>
      <Col xs={12} lg={4}>
        <label
          className="form-label text-1000 fw-bold fs-0 ps-0 text-capitalize lh-sm"
          htmlFor="instagram"
        >
          Instagram
        </label>
        <input className="form-control" id="instagram" type="text" placeholder="Instagram" />
      </Col>
      <Col xs={12} lg={4}>
        <label
          className="form-label text-1000 fw-bold fs-0 ps-0 text-capitalize lh-sm"
          htmlFor="twitter"
        >
          Twitter
        </label>
        <input className="form-control" id="twitter" type="text" placeholder="Twitter" />
      </Col>
    </Row>
  );
};

export default EcomProfilePersonalInfo;
