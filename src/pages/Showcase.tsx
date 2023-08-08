import AdvanceFeatures from 'components/modules/showcase/AdvanceFeatures';
import Demos from 'components/modules/showcase/Demos';
import EssentialFeatures from 'components/modules/showcase/EssentialFeatures';
import Feature from 'components/modules/showcase/Feature';
import Header from 'components/modules/showcase/Header';
import ImportantApplications from 'components/modules/showcase/ImportantApplications';
import NecessaryPages from 'components/modules/showcase/NecessaryPages';
import ShowcaseNavbar from 'components/navbars/ShowcaseNavbar';
import React from 'react';

const Showcase = () => {
  return (
    <>
      <ShowcaseNavbar />
      <Header />
      <Demos />
      <AdvanceFeatures />
      <EssentialFeatures />
      <Feature />
      <ImportantApplications />
      <NecessaryPages />
    </>
  );
};

export default Showcase;
