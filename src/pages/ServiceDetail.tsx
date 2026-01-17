import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Plus, Minus, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import Newsletter from "@/components/shared/Newsletter";
import { serviceDetails } from "@/data/servicedetails";
import { services } from "@/data/services";
import marbleWarehouse from "/assets/images/service_details/CTA_contact_card.png";
import RightIcon from "@/components/shared/RightIcon";

export default function ServiceDetail() {
  const { slug } = useParams();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const currentService = serviceDetails.find((s) => s.slug === slug);

  if (!currentService) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-4">Service Not Found</h1>
            <Link to="/services" className="text-gold hover:underline font-bold">
              Back to Services
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>{currentService.title} | Marble & Tiles</title>
        <meta name="description" content={`Learn about our ${currentService.title} services - premium marble and stone solutions.`} />
      </Helmet>

      <PageHero
        title={currentService.title}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: currentService.title },
        ]}
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="container-luxury">
          <div className="md:grid md:grid-cols-5 lg:grid-cols-12 gap-12">
            {/* Sidebar Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden md:block md:col-span-2 lg:col-span-4"
            >
              {/* Inner Sticky Wrapper */}
              <div className="md:sticky md:top-32 h-fit">
                <h3 className="text-2xl lg:text-3xl font-bold text-charcoal mb-6 ml-0">Other Services</h3>
                <ul className="mb-8 border-t border-gray-100">
                  {services.map((service) => (
                    <li key={service.slug} className="border-b border-gray-100">
                      <Link
                        to={`/services/${service.slug}`}
                        className={`flex items-center gap-3 py-4 px-5 text-[12px] md:text-[15px] lg:text-[18px] font-bold transition-all duration-300 ${service.slug === slug
                          ? "bg-[#ba9a67] text-white"
                          : "text-charcoal hover:text-[#C9A961] bg-transparent hover:translate-x-2"
                          }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${service.slug === slug ? "bg-white" : "bg-[#C9A961]"
                          }`}></span>
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Contact Card */}
                <div className="relative h-[500px] md:h-[600px] overflow-hidden group w-full">
                  <img
                    src={marbleWarehouse}
                    alt="Contact Support"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.7]"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/40" />

                  <div className="absolute inset-0 p-8 mb-20 md:mb-44 flex flex-col justify-center items-center text-center text-white z-10">
                    <p className="text-base md:text-xl font-bold mb-0 tracking-wide shadow-black drop-shadow-md">Do You Need Help?</p>

                    <a
                      href="tel:+0844560789"
                      className="text-[#ba9a67] text-xl md:text-xl lg:text-[24px] font-bold mb-6 hover:text-white transition-colors border-b-2 border-[#C9A961] pb-1 shadow-black drop-shadow-md"
                    >
                      +(084) 456-0789
                    </a>

                    <a
                      href="mailto:support@example.com"
                      className="text-white text-base md:text-[16px] lg:text-xl font-bold tracking-wide mb-10 hover:text-[#C9A961] transition-colors shadow-black drop-shadow-md"
                    >
                      Support@Example.Com
                    </a>

                    <Link
                      to="/contact"
                      className="bg-[#ba9a67] text-white text-md md:text-[12px] lg:text-[16px] font-bold uppercase tracking-wider px-6 md:px-2 lg:px-6 py-4 hover:bg-white hover:text-charcoal transition-all duration-300 flex items-center gap-2 shadow-lg"
                    >
                      CONTACT US
                      <RightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Content */}
            <div className="md:col-span-3 lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col lg:block"
              >
                <div className="mb-0">
                  <img src={currentService.heroImage} alt={currentService.title} className="w-full h-[300px] md:h-[520px] object-cover mb-8" />
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-charcoal mb-6">About The Services</h2>
                  <div className="space-y-6 mb-12 text-[#666] text-sm md:text-[16px] leading-relaxed">
                    <p>{currentService.description}</p>
                    {currentService.description2 && <p>{currentService.description2}</p>}
                  </div>
                </div>
              </motion.div>

              {/* Timeless Elegance */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 mb-16"
              >
                <div className="flex flex-col justify-center lg:order-2">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-4">{currentService.sections.timelessElegance.title}</h3>
                  <p className="text-[#666] text-sm md:text-[16px] leading-relaxed mb-6">
                    {currentService.sections.timelessElegance.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {currentService.sections.timelessElegance.features.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#ba9a67] mt-0.5 flex-shrink-0" />
                        <span className="text-charcoal text-sm md:text-[15px] font-bold">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {currentService.sections.timelessElegance.bottomDescription && (
                    <p className="text-[#666] text-sm md:text-[16px] leading-relaxed">
                      {currentService.sections.timelessElegance.bottomDescription}
                    </p>
                  )}
                </div>
                <img src="/assets/images/service_details/Timeless.png" alt={currentService.sections.timelessElegance.title} className="w-full h-[300px] md:h-[450px] object-cover lg:order-1" />
              </motion.div>

              {/* Lasting Strength */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 mb-16"
              >
                <div className="flex flex-col justify-center lg:order-1">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-4">{currentService.sections.lastingStrength.title}</h3>
                  <p className="text-[#666] text-sm md:text-[16px] leading-relaxed mb-6">
                    {currentService.sections.lastingStrength.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {currentService.sections.lastingStrength.features.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#ba9a67] mt-0.5 flex-shrink-0" />
                        <span className="text-charcoal text-sm md:text-[16px] font-bold">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {currentService.sections.lastingStrength.bottomDescription && (
                    <p className="text-[#666] text-sm md:text-[16px] leading-relaxed">
                      {currentService.sections.lastingStrength.bottomDescription}
                    </p>
                  )}
                </div>
                <img src="/assets/images/service_details/lasting.png" alt={currentService.sections.lastingStrength.title} className="w-full h-[300px] md:h-[450px] object-cover lg:order-2" />
              </motion.div>

              {/* Expert Guidance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-4">{currentService.sections.expertGuidance.title}</h3>
                <p className="text-[#666] text-sm md:text-[16px] leading-relaxed">
                  {currentService.sections.expertGuidance.description}
                </p>
              </motion.div>

              {/* FAQs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-4">Frequently Asked Questions</h3>
                <div className="w-full h-px bg-gray-200 mb-0"></div>
                <div className="">
                  {currentService.faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200">
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full flex items-center justify-between py-5 text-left group"
                      >
                        <span className="text-charcoal text-[16px] md:text-[18px] lg:text-xl font-bold group-hover:text-[#C9A961] transition-colors pr-8">
                          {faq.question}
                        </span>
                        {openFaq === index ? (
                          <Minus className="w-5 h-5 text-[#666] flex-shrink-0" />
                        ) : (
                          <Plus className="w-5 h-5 text-[#666] flex-shrink-0" />
                        )}
                      </button>
                      <AnimatePresence>
                        {openFaq === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-[#666] text-sm md:text-[16px] leading-relaxed pb-6 pr-8">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </Layout>
  );
}
