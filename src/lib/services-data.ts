export type Service = {
  name: string;
  price: string;
  duration: string;
  description: string;
};

export const services: { category: string; items: Service[] }[] = [
  {
    category: "Hair",
    items: [
      { name: "Signature Haircut", price: "PKR 1,500", duration: "45 min", description: "Consultation, shampoo, precision cut and finish styling." },
      { name: "Kids Haircut", price: "PKR 800", duration: "30 min", description: "Gentle, patient cuts for our youngest guests (under 12)." },
      { name: "Hair Wash & Blow Dry", price: "PKR 700", duration: "25 min", description: "Deep cleanse with premium products and a fresh blow dry." },
      { name: "Keratin Treatment", price: "From PKR 12,000", duration: "2–3 hrs", description: "Smoothing keratin therapy for shine, softness, and frizz control." },
    ],
  },
  {
    category: "Beard & Shave",
    items: [
      { name: "Beard Trim & Shape", price: "PKR 800", duration: "30 min", description: "Sculpted lines, clean edges and a finishing oil massage." },
      { name: "Royal Hot Towel Shave", price: "PKR 1,200", duration: "40 min", description: "Hot towels, badger-brush lather and a single-blade straight razor." },
      { name: "Beard Color", price: "From PKR 1,500", duration: "45 min", description: "Natural-looking color to cover grays and refresh your tone." },
    ],
  },
  {
    category: "Face & Skin",
    items: [
      { name: "Classic Facial", price: "PKR 2,000", duration: "45 min", description: "Cleanse, exfoliate, steam, mask and relaxing facial massage." },
      { name: "Whitening Facial", price: "PKR 3,500", duration: "60 min", description: "Brightening treatment for an even, radiant complexion." },
      { name: "Head & Shoulder Massage", price: "PKR 900", duration: "20 min", description: "Therapeutic pressure-point massage to release tension." },
    ],
  },
];
