const Footer = () => {
  return (
    <footer className="bg-zinc-900">
      <div className="max-w-6xl mx-auto text-slate-50">
        <div className="grid grid-cols-4 py-14">
          <div>
            <div>
              <img src="/logo.svg" alt="NhShop" className="leading-8" />
            </div>
            <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
          </div>
          <div>
            <div className="font-semibold">Site Map</div>
            <ul className="leading-10">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Help</div>
            <ul className="leading-10">
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Location</div>
            <ul className="leading-10">
              <li>support@euphoria.in</li>
              <li>Ahmedabad Main Road</li>
              <li>Udaipur, India- 313002</li>
            </ul>
          </div>
        </div>
        <hr className="leading-7" />
        <div className="">
          <p className="text-center py-8">
            Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
