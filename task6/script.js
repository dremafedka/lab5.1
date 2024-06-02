const medicines = [
  { name: "Noshpa", price: 170 },
  { name: "Analgin", price: 55 },
  { name: "Quanil", price: 310 },
  { name: "Alphacholine", price: 390 },
];

const applyDiscount = (medicines) => {
  return medicines.map((medicine, index) => {
    const discountPrice = medicine.price > 300 ? medicine.price * 0.7 : medicine.price;
    return {
      id: index + 1,
      name: medicine.name,
      price: discountPrice.toFixed(2)
    };
  });
};

const discountedMedicines = applyDiscount(medicines);

console.log(discountedMedicines);

const medicinesList = document.getElementById("medicines-list");
medicinesList.innerHTML = discountedMedicines.map(medicine => `
    <div>
        <p>ID: ${medicine.id}</p>
        <p>Name: ${medicine.name}</p>
        <p>Price: ${medicine.price} грн</p>
    </div>
`).join('');
