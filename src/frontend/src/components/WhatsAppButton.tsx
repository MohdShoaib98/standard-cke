import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917396669997"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      data-ocid="whatsapp.button"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-smooth hover:scale-110 active:scale-95"
      style={{
        backgroundColor: "#25D366",
        boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
      }}
    >
      <MessageCircle
        size={26}
        className="text-white fill-white"
        strokeWidth={1.5}
      />
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  );
}
