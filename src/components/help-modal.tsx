'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export function HelpModalComponent() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <div>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Klantenservice
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Vragen of hulp nodig?</h2>
              <p className="text-gray-600 mb-2">
                Onze klantenservice is bereikbaar op werkdagen tussen 08.30 uur en 17.00 uur
              </p>
              <p className="text-gray-600">
                <a href="tel:088-5840888" className="text-blue-600 hover:underline">088 - 5840 888</a> | <a href="mailto:klantenservice@vnnmedia.nl" className="text-blue-600 hover:underline">klantenservice@vnnmedia.nl</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}