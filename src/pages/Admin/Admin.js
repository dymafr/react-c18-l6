import React from 'react';
import { Outlet } from 'react-router-dom';

function Admin() {
  return (
    <div className="d-flex flex-column flex-fill align-items-center p-20">
      <Outlet />
    </div>
  );
}

export default Admin;
