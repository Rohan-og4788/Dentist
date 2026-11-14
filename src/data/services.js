import {
  Stethoscope,
  Sparkles,
  ShieldCheck,
  Scan,
  Wrench,
  SmilePlus,
  Scissors,
  Palette,
  Crown,
  Baby,
} from "lucide-react";

const services = [
  {
    id: "general-dentistry",
    title: "General Dentistry",
    icon: Stethoscope,
    shortDescription:
      "Comprehensive dental exams, preventive care, and treatments to maintain your overall oral health.",
    description:
      "Our general dentistry services cover everything from routine checkups and cleanings to fillings and preventive treatments. We focus on maintaining your oral health and catching problems early.",
    features: [
      "Comprehensive Dental Exams",
      "Preventive Care",
      "Dental Fillings",
      "Oral Health Education",
    ],
  },
  {
    id: "teeth-cleaning",
    title: "Teeth Cleaning & Scaling",
    icon: Sparkles,
    shortDescription:
      "Professional cleaning and scaling to remove plaque, tartar, and surface stains for healthier gums.",
    description:
      "Professional teeth cleaning goes beyond your daily brushing. Our hygienists remove plaque and tartar buildup, polish your teeth, and help prevent gum disease.",
    features: [
      "Deep Cleaning",
      "Plaque & Tartar Removal",
      "Gum Disease Prevention",
      "Polishing",
    ],
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    icon: ShieldCheck,
    shortDescription:
      "Painless root canal therapy to save infected teeth and relieve discomfort using modern techniques.",
    description:
      "Root canal treatment saves teeth that would otherwise need extraction. Using modern anesthesia and techniques, we make the procedure comfortable and virtually pain-free.",
    features: [
      "Pain-Free Treatment",
      "Advanced Techniques",
      "Tooth Preservation",
      "Same-Day Relief",
    ],
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    icon: Sparkles,
    shortDescription:
      "Professional whitening treatments to brighten your smile safely and effectively in just one visit.",
    description:
      "Our professional teeth whitening treatments deliver dramatic results safely. Whether in-office or take-home, we'll help you achieve a brighter, more confident smile.",
    features: [
      "In-Office Whitening",
      "Take-Home Kits",
      "Safe & Effective",
      "Long-Lasting Results",
    ],
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    icon: Wrench,
    shortDescription:
      "Permanent tooth replacement solutions that look, feel, and function like your natural teeth.",
    description:
      "Dental implants are the gold standard for replacing missing teeth. They provide a permanent, natural-looking solution that preserves jaw bone and restores full chewing function.",
    features: [
      "Permanent Solution",
      "Natural Appearance",
      "Bone Preservation",
      "Full Functionality",
    ],
  },
  {
    id: "braces-orthodontics",
    title: "Braces & Orthodontics",
    icon: SmilePlus,
    shortDescription:
      "Traditional braces and clear aligners to straighten teeth and correct bite issues for all ages.",
    description:
      "We offer various orthodontic solutions including traditional braces and clear aligners. Our treatment plans are customized for each patient to achieve the perfect smile.",
    features: [
      "Traditional Braces",
      "Clear Aligners",
      "Custom Treatment Plans",
      "All Ages Welcome",
    ],
  },
  {
    id: "tooth-extraction",
    title: "Tooth Extraction",
    icon: Scissors,
    shortDescription:
      "Safe and gentle tooth removal, including wisdom teeth, with minimal discomfort and quick recovery.",
    description:
      "When a tooth cannot be saved, we perform gentle extractions with proper anesthesia and aftercare. Our team ensures your comfort throughout the procedure and recovery.",
    features: [
      "Gentle Procedure",
      "Wisdom Teeth Removal",
      "Proper Aftercare",
      "Quick Recovery",
    ],
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    icon: Palette,
    shortDescription:
      "Smile makeovers including veneers, bonding, and aesthetic treatments to enhance your appearance.",
    description:
      "Transform your smile with our cosmetic dentistry services. From veneers and bonding to complete smile makeovers, we create beautiful, natural-looking results.",
    features: [
      "Porcelain Veneers",
      "Dental Bonding",
      "Smile Makeovers",
      "Aesthetic Treatments",
    ],
  },
  {
    id: "crowns-bridges",
    title: "Dental Crowns & Bridges",
    icon: Crown,
    shortDescription:
      "Custom-made crowns and bridges to restore damaged teeth and fill gaps in your smile.",
    description:
      "Our custom crowns and bridges restore damaged or missing teeth with precision-crafted restorations that match your natural teeth perfectly in color and shape.",
    features: [
      "Custom Fabrication",
      "Natural Appearance",
      "Durable Materials",
      "Perfect Fit",
    ],
  },
  {
    id: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    icon: Baby,
    shortDescription:
      "Gentle, kid-friendly dental care designed to make children feel comfortable and build healthy habits.",
    description:
      "We create a fun, welcoming environment for children's dental visits. Our gentle approach helps young patients develop positive associations with dental care.",
    features: [
      "Child-Friendly Environment",
      "Gentle Approach",
      "Preventive Care",
      "Parent Education",
    ],
  },
];

export default services;
