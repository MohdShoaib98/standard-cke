import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const ESTABLISHMENT_TYPES = [
  "Hotel",
  "Restaurant",
  "Cafe",
  "Bakery",
  "Cloud Kitchen",
  "Hospital",
  "Catering",
  "Food Court",
  "Other",
];

const REQUIREMENT_TYPES = [
  "Equipment Purchase",
  "Custom Fabrication",
  "Kitchen Design",
  "Installation",
  "Maintenance",
  "General Enquiry",
];

type FormData = {
  name: string;
  companyName: string;
  phone: string;
  email: string;
  city: string;
  establishment: string;
  requirement: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Full name is required.";
  if (!data.phone.trim()) errors.phone = "Phone number is required.";
  else if (!/^[6-9]\d{9}$/.test(data.phone.replace(/\s/g, "")))
    errors.phone = "Enter a valid 10-digit Indian mobile number.";
  return errors;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    city: "",
    establishment: "",
    requirement: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormData, boolean>>
  >({});

  function handleChange(field: keyof FormData, value: string) {
    const updated = { ...form, [field]: value };
    setForm(updated);
    if (touched[field]) setErrors(validate(updated));
  }

  function handleBlur(field: keyof FormData) {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(form));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const allTouched = Object.fromEntries(
      Object.keys(form).map((k) => [k, true]),
    ) as Partial<Record<keyof FormData, boolean>>;
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  }

  const inputBase =
    "bg-white border-[#d1d5db] focus:border-orange-500 text-[#111827] placeholder:text-[#9ca3af]";

  return (
    <div className="bg-background text-foreground">
      {/* PAGE HEADER */}
      <section
        data-ocid="contact.page"
        className="py-16 md:py-24 section-divider"
        style={{
          background:
            "linear-gradient(135deg, #ffffff 0%, #f5f5f5 50%, #efefef 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-orange-50 text-orange-600 border-orange-200 mb-4 text-xs uppercase tracking-widest font-semibold">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4 tracking-tight">
              Get In Touch
            </h1>
            <p className="text-lg text-[#6b7280] max-w-xl mx-auto leading-relaxed">
              Pan India commercial kitchen solutions —{" "}
              <span className="text-orange-500 font-semibold">
                contact us for a free consultation and quote.
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT INFO + INQUIRY FORM */}
      <section id="contact-form-section" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* LEFT — Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-2">
                  Contact Information
                </h2>
                <div className="w-12 h-1 bg-brand rounded-full mb-6" />
                <p className="text-[#6b7280] leading-relaxed">
                  Reach out via phone, WhatsApp, or email — our team responds
                  within 24 hours.
                </p>
              </div>

              {/* Phone */}
              <div
                data-ocid="contact.phone_link"
                className="flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-orange-500" size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#9ca3af] mb-1 font-medium">
                    Phone
                  </p>
                  <a
                    href="tel:+917396669997"
                    className="block text-[#111827] font-semibold text-base hover:text-orange-500 transition-colors-smooth"
                  >
                    +91 7396669997
                  </a>
                  <a
                    href="tel:+919666015353"
                    className="block text-[#111827] font-semibold text-base hover:text-orange-500 transition-colors-smooth mt-0.5"
                  >
                    +91 9666015353
                  </a>
                  <p className="text-xs text-[#9ca3af] mt-1">
                    Contact: MD Sohail
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div
                data-ocid="contact.whatsapp_link"
                className="flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-lg bg-green-50 border border-green-200 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#9ca3af] mb-1 font-medium">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/917396669997"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-semibold text-lg hover:text-green-700 transition-colors-smooth"
                  >
                    +91 7396669997
                  </a>
                </div>
              </div>

              {/* Email */}
              <div
                data-ocid="contact.email_link"
                className="flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-orange-500" size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#9ca3af] mb-1 font-medium">
                    Email
                  </p>
                  <a
                    href="mailto:standardcke@gmail.com"
                    className="text-[#111827] font-semibold text-sm md:text-base hover:text-orange-500 transition-colors-smooth break-all"
                  >
                    standardcke@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-orange-500" size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#9ca3af] mb-1 font-medium">
                    Address
                  </p>
                  <p className="text-[#111827] font-medium leading-relaxed">
                    #7-2-49/11/A, Sanath Nagar,
                    <br />
                    Balkampet Flyover Below,
                    <br />
                    Near Railway Station,
                    <br />
                    Hyderabad, Telangana
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-orange-500" size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#9ca3af] mb-1 font-medium">
                    Business Hours
                  </p>
                  <p className="text-[#111827] font-medium">
                    Mon – Sat:{" "}
                    <span className="text-[#374151]">9:00 AM – 7:00 PM</span>
                  </p>
                  <p className="text-[#6b7280] text-sm mt-0.5">
                    Sun: 10:00 AM – 2:00 PM
                  </p>
                </div>
              </div>

              {/* Pan India Badge */}
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                <p className="text-sm text-[#374151] leading-relaxed">
                  <span className="text-orange-600 font-semibold">
                    🇮🇳 Pan India Service:
                  </span>{" "}
                  Serving all major cities across India — Mumbai, Delhi,
                  Bengaluru, Chennai, Kolkata, Hyderabad, Pune, Ahmedabad and
                  more.
                </p>
              </div>
            </motion.div>

            {/* RIGHT — Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="bg-white border border-[#e5e7eb] rounded-2xl p-6 md:p-8 shadow-sm"
            >
              {submitted ? (
                <motion.div
                  data-ocid="contact.success_state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center min-h-[480px] text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mb-5">
                    <CheckCircle className="text-green-600" size={36} />
                  </div>
                  <h3 className="text-xl font-bold text-[#111827] mb-2">
                    Enquiry Received!
                  </h3>
                  <p className="text-[#6b7280] max-w-xs leading-relaxed">
                    Thank you for reaching out. We’ll get back to you within{" "}
                    <span className="text-orange-500 font-semibold">
                      24 hours
                    </span>
                    .
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-6 border-[#d1d5db] hover:border-orange-400 hover:text-orange-500"
                    onClick={() => {
                      setForm({
                        name: "",
                        companyName: "",
                        phone: "",
                        email: "",
                        city: "",
                        establishment: "",
                        requirement: "",
                        message: "",
                      });
                      setErrors({});
                      setTouched({});
                      setSubmitted(false);
                    }}
                  >
                    Send Another Enquiry
                  </Button>
                </motion.div>
              ) : (
                <form
                  data-ocid="contact.form"
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                >
                  <div className="mb-2">
                    <h2 className="text-xl font-bold text-[#111827] mb-1">
                      Send an Enquiry
                    </h2>
                    <p className="text-sm text-[#6b7280]">
                      Fill in the form and our team will contact you promptly.
                    </p>
                  </div>

                  {/* Name + Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="cf-name"
                        className="text-[#374151] text-sm font-medium"
                      >
                        Full Name <span className="text-orange-500">*</span>
                      </Label>
                      <Input
                        id="cf-name"
                        data-ocid="contact.name_input"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        onBlur={() => handleBlur("name")}
                        className={`${inputBase} ${
                          errors.name && touched.name ? "border-red-400" : ""
                        }`}
                      />
                      {errors.name && touched.name && (
                        <p
                          data-ocid="contact.name_field_error"
                          className="text-xs text-red-500"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="cf-company"
                        className="text-[#374151] text-sm font-medium"
                      >
                        Company Name
                      </Label>
                      <Input
                        id="cf-company"
                        data-ocid="contact.company_input"
                        placeholder="Hotel, Restaurant, etc."
                        value={form.companyName}
                        onChange={(e) =>
                          handleChange("companyName", e.target.value)
                        }
                        className={inputBase}
                      />
                    </div>
                  </div>

                  {/* Phone + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="cf-phone"
                        className="text-[#374151] text-sm font-medium"
                      >
                        Phone Number <span className="text-orange-500">*</span>
                      </Label>
                      <Input
                        id="cf-phone"
                        data-ocid="contact.phone_input"
                        placeholder="10-digit mobile number"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        onBlur={() => handleBlur("phone")}
                        className={`${inputBase} ${
                          errors.phone && touched.phone ? "border-red-400" : ""
                        }`}
                      />
                      {errors.phone && touched.phone && (
                        <p
                          data-ocid="contact.phone_field_error"
                          className="text-xs text-red-500"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="cf-email"
                        className="text-[#374151] text-sm font-medium"
                      >
                        Email Address
                      </Label>
                      <Input
                        id="cf-email"
                        type="email"
                        data-ocid="contact.email_input"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={inputBase}
                      />
                    </div>
                  </div>

                  {/* City + Establishment */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="cf-city"
                        className="text-[#374151] text-sm font-medium"
                      >
                        City / Location
                      </Label>
                      <Input
                        id="cf-city"
                        data-ocid="contact.city_input"
                        placeholder="e.g. Mumbai, Chennai"
                        value={form.city}
                        onChange={(e) => handleChange("city", e.target.value)}
                        className={inputBase}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="cf-establishment"
                        className="text-[#374151] text-sm font-medium"
                      >
                        Type of Establishment
                      </Label>
                      <select
                        id="cf-establishment"
                        data-ocid="contact.establishment_select"
                        value={form.establishment}
                        onChange={(e) =>
                          handleChange("establishment", e.target.value)
                        }
                        className="w-full h-10 rounded-md border border-[#d1d5db] px-3 text-sm bg-white text-[#111827] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-smooth"
                      >
                        <option value="">Select type...</option>
                        {ESTABLISHMENT_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Requirement */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="cf-requirement"
                      className="text-[#374151] text-sm font-medium"
                    >
                      Type of Requirement
                    </Label>
                    <select
                      id="cf-requirement"
                      data-ocid="contact.requirement_select"
                      value={form.requirement}
                      onChange={(e) =>
                        handleChange("requirement", e.target.value)
                      }
                      className="w-full h-10 rounded-md border border-[#d1d5db] px-3 text-sm bg-white text-[#111827] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-smooth"
                    >
                      <option value="">Select requirement...</option>
                      {REQUIREMENT_TYPES.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="cf-message"
                      className="text-[#374151] text-sm font-medium"
                    >
                      Message / Requirements
                    </Label>
                    <Textarea
                      id="cf-message"
                      data-ocid="contact.message_textarea"
                      placeholder="Describe your kitchen setup requirements, equipment needed, project timeline, etc."
                      rows={4}
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="bg-white border-[#d1d5db] focus:border-orange-400 text-[#111827] placeholder:text-[#9ca3af] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    data-ocid="contact.submit_button"
                    className="w-full bg-brand hover:bg-orange-600 text-white font-semibold h-11 text-base orange-glow transition-smooth"
                  >
                    Send Enquiry
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS EMBED */}
      <section className="bg-[#f5f5f5] section-divider pt-12 pb-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#111827]">
              Find Our Office
            </h2>
            <div className="w-12 h-1 bg-brand rounded-full mx-auto mt-2" />
          </motion.div>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.10)" }}
          >
            <iframe
              data-ocid="contact.map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1254195349147!2d78.44767107493632!3d17.453710183444866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91a452086d63%3A0x6dd016f7fb4902b3!2sDeccan%20commercial%20kitchen%20equipments!5e0!3m2!1sen!2sin!4v1779049234337!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Standard Commercial Kitchen Equipments Location"
            />
          </div>
        </div>
      </section>

      {/* PAN INDIA CTA SECTION */}
      <section
        data-ocid="contact.pan_india_section"
        className="bg-[#f5f5f5] py-16 md:py-20 section-divider"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-6"
          >
            <Badge className="bg-orange-50 text-orange-600 border-orange-200 text-xs uppercase tracking-widest font-semibold">
              Pan India Coverage
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-balance">
              Commercial Kitchen Solutions{" "}
              <span className="text-orange-500">Across All of India</span>
            </h2>
            <p className="text-[#6b7280] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              We provide commercial kitchen equipment solutions across all major
              cities in India — Mumbai, Delhi, Bangalore, Chennai, Kolkata,
              Hyderabad, Pune, Ahmedabad and more. Contact us today for Pan
              India delivery and installation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <Button
                asChild
                data-ocid="contact.whatsapp_cta_button"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 h-12 text-base transition-smooth"
              >
                <a
                  href="https://wa.me/917396669997"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} className="mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  variant="outline"
                  data-ocid="contact.call_cta_button"
                  className="border-[#d1d5db] hover:border-orange-400 hover:text-orange-500 font-semibold px-6 h-12 text-base transition-smooth text-[#374151]"
                >
                  <a href="tel:+917396669997">
                    <Phone size={18} className="mr-2" />
                    +91 7396669997
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  data-ocid="contact.call_cta_button_2"
                  className="border-[#d1d5db] hover:border-orange-400 hover:text-orange-500 font-semibold px-6 h-12 text-base transition-smooth text-[#374151]"
                >
                  <a href="tel:+919666015353">
                    <Phone size={18} className="mr-2" />
                    +91 9666015353
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
