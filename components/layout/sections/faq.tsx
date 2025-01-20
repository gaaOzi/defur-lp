import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    "question": "What is Digital Transformation?",
    "answer": "We offer cutting-edge software solutions to drive digital growth and streamline operations.",
    "value": "service-1"
  },
  {
    "question": "What is Product Innovation?",
    "answer": "We specialize in turning bold ideas into breakthrough products that revolutionize industries.",
    "value": "service-2"
  },
  {
    "question": "What is AI & Automation?",
    "answer": "We implement advanced AI and automation technologies to optimize business efficiency and performance.",
    "value": "service-3"
  },
  {
    "question": "What is Tech Consulting?",
    "answer": "Our custom tech consulting services help you unlock your company’s full potential with tailored strategies.",
    "value": "service-4"
  }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
