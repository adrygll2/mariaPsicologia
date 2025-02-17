import React from 'react';
import { Menu, Heart, Phone, Mail, MapPin, Clock, ArrowRight, BookOpen, Brain, Users, Sparkles, Home, UserSquare, Blocks } from 'lucide-react';

export function Services() {
    const services = [
      {
        title: "Terapia individual",
        icon: <Brain className="w-8 h-8 text-teal-600" />,
        description: "Atención psicológica personalizada para adolescentes y adultos que estén encontrando obstáculos en su vida cotidiana.",
        features: ["Ansiedad y Depresión", "Recuperación de un trauma", "Desarrollo Personal", "Manejo del estrés"]
      },
      {
        title: "Terapia de pareja",
        icon: <Users className="w-8 h-8 text-teal-600" />,
        description: "Asesoramiento psicológico para superar dificultades relacionales en la pareja. Parejas heterosexuales y colectivo LGTBIQ+.",
        features: ["Resolución de conflictos", "Capacidad de comunicación", "Generar confianza", "Mejora de la relación"]
      },
      {
        title: "Terapia familiar",
        icon: <Blocks className="w-8 h-8 text-teal-600" />,
        description: "Psicoterapia para modificar dinámicas familiares con el objetivo de aportar bienestar al ámbito doméstico (padres/madres e hijos/as, hermanos/as,etc.).",
        features: ["Reestructuración de pensamiento", "Correción del comportamiento", "Estrategias de superación", "Habilidades para resolver problemas"]
      },
      {
        title: "Formación psicología profesional",
        icon: <BookOpen className="w-8 h-8 text-teal-600" />,
        description: "Clases formativas en psicología profesional.",
        features: ["PRÓXIMAMENTE"]
      }
    ];
  
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Mis Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <ArrowRight className="w-4 h-4 text-teal-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }