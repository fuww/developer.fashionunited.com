"use client";

import { ChevronLeft, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SubscriptionFormDetails() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <header className="flex justify-between items-center mb-8">
        <button className="flex items-center text-gray-600">
          <ChevronLeft className="w-5 h-5 mr-1" />
          Terug naar abonnementen
        </button>
        <img src="/placeholder.svg" alt="Distrifood Logo" className="h-8" />
        <button className="flex items-center text-gray-600">
          <User className="w-5 h-5 mr-1" />
          Klantenservice
        </button>
      </header>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <div className="w-1/4 h-2 bg-[#ea0051] rounded"></div>
          <div className="w-1/4 h-2 bg-[#ea0051] rounded"></div>
          <div className="w-1/4 h-2 bg-gray-300 rounded"></div>
          <div className="w-1/4 h-2 bg-gray-300 rounded"></div>
        </div>
        <div className="flex justify-between text-sm">
          <span>Account</span>
          <span>Gegevens</span>
          <span>Betaling</span>
          <span>Klaar</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Persoonlijke gegevens</h2>
          <p className="mb-4 text-sm">
            Jouw proefabonnement wordt gekoppeld aan het e-mailadres:
            abc@gmail.com
          </p>
          <form className="space-y-4">
            <div className="flex gap-4">
              <Input placeholder="Voornaam" className="flex-1" />
              <Input placeholder="Tussenvoegsel" className="w-24" />
              <Input placeholder="Achternaam" className="flex-1" />
            </div>
            <Input placeholder="Bedrijfsnaam" />
            <Select defaultValue="Nederland">
              <SelectTrigger>
                <SelectValue placeholder="Land" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Nederland">Nederland</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex gap-4">
              <Input placeholder="Postcode" className="w-24" />
              <Input placeholder="Huisnummer" className="w-24" />
              <Input placeholder="Toevoeging" className="w-24" />
            </div>
            <Button className="w-full">Ga naar laatste stap</Button>
          </form>
        </div>
        <div className="w-full md:w-64">
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-bold mb-2">Jouw gekozen abonnement</h3>
            <p className="font-bold">Online</p>
            <div className="flex justify-between items-center my-2">
              <span className="text-sm">Start vandaag</span>
              <span className="text-sm font-bold">GRATIS</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm">Vanaf 3 nov. 2024</span>
              <span className="text-sm font-bold">€228 per jaar</span>
            </div>
            <ul className="text-sm list-disc list-inside space-y-1">
              <li>Altijd online toegang</li>
              <li>Bekijk de abonnementsvoorwaarden</li>
              <li>
                Eerste maand gratis en opzegbaar zonder verplichtingen, loopt
                daarna automatisch door in een betaald abonnement
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
