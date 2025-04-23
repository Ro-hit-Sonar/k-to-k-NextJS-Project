"use client";

import type React from "react";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-[#f8f9f4] py-16 px-4 sm:px-6 lg:px-8 mb-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-semibold text-[#315D0D]">Contact Us</h1>
          <p className="mt-4 text-lg text-[#5a7852]">
            We&apos;d love to hear from you! Reach out with any questions or
            feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="overflow-hidden border-[#315D0D]/20">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-[#315D0D] mb-6">
                  Get In Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#e8f0e3] flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-[#315D0D]" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-[#315D0D]">
                        Our Location
                      </h3>
                      <p className="mt-1 text-[#5a7852]">
                        123 Green Valley, Farm Street, Delhi, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#e8f0e3] flex items-center justify-center">
                      <Phone className="h-5 w-5 text-[#315D0D]" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-[#315D0D]">
                        Phone Number
                      </h3>
                      <p className="mt-1 text-[#5a7852]">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#e8f0e3] flex items-center justify-center">
                      <Mail className="h-5 w-5 text-[#315D0D]" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-[#315D0D]">
                        Email Address
                      </h3>
                      <p className="mt-1 text-[#5a7852]">
                        support@khettokitchen.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#e8f0e3] flex items-center justify-center">
                      <Clock className="h-5 w-5 text-[#315D0D]" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-[#315D0D]">
                        Business Hours
                      </h3>
                      <p className="mt-1 text-[#5a7852]">
                        Monday - Saturday: 9 AM - 6 PM
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="overflow-hidden border-[#315D0D]/20">
              <CardContent className="p-0">
                <div className="h-[300px] w-full bg-gray-200 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.0539533349!2d76.76357305!3d28.643795449999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1713911267889!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Our Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="text-xl font-medium text-[#315D0D] mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-[#e8f0e3] flex items-center justify-center hover:bg-[#315D0D] hover:text-white transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-[#e8f0e3] flex items-center justify-center hover:bg-[#315D0D] hover:text-white transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-[#e8f0e3] flex items-center justify-center hover:bg-[#315D0D] hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-[#e8f0e3] flex items-center justify-center hover:bg-[#315D0D] hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="overflow-hidden border-[#315D0D]/20 h-full">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-[#315D0D] mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#315D0D] mb-1"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full border-[#315D0D]/20 focus:border-[#315D0D] focus:ring-[#315D0D]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#315D0D] mb-1"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full border-[#315D0D]/20 focus:border-[#315D0D] focus:ring-[#315D0D]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-[#315D0D] mb-1"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      className="w-full border-[#315D0D]/20 focus:border-[#315D0D] focus:ring-[#315D0D]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#315D0D] mb-1"
                    >
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      rows={6}
                      required
                      className="w-full border-[#315D0D]/20 focus:border-[#315D0D] focus:ring-[#315D0D]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#315D0D] hover:bg-[#264a0a] text-white flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
