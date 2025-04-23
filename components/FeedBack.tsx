"use client";

import React, { useState } from "react";

const FeedBack = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    feedback: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    feedback: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      fullName: "",
      email: "",
      feedback: "",
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.feedback.trim()) {
      newErrors.feedback = "Feedback is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);
      setShowPopup(true);
      setFormData({ fullName: "", email: "", feedback: "" });
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <div>
      <div className="min-h-[600px] w-full bg-[#315D0D] bg-opacity-10 py-16">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mt-0 mb-4 text-[#315D0D]">
                Your Voice Matters
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-[#315D0D]">
                Every visit, every purchase, and every shared moment helps us
                grow. We&apos;d love to hear about your experience—your feedback
                shapes the way we bring farm-fresh goodness to your table.
              </p>
            </div>
            <div className="lg:w-2/3 w-full mx-auto px-8 sm:px-0">
              <form onSubmit={handleSubmit}>
                <div className="flex sm:flex-row flex-col sm:space-x-4 space-y-4 sm:space-y-0">
                  <div className="relative flex-grow w-full">
                    <label
                      htmlFor="fullName"
                      className="leading-7 text-sm text-[#315D0D]"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full bg-white rounded border ${
                        errors.fullName ? "border-red-500" : "border-gray-300"
                      } focus:border-[#315D0D] focus:ring-2 focus:ring-[#315D0D]/20 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>
                  <div className="relative flex-grow w-full">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-[#315D0D]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-white rounded border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } focus:border-[#315D0D] focus:ring-2 focus:ring-[#315D0D]/20 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="relative flex-grow w-full mt-4">
                  <label
                    htmlFor="feedback"
                    className="leading-7 text-sm text-[#315D0D]"
                  >
                    Feedback
                  </label>
                  <textarea
                    id="feedback"
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full bg-white rounded border ${
                      errors.feedback ? "border-red-500" : "border-gray-300"
                    } focus:border-[#315D0D] focus:ring-2 focus:ring-[#315D0D]/20 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                  ></textarea>
                  {errors.feedback && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.feedback}
                    </p>
                  )}
                </div>
                <div className="mt-4 mb-8 text-center">
                  <button
                    type="submit"
                    className="text-white bg-[#315D0D] border-0 py-2 px-8 focus:outline-none hover:bg-[#315D0D]/90 rounded text-lg transition-colors duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      {showPopup && (
        <div className="fixed bottom-4 right-4 bg-[#315D0D] text-white px-6 py-3 rounded-lg">
          Thank you for your feedback!
        </div>
      )}
    </div>
  );
};

export default FeedBack;
