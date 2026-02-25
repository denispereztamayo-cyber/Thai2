import React, { useState } from 'react';
import { X, Send, Calendar, Users, Hotel, Map as MapIcon, CheckCircle2 } from './Icon.tsx';

interface QuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        serviceType: 'both',
        destination: '',
        guests: '2',
        date: '',
        name: '',
        email: '',
    });

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(3); // Show success state
        setTimeout(() => {
            onClose();
            setStep(1);
        }, 3000);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">

                {/* Header */}
                <div className="bg-gradient-to-r from-primary-600 to-primary-500 p-8 flex justify-between items-start">
                    <div>
                        <h2 className="text-3xl font-black text-white tracking-tighter">Cotiza tu Aventura</h2>
                        <p className="text-primary-100 text-sm mt-1">Hoteles de lujo y tours exclusivos en Tailandia</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-white/80 hover:text-white bg-white/10 p-2 rounded-xl transition-all"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="p-8">
                    {step === 1 && (
                        <div className="space-y-6">
                            <div className="grid grid-cols-3 gap-4">
                                <button
                                    onClick={() => setFormData({ ...formData, serviceType: 'hotels' })}
                                    className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center space-y-2 ${formData.serviceType === 'hotels' ? 'border-primary-500 bg-primary-50' : 'border-slate-100 hover:border-primary-200'}`}
                                >
                                    <Hotel size={24} className={formData.serviceType === 'hotels' ? 'text-primary-600' : 'text-slate-400'} />
                                    <span className="text-xs font-bold uppercase tracking-tighter">Hoteles</span>
                                </button>
                                <button
                                    onClick={() => setFormData({ ...formData, serviceType: 'tours' })}
                                    className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center space-y-2 ${formData.serviceType === 'tours' ? 'border-primary-500 bg-primary-50' : 'border-slate-100 hover:border-primary-200'}`}
                                >
                                    <MapIcon size={24} className={formData.serviceType === 'tours' ? 'text-primary-600' : 'text-slate-400'} />
                                    <span className="text-xs font-bold uppercase tracking-tighter">Tours</span>
                                </button>
                                <button
                                    onClick={() => setFormData({ ...formData, serviceType: 'both' })}
                                    className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center space-y-2 ${formData.serviceType === 'both' ? 'border-primary-500 bg-primary-50' : 'border-slate-100 hover:border-primary-200'}`}
                                >
                                    <CheckCircle2 size={24} className={formData.serviceType === 'both' ? 'text-primary-600' : 'text-slate-400'} />
                                    <span className="text-xs font-bold uppercase tracking-tighter">Ambos</span>
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Destino Sorpresa o Específico</label>
                                    <input
                                        type="text"
                                        placeholder="Ej. Krabi, Bangkok, Isla Phi Phi..."
                                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all text-slate-800"
                                        value={formData.destination}
                                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Invitados</label>
                                        <div className="relative">
                                            <Users size={16} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" />
                                            <select
                                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-6 py-4 focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all text-slate-800 appearance-none"
                                                value={formData.guests}
                                                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                                            >
                                                <option>1 Persona</option>
                                                <option>2 Personas</option>
                                                <option>3-5 Personas</option>
                                                <option>Grupo 6+</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Fecha</label>
                                        <div className="relative">
                                            <Calendar size={16} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" />
                                            <input
                                                type="date"
                                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-6 py-4 focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all text-slate-800"
                                                value={formData.date}
                                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => setStep(2)}
                                className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-slate-800 transition-all shadow-xl"
                            >
                                Siguiente Paso
                            </button>
                        </div>
                    )}

                    {step === 2 && (
                        <form onSubmit={handleSubmit} className="space-y-6 animate-in slide-in-from-right-10 duration-300">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Nombre Completo</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Tu nombre aquí"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all text-slate-800"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email de Contacto</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="ejemplo@correo.com"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all text-slate-800"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="flex-1 bg-slate-100 text-slate-600 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-slate-200 transition-all"
                                >
                                    Volver
                                </button>
                                <button
                                    type="submit"
                                    className="flex-[2] bg-primary-600 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/20 flex items-center justify-center space-x-2"
                                >
                                    <Send size={18} />
                                    <span>Enviar Solicitud</span>
                                </button>
                            </div>
                        </form>
                    )}

                    {step === 3 && (
                        <div className="py-12 text-center space-y-6 animate-in zoom-in-95 duration-500">
                            <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
                                <CheckCircle2 size={48} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-slate-900 tracking-tight">¡Solicitud Enviada!</h3>
                                <p className="text-slate-500 mt-2">Un asesor de Tailandia Travel se pondrá <br /> en contacto contigo muy pronto.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuoteModal;
