'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { createAnimationVariants } from '@/components/marketing/animations';

interface Testimonial {
  name: string;
  grade: string;
  subject: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    grade: "Year 12",
    subject: "A-Level Chemistry",
    content: "Finally found unlimited questions for organic chemistry! The explanations are so much clearer than textbook mark schemes.",
    avatar: "SM"
  },
  {
    name: "James T.", 
    grade: "Year 11",
    subject: "GCSE Maths",
    content: "Been using this for quadratic equations practice. Love that I can generate questions until I actually understand the topic.",
    avatar: "JT"
  },
  {
    name: "Aisha P.",
    grade: "Year 13", 
    subject: "A-Level Biology",
    content: "The step-by-step solutions saved my coursework. Much better than hunting through random past papers.",
    avatar: "AP"
  },
  {
    name: "Ryan L.",
    grade: "Year 10",
    subject: "GCSE Physics", 
    content: "My teacher recommended this for circuit questions. The diagrams are really helpful and questions feel like real exam ones.",
    avatar: "RL"
  },
  {
    name: "Emma K.",
    grade: "Year 12",
    subject: "A-Level Economics",
    content: "Perfect for essay practice! The mark schemes show exactly what examiners want to see.",
    avatar: "EK"
  },
  {
    name: "Tom H.",
    grade: "Year 11", 
    subject: "GCSE History",
    content: "Love the source analysis questions. Way easier than searching through old papers to find the right topics.",
    avatar: "TH"
  }
];

export function TestimonialsSection() {
  const prefersReducedMotion = useReducedMotion();
  const { fadeInUp, staggerContainer, scaleIn } = createAnimationVariants(prefersReducedMotion);

  return (
    <section className="py-20 md:py-28 bg-[#050505]" aria-labelledby="testimonials-heading">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-white/60 uppercase tracking-wider mb-4">
            Student Reviews
          </p>
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
            Loved by students across the UK
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Join thousands of students who've improved their grades with unlimited practice questions
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={scaleIn}
              className="bg-[#111] border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.12] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-medium text-white">{testimonial.name}</h3>
                  <p className="text-white/60 text-sm">{testimonial.grade} • {testimonial.subject}</p>
                </div>
              </div>
              <blockquote className="text-white/70 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          {/* Verifiable product facts only. The previous row asserted
              "4.8/5 from thousands of students", "50+ UK schools" and a static
              "15,000+ questions generated this week" — none of which is
              measured anywhere, and the last never changed. Contrast also
              lifted from white/30 (2.6:1) to white/60, which passes AA. */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/60">
            <div className="text-sm">✓ AQA, Edexcel and OCR</div>
            <div className="text-sm">✓ GCSE and A-Level</div>
            <div className="text-sm">✓ Every question with a full mark scheme</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}