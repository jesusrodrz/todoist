import React from 'react';
import Sidebar from 'components/layout/Sidebar';
import Tasks from 'components/Tasks';

const Content = () => (
  <section className="content">
    <Sidebar />
    <Tasks />
  </section>
);

export default Content;
