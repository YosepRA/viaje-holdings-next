import React, { ReactNode } from 'react';

import MainNavbar from 'components/MainNavbar';

const ServicesLayout = function ServicesLayoutComponent({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <MainNavbar />

      {children}
    </>
  );
};

export default ServicesLayout;
