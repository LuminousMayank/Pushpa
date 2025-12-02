import { Cog, Anchor, Replace, Fan, SlidersHorizontal, Wrench, CircuitBoard, GitCommitHorizontal, LifeBuoy } from "lucide-react";
import type { ClientCategory, Product, Industry } from "./types";

export const clientCategories: ClientCategory[] = [
    {
        name: "Defence",
        clients: [
            { name: "Indian Navy, Mumbai", logo: <svg className="h-10 w-10 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18M9 4h6l2 2H7l2-2zM4 18h16" /></svg> },
            { name: "Indian Navy, Vizag", logo: <svg className="h-10 w-10 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18M9 4h6l2 2H7l2-2zM4 18h16" /></svg> },
            { name: "Indian Navy, Karwar", logo: <svg className="h-10 w-10 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18M9 4h6l2 2H7l2-2zM4 18h16" /></svg> },
            { name: "Indian Navy, Kochi", logo: <svg className="h-10 w-10 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18M9 4h6l2 2H7l2-2zM4 18h16" /></svg> },
            { name: "Indian Navy, Port Blair", logo: <svg className="h-10 w-10 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18M9 4h6l2 2H7l2-2zM4 18h16" /></svg> },
        ],
    },
    {
        name: "Steel",
        clients: [
            { name: "Vizag Steel", logo: <svg className="h-10 w-10 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg> },
            { name: "Tata Steel", logo: <svg className="h-10 w-10 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5V4H4zm0 12h5v5H4v-5zm12 0h5v5h-5v-5zM9 9h6v6H9V9z" /></svg> },
            { name: "Bhilai Steel Plant", logo: <svg className="h-10 w-10 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M19 3v4M5 17v4M19 17v4M3 5h4M3 19h4M17 5h4M17 19h4M9 5h6M9 19h6M5 9v6M19 9v6" /></svg> },
            { name: "Bokaro Steel Plant", logo: <svg className="h-10 w-10 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M19 3v4M5 17v4M19 17v4M3 5h4M3 19h4M17 5h4M17 19h4M9 5h6M9 19h6M5 9v6M19 9v6" /></svg> },
            { name: "JSW Steel", logo: <svg className="h-10 w-10 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A12.025 12.025 0 0112 22a12.025 12.025 0 01-6.824-2.943 12.078 12.078 0 01.665-6.479L12 14z" /><path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /></svg> },
        ],
    },
    {
        name: "Cement",
        clients: [
            { name: "Ultratech Cement", logo: <svg className="h-10 w-10 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
            { name: "My Home Group", logo: <svg className="h-10 w-10 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
            { name: "The RAMCO Cements", logo: <svg className="h-10 w-10 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
            { name: "Dalmia Cement", logo: <svg className="h-10 w-10 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
        ],
    },
];


export const productCategories: Product[] = [
    {
      name: "OEM Spare Parts",
      icon: Cog,
      description: "Authentic, high-quality spare parts directly from original equipment manufacturers to ensure perfect fit and performance.",
    },
    {
      name: "Marine Hoses",
      icon: Anchor,
      description: "Durable, certified marine hoses and fittings for all types of fluid transfer, built to withstand harsh maritime environments.",
    },
    {
      name: "RAS Spares",
      icon: Replace,
      description: "Specialized spares for Replenishment-At-Sea (RAS) systems, crucial for naval and maritime support operations.",
    },
    {
      name: "Pumps",
      icon: Fan,
      description: "A wide range of industrial pumps for various applications, including centrifugal, diaphragm, and submersible types.",
    },
    {
      name: "Valves",
      icon: SlidersHorizontal,
      description: "High-performance industrial valves, including ball, gate, globe, and check valves for precise flow control.",
    },
    {
      name: "Mechanical Equipment",
      icon: Wrench,
      description: "Comprehensive solutions for mechanical equipment, including gearboxes, couplings, bearings, and transmission systems.",
    },
    {
      name: "Electrical Components",
      icon: CircuitBoard,
      description: "Reliable electrical components such as motors, switches, sensors, and control panels for industrial automation.",
    },
    {
      name: "Hydraulic Systems",
      icon: GitCommitHorizontal,
      description: "Complete hydraulic systems and components, including cylinders, power packs, filters, and hydraulic fluids.",
    },
    {
      name: "Safety & Marine Supplies",
      icon: LifeBuoy,
      description: "A full range of safety equipment and general marine supplies to ensure operational safety and compliance.",
    },
  ];

  export const industries: Industry[] = [
    {
      name: "Defence & Marine",
      description: "We are a key supplier to the nation's defence and maritime sectors, providing mission-critical components and robust equipment. Our deep understanding of stringent quality and reliability standards makes us a trusted partner for naval and shipyard operations.",
      imageId: "defence-marine",
      offerings: [
        "Marine Hoses & Fittings",
        "Underway Replenishment (UNREP) Products",
        "RAS/FAS Spares & Systems",
        "Naval-grade pumps, valves, and actuators",
        "Specialized safety and survival equipment"
      ]
    },
    {
      name: "Steel Plants",
      description: "Our procurement solutions help keep the heart of the steel industry beating. We supply high-temperature, heavy-duty OEM spares and equipment designed to withstand the extreme conditions of steel manufacturing, minimizing downtime and maximizing output.",
      imageId: "steel-plants",
      offerings: [
        "Refractory materials and furnace spares",
        "Heavy-duty gearboxes and motors",
        "Rolling mill bearings and components",
        "Conveyor systems and spares",
        "High-pressure hydraulic systems"
      ]
    },
    {
      name: "Cement & Power",
      description: "For the cement and power generation industries, reliability is non-negotiable. We provide durable, high-performance components that ensure continuous, efficient operation, from raw material handling to power distribution.",
      imageId: "cement-power",
      offerings: [
        "Crusher and grinder components",
        "Kiln and cooler spares",
        "Turbine and generator parts",
        "Boiler components and fittings",
        "Emission control and monitoring equipment"
      ]
    }
  ];
