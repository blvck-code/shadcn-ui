import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

export default function AccordionPage() {
  return (
    <main className="flex min-h-screen w-1/2 mx-auto flex-col items-center justify-between p-24">
      <Accordion type={"single"} collapsible className={"w-full"}>
        <AccordionItem value={"item-1"}>
          <AccordionTrigger className={"hover:no-underline"}>
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={"item-2"}>
          <AccordionTrigger className={"hover:no-underline"}>
            Is it styled?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className={"hover:no-underline"}>
            Is it animated?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
