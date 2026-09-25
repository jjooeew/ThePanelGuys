"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { CONTACT_INFO } from "../constants";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  company: string;
};

const fieldClassName =
  "w-full rounded-none border-0 border-b border-[#A7B0B4] bg-transparent px-0 py-4 text-base text-[#11161A] outline-none transition-colors placeholder:text-[#667177] focus:border-[#11161A] focus:ring-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy disabled:cursor-not-allowed disabled:opacity-60";

const labelClassName =
  "font-display text-xs font-semibold uppercase tracking-[0.18em] text-[#4C575D]";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const reduceMotion = useReducedMotion();

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
    } catch {
      setSubmitError(
        "We could not send your enquiry. Please try again or email us directly.",
      );
    }
  };

  const reveal = reduceMotion
    ? {}
    : {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    };

  return (
    <div className="min-h-screen bg-[#F2F4F2] text-[#11161A]">
      <Navbar />

      <main>
        <section className="relative overflow-hidden border-b border-white/20 bg-[#11161A] text-white">
          <div
            className="pointer-events-none absolute inset-y-0 left-[58.333%] hidden w-px bg-white/15 lg:block"
            aria-hidden="true"
          />

          <div className="mx-auto grid max-w-[1440px] grid-cols-4 gap-x-5 px-5 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-44 lg:grid-cols-12 lg:gap-x-8 lg:px-12 lg:pb-28 lg:pt-52 xl:px-16">
            <motion.div
              {...reveal}
              className="col-span-4 lg:col-span-7 lg:pr-12"
            >
              <p className="mb-8 flex items-center gap-4 font-display text-xs font-semibold uppercase tracking-[0.22em] text-[#A7B0B4]">
                <span className="h-px w-10 bg-stainless" aria-hidden="true" />
                Project enquiries
              </p>

              <h1 className="max-w-[820px] font-display text-[clamp(3.4rem,7.4vw,7rem)] font-semibold leading-[0.88] tracking-[-0.045em]">
                Tell us what you need.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#D6DCDE] sm:text-xl">
                Planning a custom cool room or freezer, or arranging repairs and
                maintenance? Share your location and what you need. We work with
                commercial clients from {CONTACT_INFO.SERVICE_AREA}.
              </p>
            </motion.div>

            <motion.aside
              {...reveal}
              transition={
                reduceMotion
                  ? undefined
                  : {
                    duration: 0.55,
                    delay: 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }
              }
              className="col-span-4 mt-14 border-t border-white/25 pt-6 lg:col-span-5 lg:col-start-8 lg:mt-0 lg:border-t-0 lg:pl-12 lg:pt-14"
              aria-label="Contact details"
            >
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[#A7B0B4]">
                Direct contact
              </p>

              <dl className="mt-8 divide-y divide-white/20 border-y border-white/20">
                <div className="grid grid-cols-[7rem_1fr] gap-4 py-5">
                  <dt className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-[#A7B0B4]">
                    Email
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${CONTACT_INFO.EMAIL}`}
                      className="break-all text-base text-white decoration-stainless decoration-2 underline-offset-4 transition-colors hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-lg"
                    >
                      {CONTACT_INFO.EMAIL}
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-[7rem_1fr] gap-4 py-5">
                  <dt className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-[#A7B0B4]">
                    Phone
                  </dt>
                  <dd>
                    <a
                      href={`tel:${CONTACT_INFO.PHONE}`}
                      className="break-all text-base text-white decoration-stainless decoration-2 underline-offset-4 transition-colors hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-lg"
                    >
                      {CONTACT_INFO.PHONE}
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-[7rem_1fr] gap-4 py-5">
                  <dt className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-[#A7B0B4]">
                    Hours
                  </dt>
                  <dd className="text-base text-white sm:text-lg">
                    <span className="block">{CONTACT_INFO.HOURS}</span>
                    <span className="mt-1 block text-sm text-[#D6DCDE]">
                      {CONTACT_INFO.WORKING_DAYS}
                    </span>
                  </dd>
                </div>
                <div className="grid grid-cols-[7rem_1fr] gap-4 py-5">
                  <dt className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-[#A7B0B4]">
                    Service area
                  </dt>
                  <dd className="text-base text-white sm:text-lg">
                    {CONTACT_INFO.SERVICE_AREA}
                  </dd>
                </div>
              </dl>
            </motion.aside>
          </div>
        </section>

        <section className="border-b border-[#A7B0B4]/70">
          <div className="mx-auto grid max-w-[1440px] grid-cols-4 gap-x-5 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-12 lg:gap-x-8 lg:px-12 lg:py-32 xl:px-16">
            <aside className="col-span-4 lg:col-span-4 lg:pr-10">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[#4C575D]">
                01 / Your brief
              </p>
              <h2 className="mt-5 max-w-sm font-display text-4xl font-semibold leading-[0.98] tracking-[-0.035em] sm:text-5xl">
                Start with the practical detail.
              </h2>
              <p className="mt-6 max-w-md text-base leading-7 text-[#4C575D]">
                Include the site location, whether you need a new room or work
                on an existing one, and your preferred timing. Let us know if
                you have drawings or photographs to share.
              </p>
              <p className="mt-5 max-w-md text-base leading-7 text-[#4C575D]">
                We provide prompt pricing and quotes. If you are still in the
                planning phase, we are happy to work with your company to help
                define what is needed.
              </p>

              <div className="mt-12 hidden border-t border-[#A7B0B4] pt-5 lg:block">
                <p className="max-w-xs font-display text-sm font-medium leading-6 text-[#4C575D]">
                  Custom cool rooms, freezers and storage rooms. Repairs and
                  maintenance for existing enclosures.
                </p>
              </div>
            </aside>

            <div className="col-span-4 mt-14 lg:col-span-7 lg:col-start-6 lg:mt-0">
              {submitted ? (
                <motion.div
                  initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.4 }}
                  className="border-y border-[#11161A] py-12 sm:py-16"
                  role="status"
                  aria-live="polite"
                >
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[#4C575D]">
                    Enquiry sent
                  </p>
                  <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                    Thanks. We have your brief.
                  </h2>
                  <p className="mt-6 max-w-xl text-lg leading-8 text-[#4C575D]">
                    Your message has been delivered to The Panel Guys.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-10 inline-flex min-h-11 items-center gap-3 border-b-2 border-[#11161A] pb-1 font-display text-sm font-semibold uppercase tracking-[0.15em] transition-colors hover:border-brand-navy hover:text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
                  >
                    Send another enquiry
                    <ArrowRight size={17} aria-hidden="true" />
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  aria-label="Project enquiry"
                  aria-busy={isSubmitting}
                >
                  <div className="grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClassName}>
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Your name"
                        aria-invalid={errors.name ? "true" : "false"}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={fieldClassName}
                        disabled={isSubmitting}
                        {...register("name", {
                          required: "Enter your name.",
                        })}
                      />
                      {errors.name && (
                        <p
                          id="name-error"
                          className="mt-2 text-sm font-medium text-[#A52A2A]"
                          role="alert"
                        >
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className={labelClassName}>
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="Your contact number"
                        aria-invalid={errors.phone ? "true" : "false"}
                        aria-describedby={
                          errors.phone ? "phone-error" : undefined
                        }
                        className={fieldClassName}
                        disabled={isSubmitting}
                        {...register("phone", {
                          required: "Enter a contact number.",
                        })}
                      />
                      {errors.phone && (
                        <p
                          id="phone-error"
                          className="mt-2 text-sm font-medium text-[#A52A2A]"
                          role="alert"
                        >
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-9">
                    <label htmlFor="email" className={labelClassName}>
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="you@company.co.nz"
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                      className={fieldClassName}
                      disabled={isSubmitting}
                      {...register("email", {
                        required: "Enter your email address.",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address.",
                        },
                      })}
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="mt-2 text-sm font-medium text-[#A52A2A]"
                        role="alert"
                      >
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="mt-9">
                    <label htmlFor="message" className={labelClassName}>
                      Project details
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Where is the site? What would you like built, repaired or maintained, and when?"
                      aria-invalid={errors.message ? "true" : "false"}
                      aria-describedby={
                        errors.message ? "message-error" : "message-note"
                      }
                      className={`${fieldClassName} min-h-40 resize-y leading-7`}
                      disabled={isSubmitting}
                      {...register("message", {
                        required: "Give us a brief rundown of the project.",
                        minLength: {
                          value: 10,
                          message: "Add a little more detail about the project.",
                        },
                      })}
                    />
                    {errors.message ? (
                      <p
                        id="message-error"
                        className="mt-2 text-sm font-medium text-[#A52A2A]"
                        role="alert"
                      >
                        {errors.message.message}
                      </p>
                    ) : (
                      <p id="message-note" className="mt-3 text-sm text-[#667177]">
                        Please do not include sensitive or confidential information.
                      </p>
                    )}
                  </div>

                  <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                    <label htmlFor="company">Company website</label>
                    <input
                      id="company"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      {...register("company")}
                    />
                  </div>

                  {submitError && (
                    <p
                      className="mt-8 border-l-2 border-[#A52A2A] pl-4 text-sm font-medium text-[#7D2020]"
                      role="alert"
                      aria-live="assertive"
                    >
                      {submitError}{" "}
                      <a
                        href={`mailto:${CONTACT_INFO.EMAIL}`}
                        className="underline decoration-1 underline-offset-4 hover:text-[#11161A]"
                      >
                        {CONTACT_INFO.EMAIL}
                      </a>
                    </p>
                  )}

                  <div className="mt-10 flex items-center justify-between gap-6 border-t border-[#A7B0B4] pt-6">
                    <p className="hidden max-w-xs text-sm leading-6 text-[#667177] sm:block">
                      All fields are required.
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="button-primary inline-flex min-h-12 w-full items-center justify-between gap-8 rounded-[2px] px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.14em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy disabled:cursor-wait sm:w-auto sm:min-w-56"
                    >
                      <span>{isSubmitting ? "Sending enquiry" : "Send enquiry"}</span>
                      <ArrowRight
                        className={isSubmitting ? "animate-pulse" : ""}
                        size={18}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
