import React from "react";
import { createPopper } from "@popperjs/core";
import Link from "next/link";

export const Dropdown = ({ color }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const menuRef = React.useRef(null);
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  React.useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setDropdownPopoverShow(false);
      }
    };

    document.addEventListener("mouseup", handler);

    return () => {
      document.addEventListener("mouseup", handler);
    };
  });

  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-slate-700")
    : (bgColor = "bg-" + color + "-500");
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12">
          <div
            className="relative inline-flex align-middle w-full"
            ref={menuRef}
          >
            <button
              className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              type="button"
              // ref={btnDropdownRef}
              onClick={(e) => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              Products
            </button>
            <div
              // ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 absolute top-7 "
              }
              style={{ minWidth: "12rem", transform: "none !important" }}
            >
              <Link
                onClick={() => setDropdownPopoverShow(false)}
                href={"/virtual-dedicated-servers"}
              >
                <p
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-slate-300" +
                    (color === "white" ? " text-slate-700" : "text-white")
                  }
                >
                  VDS Hosting
                </p>
              </Link>

              <Link
                onClick={() => setDropdownPopoverShow(false)}
                href={"/web-hosting"}
              >
                <p
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  hover:bg-slate-300" +
                    (color === "white" ? " text-slate-700" : "text-white")
                  }
                >
                  Web Hosting
                </p>
              </Link>

              <a
                target="_blank"
                onClick={() => setDropdownPopoverShow(false)}
                href={"https://virtuo.host/"}
                rel="noreferrer"
              >
                <p
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  hover:bg-slate-300" +
                    (color === "white" ? " text-slate-700" : "text-white")
                  }
                >
                  Colocation
                </p>
              </a>

              <Link
                onClick={() => setDropdownPopoverShow(false)}
                href={"/dedicated-servers"}
              >
                <p
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  hover:bg-slate-300" +
                    (color === "white" ? " text-slate-700" : "text-white")
                  }
                >
                  Dedicated Servers
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
