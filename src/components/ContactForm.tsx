// components/ContactForm.tsx
'use client'; // Required for client-side interactivity in App Router

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FiSend } from 'react-icons/fi';
import { useState } from 'react';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your Formspree endpoint or Next.js API route
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Message sent successfully! I will get back to you soon.',
        });
        reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Status Message */}
      {submitStatus && (
        <div
          className={`p-4 rounded-lg ${
            submitStatus.success
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-light/80 mb-2 text-sm">
          Your Name *
        </label>
        <input
          id="name"
          {...register('name')}
          className={`w-full bg-dark/50 border ${
            errors.name ? 'border-red-500' : 'border-light/10'
          } rounded-lg px-4 py-3 text-light focus:border-primary focus:outline-none transition-colors`}
          placeholder="Enter your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-light/80 mb-2 text-sm">
          Your Email *
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className={`w-full bg-dark/50 border ${
            errors.email ? 'border-red-500' : 'border-light/10'
          } rounded-lg px-4 py-3 text-light focus:border-primary focus:outline-none transition-colors`}
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-light/80 mb-2 text-sm">
          Subject *
        </label>
        <input
          id="subject"
          {...register('subject')}
          className={`w-full bg-dark/50 border ${
            errors.subject ? 'border-red-500' : 'border-light/10'
          } rounded-lg px-4 py-3 text-light focus:border-primary focus:outline-none transition-colors`}
          placeholder="What's this about?"
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-light/80 mb-2 text-sm">
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className={`w-full bg-dark/50 border ${
            errors.message ? 'border-red-500' : 'border-light/10'
          } rounded-lg px-4 py-3 text-light focus:border-primary focus:outline-none transition-colors`}
          placeholder="Hi Yuvraj, I'd like to talk about..."
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors w-full md:w-auto disabled:opacity-50"
      >
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            <FiSend className="mr-2" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}