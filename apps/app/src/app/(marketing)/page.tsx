'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

// Subject card data
const subjects = [
  { name: 'Mathematics', subtopics: '150+', icon: '∑' },
  { name: 'Physics', subtopics: '120+', icon: '⚛' },
  { name: 'Chemistry', subtopics: '130+', icon: '⚗' },
  { name: 'Biology', subtopics: '140+', icon: '🧬' },
  { name: 'Economics', subtopics: '80+', icon: '📈' },
  { name: 'Psychology', subtopics: '90+', icon: '🧠' },
  { name: 'History', subtopics: '100+', icon: '📜' },
  { name: 'English Lit', subtopics: '60+', icon: '📚' },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
  }
};

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  // Parallax effect for hero
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000000' }}>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'background 0.3s ease, backdrop-filter 0.3s ease',
          backgroundColor: scrolled ? 'rgba(0,0,0,0.8)' : 'transparent',
          backdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
        }}
      >
        <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 24px', height: 48, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ fontWeight: 600, fontSize: 20, color: '#f5f5f7', textDecoration: 'none' }}>
            Past Papers
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <Link href="#features" style={{ fontSize: 12, color: 'rgba(245,245,247,0.8)', textDecoration: 'none' }}>Features</Link>
            <Link href="#subjects" style={{ fontSize: 12, color: 'rgba(245,245,247,0.8)', textDecoration: 'none' }}>Subjects</Link>
            <Link href="#how-it-works" style={{ fontSize: 12, color: 'rgba(245,245,247,0.8)', textDecoration: 'none' }}>How It Works</Link>
            <Link href="/pricing" style={{ fontSize: 12, color: 'rgba(245,245,247,0.8)', textDecoration: 'none' }}>Pricing</Link>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#choose-level"
              style={{
                backgroundColor: '#f5f5f7',
                color: '#1d1d1f',
                padding: '8px 16px',
                borderRadius: 980,
                fontSize: 14,
                textDecoration: 'none',
                fontWeight: 500,
                display: 'inline-block',
              }}
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section - Dark */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 48,
      }}>
        {/* Background gradient */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.15), transparent)',
        }} />

        <motion.div
          style={{
            maxWidth: 980,
            margin: '0 auto',
            padding: '0 24px',
            textAlign: 'center',
            y: heroY,
            opacity: heroOpacity,
          }}
        >
          {/* Infinity Symbol */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ marginBottom: 8 }}
          >
            <span
              style={{
                fontSize: 'clamp(80px, 18vw, 180px)',
                fontWeight: 200,
                lineHeight: 0.9,
                background: 'linear-gradient(135deg, #0071e3 0%, #5856d6 50%, #af52de 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'block',
              }}
            >
              ∞
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontSize: 'clamp(36px, 6vw, 72px)',
              lineHeight: 1.05,
              fontWeight: 600,
              letterSpacing: '-0.03em',
              color: '#f5f5f7',
              marginBottom: 16,
            }}
          >
            Infinite exam questions.
            <br />
            <span
              style={{
                background: 'linear-gradient(90deg, #0071e3, #5856d6, #af52de)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Every single subtopic.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontSize: 'clamp(17px, 2vw, 24px)',
              lineHeight: 1.3,
              fontWeight: 400,
              color: '#86868b',
              maxWidth: 600,
              margin: '0 auto 32px',
            }}
          >
            AI generates fresh, exam-board accurate questions on demand.
            <br />
            Never run out of practice again.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 20,
              flexWrap: 'wrap',
            }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#choose-level"
                style={{
                  background: 'linear-gradient(135deg, #0071e3 0%, #5856d6 100%)',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: 980,
                  fontSize: 17,
                  textDecoration: 'none',
                  fontWeight: 500,
                  display: 'inline-block',
                }}
              >
                Start Practicing — Free
              </Link>
            </motion.div>
            <motion.div whileHover={{ x: 5 }}>
              <Link
                href="#how-it-works"
                style={{
                  color: '#0071e3',
                  fontSize: 17,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                See how it works
                <svg style={{ width: 18, height: 18 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            position: 'absolute',
            bottom: 32,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ color: '#86868b', fontSize: 14 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Level Selector Section - Primary CTA */}
      <section id="choose-level" style={{ padding: '100px 0', backgroundColor: '#000000' }}>
        <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            style={{ textAlign: 'center', marginBottom: 48 }}
          >
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 600,
              color: '#f5f5f7',
              letterSpacing: '-0.02em',
              marginBottom: 12,
            }}>
              Choose your level
            </h2>
            <p style={{ fontSize: 17, color: '#86868b' }}>
              Select your qualification to start practicing
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 24,
              maxWidth: 700,
              margin: '0 auto',
            }}
          >
            {[
              {
                level: 'gcse',
                name: 'GCSE',
                description: 'Years 10-11 • Ages 14-16',
                subjects: 'Maths, Physics, Chemistry, Biology & more',
                color: '#0071e3',
              },
              {
                level: 'a-level',
                name: 'A-Level',
                description: 'Years 12-13 • Ages 16-18',
                subjects: 'Maths, Physics, Chemistry, Biology & more',
                color: '#af52de',
              },
            ].map((item) => (
              <motion.div
                key={item.level}
                variants={scaleIn}
                whileHover={{
                  y: -8,
                  boxShadow: `0 20px 60px ${item.color}30`,
                  transition: { duration: 0.3 }
                }}
              >
                <Link
                  href={`/${item.level}`}
                  style={{
                    display: 'block',
                    background: 'linear-gradient(135deg, #1d1d1f 0%, #2d2d2d 100%)',
                    border: `1px solid ${item.color}40`,
                    borderRadius: 24,
                    padding: 32,
                    textDecoration: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Gradient accent */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: `linear-gradient(90deg, ${item.color}, ${item.color}80)`,
                  }} />

                  <div style={{
                    fontSize: 32,
                    fontWeight: 700,
                    color: '#f5f5f7',
                    marginBottom: 8,
                  }}>
                    {item.name}
                  </div>
                  <div style={{
                    fontSize: 14,
                    color: item.color,
                    fontWeight: 500,
                    marginBottom: 16,
                  }}>
                    {item.description}
                  </div>
                  <div style={{
                    fontSize: 14,
                    color: '#86868b',
                    marginBottom: 20,
                  }}>
                    {item.subjects}
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    color: item.color,
                    fontSize: 15,
                    fontWeight: 500,
                  }}>
                    Browse subjects
                    <svg style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Dark */}
      <section style={{ padding: '80px 0', backgroundColor: '#000000' }}>
        <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 80,
            }}
          >
            {[
              { value: '∞', label: 'Questions per topic' },
              { value: '12', label: 'Subjects covered' },
              { value: '3', label: 'Exam boards' },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 64,
                  fontWeight: 600,
                  color: '#f5f5f7',
                  marginBottom: 8,
                  background: stat.value === '∞' ? 'linear-gradient(135deg, #0071e3, #af52de)' : 'none',
                  WebkitBackgroundClip: stat.value === '∞' ? 'text' : 'unset',
                  WebkitTextFillColor: stat.value === '∞' ? 'transparent' : '#f5f5f7',
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 15, color: '#86868b', letterSpacing: '0.02em' }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Problem Section - White */}
      <section style={{ padding: '120px 0', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            style={{ textAlign: 'center', marginBottom: 80 }}
          >
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#86868b', marginBottom: 16 }}>
              The Problem
            </p>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.07, fontWeight: 600, color: '#1d1d1f', letterSpacing: '-0.03em' }}>
              Past papers run out.
              <br />
              <span style={{ color: '#86868b' }}>Your practice shouldn't.</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}
          >
            {[
              { icon: '📚', title: 'Limited Past Papers', desc: "There are only so many past papers available. Once you've done them all, you're stuck." },
              { icon: '🔍', title: 'Hard to Find by Topic', desc: "Want to practice just quadratic equations? Good luck finding enough targeted questions." },
              { icon: '❓', title: 'No Detailed Solutions', desc: "Mark schemes tell you the answer but not how to get there. You need step-by-step explanations." },
              { icon: '📊', title: 'No Progress Tracking', desc: "Which topics are you strong in? Without tracking, you're revising blind." },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                style={{
                  backgroundColor: '#f5f5f7',
                  borderRadius: 20,
                  padding: 32,
                  cursor: 'default',
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: '#1d1d1f', marginBottom: 12 }}>{item.title}</h3>
                <p style={{ color: '#6e6e73', lineHeight: 1.5, fontSize: 15 }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Solution Section - Dark */}
      <section id="features" style={{ padding: '120px 0', backgroundColor: '#000000' }}>
        <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            style={{ textAlign: 'center', marginBottom: 100 }}
          >
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#86868b', marginBottom: 16 }}>
              The Solution
            </p>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.07, fontWeight: 600, color: '#f5f5f7', letterSpacing: '-0.03em' }}>
              Infinite questions.
              <br />
              <span style={{ background: 'linear-gradient(90deg, #0071e3, #5856d6, #af52de)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Instant generation.
              </span>
            </h2>
          </motion.div>

          {/* Feature 1 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'center', marginBottom: 140 }}
          >
            <motion.div variants={fadeInUp} style={{ textAlign: 'center' }}>
              <motion.span
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  fontSize: 'clamp(100px, 15vw, 180px)',
                  fontWeight: 200,
                  background: 'linear-gradient(135deg, #0071e3 0%, #5856d6 50%, #af52de 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'block',
                }}
              >
                ∞
              </motion.span>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 600, color: '#f5f5f7', marginBottom: 20, letterSpacing: '-0.02em' }}>
                Unlimited questions for every subtopic
              </h3>
              <p style={{ fontSize: 18, color: '#86868b', lineHeight: 1.6, marginBottom: 28 }}>
                Pick any topic. Pick any subtopic. Generate as many questions as you need.
                Our AI creates fresh, unique questions every time — perfectly calibrated to your exam board&apos;s style.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Quadratic Equations', 'Cell Division', 'Electromagnetic Waves', 'Market Structures'].map((topic) => (
                  <motion.li
                    key={topic}
                    whileHover={{ x: 8 }}
                    style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14, color: '#f5f5f7', fontSize: 16 }}
                  >
                    <span style={{
                      color: '#0071e3',
                      fontSize: 20,
                      background: 'linear-gradient(135deg, #0071e3, #af52de)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>∞</span>
                    <span>{topic}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'center' }}
          >
            <motion.div variants={fadeInUp} style={{ order: 1 }}>
              <h3 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 600, color: '#f5f5f7', marginBottom: 20, letterSpacing: '-0.02em' }}>
                Matches real exam style
              </h3>
              <p style={{ fontSize: 18, color: '#86868b', lineHeight: 1.6, marginBottom: 28 }}>
                Every question is crafted to match the exact format, wording, and difficulty of your actual exam. AQA, Edexcel, or OCR — our AI knows the difference.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                {['AQA', 'Edexcel', 'OCR'].map((board) => (
                  <motion.span
                    key={board}
                    whileHover={{ scale: 1.1 }}
                    style={{
                      padding: '10px 20px',
                      background: 'linear-gradient(135deg, rgba(0,113,227,0.2), rgba(175,82,222,0.2))',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 980,
                      fontSize: 14,
                      fontWeight: 500,
                      color: '#f5f5f7'
                    }}
                  >
                    {board}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              style={{
                backgroundColor: '#1d1d1f',
                borderRadius: 20,
                padding: 32,
                border: '1px solid rgba(255,255,255,0.1)',
                order: 2,
              }}
            >
              <div style={{ fontSize: 13, color: '#86868b', marginBottom: 12, fontWeight: 500, letterSpacing: '0.05em' }}>AQA GCSE MATHEMATICS</div>
              <div style={{ fontSize: 17, color: '#f5f5f7', marginBottom: 20, lineHeight: 1.6 }}>
                Solve the simultaneous equations:
              </div>
              <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 16, color: '#f5f5f7', marginBottom: 8, paddingLeft: 16 }}>
                3x + 2y = 12
              </div>
              <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 16, color: '#f5f5f7', marginBottom: 20, paddingLeft: 16 }}>
                x - y = 1
              </div>
              <div style={{ textAlign: 'right', fontSize: 14, color: '#86868b', fontWeight: 500 }}>[3 marks]</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Subjects Grid - White */}
      <section id="subjects" style={{ padding: '120px 0', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            style={{ textAlign: 'center', marginBottom: 80 }}
          >
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#86868b', marginBottom: 16 }}>
              Subjects
            </p>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.07, fontWeight: 600, color: '#1d1d1f', letterSpacing: '-0.03em', marginBottom: 16 }}>
              GCSE & A-Level.
              <br />
              <span style={{ color: '#86868b' }}>Every major subject.</span>
            </h2>
            <p style={{ fontSize: 'clamp(17px, 2vw, 21px)', color: '#86868b' }}>
              Hundreds of subtopics, infinite questions each.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}
          >
            {subjects.map((subject) => (
              <motion.div
                key={subject.name}
                variants={scaleIn}
                whileHover={{
                  y: -12,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  transition: { duration: 0.3 }
                }}
                style={{
                  backgroundColor: '#f5f5f7',
                  borderRadius: 20,
                  padding: 28,
                  textAlign: 'center',
                  cursor: 'pointer',
                }}
              >
                <motion.div
                  style={{ fontSize: 40, marginBottom: 12 }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {subject.icon}
                </motion.div>
                <h3 style={{ fontWeight: 600, color: '#1d1d1f', marginBottom: 4, fontSize: 17 }}>{subject.name}</h3>
                <p style={{ fontSize: 14, color: '#86868b', marginBottom: 12 }}>{subject.subtopics} subtopics</p>
                <div style={{
                  fontSize: 13,
                  fontWeight: 600,
                  background: 'linear-gradient(90deg, #0071e3, #af52de)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  ∞ questions each
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works - Dark */}
      <section id="how-it-works" style={{ padding: '120px 0', backgroundColor: '#000000' }}>
        <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            style={{ textAlign: 'center', marginBottom: 80 }}
          >
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#86868b', marginBottom: 16 }}>
              How It Works
            </p>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.07, fontWeight: 600, color: '#f5f5f7', letterSpacing: '-0.03em' }}>
              Three steps to
              <br />
              <span style={{ background: 'linear-gradient(90deg, #0071e3, #5856d6, #af52de)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                unlimited practice.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40 }}
          >
            {[
              { num: '1', title: 'Choose your topic', desc: 'Select your subject, exam board, and drill down to the exact subtopic you want to practice.' },
              { num: '2', title: 'Generate questions', desc: 'AI instantly creates exam-style questions. Choose your difficulty. Get as many as you need.' },
              { num: '3', title: 'Learn & improve', desc: 'Check your answers with detailed solutions. Track your progress. Master every topic.' },
            ].map((step) => (
              <motion.div key={step.num} variants={fadeInUp} style={{ textAlign: 'center' }}>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #0071e3 0%, #5856d6 100%)',
                    color: 'white',
                    fontSize: 28,
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                  }}
                >
                  {step.num}
                </motion.div>
                <h3 style={{ fontSize: 22, fontWeight: 600, color: '#f5f5f7', marginBottom: 12 }}>{step.title}</h3>
                <p style={{ color: '#86868b', lineHeight: 1.6, fontSize: 16 }}>{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Gradient */}
      <section style={{
        padding: '140px 0',
        background: 'linear-gradient(180deg, #000000 0%, #1d1d1f 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(0,113,227,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.span
              variants={scaleIn}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                fontSize: 'clamp(100px, 20vw, 240px)',
                fontWeight: 200,
                background: 'linear-gradient(135deg, rgba(0,113,227,0.3) 0%, rgba(175,82,222,0.3) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'block',
                marginBottom: 32,
                lineHeight: 1,
              }}
            >
              ∞
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 600, color: '#f5f5f7', marginBottom: 24, letterSpacing: '-0.03em' }}
            >
              Ready for unlimited practice?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              style={{ fontSize: 'clamp(17px, 2vw, 21px)', color: '#86868b', marginBottom: 48, maxWidth: 560, margin: '0 auto 48px' }}
            >
              Join thousands of students using AI-powered practice to ace their exams.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ display: 'inline-block' }}
              >
                <Link
                  href="/gcse"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    background: 'linear-gradient(135deg, #0071e3 0%, #5856d6 100%)',
                    color: 'white',
                    padding: '20px 40px',
                    borderRadius: 980,
                    fontSize: 19,
                    fontWeight: 500,
                    textDecoration: 'none',
                  }}
                >
                  Start Practicing Free
                  <svg style={{ width: 20, height: 20 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '32px 0', backgroundColor: '#000000', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 40, marginBottom: 32 }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: 18, color: '#f5f5f7', marginBottom: 16 }}>Past Papers</div>
              <p style={{ color: '#86868b', fontSize: 14, maxWidth: 280 }}>
                Infinite AI-generated exam questions for GCSE & A-Level students.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 60 }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: 12, color: '#86868b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Product</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <Link href="/gcse" style={{ color: '#a1a1a6', fontSize: 14, textDecoration: 'none' }}>GCSE</Link>
                  <Link href="/a-level" style={{ color: '#a1a1a6', fontSize: 14, textDecoration: 'none' }}>A-Level</Link>
                  <Link href="/pricing" style={{ color: '#a1a1a6', fontSize: 14, textDecoration: 'none' }}>Pricing</Link>
                </div>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 12, color: '#86868b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Subjects</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <Link href="/gcse/maths" style={{ color: '#a1a1a6', fontSize: 14, textDecoration: 'none' }}>Mathematics</Link>
                  <Link href="/gcse/physics" style={{ color: '#a1a1a6', fontSize: 14, textDecoration: 'none' }}>Physics</Link>
                  <Link href="/gcse/chemistry" style={{ color: '#a1a1a6', fontSize: 14, textDecoration: 'none' }}>Chemistry</Link>
                  <Link href="/gcse/biology" style={{ color: '#a1a1a6', fontSize: 14, textDecoration: 'none' }}>Biology</Link>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: 13, color: '#86868b' }}>
            <div>&copy; 2025 Past Papers. All rights reserved.</div>
            <div>Not affiliated with AQA, Edexcel, Pearson, or OCR.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
