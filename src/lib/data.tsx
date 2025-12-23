import type { ClientCategory, Product, Industry } from "./types";

export const clientCategories: ClientCategory[] = [
    {
        name: "Defence",
        clients: [
            { name: "Indian Navy", logoUrl: "/logos/indian-navy.svg" },
        ],
    },
    {
        name: "Steel",
        clients: [
            { name: "Vizag Steel", logoUrl: "/logos/vizag-steel.png" },
            { name: "Bhilai Steel Plant", logoUrl: "/logos/sail.svg" },
            { name: "Tata Steel", logoUrl: "/logos/tata-steel.png" },
            { name: "Bokaro Steel Plant", logoUrl: "/logos/sail.svg" },
            { name: "JSW Steel", logoUrl: "/logos/jsw-steel.png" },
        ],
    },
    {
        name: "Cement",
        clients: [
            { name: "Ultratech Cement", logoUrl: "/logos/ultratech.png" },
            { name: "My Home Group", logoUrl: "/logos/my-home.png" },
            { name: "The RAMCO Cements", logoUrl: "/logos/ramco.png" },
            { name: "Dalmia Cement", logoUrl: "/logos/dalmia.png" },
        ],
    },
];


export const productCategories: Product[] = [
    {
      name: "OEM Spare Parts",
      iconUrl: "/icons/oem-spare-parts.png",
      description: "Authentic, high-quality spare parts directly from original equipment manufacturers to ensure perfect fit and performance.",
    },
    {
      name: "Marine Hoses",
      iconUrl: "/icons/marine-hoses.png",
      description: "Durable, certified marine hoses and fittings for all types of fluid transfer, built to withstand harsh maritime environments.",
    },
    {
      name: "RAS Spares",
      iconUrl: "/icons/rasspares.png",
      description: "Specialized spares for Replenishment-At-Sea (RAS) systems, crucial for naval and maritime support operations.",
    },
    {
      name: "Pumps",
      iconUrl: "/icons/pumps.png",
      description: "A wide range of industrial pumps for various applications, including centrifugal, diaphragm, and submersible types.",
    },
    {
      name: "Valves",
      iconUrl: "/icons/valves.png",
      description: "High-performance industrial valves, including ball, gate, globe, and check valves for precise flow control.",
    },
    {
      name: "Mechanical Equipment",
      iconUrl: "/icons/mechanical-equipment.png",
      description: "Comprehensive solutions for mechanical equipment, including gearboxes, couplings, bearings, and transmission systems.",
    },
    {
      name: "Electrical Components",
      iconUrl: "/icons/electrical-components.png",
      description: "Reliable electrical components such as motors, switches, sensors, and control panels for industrial automation.",
    },
    {
      name: "Hydraulic Systems",
      iconUrl: "/icons/hydraulic-systems.png",
      description: "Complete hydraulic systems and components, including cylinders, power packs, filters, and hydraulic fluids.",
    },
    {
      name: "Safety & Marine Supplies",
      iconUrl: "/icons/safety-marine-supplies.png",
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
