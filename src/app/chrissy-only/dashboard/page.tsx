import Overview from "@/components/Admin/Overview";
import ProtectedRoute from "@/lib/ProtectedRoute";
import React from "react";

function page() {
  return (
    <div>
      <ProtectedRoute>
        <Overview />
      </ProtectedRoute>
    </div>
  );
}

export default page;
