const table = [
  {
    brand: "Shopify",
    description: "Description for Shopify",
    images: [
      "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg",
      "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg",
    ],
    categories: ["E-commerce"],
    tags: ["#Shopify", "#Ecommerce"],
    nextMeeting: "30 min",
  },
  {
    brand: "MailChimp",
    description: "Description for MailChimp",
    images: [
      "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg",
      "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg",
    ],
    categories: ["Email Marketing"],
    tags: ["#MailChimp", "#Marketing"],
    nextMeeting: "60 min",
  },
  {
    brand: "Google",
    description: "Description for Google",
    images: [
      "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg",
      "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg",
    ],
    categories: ["Search Engine"],
    tags: ["#Google", "#Tech"],
    nextMeeting: "90 min",
  },
  {
    brand: "Disney",
    description: "Description for Disney",
    images: [
      "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg",
      "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg",
    ],
    categories: ["Entertainment", "Media"],
    tags: ["#Disney", "#Movies"],
    nextMeeting: "120 min",
  },
  {
    brand: "Microsoft",
    description: "Description for Microsoft",
    images: [
      "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg",
      "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg",
    ],
    categories: ["Technology", "Software"],
    tags: ["#Microsoft", "#Software"],
    nextMeeting: "150 min",
  },
  {
    brand: "Meta",
    description: "Description for Meta",
    images: [
      "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg",
      "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg",
    ],
    categories: ["Social Media"],
    tags: ["#Meta", "#Social"],
    nextMeeting: "180 min",
  },
  {
    brand: "PayPal",
    description: "Description for PayPal",
    images: [
      "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg",
      "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg",
    ],
    categories: ["Payment Gateway"],
    tags: ["#PayPal", "#Finance"],
    nextMeeting: "210 min",
  },
  {
    brand: "Incision",
    description: "Description for Incision",
    images: [
      "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg",
      "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg",
    ],
    categories: ["Healthcare", "Surgery"],
    tags: ["#Incision", "#Health"],
    nextMeeting: "240 min",
  },
  {
    brand: "Envato",
    description: "Description for Envato",
    images: [
      "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg",
      "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg",
    ],
    categories: ["Technology", "Marketplace"],
    tags: ["#Envato", "#Market"],
    nextMeeting: "270 min",
  },
];

// Function to generate and append rows
function addRows(data) {
  const tbody = document.getElementById("dataBody");
  tbody.innerHTML = ""; // Clear existing rows

  data.forEach((item) => {
    const tr = document.createElement("tr");

    // Loop through object properties and create td elements
    Object.entries(item).forEach(([key, value]) => {
      const td = document.createElement("td");
      td.classList.add("px-6", "py-4", "whitespace-no-wrap", "text-sm");

      // If value is an array (for categories, tags), create divs for each item
      if (key === "categories" || key === "tags") {
        const div = document.createElement("div");
        div.classList.add("flex", "gap-1");
        value.forEach((item) => {
          const span = document.createElement("span");
          span.textContent = item;
          span.classList.add(
            "whitespace-no-wrap",
            "text-xs",
            "px-2",
            "rounded-md",
            "bg-green-200"
          );
          div.appendChild(span);
        });
        td.appendChild(div);
      }
      // If the key is 'images', create img tags
      else if (key === "images") {
        const div = document.createElement("div");
        div.classList.add("flex");
        value.forEach((src) => {
          const img = document.createElement("img");
          img.src = src;
          img.alt = "Image";
          img.classList.add("h-6", "w-6", "rounded-full", "object-cover");
          div.appendChild(img);
        });
        td.appendChild(div);
      } else {
        td.textContent = value;
      }

      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });
}
function searchTable(query) {
  const filterRows = table.filter((item) =>
    item.brand.toLowerCase().includes(query.toLowerCase())
  );
  addRows(filterRows);
}
addRows(table);
const inputEl = document.getElementById("input");
inputEl.addEventListener("input", (event) => {
  const val = inputEl.value.trim();
  searchTable(val);
});

const product = document.getElementById("product");
const productLinks = document.getElementById("product-links");

product.addEventListener("click", () => {
  if (productLinks.classList.contains("flex")) {
    productLinks.classList.remove("flex");
    productLinks.classList.add("hidden");
  } else {
    productLinks.classList.remove("hidden");
    productLinks.classList.add("flex");
  }
});
