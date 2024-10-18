"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function RegisterForm() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center text-gray-800">
          FASHIONUNITED
        </h1>
        <h2 className="mb-4 text-xl font-semibold text-center text-gray-700">
          Register with FashionUnited
        </h2>
        <p className="mb-6 text-sm text-center text-gray-600">
          This site uses cookies to deliver its services, to personalize ads and
          to analyze traffic. If you continue browsing the site, you agree to
          our{" "}
          <a href="#" className="text-blue-600 hover:underline">
            use of cookies
          </a>
          .
        </p>
        <form className="space-y-4">
          <div>
            <Label htmlFor="firstName" className="sr-only">
              First name
            </Label>
            <Input
              id="firstName"
              placeholder="First name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="sr-only">
              Last name
            </Label>
            <Input
              id="lastName"
              placeholder="Last name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <Label htmlFor="email" className="sr-only">
              Email address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <Label htmlFor="password" className="sr-only">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={agreed}
              onCheckedChange={() => setAgreed(!agreed)}
            />
            <Label htmlFor="terms" className="text-sm text-gray-600">
              Ik ben een mens
            </Label>
          </div>
          <div className="flex items-center justify-end">
            <div className="w-16 h-8 bg-blue-100 rounded"></div>
          </div>
          <Button className="w-full py-2 font-semibold text-white bg-red-500 rounded-md hover:bg-red-600">
            REGISTER
          </Button>
        </form>
        <div className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Log In
          </a>
        </div>
        <div className="flex justify-between mt-6 text-xs text-gray-500">
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
        </div>
      </div>
    </div>
  );
}
