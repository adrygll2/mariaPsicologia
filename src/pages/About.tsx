import React from 'react';
import { Menu, Heart, Phone, Mail, MapPin, Clock, ArrowRight, BookOpen, Brain, Users, Sparkles, Home } from 'lucide-react';

export function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/resources/img/MariaAboutMe.jpg"
              alt="Professional therapist"
              className="rounded-lg shadow-lg scale-90"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Mi nombre es María</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Actualmente y desde hace algún tiempo, a parte de mi actividad como psicoterapeuta, 
              trabajo como investigadora, siempre en el ámbito de la salud mental, 
              concretamente en búsqueda de nuevos tratamientos para los problemas relacionados con adicción, 
              ansiedad, depresión, control de impulsos, entre otros.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <BookOpen className="w-6 h-6 text-teal-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-900">Educación</h3>
                  <p className="text-gray-600">Psicóloga General Sanitaria, Universidad de Málaga.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-6 h-6 text-teal-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-900">Especializaciones</h3>
                  <p className="text-gray-600">Terapia Familiar Sistémica acreditada por la FEATF.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Sparkles className="w-6 h-6 text-teal-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-900">Enfoque</h3>
                  <p className="text-gray-600">Psicoterapia individual, de pareja y familiar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}