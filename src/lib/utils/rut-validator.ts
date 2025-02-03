export function isValidChileanRut(rut: string): boolean {
  if (!rut) return false;
  const cleaned = rut.replace(/\./g, "").toUpperCase();
  const [body, dv] = cleaned.split("-");
  if (!body || !dv) return false;
  if (!/^\d+$/.test(body)) return false;
  return dv === calculateDv(body);
}

function calculateDv(body: string): string {
  let sum = 0;
  let factor = 2;
  for (let i = body.length - 1; i >= 0; i--) {
    sum += Number(body[i]) * factor;
    factor = factor === 7 ? 2 : factor + 1;
  }
  const result = 11 - (sum % 11);
  if (result === 11) return "0";
  if (result === 10) return "K";
  return String(result);
}
