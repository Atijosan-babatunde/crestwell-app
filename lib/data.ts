import type { Feature, Service, TeamMember, Testimonial, FAQItem } from "@/types";

export const NAV_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact Us", href: "/contact" },
];

export const FEATURES: Feature[] = [
  { icon: "https://res2.weblium.site/res/5ffebd7bf672830021d842f0/6005a982c173cf0022b737c0", title: "Care Close to Home", body: "We bring qualified, compassionate support directly to your door, wherever in the community you call home.", href: "/services" },
  { icon: "https://res2.weblium.site/res/5ffebd7bf672830021d842f0/6005a981a6193c0022f71d48", title: "Trained Care Team", body: "Every support worker is DBS checked, trained, and matched to your needs before their very first visit.", href: "/team" },
  { icon: "https://res2.weblium.site/res/5ffebd7bf672830021d842f0/6005a9814bb52d00236295fe", title: "Fully Compliant Care", body: "We meet all relevant care standards and undergo regular audits, so you can trust every visit.", href: "/about" },
];

export const SERVICES: Service[] = [
  { image: "https://res2.weblium.site/res/5ffebd7bf672830021d842f0/6006e99c8fdaff0022e298b6_optimized_900_c900x600-0x0", title: "Support Work", body: "One-to-one support with everyday tasks getting up and about, preparing meals, running errands, and staying connected to the community so every client keeps their independence and routine." },
  { image: "https://res2.weblium.site/res/5ffebd7bf672830021d842f0/6006e9e0c173cf0022b90645_optimized_900_c900x600-0x0", title: "Domiciliary & Home Care", body: "Personal care delivered in the comfort of your own home: washing and dressing, medication prompts, meal preparation, and mobility support, all built around a care plan made just for you." },
  { image: "https://res2.weblium.site/res/5ffebd7bf672830021d842f0/600eda09b8ff0500222b1d47_optimized_1395_c1395x931-0x0", title: "Night Care", body: "Waking or sleeping night support for families who need peace of mind after dark, from overnight monitoring and repositioning to reassurance for anyone who feels unsettled at night." },
  { image: "https://res2.weblium.site/res/5ffebd7bf672830021d842f0/6006e960a6193c0022f8d74d_optimized_900_c900x600-0x0", title: "Living Care", body: "A dedicated carer moves in to provide round the clock companionship and support ideal for clients who need consistent, hands on care without ever leaving home." },
  { image: "https://res2.weblium.site/res/5ffebd7bf672830021d842f0/600edafb4abce70021a3e44a_optimized_1234_c1234x1052-0x0", title: "Unregulated Support Service", body: "Practical, non clinical help companionship, shopping, light housekeeping, and accompanying clients to appointments or social outings for anyone who just needs an extra pair of hands." },
];

export const TEAM: TeamMember[] = [
  { image: "https://res2.weblium.site/res/5ffebd7bf672830021d842f0/6006eb933db0db002243a44b_optimized_1200_c937x937-129x41", name: "Alice Shimmer", role: "Lead Care Coordinator", experience: "5 years", bio: "Alice matches every client with the right support worker and keeps each care plan up to date as needs change." },
  { image: "https://res2.weblium.site/res/5ffebd7bf672830021d842f0/6006ec3e1dec75002115f8fe_optimized_1140_c1140x1140-0x0", name: "Trisha Anderson", role: "Senior Support Worker", experience: "8 years", bio: "Trisha specialises in mobility and rehabilitation support, helping clients manage persistent pain and stay active at home." },
  { image: "https://res2.weblium.site/res/5ffebd7bf672830021d842f0/6006ebe2ea55c400218f9b32_optimized_1200_c1100x1100-57x15", name: "Ann Kessner", role: "Domiciliary Care Assistant", experience: "4 years", bio: "Ann is experienced in personal care and daily living support for clients with limited mobility." },
];

