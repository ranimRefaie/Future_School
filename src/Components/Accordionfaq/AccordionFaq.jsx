import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Accordionfaq.css";

function Accordionfaq() {
  const FaqData = [
    {
      id: 0,
      question: " كيف يمكنني التسجيل في مدرسة المستقبل النموذجية ؟",
      answer:
        "يمكنك التسجيل من خلال زيارة موقعنا الإلكتروني وملأ استمارة التسجيل. كما يمكنك الاتصال بنا لمزيد من المعلومات حول متطلبات التسجيل والمواعيد النهائية",
    },
    {
      id: 1,
      question: "هل توفر المدرسة أنشطة خارج المنهج الدراسي",
      answer:
        "نعم، نقدم مجموعة متنوعة من الأنشطة اللامنهجية، بما في ذلك الرياضة، الفنون ، والأنشطة الثقافية. هذه الأنشطة تهدف إلى تعزيز المهارات الاجتماعية وتعزيز الروح الجماعية بين الطلاب",
    },
    {
      id: 2,
      question: " ما هي ساعات العمل في المدرسة؟",
      answer:
        "تبدأ ساعات العمل في المدرسة من الساعة 8:00 صباحاً حتى 3:00 مساءً",
    },
  ];
  return (
    <Accordion defaultActiveKey="0">
      {FaqData.map((item) => (
        <Accordion.Item eventKey={item.id} key={item.id}>
          <Accordion.Header>{item.question}</Accordion.Header>
          <Accordion.Body>{item.answer}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default Accordionfaq;
