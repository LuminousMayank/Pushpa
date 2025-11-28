import type { LucideIcon } from "lucide-react";

export interface Client {
  name: string;
}

export interface ClientCategory {
  name: string;
  clients: Client[];
}

export interface Product {
    name: string;
    icon: LucideIcon;
    description: string;
}

export interface Industry {
    name: string;
    description: string;
    imageId: string;
    offerings?: string[];
}
