import { Outlet } from 'react-router-dom';

import { GuestRoutesLayout } from '../../layout';

const LayoutWrapper = () => (
  <GuestRoutesLayout>
    <Outlet />
  </GuestRoutesLayout>
);

export default LayoutWrapper;
