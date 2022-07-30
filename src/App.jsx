import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { guestRoutes } from './routes/mainRoutes/mainRoutes';
import { LayoutWrapper } from './components';
import { Spinner } from 'react-bootstrap';

function App() {
  let mainContent = guestRoutes.map((route) =>
    route.component ? (
      <Route
        key={route.name}
        path={route.path}
        exact={route.exact}
        name={route.name}
        element={<route.component />}
      />
    ) : (
      route.redirectRoute && <Route path="*" key={route.name} element={<Navigate to="/" />} />
    )
  );

  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <Routes>
          <Route path="/" element={<LayoutWrapper />}>
            {mainContent}
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
