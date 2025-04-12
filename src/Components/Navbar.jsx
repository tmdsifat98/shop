import React from "react";
import { IoMdCart } from "react-icons/io";
import ThemeSwitcher from './ThemeSwitcher';
const Navbar = ({ carts, price }) => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">SifatShop</a>
        </div>
        <div className="mr-6"><ThemeSwitcher></ThemeSwitcher></div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle mr-2"
            >
              <div className="indicator">
                <IoMdCart size={25} />
                <span className="badge badge-sm text-[14px] indicator-item">
                  {carts.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">
                  {carts.length == 1 || carts.length == 0
                    ? `${carts.length} Item`
                    : `${carts.length} Items`}
                </span>
                <span className="text-info">Subtotal: ${price}</span>
                <div className="card-actions">
                  <button
                    className="btn btn-primary btn-block"
                  >
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
