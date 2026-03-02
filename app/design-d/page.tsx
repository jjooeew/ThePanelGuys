"use client";

import { ArrowRight, CheckCircle2, Snowflake } from "lucide-react";
import {
  ROUTES,
  SERVICES,
  WHY_CHOOSE_US,
  PROJECTS,
  TESTIMONIALS,
} from "./constants";
import Link from "next/link";
import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight">
                The Panel Guys <br />
                <span className="text-ice-blue">Cool Guys, Cool Rooms.</span>
              </h1>
               <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
                The Panel Guys specialise in custom-built commercial
                refrigeration and walk-in cool rooms for the food service,
                pharmaceutical, and logistics industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={ROUTES.CONTACT}
                  className="bg-steel-blue hover:bg-steel-blue-dark text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all flex items-center justify-center group"
                >
                  Request a Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={ROUTES.PROJECTS}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all text-center"
                >
                  View Our Projects
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="absolute inset-0 z-0">
            <img
              src="images/freezer-rooms-sample-img3.jpg"
              alt="Commercial Cool Room Installation"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-[2px]"></div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-white/50 rounded-full"></div>
            </div>
          </motion.div>
        </section>

       
        {/* Services Section */}
        <section className="py-24 bg-gray-50 industrial-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-steel-blue uppercase tracking-[0.3em] mb-4">
                Our Expertise
              </h2>
              <h3 className="text-4xl md:text-5xl text-charcoal">
                Comprehensive Cooling Solutions
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SERVICES.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-steel-blue p-3 rounded-xl shadow-lg">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-2xl font-bold mb-4 text-charcoal">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link
                      href={ROUTES.CONTACT}
                      className="text-steel-blue font-bold uppercase tracking-widest text-sm flex items-center group/link"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-charcoal text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
            <Snowflake className="w-full h-full text-white" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-sm font-bold text-steel-blue uppercase tracking-[0.3em] mb-4">
                  The ArcticPro Advantage
                </h2>
                <h3 className="text-4xl md:text-5xl mb-8">
                  Why Industry Leaders Trust Us
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  We don't just build cool rooms; we engineer reliability. Our
                  team combines technical precision with high-grade materials to
                  deliver systems that perform under pressure.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {WHY_CHOOSE_US.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start space-x-4"
                    >
                      <div className="bg-steel-blue/20 p-2 rounded-lg">
                        <item.icon className="w-6 h-6 text-steel-blue" />
                      </div>
                      <div>
                        <h5 className="font-bold text-lg mb-1">{item.title}</h5>
                        <p className="text-gray-400 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden border-8 border-white/5">
                  <img
                    src="images/freezer-rooms-sample-img2.jpg"
                    alt="Our Team at Work"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-steel-blue p-10 rounded-2xl shadow-2xl hidden md:block">
                  <div className="text-5xl font-display font-bold mb-2">
                    25+
                  </div>
                  <div className="text-sm font-bold uppercase tracking-widest opacity-80">
                    Years of Excellence
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Preview */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-sm font-bold text-steel-blue uppercase tracking-[0.3em] mb-4">
                  Our Work
                </h2>
                <h3 className="text-4xl md:text-5xl text-charcoal">
                  Completed Projects
                </h3>
              </div>
              <Link
                href={ROUTES.PROJECTS}
                className="bg-gray-100 hover:bg-gray-200 text-charcoal px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all"
              >
                View All Projects
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.slice(0, 3).map((project) => (
                <div
                  key={project.id}
                  className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <div className="text-steel-blue text-xs font-bold uppercase tracking-widest mb-2">
                      {project.category}
                    </div>
                    <h4 className="text-white text-2xl font-bold mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {project.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-steel-blue uppercase tracking-[0.3em] mb-4">
                Testimonials
              </h2>
              <h3 className="text-4xl md:text-5xl text-charcoal">
                What Our Clients Say
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative"
                >
                  <div className="text-steel-blue/20 absolute top-6 right-8 text-6xl font-serif">
                    “
                  </div>
                  <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <h5 className="font-bold text-charcoal">
                      {testimonial.name}
                    </h5>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-steel-blue relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 industrial-grid"></div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl text-white mb-8">
              Ready to start your project?
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Contact our engineering team today for a free consultation and
              custom quote for your refrigeration needs.
            </p>
            <Link
              href={ROUTES.CONTACT}
              className="inline-block bg-white text-steel-blue hover:bg-gray-100 px-12 py-5 rounded-xl font-bold uppercase tracking-widest transition-all shadow-2xl"
            >
              Request a Quote Now
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
