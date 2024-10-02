import "./JoinUs.css";
import join from "../../../assets/join-us-2.jpg";
import { Link } from "react-router-dom";
const JoinUs = () => {
  return (
    <div className="sec-join-us container flex  item-center">
      <img src={join} alt="" />
      <div className="join-us flex flex-column gap-5">
        <h3>طلب الانضمام الى المدرسة</h3>
        <div className="flex flex-column gap-3 align-items-end">
          <p>
            يتم التسجيل في المدرسة من خلال الضغط على الزر أدناه وتعبئة استمارة
            الطالب
          </p>
          <Link>أملأ الاستمارة</Link>
        </div>

        <div className="flex flex-column gap-3 align-items-end">
          <p>
            إذا كنت تبحث عن فرصة عمل لتكون جزء من اسرة مدرسة المستقبل النموذجية
            الخاصة قم بإرسال سيرتك الذاتية وتعبئة بياناتك من خلال الضغط على زر
            طلب التوظيف
          </p>
          <Link>طلب توظيف</Link>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
