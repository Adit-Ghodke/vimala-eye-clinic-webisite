import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, X } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z.string()
    .email('Invalid email address'),
  phone: z.string()
    .regex(/^[0-9]{10}$/, 'Must be a 10-digit phone number'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
});

export default function ContactForm({ onClose }) {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data) => {
    // BUG HUNTER: Prevent double-click/spam by checking status
    if (status === 'submitting') return;
    
    setStatus('submitting');
    
    // Simulate API Call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form Submitted:', data);
      setStatus('success');
      setTimeout(() => {
        reset();
        if (onClose) onClose();
      }, 3000);
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 space-y-6"
          >
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle size={40} />
            </div>
            <h3 className="text-3xl font-bold text-slate-navy">Appointment Requested!</h3>
            <p className="text-slate-600">Our team will contact you shortly to confirm your slot.</p>
          </motion.div>
        ) : (
          <motion.form 
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-navy uppercase tracking-widest">Full Name</label>
                <input 
                  {...register('name')}
                  placeholder="John Doe"
                  className={`w-full p-4 rounded-2xl bg-white/50 border-2 transition-all outline-none ${errors.name ? 'border-red-400 focus:border-red-500' : 'border-slate-100 focus:border-primary'}`}
                />
                {errors.name && <p className="text-red-500 text-xs font-bold mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-navy uppercase tracking-widest">Phone Number</label>
                <input 
                  {...register('phone')}
                  placeholder="9876543210"
                  className={`w-full p-4 rounded-2xl bg-white/50 border-2 transition-all outline-none ${errors.phone ? 'border-red-400 focus:border-red-500' : 'border-slate-100 focus:border-primary'}`}
                />
                {errors.phone && <p className="text-red-500 text-xs font-bold mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.phone.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-navy uppercase tracking-widest">Email Address</label>
              <input 
                {...register('email')}
                placeholder="john@example.com"
                className={`w-full p-4 rounded-2xl bg-white/50 border-2 transition-all outline-none ${errors.email ? 'border-red-400 focus:border-red-500' : 'border-slate-100 focus:border-primary'}`}
              />
              {errors.email && <p className="text-red-500 text-xs font-bold mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-navy uppercase tracking-widest">Inquiry Type</label>
              <select 
                {...register('service')}
                className={`w-full p-4 rounded-2xl bg-white/50 border-2 transition-all outline-none appearance-none ${errors.service ? 'border-red-400 focus:border-red-500' : 'border-slate-100 focus:border-primary'}`}
              >
                <option value="">Select a Service</option>
                <option value="cataract">Cataract Surgery</option>
                <option value="lasik">LASIK / Refractive</option>
                <option value="glaucoma">Glaucoma Treatment</option>
                <option value="checkup">Routine Eye Exam</option>
              </select>
              {errors.service && <p className="text-red-500 text-xs font-bold mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.service.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-navy uppercase tracking-widest">Message</label>
              <textarea 
                {...register('message')}
                rows={4}
                placeholder="Tell us about your concern..."
                className={`w-full p-4 rounded-2xl bg-white/50 border-2 transition-all outline-none resize-none ${errors.message ? 'border-red-400 focus:border-red-500' : 'border-slate-100 focus:border-primary'}`}
              />
              {errors.message && <p className="text-red-500 text-xs font-bold mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.message.message}</p>}
            </div>

            <button 
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-5 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:bg-blue-800 disabled:bg-slate-400 disabled:shadow-none transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              {status === 'submitting' ? (
                <>
                  <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Book Appointment
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
