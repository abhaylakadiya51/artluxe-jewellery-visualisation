"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is your typical turnaround time?",
    answer: "For standard eCommerce batches (10-20 pieces), we typically deliver within 5-7 business days. Complex 360° animations and creative imageries may take 2-3 weeks depending on the complexity of the geometry and materials.",
  },
  {
    question: "What file formats do you need to start rendering?",
    answer: "We prefer 3DM (Rhino), STP, IGES, or OBJ files. However, we can work with most standard 3D CAD formats. If you only have 2D sketches, we offer 3D modeling services as well.",
  },
  {
    question: "Can you match the specific metal and gemstone colors of our brand?",
    answer: "Absolutely. We pride ourselves on photorealism. We will calibrate our materials to match your physical samples or reference photos perfectly, from 18k Rose Gold to specific diamond clarity grades.",
  },
  {
    question: "Are the interactive spins compatible with Shopify/WooCommerce?",
    answer: "Yes! Our interactive spins are delivered as optimized web-ready packages (HTML5/JS) that easily integrate into Shopify, WooCommerce, Magento, or custom-built platforms.",
  },
  {
    question: "Do I get full rights to the rendered images?",
    answer: "Yes, upon final delivery and payment, you retain 100% full commercial rights to all rendered images, animations, and interactive assets for use across all media channels forever.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-32 bg-card relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about our 3D rendering process, timelines, and deliverables.
            </p>
          </div>
          
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
