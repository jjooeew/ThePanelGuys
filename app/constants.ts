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
  EMAIL: 'info@thepanelguys.com',
  ADDRESS: '123 Industrial Way, Auckland',
};

export const SERVICES = [
  {
    id: 'cool-rooms',
    title: 'Custom Cool Rooms',
    description: 'Precision-engineered walk-in refrigeration systems tailored to your specific space and temperature requirements.',
    icon: Snowflake,
        image: 'images/Manly-Park-Kitchen/13.jpg',

  },
  {
    id: 'freezers',
    title: 'Industrial Scale Rooms',
    description: 'Heavy-duty freezing solutions designed for long-term storage and maximum energy efficiency in commercial environments.',
    icon: Thermometer,
        image: 'images/Primor-Produce/40.jpg',

  },
  {
    id: 'maintenance',
    title: 'Repairs & Maintenance',
    description: '24/7 emergency support and scheduled preventative maintenance to keep your operations running without interruption.',
    icon: Wrench,
    image: 'images/Primor-Produce/43.jpg',
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
    title: 'Sawmill Brewery',
    category: 'Food',
    location: 'Auckland, NZ',
    image: 'images/Sawmill-Brewery/5.jpg',
    description: 'A 50,000 sq ft multi-temperature facility with advanced climate control.',
  },
  {
    id: 2,
    title: 'Manly Park Kitchen',
    category: 'Food',
    location: 'Auckland, NZ',
    image: 'images/Manly-Park-Kitchen/13.jpg',
    description: 'Custom kitchen walk-ins and wine cellar refrigeration systems.',
  },
  {
    id: 3,
    title: 'Healthcare Logistics',
    category: 'Health',
    location: 'Auckland, NZ',
    image: 'images/Healthcare-Logistics/21.jpg',
    description: 'Energy-efficient display cool rooms and back-of-house storage.',
  },
  {
    id: 4,
    title: 'Aroa Biosurgery',
    category: 'Health',
    location: 'Auckland, NZ',
    image: 'images/Aroa-Biosurgery/28.jpg',
    description: 'Ultra-precise temperature controlled rooms for sensitive medical storage.',
  },
  {
    id: 5,
    title: 'Primor Produce',
    category: 'Food',
    location: 'Auckland, NZ',
    image: 'images/Primor-Produce/43.jpg',
    description: 'High-capacity blast freezers and processing area cooling.',
  },
  // {
  //   id: 6,
  //   title: 'Artisan Bakery Chain',
  //   category: 'Food Service',
  //   location: 'Portland, OR',
  //   image: 'https://picsum.photos/seed/proj6/1200/800',
  //   description: 'Dough retardation rooms and climate-controlled ingredient storage.',
  // },
];

export const TESTIMONIALS = [
  {
    name: 'Simon Roadley',
    role: 'Manly Park Kitchen',
    content: 'Grant and his team have been great to work with. Over the course of several successful projects, their exceptional workmanship has stood out, demonstrating both skill and attention to detail. Grant and his team work diligently and efficiently to deliver the project on time. He is flexible and cooperative when there are design amendments during the build with a "no problems, we will sort it" attitude.',
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
