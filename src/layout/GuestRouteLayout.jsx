import './index.css';

const GuestRouteLayout = ({ children }) => (
  <div className="guest-container d-flex justify-content-center align-items-center">
    <div>{children}</div>
  </div>
);

export default GuestRouteLayout;
