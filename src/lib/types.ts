import type { LucideIcon } from "lucide-react";

export interface Client {
  name: string;
  logoUrl: string;
}

export interface ClientCategory {
  name: string;
  clients: Client[];
}

export interface Product {
    name: string;
    iconUrl: string;
    description: string;
}

export interface Industry {
    name:string;
    description: string;
    imageId: string;
    offerings?: string[];
}
