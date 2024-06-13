'use client'
import { Button } from "@/components/ui/button"
import useRutGenerator, { Rut } from "../../lib/shared/rut-generator.service";
import { useState } from "react";
import Link from "next/link";

export default function Home() {

  const rutGen = useRutGenerator();
  const [ruts, setRuts] = useState<Rut[]>(
    rutGen.generateRuts()
  ); 

  const generateRuts = () => {
    const ruts = useRutGenerator().generateRuts();
    setRuts(ruts);
    return;
  }

  return (
    <div className="max-w-2xl mx-auto my-12 p-8 bg-white shadow-lg rounded-3xl">
      <div>
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Generador de RUT</h1>
      <p className="mb-6 text-gray-600">
        Genera RUTs al azar con este generador. Haz click en un RUT para copiarlo al portapapeles.
      </p>
      <Button 
      onClick={
        () => generateRuts()}
        className="bg-blue-500 text-white px-6 py-2 mb-8 rounded-full hover:bg-blue-600">
        Generar más RUTs al azar
      </Button>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {ruts.map((rut, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg cursor-pointer hover:bg-gray-200" onClick={() => navigator.clipboard.writeText(rut.number + '-' + rut.mod)}>
            <p className="text-lg font-bold text-gray-800">{rut.number.toLocaleString('cl-ES')}
            <span className="text-lg text-gray-800">-{rut.mod}</span>
            </p>
            
            </div>
))}
      </div>
      <p className="text-center text-sm text-gray-500">Generado por <Link href="https://www.nicovega.dev" className="text-blue-500">nvm</Link></p>
      </div>
    </div>
  )
}