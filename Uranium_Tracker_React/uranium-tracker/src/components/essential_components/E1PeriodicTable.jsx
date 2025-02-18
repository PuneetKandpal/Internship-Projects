import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const E1PeriodicTable = () => {
  useEffect(() => {
    // Elements array placeholder (Add your elements here)
    const elements = [
      {
        number: 1,
        symbol: "H",
        name: "Hydrogen",
        weight: 1.008,
        group: 1,
        period: 1,
        category: "nonmetal",
      },
      {
        number: 2,
        symbol: "He",
        name: "Helium",
        weight: 4.0026,
        group: 18,
        period: 1,
        category: "noble gas",
      },
      {
        number: 3,
        symbol: "Li",
        name: "Lithium",
        weight: 6.94,
        group: 1,
        period: 2,
        category: "alkali metal",
      },
      {
        number: 4,
        symbol: "Be",
        name: "Beryllium",
        weight: 9.0122,
        group: 2,
        period: 2,
        category: "alkaline earth metal",
      },
      {
        number: 5,
        symbol: "B",
        name: "Boron",
        weight: 10.81,
        group: 13,
        period: 2,
        category: "metalloid",
      },
      {
        number: 6,
        symbol: "C",
        name: "Carbon",
        weight: 12.011,
        group: 14,
        period: 2,
        category: "nonmetal",
      },
      {
        number: 7,
        symbol: "N",
        name: "Nitrogen",
        weight: 14.007,
        group: 15,
        period: 2,
        category: "nonmetal",
      },
      {
        number: 8,
        symbol: "O",
        name: "Oxygen",
        weight: 15.999,
        group: 16,
        period: 2,
        category: "nonmetal",
      },
      {
        number: 9,
        symbol: "F",
        name: "Fluorine",
        weight: 18.998,
        group: 17,
        period: 2,
        category: "nonmetal",
      },
      {
        number: 10,
        symbol: "Ne",
        name: "Neon",
        weight: 20.18,
        group: 18,
        period: 2,
        category: "noble gas",
      },
      {
        number: 11,
        symbol: "Na",
        name: "Sodium",
        weight: 22.99,
        group: 1,
        period: 3,
        category: "alkali metal",
      },
      {
        number: 12,
        symbol: "Mg",
        name: "Magnesium",
        weight: 24.305,
        group: 2,
        period: 3,
        category: "alkaline earth metal",
      },
      {
        number: 13,
        symbol: "Al",
        name: "Aluminum",
        weight: 26.9815,
        group: 13,
        period: 3,
        category: "post-transition metal", // Aluminum is a post-transition metal
      },
      {
        number: 14,
        symbol: "Si",
        name: "Silicon",
        weight: 28.085,
        group: 14,
        period: 3,
        category: "metalloid",
      },
      {
        number: 15,
        symbol: "P",
        name: "Phosphorus",
        weight: 30.974,
        group: 15,
        period: 3,
        category: "nonmetal",
      },
      {
        number: 16,
        symbol: "S",
        name: "Sulfur",
        weight: 32.06,
        group: 16,
        period: 3,
        category: "nonmetal",
      },
      {
        number: 17,
        symbol: "Cl",
        name: "Chlorine",
        weight: 35.45,
        group: 17,
        period: 3,
        category: "nonmetal",
      },
      {
        number: 18,
        symbol: "Ar",
        name: "Argon",
        weight: 39.948,
        group: 18,
        period: 3,
        category: "noble gas",
      },
      {
        number: 19,
        symbol: "K",
        name: "Potassium",
        weight: 39.098,
        group: 1,
        period: 4,
        category: "alkali metal",
      },
      {
        number: 20,
        symbol: "Ca",
        name: "Calcium",
        weight: 40.078,
        group: 2,
        period: 4,
        category: "alkaline earth metal",
      },
      {
        number: 21,
        symbol: "Sc",
        name: "Scandium",
        weight: 44.956,
        group: 3,
        period: 4,
        category: "transition metal",
      },
      {
        number: 22,
        symbol: "Ti",
        name: "Titanium",
        weight: 47.867,
        group: 4,
        period: 4,
        category: "transition metal",
      },
      {
        number: 23,
        symbol: "V",
        name: "Vanadium",
        weight: 50.942,
        group: 5,
        period: 4,
        category: "transition metal",
      },
      {
        number: 24,
        symbol: "Cr",
        name: "Chromium",
        weight: 51.996,
        group: 6,
        period: 4,
        category: "transition metal",
      },
      {
        number: 25,
        symbol: "Mn",
        name: "Manganese",
        weight: 54.938,
        group: 7,
        period: 4,
        category: "transition metal",
      },
      {
        number: 26,
        symbol: "Fe",
        name: "Iron",
        weight: 55.845,
        group: 8,
        period: 4,
        category: "transition metal",
      },
      {
        number: 27,
        symbol: "Co",
        name: "Cobalt",
        weight: 58.933,
        group: 9,
        period: 4,
        category: "transition metal",
      },
      {
        number: 28,
        symbol: "Ni",
        name: "Nickel",
        weight: 58.693,
        group: 10,
        period: 4,
        category: "transition metal",
      },
      {
        number: 29,
        symbol: "Cu",
        name: "Copper",
        weight: 63.546,
        group: 11,
        period: 4,
        category: "transition metal",
      },
      {
        number: 30,
        symbol: "Zn",
        name: "Zinc",
        weight: 65.38,
        group: 12,
        period: 4,
        category: "transition metal",
      },
      {
        number: 31,
        symbol: "Ga",
        name: "Gallium",
        weight: 69.723,
        group: 13,
        period: 4,
        category: "post-transition metal",
      },
      {
        number: 32,
        symbol: "Ge",
        name: "Germanium",
        weight: 72.63,
        group: 14,
        period: 4,
        category: "metalloid",
      },
      {
        number: 33,
        symbol: "As",
        name: "Arsenic",
        weight: 74.922,
        group: 15,
        period: 4,
        category: "metalloid",
      },
      {
        number: 34,
        symbol: "Se",
        name: "Selenium",
        weight: 78.971,
        group: 16,
        period: 4,
        category: "nonmetal",
      },
      {
        number: 35,
        symbol: "Br",
        name: "Bromine",
        weight: 79.904,
        group: 17,
        period: 4,
        category: "nonmetal",
      },
      {
        number: 36,
        symbol: "Kr",
        name: "Krypton",
        weight: 83.798,
        group: 18,
        period: 4,
        category: "noble gas",
      },
      {
        number: 37,
        symbol: "Rb",
        name: "Rubidium",
        weight: 85.468,
        group: 1,
        period: 5,
        category: "alkali metal",
      },
      {
        number: 38,
        symbol: "Sr",
        name: "Strontium",
        weight: 87.62,
        group: 2,
        period: 5,
        category: "alkaline earth metal",
      },
      {
        number: 39,
        symbol: "Y",
        name: "Yttrium",
        weight: 88.906,
        group: 3,
        period: 5,
        category: "transition metal",
      },
      {
        number: 40,
        symbol: "Zr",
        name: "Zirconium",
        weight: 91.224,
        group: 4,
        period: 5,
        category: "transition metal",
      },
      {
        number: 41,
        symbol: "Nb",
        name: "Niobium",
        weight: 92.906,
        group: 5,
        period: 5,
        category: "transition metal",
      },
      {
        number: 42,
        symbol: "Mo",
        name: "Molybdenum",
        weight: 95.95,
        group: 6,
        period: 5,
        category: "transition metal",
      },
      {
        number: 43,
        symbol: "Tc",
        name: "Technetium",
        weight: 98,
        group: 7,
        period: 5,
        category: "transition metal",
      },
      {
        number: 44,
        symbol: "Ru",
        name: "Ruthenium",
        weight: 101.07,
        group: 8,
        period: 5,
        category: "transition metal",
      },
      {
        number: 45,
        symbol: "Rh",
        name: "Rhodium",
        weight: 102.91,
        group: 9,
        period: 5,
        category: "transition metal",
      },
      {
        number: 46,
        symbol: "Pd",
        name: "Palladium",
        weight: 106.42,
        group: 10,
        period: 5,
        category: "transition metal",
      },
      {
        number: 47,
        symbol: "Ag",
        name: "Silver",
        weight: 107.87,
        group: 11,
        period: 5,
        category: "transition metal",
      },
      {
        number: 48,
        symbol: "Cd",
        name: "Cadmium",
        weight: 112.41,
        group: 12,
        period: 5,
        category: "transition metal",
      },
      {
        number: 49,
        symbol: "In",
        name: "Indium",
        weight: 114.82,
        group: 13,
        period: 5,
        category: "post-transition metal",
      },
      {
        number: 50,
        symbol: "Sn",
        name: "Tin",
        weight: 118.71,
        group: 14,
        period: 5,
        category: "post-transition metal",
      },
      {
        number: 51,
        symbol: "Sb",
        name: "Antimony",
        weight: 121.76,
        group: 15,
        period: 5,
        category: "metalloid",
      },
      {
        number: 52,
        symbol: "Te",
        name: "Tellurium",
        weight: 127.6,
        group: 16,
        period: 5,
        category: "metalloid",
      },
      {
        number: 53,
        symbol: "I",
        name: "Iodine",
        weight: 126.9,
        group: 17,
        period: 5,
        category: "nonmetal",
      },
      {
        number: 54,
        symbol: "Xe",
        name: "Xenon",
        weight: 131.29,
        group: 18,
        period: 5,
        category: "noble gas",
      },
      {
        number: 55,
        symbol: "Cs",
        name: "Cesium",
        weight: 132.91,
        group: 1,
        period: 6,
        category: "alkali metal",
      },
      {
        number: 56,
        symbol: "Ba",
        name: "Barium",
        weight: 137.33,
        group: 2,
        period: 6,
        category: "alkaline earth metal",
      },
      {
        number: 57,
        symbol: "La",
        name: "Lanthanum",
        weight: 138.91,
        group: 3,
        period: 6,
        category: "lanthanide",
      },
      {
        number: 58,
        symbol: "Ce",
        name: "Cerium",
        weight: 140.12,
        group: null,
        period: 6,
        category: "lanthanide",
      },
      {
        number: 59,
        symbol: "Pr",
        name: "Praseodymium",
        weight: 140.91,
        group: null,
        period: 6,
        category: "lanthanide",
      },
      {
        number: 60,
        symbol: "Nd",
        name: "Neodymium",
        weight: 144.24,
        group: null,
        period: 6,
        category: "lanthanide",
      },
      {
        number: 61,
        symbol: "Pm",
        name: "Promethium",
        weight: 145,
        group: null,
        period: 6,
        category: "lanthanide",
      },
      {
        number: 62,
        symbol: "Sm",
        name: "Samarium",
        weight: 150.36,
        group: null,
        period: 6,
        category: "lanthanide",
      },
      {
        number: 63,
        symbol: "Eu",
        name: "Europium",
        weight: 151.96,
        group: null,
        period: 6,
        category: "lanthanide",
      },
      {
        number: 64,
        symbol: "Gd",
        name: "Gadolinium",
        weight: 157.25,
        group: null,
        period: 6,
        category: "lanthanide",
      },
      {
        number: 65,
        symbol: "Tb",
        name: "Terbium",
        weight: 158.93,
        group: null,
        period: 6,
        category: "lanthanide",
      },
      {
        number: 66,
        symbol: "Dy",
        name: "Dysprosium",
        weight: 162.5,
        group: null,
        period: 6,
        category: "lanthanide",
      },
      {
        number: 67,
        symbol: "Ho",
        name: "Holmium",
        weight: 164.93,
        group: null,
        period: 6,
        category: "lanthanide",
      },
      {
        number: 68,
        symbol: "Er",
        name: "Erbium",
        weight: 167.26,
        group: null,
        period: 6,
        category: "lanthanide",
      },
      {
        number: 69,
        symbol: "Tm",
        name: "Thulium",
        weight: 168.93,
        group: null,
        period: 6,
        category: "lanthanide",
      },
      {
        number: 70,
        symbol: "Yb",
        name: "Ytterbium",
        weight: 173.04,
        group: null,
        period: 6,
        category: "lanthanide",
      },
      {
        number: 71,
        symbol: "Lu",
        name: "Lutetium",
        weight: 174.97,
        group: 3,
        period: 6,
        category: "lanthanide",
      },
      {
        number: 72,
        symbol: "Hf",
        name: "Hafnium",
        weight: 178.49,
        group: 4,
        period: 6,
        category: "transition metal",
      },
      {
        number: 73,
        symbol: "Ta",
        name: "Tantalum",
        weight: 180.95,
        group: 5,
        period: 6,
        category: "transition metal",
      },
      {
        number: 74,
        symbol: "W",
        name: "Tungsten",
        weight: 183.84,
        group: 6,
        period: 6,
        category: "transition metal",
      },
      {
        number: 75,
        symbol: "Re",
        name: "Rhenium",
        weight: 186.21,
        group: 7,
        period: 6,
        category: "transition metal",
      },
      {
        number: 76,
        symbol: "Os",
        name: "Osmium",
        weight: 190.23,
        group: 8,
        period: 6,
        category: "transition metal",
      },
      {
        number: 77,
        symbol: "Ir",
        name: "Iridium",
        weight: 192.22,
        group: 9,
        period: 6,
        category: "transition metal",
      },
      {
        number: 78,
        symbol: "Pt",
        name: "Platinum",
        weight: 195.08,
        group: 10,
        period: 6,
        category: "transition metal",
      },
      {
        number: 79,
        symbol: "Au",
        name: "Gold",
        weight: 196.97,
        group: 11,
        period: 6,
        category: "transition metal",
      },
      {
        number: 80,
        symbol: "Hg",
        name: "Mercury",
        weight: 200.59,
        group: 12,
        period: 6,
        category: "transition metal",
      },
      {
        number: 81,
        symbol: "Tl",
        name: "Thallium",
        weight: 204.38,
        group: 13,
        period: 6,
        category: "post-transition metal",
      },
      {
        number: 82,
        symbol: "Pb",
        name: "Lead",
        weight: 207.2,
        group: 14,
        period: 6,
        category: "post-transition metal",
      },
      {
        number: 83,
        symbol: "Bi",
        name: "Bismuth",
        weight: 208.98,
        group: 15,
        period: 6,
        category: "post-transition metal",
      },
      {
        number: 84,
        symbol: "Po",
        name: "Polonium",
        weight: 209,
        group: 16,
        period: 6,
        category: "metalloid",
      },
      {
        number: 85,
        symbol: "At",
        name: "Astatine",
        weight: 210,
        group: 17,
        period: 6,
        category: "metalloid",
      },
      {
        number: 86,
        symbol: "Rn",
        name: "Radon",
        weight: 222,
        group: 18,
        period: 6,
        category: "noble gas",
      },
      {
        number: 87,
        symbol: "Fr",
        name: "Francium",
        weight: 223,
        group: 1,
        period: 7,
        category: "alkali metal",
      },
      {
        number: 88,
        symbol: "Ra",
        name: "Radium",
        weight: 226,
        group: 2,
        period: 7,
        category: "alkaline earth metal",
      },
      {
        number: 89,
        symbol: "Ac",
        name: "Actinium",
        weight: 227,
        group: 3,
        period: 7,
        category: "actinide",
      },
      {
        number: 90,
        symbol: "Th",
        name: "Thorium",
        weight: 232.04,
        group: null,
        period: 7,
        category: "actinide",
      },
      {
        number: 91,
        symbol: "Pa",
        name: "Protactinium",
        weight: 231.04,
        group: null,
        period: 7,
        category: "actinide",
      },
      {
        number: 92,
        symbol: "U",
        name: "Uranium",
        weight: 238.03,
        group: 7,
        period: 7,
        category: "actinide",
      },
      {
        number: 93,
        symbol: "Np",
        name: "Neptunium",
        weight: 237,
        group: null,
        period: 7,
        category: "actinide",
      },
      {
        number: 94,
        symbol: "Pu",
        name: "Plutonium",
        weight: 244,
        group: null,
        period: 7,
        category: "actinide",
      },
      {
        number: 95,
        symbol: "Am",
        name: "Americium",
        weight: 243,
        group: null,
        period: 7,
        category: "actinide",
      },
      {
        number: 96,
        symbol: "Cm",
        name: "Curium",
        weight: 247,
        group: null,
        period: 7,
        category: "actinide",
      },
      {
        number: 97,
        symbol: "Bk",
        name: "Berkelium",
        weight: 247,
        group: null,
        period: 7,
        category: "actinide",
      },
      {
        number: 98,
        symbol: "Cf",
        name: "Californium",
        weight: 251,
        group: null,
        period: 7,
        category: "actinide",
      },
      {
        number: 99,
        symbol: "Es",
        name: "Einsteinium",
        weight: 252,
        group: null,
        period: 7,
        category: "actinide",
      },
      {
        number: 100,
        symbol: "Fm",
        name: "Fermium",
        weight: 257,
        group: null,
        period: 7,
        category: "actinide",
      },
      {
        number: 101,
        symbol: "Md",
        name: "Mendelevium",
        weight: 258,
        group: null,
        period: 7,
        category: "actinide",
      },
      {
        number: 102,
        symbol: "No",
        name: "Nobelium",
        weight: 259,
        group: null,
        period: 7,
        category: "actinide",
      },
      {
        number: 103,
        symbol: "Lr",
        name: "Lawrencium",
        weight: 262,
        group: 3,
        period: 7,
        category: "actinide",
      },
      {
        number: 104,
        symbol: "Rf",
        name: "Rutherfordium",
        weight: 267,
        group: 4,
        period: 7,
        category: "transition metal",
      },
      {
        number: 105,
        symbol: "Db",
        name: "Dubnium",
        weight: 270,
        group: 5,
        period: 7,
        category: "transition metal",
      },
      {
        number: 106,
        symbol: "Sg",
        name: "Seaborgium",
        weight: 271,
        group: 6,
        period: 7,
        category: "transition metal",
      },
      {
        number: 107,
        symbol: "Bh",
        name: "Bohrium",
        weight: 270,
        group: 7,
        period: 7,
        category: "transition metal",
      },
      {
        number: 108,
        symbol: "Hs",
        name: "Hassium",
        weight: 277,
        group: 8,
        period: 7,
        category: "transition metal",
      },
      {
        number: 109,
        symbol: "Mt",
        name: "Meitnerium",
        weight: 278,
        group: 9,
        period: 7,
        category: "transition metal",
      },
      {
        number: 110,
        symbol: "Ds",
        name: "Darmstadtium",
        weight: 281,
        group: 10,
        period: 7,
        category: "transition metal",
      },
      {
        number: 111,
        symbol: "Rg",
        name: "Roentgenium",
        weight: 282,
        group: 11,
        period: 7,
        category: "transition metal",
      },
      {
        number: 112,
        symbol: "Cn",
        name: "Copernicium",
        weight: 285,
        group: 12,
        period: 7,
        category: "transition metal",
      },
      {
        number: 113,
        symbol: "Nh",
        name: "Nihonium",
        weight: 286,
        group: 13,
        period: 7,
        category: "unknown properties",
      },
      {
        number: 114,
        symbol: "Fl",
        name: "Flerovium",
        weight: 289,
        group: 14,
        period: 7,
        category: "unknown properties",
      },
      {
        number: 115,
        symbol: "Mc",
        name: "Moscovium",
        weight: 290,
        group: 15,
        period: 7,
        category: "unknown properties",
      },
      {
        number: 116,
        symbol: "Lv",
        name: "Livermorium",
        weight: 293,
        group: 16,
        period: 7,
        category: "unknown properties",
      },
      {
        number: 117,
        symbol: "Ts",
        name: "Tennessine",
        weight: 294,
        group: 17,
        period: 7,
        category: "metalloid",
      },
      {
        number: 118,
        symbol: "Og",
        name: "Oganesson",
        weight: 294,
        group: 18,
        period: 7,
        category: "noble gas",
      },
    ];

    const categories = {
      nonmetal: "bg-[#ffb6c1]",
      "noble gas": "bg-[#e6e6fa]",
      "alkali metal": "bg-[#ffd700]",
      "alkaline earth metal": "bg-[#ffdab9]",
      "transition metal": "bg-[#90ee90]",
      "post-transition metal": "bg-[#ffe4b5]",
      metalloid: "bg-[#d8bfd8]",
      lanthanide: "bg-[#ffcccb]",
      actinide: "bg-[#ffcccb]",
      "other metal": "bg-lime-400",
      "unknown properties": "bg-gray-400",
    };

    const periodicTable = document.getElementById("periodic-table");
    const lanthanideRow = document.getElementById("lanthanide-row");
    const actinideRow = document.getElementById("actinide-row");
    const uraniumHighlight = document.getElementById("uranium-highlight");

    function createElementDiv(element, container, col) {
      const elementDiv = document.createElement("div");
      let baseClassName = `element p-1 text-center border border-gray-600 text-xs text-black ${
        categories[element.category] || "bg-black"
      } hover:scale-125 transition-transform duration-200`;

      // Specific styling for Uranium
      if (element.symbol === "U") {
        baseClassName = `element p-1 text-center border border-gray-600 text-xs bg-[#FFBD41] text-black hover:scale-125 transition-transform duration-200`;
      }

      elementDiv.className = baseClassName;

      if (container === periodicTable) {
        elementDiv.style.gridColumn = element.group;
        elementDiv.style.gridRow = element.period;
      } else if (container === uraniumHighlight) {
        elementDiv.style.gridColumn = 1;
        elementDiv.style.gridRow = 1;
      } else {
        elementDiv.style.gridColumn = col;
      }

      elementDiv.innerHTML = `
          <div class="text-lg">${element.number}</div>
          <div class="text-xl font-bold">${element.symbol}</div>
        `;

      elementDiv.addEventListener("click", () => {
        alert(
          `Element: ${element.name}\nAtomic Number: ${element.number}\nSymbol: ${element.symbol}\nWeight: ${element.weight}`
        );
      });

      container.appendChild(elementDiv);
    }

    // Call createElementDiv for each element in the array
    elements.forEach((element) => {
      if (element.number >= 57 && element.number <= 71) {
        createElementDiv(element, lanthanideRow, element.number - 56);
      } else if (element.number >= 89 && element.number <= 103) {
        createElementDiv(element, actinideRow, element.number - 88);
      } else if (element.symbol === "U") {
        createElementDiv(element, uraniumHighlight);
      } else {
        createElementDiv(element, periodicTable);
      }
    });

    // Add lanthanides and actinides placeholders
    const lanthanidePlaceholder = {
      number: "57-71",
      symbol: "La-Lu",
      name: "Lanthanides",
      group: 3,
      period: 6,
      category: "lanthanide",
    };
    const actinidePlaceholder = {
      number: "89-103",
      symbol: "Ac-Lr",
      name: "Actinides",
      group: 3,
      period: 7,
      category: "actinide",
    };

    createElementDiv(lanthanidePlaceholder, periodicTable);
    createElementDiv(actinidePlaceholder, periodicTable);
    // GSAP animations

    gsap.from("#uranium-all-info", {
      opacity: 0,
      y: -50,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#uranium-all-info",
        start: "top 80%",
        end: "top 60%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className="px-6 md:px-20 py-10 md:pb-20 mt-[-5rem] hidden md:block">
      <section className="periodic-table-container flex flex-col items-center">
        {/* Uranium Info */}
        <div id="uranium-all-info" className="flex flex-col items-center mb-8">
          <div className="text-xs text-center uranium-info">
            <h2 className="text-xl font-bold">92</h2>
            <h2 className="text-black font-extrabold text-3xl">U</h2>
            <p className="text-xl font-base">Uranium</p>
            <p className="text-xl font-base">238.03</p>
          </div>
          <div className="text-lg">
            <p className="mt-2 text-white/80">
              Weight of 238.03 = One of the heaviest occurring elements
            </p>
          </div>
        </div>

        {/* Centering the whole periodic table */}
        <div className="flex justify-center w-full">
          <div id="periodic-table-wrapper" className="grid gap-0.5">
            {/* Periodic Table Grid */}
            <div id="periodic-table" className="grid grid-cols-18 gap-0.5">
              {/* Uranium Highlight */}
              <div id="uranium-highlight"></div>
            </div>

            {/* Lanthanide and Actinide Rows */}
            <div className="grid grid-cols-18 gap-0.5 max-w-7xl mt-5">
              <div className="col-span-3"></div>
              <div
                id="lanthanide-row"
                className="col-span-15 grid grid-cols-15 gap-0.5"
              ></div>
            </div>
            <div className="grid grid-cols-18 gap-0.5 max-w-7xl mt-0.5">
              <div className="col-span-3"></div>
              <div
                id="actinide-row"
                className="col-span-15 grid grid-cols-15 gap-0.5"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default E1PeriodicTable;
