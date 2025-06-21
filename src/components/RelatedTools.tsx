import Link from "next/link";

export function RelatedTools() {
  const tools = [
    {
      title: "Validador de RUT",
      description: "Verifica si un RUT chileno es válido",
      url: "/validar",
      icon: "✓",
    },
    {
      title: "RUT al Azar",
      description: "Genera RUTs completamente aleatorios",
      url: "/rut-al-azar",
      icon: "🎲",
    },
    {
      title: "Creador de RUT",
      description: "Crea RUTs personalizados válidos",
      url: "/creador-rut",
      icon: "🔧",
    },
  ];

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-8 text-[#212121] text-center">
        Herramientas Relacionadas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <Link
            key={index}
            href={tool.url}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border-2 border-[#F2F2F2] hover:border-[#0033A0]/20 group"
          >
            <div className="text-3xl mb-4">{tool.icon}</div>
            <h3 className="text-lg font-semibold text-[#212121] mb-2 group-hover:text-[#0033A0]">
              {tool.title}
            </h3>
            <p className="text-[#333333] text-sm">{tool.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
