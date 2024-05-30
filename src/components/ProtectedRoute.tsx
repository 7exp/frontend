// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { jwtDecode } from 'jwt-decode';
// // buat export function getJWT dari coookie token
// import { getCookie } from 'typescript-cookie';



// // Interface
// interface ProtectedRouteProps {
//     isLoggedIn: boolean;
// }

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isLoggedIn }) => {
//     const jwt = getCookie("token"); // Ambil token dari cookie
//     if (!jwt) {
//         return <Navigate to="/" />;
//     }

//     const decodedToken = jwtDecode<{ role: string }>(jwt); // Mendekode token JWT
//     if (decodedToken.role !== "admin" && isLoggedIn) {
//         return <Navigate to="/" />;
//     }

//     return <Outlet />;

// };

// export default ProtectedRoute;