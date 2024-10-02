import "./About.css";
import NavBar from "../../Components/NavBar/NavBar";
import AboutUs from "../../Components/Sections/AboutUs/AboutUs";
import JoinUs from "../../Components/Sections/JoinUs/JoinUs";
import { Footer } from "../../Components/Footer/Footer";
import vision from "../../assets/vision.png";
import message from "../../assets/email.png";
export const About = () => {
  return (
    <div>
      <NavBar />
      <AboutUs />
      <div className="vision sec-about flex container between">
        <div className="">
          <img src={vision} alt="" />
        </div>

        <div className="content-vision">
          <h3>رؤية المدرسة</h3>
          <p>
            تسعى مدرستنا إلى تحقيق بيئة تعليمية شاملة تدعم تطوير المهارات
            الحياتية والأكاديمية للطلاب. نحن نؤمن بأن التعليم لا يقتصر على نقل
            المعرفة، بل يشمل أيضًا تعزيز القيم الإنسانية والاجتماعية
          </p>
        </div>
      </div>

      <div className="sec-about flex container between">
        <div className="content-message">
          <h3>رسالة المدرسة</h3>

          <ul>
            <li>تنمية المهارات الاساسية للتلاميذ</li>
            <li>
              تقديم برامج لرعاية الموهوبين واستخدام أساليب التكنولوجيا الحديثة
            </li>
            <li>التنمية المهنية المستمرة للمعلمين والعاملين </li>
            <li>غرس القيم والاخلاقيات السليمة في نفوس الطلاب</li>
          </ul>
        </div>

        <div className="">
          <img src={message} alt="" />
        </div>
      </div>
      <JoinUs />
      <Footer />
    </div>
  );
};
