"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion } from "framer-motion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  treatment: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      treatment: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("Inquiry submitted successfully. We will be in touch to confirm your booking.");
    form.reset();
  }

  return (
    <section id="book" className="py-32 bg-secondary relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary tracking-[0.2em] text-xs uppercase mb-4 font-light block">Begin Your Journey</span>
            <h2 className="font-heading text-4xl md:text-5xl font-normal mb-6 text-foreground">Book a Retreat</h2>
            <p className="text-muted-foreground font-light mb-12 max-w-md leading-relaxed tracking-wide">
              Reserve your time for tranquility. Fill out the form below to inquire about availability for our signature treatments or full-day wellness retreats.
            </p>
            <div className="space-y-8 text-muted-foreground font-light text-sm tracking-widest uppercase">
              <div>
                <strong className="block text-foreground mb-2 font-normal text-xs">Sanctuary Location</strong>
                123 Serenity Lane<br />Wellness District, CA 90210
              </div>
              <div>
                <strong className="block text-foreground mb-2 font-normal text-xs">Contact</strong>
                hello@auraurbanretreat.com<br />+1 (555) 888-0000
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-background p-8 md:p-12 border border-border shadow-sm"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-light tracking-widest uppercase text-xs">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Jane Doe" {...field} className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-light tracking-widest uppercase text-xs">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="jane@example.com" {...field} className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="treatment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-light tracking-widest uppercase text-xs">Treatment Interest</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Holistic Massage" {...field} className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-light tracking-widest uppercase text-xs">Special Requests</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please let us know about any specific needs or preferred dates..." 
                          className="min-h-[100px] resize-none bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button type="submit" className="w-full text-xs uppercase tracking-widest font-light h-14 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 mt-4">
                  Request Booking
                </button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
