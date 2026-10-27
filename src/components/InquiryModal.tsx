import React, { useState, useEffect } from 'react';
import { X, Send, Phone, Calendar, Users, MessageSquare, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Language, InquiryFormData } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { BUSINESS_INFO } from '../data/content';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  preselectedExperience?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  lang,
  preselectedExperience,
}) => {
  const t = TRANSLATIONS[lang];

  const experienceOptions = [
    { value: 'Isla Otoque', labelEs: 'Isla Otoque y Bahías Costeras', labelEn: 'Isla Otoque & Coastal Bays' },
    { value: 'Isla Bona', labelEs: 'Isla Bona e Islote Estiva (Santuario de Aves)', labelEn: 'Isla Bona & Islote Estiva (Seabird Sanctuary)' },
    { value: 'Snorkel', labelEs: 'Snorkel y Arrecifes del Pacífico', labelEn: 'Snorkeling & Pacific Reefs' },
    { value: 'Avistamiento de delfines', labelEs: 'Avistamiento de Delfines Manchados', labelEn: 'Spotted Dolphin Watching' },
    { value: 'Avistamiento de ballenas', labelEs: 'Avistamiento de Ballenas Jorobadas (Temporada)', labelEn: 'Humpback Whale Watching (Seasonal)' },
    { value: "Coco's Pub Bar", labelEs: "Coco's Pub Bar Restaurante (Mesa / Grupo)", labelEn: "Coco's Pub Bar Restaurant (Table / Group)" },
    { value: 'Otra consulta', labelEs: 'Otra consulta o viaje personalizado', labelEn: 'Other inquiry or custom request' },
  ];

  const [formData, setFormData] = useState<InquiryFormData>({
    experience: preselectedExperience || 'Isla Otoque',
    date: '',
    adults: 2,
    children: 0,
    name: '',
    phone: '',
    languagePreference: lang,
    comments: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedExperience) {
      setFormData((prev) => ({ ...prev, experience: preselectedExperience }));
    }
  }, [preselectedExperience]);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, languagePreference: lang }));
  }, [lang]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.experience) errs.experience = t.form.validationErrors.experience;
    if (!formData.date) errs.date = t.form.validationErrors.date;
    if (!formData.adults || formData.adults < 1) errs.adults = t.form.validationErrors.adults;
    if (!formData.name.trim()) errs.name = t.form.validationErrors.name;
    if (!formData.phone.trim() || formData.phone.length < 6) errs.phone = t.form.validationErrors.phone;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const isEs = formData.languagePreference === 'es';

    let message = '';
    if (isEs) {
      message = `Hola, Cocos Tour PTY. Me gustaría consultar una excursión.

Experiencia: ${formData.experience}
Fecha preferida: ${formData.date}
Adultos: ${formData.adults}
Niños: ${formData.children > 0 ? formData.children : 'Ninguno'}
Nombre: ${formData.name.trim()}
Teléfono: ${formData.phone.trim()}
Idioma preferido: Español
Comentarios: ${formData.comments.trim() || 'Ninguno'}

¿Podrían confirmarme disponibilidad y detalles?`;
    } else {
      message = `Hello, Cocos Tour PTY. I would like to inquire about a tour excursion.

Experience: ${formData.experience}
Preferred date: ${formData.date}
Adults: ${formData.adults}
Children: ${formData.children > 0 ? formData.children : 'None'}
Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
Preferred language: English
Comments: ${formData.comments.trim() || 'None'}

Could you please confirm availability and trip details?`;
    }

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/50762893605?text=${encoded}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl overflow-hidden my-6 border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#092E3B] text-white px-6 py-5 flex items-start justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#12A8A3] font-semibold">
              Cocos Tour PTY · Punta Chame
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mt-1 text-white">
              {t.form.title}
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-md">
              {t.form.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-md transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {lang === 'es' ? '¡Consulta Preparada!' : 'Inquiry Ready!'}
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                {lang === 'es'
                  ? 'Se ha abierto WhatsApp con los detalles de tu consulta hacia Cocos Tour PTY (+507 6289-3605). Si no se abrió la ventana, puedes pulsar el botón a continuación.'
                  : 'WhatsApp was opened with your excursion details for Cocos Tour PTY (+507 6289-3605). If it did not open automatically, you can tap the button below.'}
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/50762893605`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#12A8A3] text-[#092E3B] font-bold text-xs uppercase tracking-wider rounded shadow hover:bg-[#16bfba] transition-colors"
                >
                  {lang === 'es' ? 'Abrir WhatsApp Directo' : 'Open WhatsApp Directly'}
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-3 bg-slate-100 text-slate-700 font-semibold text-xs rounded hover:bg-slate-200 transition-colors"
                >
                  {lang === 'es' ? 'Volver al Sitio' : 'Return to Site'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Experience */}
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">
                  {t.form.expLabel} <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#12A8A3] focus:border-transparent"
                >
                  {experienceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {lang === 'es' ? opt.labelEs : opt.labelEn}
                    </option>
                  ))}
                </select>
                {errors.experience && (
                  <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.experience}
                  </p>
                )}
              </div>

              {/* Date & Group Size */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-1">
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    {t.form.dateLabel} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#12A8A3]"
                  />
                  {errors.date && (
                    <p className="text-xs text-rose-500 mt-1">{errors.date}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    {t.form.adultsLabel} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={formData.adults}
                    onChange={(e) => setFormData({ ...formData, adults: parseInt(e.target.value) || 1 })}
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#12A8A3]"
                  />
                  {errors.adults && (
                    <p className="text-xs text-rose-500 mt-1">{errors.adults}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    {t.form.childrenLabel}
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="20"
                    value={formData.children}
                    onChange={(e) => setFormData({ ...formData, children: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#12A8A3]"
                  />
                </div>
              </div>

              {/* Contact Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    {t.form.nameLabel} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    placeholder={lang === 'es' ? 'Ej. Sofía Morales' : 'E.g. Sarah Jenkins'}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#12A8A3]"
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    {t.form.phoneLabel} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    placeholder="+507 6XXX-XXXX"
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#12A8A3]"
                  />
                  {errors.phone && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Language Preference */}
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">
                  {t.form.langLabel}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, languagePreference: 'es' })}
                    className={`py-2 text-xs font-medium rounded-md border text-center transition-colors ${
                      formData.languagePreference === 'es'
                        ? 'bg-[#092E3B] text-white border-[#092E3B]'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    Español (WhatsApp en español)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, languagePreference: 'en' })}
                    className={`py-2 text-xs font-medium rounded-md border text-center transition-colors ${
                      formData.languagePreference === 'en'
                        ? 'bg-[#092E3B] text-white border-[#092E3B]'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    English (WhatsApp in English)
                  </button>
                </div>
              </div>

              {/* Comments */}
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">
                  {t.form.commentsLabel}
                </label>
                <textarea
                  rows={3}
                  value={formData.comments}
                  placeholder={t.form.commentsPlaceholder}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#12A8A3]"
                />
              </div>

              {/* Notice */}
              <div className="bg-[#F2E9DA]/50 rounded-lg p-3 text-[11px] text-[#142126] border border-[#C9A878]/30">
                <p className="leading-relaxed">
                  <strong>{lang === 'es' ? 'Condición de confirmación:' : 'Confirmation Policy:'}</strong> {t.form.notice}
                </p>
              </div>

              {/* Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-[#12A8A3] hover:bg-[#16bfba] text-[#092E3B] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-md shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.form.submitBtn}</span>
                </button>

                <div className="flex items-center justify-center pt-1">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="text-xs font-semibold text-[#092E3B] hover:text-[#12A8A3] flex items-center gap-1.5 transition-colors py-1"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{t.form.callAltBtn}: <span className="tabular-nums font-mono">{BUSINESS_INFO.phone}</span></span>
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
