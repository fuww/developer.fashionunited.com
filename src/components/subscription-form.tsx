"use client";

import { ArrowLeft, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SubscriptionForm() {
  return (
    <div className="max-w-3xl mx-auto p-4 space-y-8">
      <header className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <ArrowLeft className="h-5 w-5" />
          <span className="text-sm font-medium">Terug naar abonnementen</span>
        </div>
        <div className="text-2xl font-bold" style={{ color: "#ea0051" }}>
          FashionUnited
        </div>
        <div className="flex items-center space-x-2">
          <Headphones className="h-5 w-5" />
          <span className="text-sm font-medium">Klantenservice</span>
        </div>
      </header>

      <div className="space-y-4">
        <div className="flex justify-between text-sm font-medium">
          <span>Account</span>
          <span>Gegevens</span>
          <span>Betaling</span>
          <span>Klaar</span>
        </div>
        <div className="relative h-2 bg-gray-200 rounded">
          <div
            className="absolute left-0 top-0 h-full w-1/4 rounded"
            style={{ backgroundColor: "#ea0051" }}
          ></div>
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-2xl font-bold">
          Met welk e-mailadres wil jij een proefabonnement afsluiten?
        </h1>
        <p className="text-gray-600">
          Vul jouw e-mailadres in. Zo weten wij of je al een account bij ons
          hebt of dat je een account moet aanmaken.
        </p>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            E-mailadres
          </label>
          <Input id="email" type="email" placeholder="Voer je e-mailadres in" />
        </div>
        <a href="2">
          <Button className="w-full sm:w-auto">Ga verder</Button>
        </a>
      </div>
    </div>
  );
}
