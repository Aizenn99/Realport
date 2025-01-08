
function Header() {
  const menu = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 1,
      name: "Skills",
    },
    {
      id: 1,
      name: "Project",
    },
    {
      id: 1,
      name: "Contact",
    },
  ];

  return (
    <div
      className="flex w-screen justify-between shadow-lg
    "
    >
      <div className="w-[90px] h-[90px] bg-black ">
        <img src="/logo.png" className="p-4" />
      </div>
      <div className="  hidden md:flex text-gray-500 items-center gap-14 ">
        {menu.map((item) => (
          <div>
            
            <h2 className="cursor-pointer  hover:text-black  font-medium ">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
      <div className="w-[90px] h-[90px] bg-blue-500 flex justify-center items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10  text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      </div>
    </div>
  );
}

export default Header;
