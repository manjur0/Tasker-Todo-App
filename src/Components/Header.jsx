import Logo from "../assets/lws-logo-en.svg";
const Header = () => {
  return (
    <nav className="py-6 md:py-8  top-0 w-full mx-auto !bg-[#191D26] z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <a href="/">
          <img className="h-[45px]" src={Logo} alt="Tasker Logo" />
        </a>
      </div>
    </nav>
  );
};

export default Header;
