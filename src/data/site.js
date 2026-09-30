import {
  ArrowLeftRight,
  BadgeCheck,
  Briefcase,
  BriefcaseBusiness,
  Building2,
  Clock,
  Gem,
  MapPinned,
  MessagesSquare,
  Plane,
  Repeat,
  Route,
  Sparkles,
  SlidersHorizontal,
  UserCheck,
} from 'lucide-react'

export const COMPANY = {
  name: 'RD Travel',
  tagline: 'Your Journey. Our Responsibility.',
  phoneDisplay: '+91 70415 09550',
  phoneRaw: '+91 7041509550',
  phoneHref: 'tel:+917041509550',
  whatsappNumber: '917041509550',
  whatsappHref: 'https://wa.me/917041509550',
  email: 'patelravi22893@gmail.com',
  emailHref: 'mailto:patelravi22893@gmail.com',
  addressLines: [
    'Vasukanan Tower,',
    'Milan Patel Marc,',
    'Basement, KK Nagar Rd,',
    'Opp. Satkar Bunglows,',
    'Sector 4, Ghatlodiya,',
    'Ahmedabad, Gujarat 380061',
  ],
  addressShort: ['Vasukanan Tower,', 'KK Nagar Rd,', 'Ghatlodiya,', 'Ahmedabad, Gujarat 380061'],
  directionsHref: 'https://www.google.com/maps/dir/?api=1&destination=23.0725598,72.5529417',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.6699226788874!2d72.55294169999999!3d23.0725598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e836f77d0ae6d%3A0xc45ff03db6f1517b!2sVasukanan%20Tower%2C%20Milan%20Patel%20Marc%2C%20Basement%2C%20KK%20Nagar%20Rd%2C%20Opp.%20Satkar%20Bunglows%2C%20Sector%204%2C%20Ghatlodiya%2C%20Nirnay%20Nagar%2C%20Ahmedabad%2C%20Gujarat%20380061!5e0!3m2!1sen!2sin!4v1789377395900!5m2!1sen!2sin',
}

export const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Our Cars', id: 'cars' },
  { label: 'Why RD Travel', id: 'why' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
]

export const CAR_PREFERENCES = ['Sedan', 'SUV', 'MUV', 'Premium', 'Not Sure']

export const SERVICES = [
  {
    title: 'Local City Rides',
    description: 'Reliable rides across Ahmedabad for work, meetings, shopping or everyday travel.',
    icon: Building2,
  },
  {
    title: 'Airport Transfer',
    description: 'Timely pickups and comfortable airport drops without last-minute stress.',
    icon: Plane,
  },
  {
    title: 'Outstation Travel',
    description: 'Comfortable cars for intercity journeys with drivers you can rely on.',
    icon: Route,
  },
  {
    title: 'One-Way Cab',
    description: 'Going one way? Book just the drop and pay only for the trip you take.',
    icon: ArrowLeftRight,
  },
  {
    title: 'Round Trip',
    description: 'Same car, same driver, there and back. Good for day trips and family visits.',
    icon: Repeat,
  },
  {
    title: 'Corporate Travel',
    description: 'Punctual cars for office pickups, client visits and business guests.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Wedding & Event Cars',
    description: 'Neat, well-kept cars for weddings, functions and guest pickups.',
    icon: Gem,
  },
  {
    title: 'Custom Requirement',
    description: 'Something different in mind? Tell us what you need and we’ll work it out.',
    icon: SlidersHorizontal,
  },
]

export const VEHICLES = [
  {
    category: 'Sedan',
    description: 'Comfortable for city rides and small families.',
    passengers: 'Up to 4',
    luggage: '2 bags',
    examples: 'Dzire, Amaze or similar',
    image: '/images/car-sedan.webp',
    alt: 'White sedan parked on a clean driveway',
  },
  {
    category: 'SUV',
    description: 'Extra space and comfort for longer journeys.',
    passengers: 'Up to 6',
    luggage: '3 bags',
    examples: 'Scorpio, XUV700 or similar',
    image: '/images/car-suv.webp',
    alt: 'Dark grey SUV parked on a clean driveway',
  },
  {
    category: 'MUV',
    description: 'Made for families and group travel.',
    passengers: 'Up to 7',
    luggage: '3 bags',
    examples: 'Ertiga, Innova or similar',
    image: '/images/car-muv.webp',
    alt: 'Silver seven-seater MUV parked on a clean driveway',
  },
  {
    category: 'Premium',
    title: 'Premium Cars',
    description: 'For business travel, events and special occasions.',
    passengers: 'Up to 4',
    luggage: '2 bags',
    examples: 'Premium sedans & SUVs on request',
    image: '/images/car-premium.webp',
    alt: 'Black premium executive sedan parked on a clean driveway',
  },
]

export const BENEFITS = [
  {
    title: 'Professional Drivers',
    description: 'Experienced, polite drivers who know the roads and drive safely.',
    icon: UserCheck,
  },
  {
    title: 'Clean & Comfortable Cars',
    description: 'Every car is cleaned and checked before it comes to your door.',
    icon: Sparkles,
  },
  {
    title: 'On-Time Pickup',
    description: 'We plan ahead so your driver reaches on time, not ten minutes late.',
    icon: Clock,
  },
  {
    title: 'Transparent Communication',
    description: 'Fare, timing and car details are shared clearly before you travel.',
    icon: MessagesSquare,
  },
  {
    title: 'Flexible Travel Options',
    description: 'One-way, round trip, hourly or outstation — book the way that suits you.',
    icon: Briefcase,
  },
  {
    title: 'Local Ahmedabad Service',
    description: 'We are based in Ghatlodiya and know the city well. Just a call away.',
    icon: MapPinned,
  },
]

export const ABOUT_POINTS = [
  'Clean, well-maintained cars',
  'Professional, courteous drivers',
  'Clear fare before you travel',
  'Easy booking on call or WhatsApp',
]

export const STEPS = [
  {
    number: '01',
    title: 'Tell Us Your Journey',
    description: 'Share your pickup, destination, date and travel requirement.',
  },
  {
    number: '02',
    title: 'Confirm Your Car',
    description: 'We’ll help you choose a suitable car and confirm the details.',
  },
  {
    number: '03',
    title: 'Enjoy Your Ride',
    description: 'Your driver arrives at the agreed time and your journey begins.',
  },
]

export const HERO_TRUST = [
  { label: 'Clean & Comfortable Cars', icon: Sparkles },
  { label: 'Professional Drivers', icon: BadgeCheck },
  { label: 'On-Time Service', icon: Clock },
]
