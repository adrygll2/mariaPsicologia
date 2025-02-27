import React, { useState } from "react";
import { Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Manejar cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
        //Configuración Local
      /*let response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });*/

      let response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/.netlify/functions/sendEmail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      let result = await response.json();
      if (result.success) {
        setStatus("Mensaje enviado con éxito 🎉");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Error al enviar el mensaje. Inténtalo de nuevo.");
      }
    } catch (error) {
      setStatus("Error de conexión con el servidor.");
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Contáctame</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-teal-600 mt-1" />
                  <div className="ml-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                    <a href="tel:+34641431426" className="text-teal-600 hover:underline">
                      (+34) 641 431 426
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-teal-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a href="mailto:psicologiamariaflores@gmail.com" className="text-teal-600 hover:underline">
                      psicologiamariaflores@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-teal-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Horario</h3>
                    <p className="text-gray-600">Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-lg transition-colors"
              >
                Enviar Mensaje
              </button>

              {status && <p className="text-center mt-2 text-sm text-gray-700">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}