export const TESTIMONIALS: Testimonial[] = [
  { quote: '"Since my carer started visiting every morning, I\'ve been able to stay in my own home instead of moving anywhere else. She helps me get washed and dressed, and we always share a laugh over a cup of tea before she heads off."', name: "Nadine Peterson", age: "77 years" },
  { quote: "\"After I lost most of my mobility, I thought I'd have to leave the house I've lived in for forty years. Crestwell's night care team changed that someone is always with me overnight, and my day carer helps me through my routine like clockwork.\"", name: "Douglas Clevens", age: "85 years" },
  { quote: '"My children live out of state, so having a support worker stop by a few times a week gives all of us peace of mind. She helps with the shopping, gets me to my appointments, and genuinely feels like a friend."', name: "Amanda Peterson", age: "65 years" },
];

export const FAQ_ITEMS: FAQItem[] = [
  { question: "What areas do you cover?", answer: "We provide support work, domiciliary care, night care, living care, and unregulated support across Seattle and the surrounding community get in touch and we'll confirm we can reach you." },
  { question: "What's the difference between domiciliary care and unregulated support?", answer: "Domiciliary care covers regulated, hands on personal support such as washing, dressing, and medication prompts. Unregulated support covers non personal help like companionship, shopping, and light housekeeping. We'll help you work out which one fits your situation." },
  { question: "How quickly can care start?", answer: "After an initial assessment, we can usually put a care plan in place and arrange your first visit within a few days — sooner if the need is urgent." },
  { question: "Is night care awake or sleeping?", answer: "Both — we offer waking night care, where your carer stays alert and active throughout the night, and sleeping night care, where they're on-site and on call if you need them." },
  { question: "Do you offer live in care?", answer: "Yes. Our Living Care service places a dedicated carer with you around the clock for continuous, hands on support without having to leave home." },
];

export const WHY_ITEMS = [
  { icon: "home", title: "Person-Centred Care", body: "Every care plan is built entirely around you your routine, your preferences, and what matters most to your day." },
  { icon: "https://res2.weblium.site/res/5ffebd7bf672830021d842f0/6005a983fc448600211f0b28", title: "Trained Support Workers", body: "Our whole team is fully vetted, DBS checked, and trained across support work, home care, and night care." },
  { icon: "https://res2.weblium.site/res/5ffebd7bf672830021d842f0/6005a981251f1d0021cfc605", title: "Safe & Reliable", body: "Every visit is logged and every carer is accountable, so your family always knows care is happening as planned." },
  { icon: "https://res2.weblium.site/res/5ffebd7bf672830021d842f0/6005a9814bb52d00236295ff", title: "Help When You Need It", body: "From a single weekly visit to round-the-clock living care, we flex support up or down as your needs change." },
];

// About page image grid
export const ABOUT_PHOTOS = [
  { src: "https://res2.weblium.site/res/5ffebd7bf672830021d842f0/6006e8b21bf02b0021956232_optimized_1078_c1078x1205-0x0", alt: "Client receiving care at home" },
  { src: "https://res2.weblium.site/res/5ffebd7bf672830021d842f0/6006eaf84ba2c50021985c7d_optimized_1052", alt: "Support worker accompanying a client on a walk" },
  { src: "https://res2.weblium.site/res/5ffebd7bf672830021d842f0/6006e960a6193c0022f8d74d_optimized_900_c900x600-0x0", alt: "Client enjoying a visit from their carer" },
];

export const ABOUT_CHECKLIST = [
  "A care plan built entirely around you, reviewed regularly as your needs change.",
  "Fully trained, DBS checked support workers and carers matched to your personality and needs.",
  "Flexible visit times from a single hour a week to full-time living care.",
  "Waking or sleeping night care for extra peace of mind after dark.",
  "Support with medication prompts, mobility, and personal care from qualified staff.",
  "Unregulated support for companionship, shopping, and light housekeeping.",
  "Regular updates to family members, so loved ones are always kept in the loop.",
  "No long lock-in contracts care that scales up or down with your circumstances.",
  "Local carers who know the community, across Seattle and the surrounding areas.",
  "Culturally and spiritually sensitive care, tailored to your background and beliefs.",
];
