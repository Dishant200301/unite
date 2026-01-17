

import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Newsletter from "@/components/shared/Newsletter";
import { Link } from "react-router-dom";
import SectionLabel from "@/components/shared/SectionLabel";

export default function Contact() {
  return (
    <Layout>
      <Helmet>
        <title>Contact Us | Marble & Tiles</title>
        <meta name="description" content="Get in touch with us for your marble and tile needs." />
      </Helmet>

      {/* 1️⃣ PAGE HERO SECTION */}
      <section className="relative w-full h-[280px] md:h-[320px] lg:h-[440px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/marble-warehouse.jpg"
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay 55% */}
          <div className="absolute inset-0 bg-black/55 z-10" />
        </div>

        {/* Center-aligned content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center px-4 md:px-6"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-white mb-3 md:mb-4 tracking-tight">
            Contact Us
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-white/80 text-xs md:text-sm uppercase tracking-widest font-light">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gold">&gt;</span>
            <span className="text-white font-medium">Contact Us</span>
          </div>
        </motion.div>
      </section>

      {/* 2️⃣ CONTACT INTRO + DETAILS SECTION */}
      <section className="py-12 md:py-16 lg:py-32 bg-white">
        <div className="container-luxury">

          {/* FIRST ROW: HEADER & INFO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col mb-12 md:mb-16 lg:mb-20"
          >
            {/* TOP LABEL */}
            <SectionLabel text="GET IN TOUCH" />

            {/* MAIN HEADING */}
            <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold text-[#1a1a1a] leading-[1.1] mb-4 md:mb-6 tracking-tight">
              Need Any Marble & Tiles<br />Services Help?
            </h2>

            {/* DESCRIPTION PARAGRAPH */}
            <p className="text-[#666666] text-sm md:text-[15px] leading-relaxed max-w-3xl mb-8 md:mb-10">
              From the moment marble emerges from the earth's embrace, it begins a journey of transformation guided by our innovative techniques and the skilled hands of our artisans who carefully transform the raw stone into exquisite pieces.
            </p>

            {/* CONTACT INFO ROW */}
            <div className="flex flex-col sm:flex-row gap-8 md:gap-12 lg:gap-24">
              {/* Support Block */}
              <div className="min-w-[200px]">
                <h3 className="text-base md:text-lg font-bold text-[#1a1a1a] mb-2 md:mb-3">Support</h3>
                <a href="tel:+0844560789" className="block text-lg md:text-xl text-[#c6a87c] font-medium hover:text-[#b0956e] transition-colors mb-1">+(084) 456-0789</a>
                <a href="mailto:support@example.com" className="text-sm text-[#666666] hover:text-[#1a1a1a] transition-colors">support@example.com</a>
              </div>

              {/* Address Block */}
              <div>
                <h3 className="text-base md:text-lg font-bold text-[#1a1a1a] mb-2 md:mb-3">Address</h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  5609 E Sprague Ave, Spokane<br />
                  Valley, WA 99212, USA
                </p>
              </div>
            </div>
          </motion.div>

          {/* SECOND ROW: IMAGE & FORM */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">

            {/* LEFT COLUMN (IMAGE) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-0 relative"
            >
              <img
                src="/assets/images/home/contact-image.png"
                alt="Showroom"
                className="w-full h-full object-cover rounded-sm"
              />
            </motion.div>

            {/* RIGHT COLUMN (CONTACT FORM) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:pl-8"
            >
              <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a] mb-2 md:mb-3">How Can We Help You ?</h3>
              <p className="text-xs md:text-sm text-[#666666] mb-6 md:mb-8">Your email address will not be published. Required fields are marked *</p>

              <form className="space-y-5 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Name*"
                      className="w-full bg-white border border-[#e5e5e5] px-4 md:px-5 py-3 md:py-4 text-sm placeholder:text-[#999999] focus:outline-none focus:border-[#1a1a1a] transition-colors rounded-none"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="Email*"
                      className="w-full bg-white border border-[#e5e5e5] px-4 md:px-5 py-3 md:py-4 text-sm placeholder:text-[#999999] focus:outline-none focus:border-[#1a1a1a] transition-colors rounded-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                  <div className="space-y-2">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full bg-white border border-[#e5e5e5] px-4 md:px-5 py-3 md:py-4 text-sm placeholder:text-[#999999] focus:outline-none focus:border-[#1a1a1a] transition-colors rounded-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Project Scope"
                      className="w-full bg-white border border-[#e5e5e5] px-4 md:px-5 py-3 md:py-4 text-sm placeholder:text-[#999999] focus:outline-none focus:border-[#1a1a1a] transition-colors rounded-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <textarea
                    placeholder="Write Your Message.."
                    rows={6}
                    className="w-full bg-white border border-[#e5e5e5] px-4 md:px-5 py-3 md:py-4 text-sm placeholder:text-[#999999] focus:outline-none focus:border-[#1a1a1a] transition-colors resize-none rounded-none"
                  />
                </div>

                <button type="submit" className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-7 md:px-9 py-3 md:py-4 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-[#333333] transition-colors rounded-none">
                  SEND MESSAGE <ArrowRight className="w-3 md:w-4 h-3 md:h-4" />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3️⃣ MAP SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full h-[300px] md:h-[380px] lg:h-[550px] bg-muted relative"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.986692637256!2d-117.34685568436806!3d47.65842897918814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549e18667b930811%3A0x6280435166299867!2s5609%20E%20Sprague%20Ave%2C%20Spokane%20Valley%2C%20WA%2099212%2C%20USA!5e0!3m2!1sen!2s!4v1645564859526!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Location Map"
        ></iframe>
      </motion.section>

      <Newsletter />
    </Layout>
  );
}
