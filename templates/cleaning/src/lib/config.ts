import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Sparkly Maid San Diego",
    tagline: "Sparkling Homes, Happy San Diego Lives.",
    phone: "(858) 227-9414",
    phoneHref: "tel:+18582279414",
    email: "info@sparklymaidsandiego.com",
    address: "123 Clean Street",
    city: "San Diego",
    serviceAreas: ["Carlsbad", "Chula Vista", "Del Mar", "El Cajon", "Encinitas", "Escondido", "La Mesa", "Oceanside", "Rancho Santa Fe", "San Marcos", "Santee", "Vista", "San Diego"],
    license: "Licensed & Insured",
    since: "2020",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "ocean",
    niche: "cleaning",
  },

  services: [
    { icon: "home", title: "Apartment Cleaning", desc: "Keep your apartment spotless with our thorough and efficient cleaning services.", urgent: false },
    { icon: "home", title: "House Cleaning", desc: "Enjoy a pristine home without lifting a finger, tailored to your specific needs.", urgent: false },
    { icon: "sparkles", title: "Deep Cleaning", desc: "Our deep cleaning service tackles grime and dirt, leaving your home refreshed and revitalized.", urgent: false },
    { icon: "truck", title: "Move In Cleaning", desc: "Start fresh in your new home with our comprehensive move-in cleaning service.", urgent: false },
    { icon: "truck", title: "Move Out Cleaning", desc: "Ensure a smooth transition with our detailed move-out cleaning, perfect for landlords and tenants.", urgent: false },
    { icon: "hammer", title: "Post-Construction Cleaning", desc: "We remove dust and debris after renovations, making your newly built or remodeled space shine.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah M.", location: "La Jolla", stars: 5, text: "Sparkly Maid San Diego did an incredible job with our apartment. After a busy week, coming home to such a clean space was a huge relief. They paid attention to every detail, and the kitchen has never looked better. Highly recommend their professional and friendly team!" },
    { name: "David L.", location: "Encinitas", stars: 5, text: "We used Sparkly Maid for a deep cleaning before hosting family, and they exceeded all expectations. The house felt brand new! The team was punctual, respectful, and incredibly thorough. Worth every penny for the peace of mind and sparkling results." },
    { name: "Jessica R.", location: "Carlsbad", stars: 5, text: "Moving out is stressful enough, but Sparkly Maid made the cleaning process effortless. Their move-out cleaning service was fantastic, ensuring we got our full deposit back. They were efficient and left the place immaculate. Will definitely use them again for future needs!" }
  ],

  trustBadges: [
    "Licensed & Insured", "100% Satisfaction Guarantee", "Top-Rated Maid Service", "Professional Cleaners"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 500, label: "Happy Homes", suffix: "+", decimals: 0 },
    { value: 3, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Simple Scheduling", desc: "Book your cleaning service online or over the phone with ease and flexibility." },
    { icon: "dollar-sign", title: "Transparent Pricing", desc: "No hidden fees or surprises, just clear and honest pricing for all our services." },
    { icon: "award", title: "Certified Pros", desc: "Our cleaning professionals are thoroughly vetted, trained, and dedicated to excellence." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand by our work; if you're not happy, we'll make it right." },
    { icon: "phone", title: "Responsive Support", desc: "Our friendly team is always ready to assist you with any questions or needs." },
    { icon: "shield-check", title: "Safe & Secure", desc: "We use eco-friendly products and ensure the safety of your home and belongings." }
  ],

  formServiceOptions: ["Apartment Cleaning", "House Cleaning", "Deep Cleaning", "Move In Cleaning", "Move Out Cleaning", "Post-Construction Cleaning"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!