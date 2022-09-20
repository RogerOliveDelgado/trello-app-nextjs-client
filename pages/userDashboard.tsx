import * as React from "react";
import DashboardContent from "../components/dashboard/DashboardContent";

// function Copyright(props: any) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

function UserDashboard() {
  return <DashboardContent />;
}

export default function adminDashboard() {
  return <UserDashboard />;
}
