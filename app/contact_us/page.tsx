import React from "react";

const ContactUs = () => {
  return (
    <div
      className=" h-[600px] w-full bg-cover bg-center mb-32"
      style={{ backgroundImage: "url('/farmbground.png')" }}
    >
      <div className="max-w-3xl mx-auto px-6 py-16  text-center">
        <h1 className="text-5xl font-semibold text-[#315D0D]">Contact Us </h1>
        <h1 className="  font-thin"> note : dummy info</h1>

        <div className="mt-6 text-lg leading-relaxed text-justify">
          <p>
            We’d love to hear from you! Whether you have a question about our
            services, need assistance, or just want to share your thoughts, our
            team is here to help.
          </p>

          <p className="mt-6">
            Feel free to reach out via email, phone, or visit us at our office.
            Your feedback and inquiries are always welcome.
          </p>

          <div className="mt-10 space-y-4 text-left">
            <p>
              <strong>Email:</strong> support@khettokitchen.com
            </p>
            <p>
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p>
              <strong>Office Address:</strong> 123 Green Valley, Farm Street,
              Delhi, India
            </p>
            <p>
              <strong>Business Hours:</strong> Monday - Saturday: 9 AM - 6 PM
            </p>
          </div>

          <p className="mt-10 mb-10">
            You can also follow us on our social media channels to stay updated
            with the latest news and offers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
