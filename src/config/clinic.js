// ============================================================
// CENTRALIZED CLINIC CONFIGURATION
// Update this file with your actual clinic information.
// All components read from this config — no hardcoding elsewhere.
// ============================================================

const clinic = {
  name: "DentCare Studio",
  tagline: "Your Smile, Our Priority",
  description:
    "We provide comprehensive dental care with a gentle touch. Our modern clinic combines advanced technology with personalized attention to give you the best dental experience.",
  shortDescription:
    "Professional dental care in a comfortable, modern environment. Trusted by over 5,000 happy patients.",

  // Contact Information
  phone: "+1 (555) 123-4567",
  phoneRaw: "+15551234567",
  email: "hello@dentcarestudio.com",
  whatsapp: "+15551234567",
  whatsappMessage: "Hi! I'd like to book a dental appointment.",

  // Address
  address: {
    street: "123 Smile Avenue, Suite 200",
    city: "New York",
    state: "NY",
    zip: "10001",
    full: "123 Smile Avenue, Suite 200, New York, NY 10001",
  },

  // Google Maps Embed URL (replace with your actual embed URL)
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2!2d-73.99!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTknMjQuMCJX!5e0!3m2!1sen!2sus!4v1234567890",

  // Opening Hours
  hours: [
    { day: "Monday", time: "9:00 AM – 6:00 PM" },
    { day: "Tuesday", time: "9:00 AM – 6:00 PM" },
    { day: "Wednesday", time: "9:00 AM – 6:00 PM" },
    { day: "Thursday", time: "9:00 AM – 7:00 PM" },
    { day: "Friday", time: "9:00 AM – 5:00 PM" },
    { day: "Saturday", time: "10:00 AM – 3:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],

  // Social Media Links
  social: {
    facebook: "https://facebook.com/dentcarestudio",
    instagram: "https://instagram.com/dentcarestudio",
    twitter: "https://twitter.com/dentcarestudio",
    linkedin: "https://linkedin.com/company/dentcarestudio",
  },

  // Dentist Information
  dentist: {
    name: "Dr. Sarah Mitchell",
    title: "Lead Dentist & Founder",
    qualifications: "DDS, MSD – Prosthodontics",
    experience: "15+ Years of Experience",
    specialization: "Cosmetic & Restorative Dentistry",
    bio: `Dr. Sarah Mitchell is a board-certified dentist with over 15 years of experience 
in cosmetic and restorative dentistry. She graduated with honors from Columbia University 
College of Dental Medicine and completed her specialty training in Prosthodontics at NYU. 
Dr. Mitchell is passionate about creating beautiful, healthy smiles using the latest 
techniques and technology. She is known for her gentle approach and dedication to 
patient comfort.`,
    shortBio:
      "Dedicated to creating beautiful smiles with a gentle, patient-first approach. Specializing in cosmetic and restorative dentistry with over 15 years of clinical experience.",
    education: [
      "DDS – Columbia University College of Dental Medicine",
      "MSD in Prosthodontics – New York University",
      "Advanced Implant Dentistry Certification",
    ],
    memberships: [
      "American Dental Association (ADA)",
      "American Academy of Cosmetic Dentistry",
      "International Congress of Oral Implantologists",
    ],
  },

  // Mission & Vision
  mission:
    "To provide exceptional dental care in a welcoming environment, helping every patient achieve optimal oral health and a confident smile.",
  vision:
    "To be the most trusted dental clinic in our community, known for clinical excellence, innovation, and compassionate patient care.",

  // Values
  values: [
    {
      title: "Patient-Centered Care",
      description:
        "Every treatment plan is tailored to your unique needs, preferences, and comfort level.",
    },
    {
      title: "Clinical Excellence",
      description:
        "We maintain the highest standards of dental care using evidence-based practices.",
    },
    {
      title: "Continuous Learning",
      description:
        "Our team regularly updates skills and knowledge to offer the latest in dental treatments.",
    },
    {
      title: "Integrity & Transparency",
      description:
        "We believe in honest communication about your dental health and treatment options.",
    },
  ],
};

export default clinic;
