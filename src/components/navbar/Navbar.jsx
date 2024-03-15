import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { useSelector } from "react-redux";
import myContext from "../../context/data/myContext";
import { IoCartOutline } from "react-icons/io5";
export default function Navbar() {
  const cartItems = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const context = useContext(myContext);
  const { toggleMode, mode } = context;
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear("user");
    window.location.href = "/";
  };
  const login = () => {
    window.location.href = "/login";
  };

  return (
    <div className="bg-white sticky top-0 z-50">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="duration-300 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="absolute top-0 left-0 w-full h-screen bg-white shadow-xl">
              <div className="px-4 pt-8 pb-6 flex flex-col items-center ">
                {/* Menu items */}
                <Link
                  to={"/"}
                  className="text-xl font-medium text-gray-700 border-b mb-5"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
                {user && (
                  <Link
                    to={"/order"}
                    className="text-xl font-medium text-gray-700 border-b mb-5"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Order
                  </Link>
                )}
                {/* Admin link */}
                {user && user.user && user.user.email === "dev@gmail.com" && (
                  <Link
                    to={"/dashboard"}
                    className="text-xl font-medium text-gray-700 border-b mb-5"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Admin
                  </Link>
                )}
                {/* Logout link */}
                {user && (
                  <a
                    onClick={logout}
                    className="text-xl font-medium text-gray-700 cursor-pointer"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Logout
                  </a>
                )}
                {/* Login button */}
                {!user && (
                  <a
                    onClick={login}
                    className="text-sm font-medium text-gray-700 cursor-pointer"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Login
                  </a>
                )}
                {/* Add more menu items as needed */}
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      {/* Desktop */}
      <header className="relative bg-white">
        {/* Top bar */}
        <p className="flex h-10 items-center justify-center bg-green-500 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over ₹500
        </p>
        {/* Navigation */}
        <nav
          aria-label="Top"
          className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl"
        >
          {/* Navigation content */}
          <div className="">
            <div className="flex h-16 items-center">
              {/* Menu button */}
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                <span className="sr-only">Open menu</span>
              </button>
              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={"/"} className="flex">
                  <div className="flex ">
                    <h1
                      className="text-2xl font-bold text-black px-2 py-1 rounded"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      SwasthaVeda
                    </h1>
                  </div>
                </Link>
              </div>
              {/* Right section */}
              <div className="ml-auto flex items-center">
                {/* Navigation links */}
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {/* Order link */}
                  {user && (
                    <Link
                      to={"/order"}
                      className="text-sm font-medium text-gray-700"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Order
                    </Link>
                  )}
                  {/* Admin link */}
                  {user && user.user && user.user.email === "dev@gmail.com" && (
                    <Link
                      to={"/dashboard"}
                      className="text-sm font-medium text-gray-700"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Admin
                    </Link>
                  )}
                  {/* Logout link */}
                  {user && (
                    <a
                      onClick={logout}
                      className="text-sm font-medium text-gray-700 cursor-pointer"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Logout
                    </a>
                  )}
                  {/* Login button */}
                  {!user && (
                    <a
                      onClick={login}
                      className="text-sm font-medium text-gray-700 cursor-pointer"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Login
                    </a>
                  )}
                </div>
                {/* Toggle mode button */}
                <div className="flex lg:ml-6">
                  <button className="" onClick={toggleMode}>
                    {mode === "light" ? (
                      <FiSun className="" size={30} />
                    ) : mode === "dark" ? (
                      <BsFillCloudSunFill size={30} />
                    ) : (
                      ""
                    )}
                  </button>
                </div>
                {/* Cart */}
                {user && (
                  <div className="ml-4 flow-root lg:ml-6">
                    <Link
                      to={"/cart"}
                      className="group -m-2 flex items-center p-2"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      {/* Cart icon */}
                      <IoCartOutline />
                      <span
                        className="ml-2 text-xl font-medium text-gray-700 group-"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        {cartItems.length}
                      </span>
                      <span className="sr-only">items in cart, view bag</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
//og
// import { Fragment, useContext, useState } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { Link } from "react-router-dom";
// import { BsFillCloudSunFill } from "react-icons/bs";
// import { FiSun } from "react-icons/fi";
// import { RxCross2 } from "react-icons/rx";
// import { useSelector } from "react-redux";
// import myContext from "../../context/data/myContext";

// export default function Navbar() {
//   const cartItems = useSelector((state) => state.cart);
//   const [open, setOpen] = useState(false);
//   const context = useContext(myContext);
//   const { toggleMode, mode } = context;
//   const user = JSON.parse(localStorage.getItem("user"));

//   const logout = () => {
//     localStorage.clear("user");
//     window.location.href = "/";
//   };
//   const login = () => {
//     window.location.href = "/login";
//   };

//   return (
//     <div className="bg-white sticky top-0 z-50  ">
//       {/* Mobile menu */}
//       <Transition.Root show={open} as={Fragment}>
//         <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
//           {/* Dialog content */}
//         </Dialog>
//       </Transition.Root>

//       {/* Desktop */}
//       <header className="relative bg-white">
//         {/* Top bar */}
//         <p className="flex h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
//           Get free delivery on orders over ₹500
//         </p>
//         {/* Navigation */}
//         <nav
//           aria-label="Top"
//           className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl"
//         >
//           {/* Navigation content */}
//           <div className="">
//             <div className="flex h-16 items-center">
//               {/* Menu button */}
//               <button
//                 type="button"
//                 className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
//                 onClick={() => setOpen(true)}
//               >
//                 <span className="sr-only">Open menu</span>
//                 {/* Menu icon */}
//               </button>
//               {/* Logo */}
//               <div className="ml-4 flex lg:ml-0">
//                 <Link to={"/"} className="flex">
//                   <div className="flex ">
//                     <h1
//                       className="text-2xl font-bold text-black px-2 py-1 rounded"
//                       style={{ color: mode === "dark" ? "white" : "" }}
//                     >
//                       SwasthaVeda
//                     </h1>
//                   </div>
//                 </Link>
//               </div>
//               {/* Right section */}
//               <div className="ml-auto flex items-center">
//                 {/* Navigation links */}
//                 <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
//                   {/* <Link
//                     to={"/allproducts"}
//                     className="text-sm font-medium text-gray-700"
//                     style={{ color: mode === "dark" ? "white" : "" }}
//                   >
//                     All Products
//                   </Link> */}
//                   {/* Order link */}
//                   {user && (
//                     <Link
//                       to={"/order"}
//                       className="text-sm font-medium text-gray-700"
//                       style={{ color: mode === "dark" ? "white" : "" }}
//                     >
//                       Order
//                     </Link>
//                   )}
//                   {/* Admin link */}
//                   {user && user.user && user.user.email === "dev@gmail.com" && (
//                     <Link
//                       to={"/dashboard"}
//                       className="text-sm font-medium text-gray-700"
//                       style={{ color: mode === "dark" ? "white" : "" }}
//                     >
//                       Admin
//                     </Link>
//                   )}
//                   {/* Logout link */}
//                   {user && (
//                     <a
//                       onClick={logout}
//                       className="text-sm font-medium text-gray-700 cursor-pointer"
//                       style={{ color: mode === "dark" ? "white" : "" }}
//                     >
//                       Logout
//                     </a>
//                   )}
//                   {/* Login but logic */}
//                   {!user && (
//                     <a
//                       onClick={login}
//                       className="text-sm font-medium text-gray-700 cursor-pointer"
//                       style={{ color: mode === "dark" ? "white" : "" }}
//                     >
//                       Login
//                     </a>
//                   )}
//                 </div>
//                 {/* Country flag */}
//                 {user && (
//                   <div className="hidden lg:ml-8 lg:flex">
//                     <a href="#" className="flex items-center text-gray-700">
//                       <img
//                         src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
//                         alt=""
//                         className="block h-auto w-5 flex-shrink-0"
//                       />
//                       <span
//                         className="ml-3 block text-sm font-medium"
//                         style={{ color: mode === "dark" ? "white" : "" }}
//                       >
//                         INDIA
//                       </span>
//                     </a>
//                   </div>
//                 )}
//                 {/* User avatar */}
//                 {user && (
//                   <div className="hidden lg:ml-8 lg:flex">
//                     <a href="#" className="flex items-center text-gray-700">
//                       <img
//                         className="inline-block w-10 h-10 rounded-full"
//                         src="https://images.unsplash.com/photo-1616377009507-c8111f07aced?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhbnVtYW58ZW58MHx8MHx8fDA%3D"
//                         alt="dev"
//                       />
//                     </a>
//                   </div>
//                 )}

//                 {/* Toggle mode button */}
//                 <div className="flex lg:ml-6">
//                   <button className="" onClick={toggleMode}>
//                     {mode === "light" ? (
//                       <FiSun className="" size={30} />
//                     ) : mode === "dark" ? (
//                       <BsFillCloudSunFill size={30} />
//                     ) : (
//                       ""
//                     )}
//                   </button>
//                 </div>

//                 {/* Cart */}
//                 {user && (
//                   <div className="ml-4 flow-root lg:ml-6">
//                     <Link
//                       to={"/cart"}
//                       className="group -m-2 flex items-center p-2"
//                       style={{ color: mode === "dark" ? "white" : "" }}
//                     >
//                       {/* Cart icon */}
//                       <span
//                         className="ml-2 text-sm font-medium text-gray-700 group-"
//                         style={{ color: mode === "dark" ? "white" : "" }}
//                       >
//                         {cartItems.length}
//                       </span>
//                       <span className="sr-only">items in cart, view bag</span>
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// }
