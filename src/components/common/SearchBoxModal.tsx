import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getFileIcon } from 'helpers/utils';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Avatar, { Status } from 'components/base/Avatar';
import {
  products,
  quickLinks,
  recentlySearchedItems,
  relatedSearch,
  suggestionFiles,
  suggestionMembers
} from 'data/search';
import Button from 'components/base/Button';

const ResultSectionHeader = ({ title }: { title: string }) => {
  return (
    <h6 className="text-1000 fs-9 border-y border-200 py-2 lh-sm mb-0 px-3">
      {title}
    </h6>
  );
};

const SearchBoxModal = ({ open }: { open: boolean }) => {
  return (
    <Dropdown.Menu
      show={open}
      className="dropdown-menu border border-300 font-base start-0 py-0 overflow-hidden w-100"
      style={{ width: 400 }}
    >
      <h6 className="text-1000 fs-10 py-2 mb-0 px-3">
        24 <span className="text-500">Results</span>{' '}
      </h6>
      <ResultSectionHeader title="Recently Searched" />
      <div className="py-2">
        {recentlySearchedItems.map(item => (
          <Dropdown.Item as={Link} to={item.url} key={item.label}>
            <div className="d-flex align-items-center fw-normal gap-1 text-1000">
              <FontAwesomeIcon icon="clock-rotate-left" transform="shrink-2" />
              {item.label}
            </div>
          </Dropdown.Item>
        ))}
      </div>
      <ResultSectionHeader title="Products" />
      <div className="py-2">
        {products.map(item => (
          <Dropdown.Item
            as={Link}
            to={item.url}
            key={item.name}
            className="py-2 d-flex gap-2 align-items-center"
          >
            <div className="file-thumbnail">
              <img
                className="h-100 w-100 fit-cover rounded-3"
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className="flex-1">
              <h6 className="mb-0 text-1000">{item.name}</h6>
              <p className="fs-10 mb-0 d-flex text-700">
                <span className="fw-medium text-600">{item.details}</span>
              </p>
            </div>
          </Dropdown.Item>
        ))}
      </div>
      <ResultSectionHeader title="Quick Links" />
      <div className="py-2">
        {quickLinks.map(item => (
          <Dropdown.Item as={Link} to={item.url} key={item.label}>
            <div className="d-flex align-items-center fw-normal gap-1 text-1000">
              <FontAwesomeIcon
                icon="link"
                transform="shrink-2"
                className="text-900"
              />
              {item.label}
            </div>
          </Dropdown.Item>
        ))}
      </div>
      <ResultSectionHeader title="Files" />
      <div className="py-2">
        {suggestionFiles.map(item => (
          <Dropdown.Item as={Link} to={item.url} key={item.label}>
            <div className="d-flex align-items-center fw-normal gap-1 text-1000">
              <FontAwesomeIcon
                icon={getFileIcon(item.format)}
                transform="shrink-2"
                className="text-900"
              />
              {item.label}
            </div>
          </Dropdown.Item>
        ))}
      </div>
      <ResultSectionHeader title="Members" />
      <div className="py-2">
        {suggestionMembers.map(item => (
          <Dropdown.Item as={Link} to={item.url} key={item.name}>
            <div className="d-flex align-items-center fw-normal gap-1 text-1000">
              <Avatar
                src={item.avatar}
                size="l"
                status={item.status as Status}
              />
              <div className="flex-1">
                <h6 className="mb-0 text-1000 title">{item.name}</h6>
                <p className="fs-10 mb-0 d-flex text-700">{item.email}</p>
              </div>
            </div>
          </Dropdown.Item>
        ))}
      </div>
      <ResultSectionHeader title="Related Searches" />
      <div className="py-2">
        {relatedSearch.map(item => (
          <Dropdown.Item as={Link} to={item.url} key={item.label}>
            <div className="d-flex align-items-center fw-normal gap-1 text-1000">
              <FontAwesomeIcon
                icon={item.icon as IconProp}
                transform="shrink-2"
                className="text-900"
              />
              {item.label}
            </div>
          </Dropdown.Item>
        ))}
      </div>
    </Dropdown.Menu>
  );
};

export default SearchBoxModal;
