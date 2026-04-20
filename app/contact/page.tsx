"use client";

import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type FormData = {
  name: string;
  email: string;
  phone: string;
  // projectType: string;
  message: string;
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      setSubmitted(true);
      reset();
    } catch (error) {
      setSubmitError("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      {/* Page Header */}
      <section className="bg-navy-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 industrial-grid"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white my-15 uppercase tracking-tight">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Whether you're looking for a new build, an upgrade, or urgent
              repairs, we're here to help. Fill out the form or give us a call.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                {/* <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8 uppercase tracking-tight">Get in Touch</h1>
                <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                  Whether you're looking for a new build, an upgrade, or urgent repairs, we're here to help. Fill out the form or give us a call.
                </p> */}

                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-muted-grey rounded flex items-center justify-center shrink-0">
                      <Phone className="text-navy-900" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-900 uppercase tracking-widest text-sm mb-1">
                        Phone
                      </h3>
                      <p className="text-lg text-slate-600">0800 000 000</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-muted-grey rounded flex items-center justify-center shrink-0">
                      <Mail className="text-navy-900" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-900 uppercase tracking-widest text-sm mb-1">
                        Email
                      </h3>
                      <p className="text-lg text-slate-600">
                        info@thepanelguys.co.nz
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-muted-grey rounded flex items-center justify-center shrink-0">
                      <MapPin className="text-navy-900" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-900 uppercase tracking-widest text-sm mb-1">
                        Service Area
                      </h3>
                      <p className="text-lg text-slate-600">Greater Auckland</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-muted-grey rounded flex items-center justify-center shrink-0">
                      <Clock className="text-navy-900" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-900 uppercase tracking-widest text-sm mb-1">
                        Hours
                      </h3>
                      <p className="text-lg text-slate-600">
                        Mon - Fri: 7:00am - 5:00pm
                      </p>
                      <p className="text-sm text-slate-500 italic">
                        Emergency repairs available 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="bg-muted-grey p-8 md:p-12 rounded-xl border border-slate-200 shadow-sm">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">
                    Message Sent!
                  </h2>
                  <p className="text-slate-600 text-lg mb-8">
                    Thanks for reaching out. We will get back to you as soon
                    as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-navy-900 font-bold hover:underline uppercase tracking-widest text-sm"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-xs font-bold uppercase tracking-widest text-slate-500"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        {...register("name", { required: "Name is required" })}
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded border border-slate-300 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none transition-all"
                      />
                      {errors.name && (
                        <p className="text-red-600 text-sm">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-xs font-bold uppercase tracking-widest text-slate-500"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        {...register("phone", {
                          required: "Phone number is required",
                        })}
                        type="tel"
                        placeholder="020 000 0000"
                        className="w-full px-4 py-3 rounded border border-slate-300 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none transition-all"
                      />
                      {errors.phone && (
                        <p className="text-red-600 text-sm">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-bold uppercase tracking-widest text-slate-500"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      {...register("email", { required: "Email is required" })}
                      type="email"
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 rounded border border-slate-300 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none transition-all"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      Project Type
                    </label>
                    <select className="w-full px-4 py-3 rounded border border-slate-300 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none transition-all bg-white">
                      <option>New Cool Room Build</option>
                      <option>Freezer Room Installation</option>
                      <option>Maintenance or Repair</option>
                      <option>Commercial Upgrade</option>
                      <option>Other</option>
                    </select>
                  </div> */}

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-xs font-bold uppercase tracking-widest text-slate-500"
                    >
                      Message / Project Details
                    </label>
                    <textarea
                      id="message"
                      {...register("message", {
                        required: "A rundown of your requirements is required",
                      })}
                      rows={5}
                      placeholder="Tell us about your requirements..."
                      className="w-full px-4 py-3 rounded border border-slate-300 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none transition-all"
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-600 text-sm">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {submitError && (
                    <p className="text-red-600 text-sm font-medium">
                      {submitError}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-navy-900 text-white py-4 rounded font-bold text-lg hover:bg-navy-800 transition-all shadow-lg flex items-center justify-center"
                  >
                    {isSubmitting ? "Sending..." : "Request a Quote"}
                    {!isSubmitting && <ArrowRight className="ml-2" size={20} />}
                  </button>
                  <p className="text-center text-xs text-slate-400 uppercase tracking-widest">
                    We usually respond within 24 hours
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
