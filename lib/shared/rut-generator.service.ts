export type Rut = {
  number: number;
  mod: string | number;
};

export type RutOpts = {
  quantity: number;
  minValue: number;
  maxValue: number;
};

class RutGenerator {
  private ruts: Rut[] = [];
  private input: string = "";
  private lastInput: string = "";
  private rutOpts: RutOpts = {
    quantity: 12,
    minValue: 1000000,
    maxValue: 40000000,
  };

  constructor() {
    this.generateRut();
  }

  public generateRut(): Rut[] {
    if (this.input === "" || this.getInput() !== this.lastInput) {
      const genRuts: Rut[] = [];
      let count = 0;

      while (count < this.rutOpts.quantity) {
        const number = this.getRandomNumber();
        let exists = false;

        for (const rut of genRuts) {
          if (rut.number === number) {
            exists = true;
            break;
          }
        }

        if (!exists) {
          const mod = this.getMod(number);
          genRuts.push({ number, mod });
          count++;
        }
      }

      this.lastInput = this.getInput();
      this.ruts = genRuts;
    }
    return this.ruts;
  }

  private getRandomNumber(): number {
    const min = this.rutOpts.minValue;
    const max = this.rutOpts.maxValue;
    const input = this.getInput();
    const inputNumber = parseInt(input, 10);

    if (!inputNumber || input.length > 8) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
      return inputNumber;
    }
  }

  private getInput(): string {
    return this.input.replace(/\D/g, "");
  }

  private getMod(number: number): string | number {
    let M = 0;
    let S = 1;

    while (number) {
      S = (S + (number % 10) * (9 - (M++ % 6))) % 11;
      number = Math.floor(number / 10);
    }

    return S ? S - 1 : "K";
  }

  public download(filterRutFormat: (rut: Rut) => string): void {
    const csvString = this.ruts.map(filterRutFormat).join("%0A");
    const a = document.createElement("a");
    a.href = "data:attachment/txt," + csvString;
    a.target = "_blank";
    a.download = "gen-ruts-" + Date.now() + ".txt";
    document.body.appendChild(a);
    a.click();
  }
}

const rutGenerator = () => {
  const rutGenerator = new RutGenerator();

  const generateRuts = () => {
    return rutGenerator.generateRut();
  };

  const downloadRuts = () => {
    rutGenerator.download(
      (rut) => `${rut.number.toLocaleString("cl-ES")}-${rut.mod}`
    );
  };

  return {
    generateRuts,
    downloadRuts,
    setInput: (input: string) => {
      rutGenerator["input"] = input;
    },
  };
};

export default rutGenerator;
