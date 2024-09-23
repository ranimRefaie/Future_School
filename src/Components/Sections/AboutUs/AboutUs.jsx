import img_about from "../../../assets/about.png";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container-about">
        <p>
          نحن مؤسسة تعليمية تسعى لتوفير بيئة تعليمية ملهمة ومحفزة، تجمع بين
          الابتكار والتقنية الحديثة. هدفنا هو تطوير مهارات الطلاب الأكاديمية
          والاجتماعية من خلال منهج دراسي شامل وفعال، يركز على التفكير النقدي
          والإبداع. انضموا إلينا في رحلتنا نحو بناء مستقبل مشرق.
        </p>
      </div>
      <div className="container-about">
        <img src={img_about} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
