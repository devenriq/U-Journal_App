import { Route, Routes } from "react-router-dom";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        {/* Login and register */}
        <Route path="/auth/*" element={<AuthRoutes />} />

        {/* JournalApp */}
        <Route path="/*" element={<JournalRoutes />} />
      </Routes>
    </div>
  );
};
