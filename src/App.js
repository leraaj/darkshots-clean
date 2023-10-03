import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute";
// Layouts
import ExternalLayout from "./components/shared/layouts/ExternalLayout";
// Private Routes (Admin)
import Accounts from "./pages/Admin/accounts/Index";
// import Appliants from "./pages/Admin/applicants/Index";
// import Clients from "./pages/Admin/clients/Index";
// import Posts from "./pages/Admin/posts/Index";
// import Jobs from "./pages/Admin/jobs/Index";
// Private Routes (Others)
import Profile from "./pages/otherUsers/profile/Index";
// import Orders from "./pages/otherUsers/orders/Index";
// import MediaFiles from "./pages/otherUsers/mediaFiles/Index";
// Public Routes
import Login from "./pages/homepage/login/Index";
import Homepage from "./pages/homepage/Index";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const Role = { admin: 1, client: 2, applicant: 3, public: undefined };

  return (
    <>
      <Routes>
        <Route element={<PrivateRoute allowedRoles={[Role.admin]} />}>
          <Route path="/accounts" element={<Accounts />} />
          {/* <Route path="/applicants" element={<Appliants />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/jobs" element={<Jobs />} /> */}
        </Route>
        <Route
          element={
            <PrivateRoute allowedRoles={[Role.applicant, Role.client]} />
          }>
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/orders" element={<Orders />} />
          <Route path="/mediaFiles" element={<MediaFiles />} /> */}
        </Route>
        <Route element={<ExternalLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Homepage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
