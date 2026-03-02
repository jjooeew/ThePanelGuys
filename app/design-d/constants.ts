import { ReactNode } from 'react';
import { 
  Snowflake, 
  Thermometer, 
  Wrench, 
  ShieldCheck, 
  Clock, 
  Settings, 
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  SERVICES: '/services',
  CONTACT: '/contact',
};

export const CONTACT_INFO = {
  PHONE: '+1 (800) 555-0199',
  EMAIL: 'info@arcticprosystems.com',
  ADDRESS: '123 Industrial Way, Suite 400, Chicago, IL 60601',
};

export const SERVICES = [
  {
    id: 'cool-rooms',
    title: 'Custom Cool Rooms',
    description: 'Precision-engineered walk-in refrigeration systems tailored to your specific space and temperature requirements.',
    icon: Snowflake,
    image: 'https://picsum.photos/seed/coolroom/800/600',
  },
  {
    id: 'freezers',
    title: 'Walk-In Freezers',
    description: 'Heavy-duty freezing solutions designed for long-term storage and maximum energy efficiency in commercial environments.',
    icon: Thermometer,
    image: 'https://picsum.photos/seed/freezer/800/600',
  },
  {
    id: 'maintenance',
    title: 'Repairs & Maintenance',
    description: '24/7 emergency support and scheduled preventative maintenance to keep your operations running without interruption.',
    icon: Wrench,
    image: 'https://picsum.photos/seed/repair/800/600',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Decades of Experience',
    description: 'Over 25 years of specialized engineering in commercial refrigeration.',
    icon: Settings,
  },
  {
    title: 'Full Compliance',
    description: 'All installations meet or exceed local health and safety regulations.',
    icon: ShieldCheck,
  },
  {
    title: 'Fast Installation',
    description: 'Streamlined processes to minimize downtime for your business.',
    icon: Clock,
  },
  {
    title: 'Custom Solutions',
    description: 'No space is too complex for our design and engineering team.',
    icon: CheckCircle2,
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Metro Distribution Center',
    category: 'Logistics',
    location: 'Chicago, IL',
    image: 'https://picsum.photos/seed/proj1/1200/800',
    description: 'A 50,000 sq ft multi-temperature facility with advanced climate control.',
  },
  {
    id: 2,
    title: 'Grand Plaza Hotel',
    category: 'Hospitality',
    location: 'New York, NY',
    image: 'https://picsum.photos/seed/proj2/1200/800',
    description: 'Custom kitchen walk-ins and wine cellar refrigeration systems.',
  },
  {
    id: 3,
    title: 'Fresh Foods Market',
    category: 'Retail',
    location: 'Austin, TX',
    image: 'https://picsum.photos/seed/proj3/1200/800',
    description: 'Energy-efficient display cool rooms and back-of-house storage.',
  },
  {
    id: 4,
    title: 'BioTech Research Lab',
    category: 'Pharmaceutical',
    location: 'Boston, MA',
    image: 'https://picsum.photos/seed/proj4/1200/800',
    description: 'Ultra-precise temperature controlled rooms for sensitive medical storage.',
  },
  {
    id: 5,
    title: 'Seafood Export Hub',
    category: 'Industrial',
    location: 'Seattle, WA',
    image: 'https://picsum.photos/seed/proj5/1200/800',
    description: 'High-capacity blast freezers and processing area cooling.',
  },
  {
    id: 6,
    title: 'Artisan Bakery Chain',
    category: 'Food Service',
    location: 'Portland, OR',
    image: 'https://picsum.photos/seed/proj6/1200/800',
    description: 'Dough retardation rooms and climate-controlled ingredient storage.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Robert Chen',
    role: 'Operations Manager, Global Logistics',
    content: 'ArcticPro delivered our facility ahead of schedule. The precision of their temperature control is unmatched in the industry.',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Executive Chef, The Gilded Table',
    content: 'Our custom walk-in is a work of art. Reliable, easy to clean, and perfectly integrated into our kitchen workflow.',
  },
  {
    name: 'Michael Rossi',
    role: 'Director, Fresh Foods Market',
    content: 'The energy savings alone paid for the installation within 18 months. Their maintenance team is incredibly responsive.',
  },
];
