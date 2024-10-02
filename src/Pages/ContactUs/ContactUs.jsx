import NavBar from "../../Components/NavBar/NavBar";
import { Footer } from "../../Components/Footer/Footer";
import "./ContactUs.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Hero from "../../Components/Sections/Hero/Hero";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
export const ContactUs = () => {
  const info = [
    {
      id: 1,
      title: "Location",
      icon_1: <FaLocationDot size={25} />,
      des_1: "Syria - Damascus",
      des_2: "",
    },
    {
      id: 2,
      title: "Email",
      icon_1: <MdEmail size={25} />,
      des_1: "futureschool@gmail.com",
      des_2: "",
    },
    {
      id: 3,
      title: "Phone Number",
      icon_1: <FaPhoneAlt size={25} />,
      icon_2: <FaPhoneAlt size={25} />,
      des_1: "011-6335944",
      des_2: "+96395656448",
    },
  ];
  return (
    <div>
      <NavBar />

      <div className="contact-us container">
        <div className="info-contact flex">
          {info.map((item) => (
            <div className="card-info" key={item.id}>
              <span className="icon-card ">{item.icon_1}</span>

              <div className="desc-contact">
                <p>{item.des_1}</p>
                <p>{item.des_2}</p>
              </div>
            </div>
          ))}
        </div>

        <form className="form-contact">
          <div className="group-input flex">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>
          <input type="text" placeholder="Subject" />

          <textarea placeholder="Message" rows="10"></textarea>

          <Link>Send</Link>
        </form>
      </div>

      <Footer />
    </div>
  );
};
