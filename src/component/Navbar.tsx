// import { Link, NavLink } from "react-router-dom";
// import { BriefcaseBusiness, Menu, X } from "lucide-react";
// import { useState } from "react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const navClass = ({ isActive }: { isActive: boolean }) =>
//     `transition ${
//       isActive
//         ? "text-blue-600 font-semibold"
//         : "text-slate-600 hover:text-blue-600"
//     }`;

//   return (
//     <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
//         <Link to="/" className="flex items-center gap-2">
//           <div className="rounded-xl bg-blue-600 p-2 text-white">
//             <BriefcaseBusiness size={22} />
//           </div>

//           <span className="text-xl font-bold text-slate-900">
//             Smart<span className="text-blue-600">Jobs</span>
//           </span>
//         </Link>

//         <nav className="hidden items-center gap-8 md:flex">
//           <NavLink to="/" className={navClass}>
//             Home
//           </NavLink>

//           <NavLink to="/jobs" className={navClass}>
//             Find Jobs
//           </NavLink>

//           <NavLink to="/candidate/dashboard" className={navClass}>
//             Candidate
//           </NavLink>

//           <NavLink to="/recruiter/dashboard" className={navClass}>
//             Recruiter
//           </NavLink>
//         </nav>

//         <div className="hidden items-center gap-3 md:flex">
//        <Link
//   to="/login"
//   className="px-4 py-2 font-semibold text-slate-600 hover:text-blue-600"
// >
//   Login
// </Link>

// <Link
//   to="/register"
//   className="rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700"
// >
//   Get Started
// </Link>
//         </div>

//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden"
//         >
//           {open ? <X /> : <Menu />}
//         </button>
//       </div>

//       {open && (
//         <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">
//           <div className="flex flex-col gap-5">
//             <NavLink to="/" onClick={() => setOpen(false)}>
//               Home
//             </NavLink>

//             <NavLink to="/jobs" onClick={() => setOpen(false)}>
//               Find Jobs
//             </NavLink>

//             <NavLink
//               to="/candidate/dashboard"
//               onClick={() => setOpen(false)}
//             >
//               Candidate Dashboard
//             </NavLink>

//             <NavLink
//               to="/recruiter/dashboard"
//               onClick={() => setOpen(false)}
//             >
//               Recruiter Dashboard
//             </NavLink>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

import { Link, NavLink } from "react-router-dom";
import { BriefcaseBusiness, Menu, X } from "lucide-react";
import { useState } from "react";



export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Check if a user is logged in
const storedUser = localStorage.getItem("user");
const user = storedUser ? JSON.parse(storedUser) : null;

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `transition ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-slate-600 hover:text-blue-600"
    }`;

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    setOpen(false);
    window.location.href = "/";
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <div className="rounded-xl bg-blue-600 p-2 text-white">
            <BriefcaseBusiness size={22} />
          </div>

          <span className="text-xl font-bold text-slate-900">
            Smart<span className="text-blue-600">Jobs</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        {user && (
          <nav className="hidden items-center gap-8 md:flex">

            <NavLink to="/" className={navClass}>
              Home
            </NavLink>

            <NavLink to="/jobs" className={navClass}>
              Find Jobs
            </NavLink>

            {/* Candidate navigation */}
            {user.role === "candidate" && (
              <NavLink
                to="/candidate/dashboard"
                className={navClass}
              >
                Candidate
              </NavLink>
            )}

            {/* Recruiter navigation */}
            {user.role === "recruiter" && (
              <NavLink
                to="/recruiter/dashboard"
                className={navClass}
              >
                Recruiter
              </NavLink>
            )}

          </nav>
        )}

        {/* DESKTOP AUTH BUTTONS */}
        <div className="hidden items-center gap-3 md:flex">

          {!user ? (
            <>
              {/* LOGIN */}
              <Link
                to="/login"
                className="px-4 py-2 font-semibold text-slate-600 hover:text-blue-600"
              >
                Login
              </Link>

              {/* SIGN UP */}
              <Link
                to="/register"
                className="rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700"
              >
                Get Started
              </Link>
            </>
          ) : (
            <>
              {/* LOGOUT */}
              <button
                onClick={handleLogout}
                className="px-4 py-2 font-semibold text-red-500 hover:text-red-600"
              >
                Logout
              </button>
            </>
          )}

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">

          <div className="flex flex-col gap-5">

            {!user ? (
              <>
                <NavLink
                  to="/login"
                  onClick={() => setOpen(false)}
                  className={navClass}
                >
                  Login
                </NavLink>

                <NavLink
                  to="/register"
                  onClick={() => setOpen(false)}
                  className={navClass}
                >
                  Get Started
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="/"
                  onClick={() => setOpen(false)}
                  className={navClass}
                >
                  Home
                </NavLink>

                <NavLink
                  to="/jobs"
                  onClick={() => setOpen(false)}
                  className={navClass}
                >
                  Find Jobs
                </NavLink>

                {user.role === "candidate" && (
                  <NavLink
                    to="/candidate/dashboard"
                    onClick={() => setOpen(false)}
                    className={navClass}
                  >
                    Candidate Dashboard
                  </NavLink>
                )}

                {user.role === "recruiter" && (
                  <NavLink
                    to="/recruiter/dashboard"
                    onClick={() => setOpen(false)}
                    className={navClass}
                  >
                    Recruiter Dashboard
                  </NavLink>
                )}

                <button
                  onClick={handleLogout}
                  className="text-left font-semibold text-red-500"
                >
                  Logout
                </button>
              </>
            )}

          </div>
        </div>
      )}
    </header>
  );
}