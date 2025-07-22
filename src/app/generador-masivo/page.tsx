"use client";
import { useState, useEffect, useRef } from "react";
import rutGenerator from "../../../lib/shared/rut-generator.service";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GeneradorMasivo() {
  const [terminalLines, setTerminalLines] = useState<string[]>([
    "# RUT GENERATOR v2.0 - Sistema Masivo",
    "# Iniciando sistema...",
    ""
  ]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedRuts, setGeneratedRuts] = useState<string[]>([]);
  const [showDownload, setShowDownload] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [quantity, setQuantity] = useState(100);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalLines]);

  const addLine = (line: string) => {
    setTerminalLines(prev => [...prev, line]);
  };

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const generateMassiveRuts = async () => {
    setIsGenerating(true);
    setShowDownload(false);
    setGeneratedRuts([]);
    
    addLine(`> Comando: generar --cantidad ${quantity}`);
    addLine("");
    await sleep(300);
    
    addLine("🔄 Inicializando generador de RUTs...");
    await sleep(500);
    
    addLine("📊 Configurando parámetros:");
    await sleep(300);
    addLine(`   • Cantidad solicitada: ${quantity}`);
    await sleep(300);
    addLine("   • Rango: 1.000.000 - 40.000.000");
    await sleep(300);
    addLine("   • Algoritmo: Módulo 11 chileno");
    await sleep(500);
    
    addLine("");
    addLine("⚡ Generando RUTs únicos...");
    
    const ruts: string[] = [];
    const batchSize = 35;
    const batches = Math.ceil(quantity / batchSize);
    
    for (let i = 0; i < batches; i++) {
      await sleep(200);
      const progress = Math.min(((i + 1) * batchSize / quantity) * 100, 100);
      addLine(`   [${createProgressBar(progress)}] ${progress.toFixed(0)}%`);
      
      const generator = rutGenerator();
      const batchRuts = generator.generateRuts().slice(0, Math.min(batchSize, quantity - ruts.length));
      batchRuts.forEach(rut => {
        const formatted = `${rut.number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}-${rut.mod}`;
        ruts.push(formatted);
      });
    }
    
    setGeneratedRuts(ruts);
    await sleep(500);
    
    addLine("");
    addLine("✅ Generación completada");
    addLine(`📁 Total generados: ${ruts.length} RUTs`);
    addLine("");
    addLine("💾 Opciones disponibles:");
    addLine("   • [DESCARGAR TXT] - Archivo de texto plano");
    addLine("   • [DESCARGAR CSV] - Compatible con Excel");
    addLine("   • [COPIAR TODO] - Copiar al portapapeles");
    
    setShowDownload(true);
    setIsGenerating(false);
  };

  const createProgressBar = (percent: number) => {
    const filled = Math.floor(percent / 5);
    const empty = 20 - filled;
    return "█".repeat(filled) + "░".repeat(empty);
  };

  const downloadFile = (format: 'txt' | 'csv') => {
    const content = format === 'csv' 
      ? "RUT\n" + generatedRuts.join("\n")
      : generatedRuts.join("\n");
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ruts_generados_${new Date().getTime()}.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    addLine(`> Descargando archivo: ruts_generados.${format}`);
  };

  const copyAll = () => {
    navigator.clipboard.writeText(generatedRuts.join("\n"));
    addLine("> ✅ RUTs copiados al portapapeles");
  };

  return (
    <main className="min-h-screen bg-black text-green-400 font-mono p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/" className="text-green-500 hover:text-green-300 text-sm">
            ← Volver al inicio
          </Link>
        </div>
        
        <div className="bg-gray-900 rounded-lg p-6 shadow-2xl border border-green-500/20">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-green-300">GENERADOR MASIVO DE RUT</h1>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          
          <div 
            ref={terminalRef}
            className="bg-black p-4 rounded h-96 overflow-y-auto mb-4 text-sm leading-relaxed"
          >
            {terminalLines.map((line, idx) => (
              <div key={idx} className="whitespace-pre-wrap">
                {line}
              </div>
            ))}
            {isGenerating && <span className="animate-pulse">▋</span>}
          </div>
          
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <label className="text-green-300">Cantidad:</label>
              <input
                type="number"
                min="10"
                max="1000"
                value={quantity}
                onChange={(e) => setQuantity(Math.min(1000, Math.max(10, parseInt(e.target.value) || 10)))}
                className="bg-black border border-green-500/50 rounded px-2 py-1 w-24 text-green-400"
                disabled={isGenerating}
              />
            </div>
            
            <Button
              onClick={generateMassiveRuts}
              disabled={isGenerating}
              className="bg-green-600 hover:bg-green-700 text-black font-bold px-6"
            >
              {isGenerating ? "GENERANDO..." : "EJECUTAR"}
            </Button>
            
            {showDownload && (
              <>
                <Button
                  onClick={() => downloadFile('txt')}
                  className="bg-gray-700 hover:bg-gray-600 text-green-400"
                >
                  TXT
                </Button>
                <Button
                  onClick={() => downloadFile('csv')}
                  className="bg-gray-700 hover:bg-gray-600 text-green-400"
                >
                  CSV
                </Button>
                <Button
                  onClick={copyAll}
                  className="bg-gray-700 hover:bg-gray-600 text-green-400"
                >
                  COPIAR
                </Button>
              </>
            )}
          </div>
        </div>
        
        <div className="mt-8 text-center text-green-500/70 text-sm">
          <p>Terminal Mode • Generación segura de RUTs chilenos válidos</p>
        </div>
      </div>
    </main>
  );
}