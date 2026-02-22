import { CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import Button from "@/components/Button.jsx";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "swasthikg32@gmail.com",
    href: "mailto:swasthikg32@gmail.com",
  },

  {
    icon: Phone,
    label: "Phone",
    value: "+91 9353577030",
    href: "tel:+9353577030",
  },

  {
    icon: MapPin,
    label: "Location",
    value: "Mangaluru, Karnataka",
    href: "#",
  },
];

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });
  const [] = useState({});

  const handleSubmit = async (e) => {
    //  e.preventDefault();

    setLoading(true);
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicId = import.meta.env.VITE_EMAILJS_PUBLIC_ID;

      if (!serviceId || !templateId || !publicId) {
        throw new Error(
          "EmailJs configuration is missing. Please check your environment",
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicId,
      );

      setSubmitStatus({
        type: "success",
        message:
          "Message sent successfully! Thanks for connecting — I’ll be in touch soon.",
      });
    } catch (error) {
      console.log(error);
      setSubmitStatus({
        type: "Error",
        message: error.message,
      });

      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-32 overflow-hidden" id="contacts">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-highlight/5 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((a, i) => (
          <div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${10 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}></div>
        ))}
      </div>
      <div className="container mx-auto px-6 relative z-10">
        {/* section Header */}

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-tight">
            Get In Touch
          </span>
          <h2 className="text-primary text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in">
            Let's build
            <span className="text-white  font-serif italic font-normal">
              {" "}
              Something great.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animate-delay-100">
            If you have any questions or would like to discuss a role that
            matches my skills, I’d be glad to connect.
          </p>
        </div>

        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-100">
            <form action={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="You name..."
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Your email..."
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-font-medium mb-2">
                  Message
                </label>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              <Button
                className="w-full flex gap-2 items-center justify-center"
                type="submit"
                size="lg"
                disabled={loading}>
                {loading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 bordder border-green/500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}>
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          <div className="grid space-y-12">
            <div className="glass p-8 rounded-3xl  border-primary/30 animate-fade-in animation-delay-100">
              <h3 className="text-xl font-semibold mb-6">
                Contact information
              </h3>

              <div className="flex flex-col space-y-8  mx-6">
                {/* Contact details */}
                {contactInfo.map((contact, idx) => (
                  <a
                    key={idx}
                    href={contact.href}
                    className="flex gap-3 items-center group">
                    <span className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <contact.icon className="w-5 h-5 text-primary" />
                    </span>

                    <div>
                      <span className="text-muted-foreground tex-sm">
                        {contact.label}
                      </span>
                      <p className="font-medium">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass p-8 rounded-3xl  border-primary/30 animate-fade-in animation-delay-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>

              <p className="text-muted-foreground text-md">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let's talk!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
