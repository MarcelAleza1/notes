export const Navbar = () => {
  return <div className="flex bg-gray-600 p-2 text-white">
    <h3 className=""><a href="/">Notes</a></h3>
    <div className="flex ml-auto">
      <h3 className="px-2"><a href="#services">Services</a></h3>
      <h3 className="px-2"><a href="#pricing">Pricing</a></h3>
       <h3 className="px-2"><a href="#about">About</a></h3>
    </div>
  </div>
}