const destinations = [
  {
    name: "Paris",
    image: "images/paris.jpg",
    description: "City of Lights and Love"
  },
  {
    name: "Bali",
    image: "images/bali.jpg",
    description: "Tropical Paradise"
  },
  {
    name: "Tokyo",
    image: "images/tokyo.jpg",
    description: "Futuristic meets Tradition"
  },
  {
    name: "Cape Town",
    image: "images/capetown.jpg",
    description: "Mountains and Oceans"
  }
];

const destinationList = document.getElementById('destinationList');
const searchInput = document.getElementById('searchInput');

function displayDestinations(list) {
  destinationList.innerHTML = '';
  list.forEach(dest => {
    destinationList.innerHTML += `
      <div class="card">
        <img src="${dest.image}" alt="${dest.name}" />
        <h3>${dest.name}</h3>
        <p>${dest.description}</p>
      </div>
    `;
  });
}

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = destinations.filter(dest => 
    dest.name.toLowerCase().includes(query) || 
    dest.description.toLowerCase().includes(query)
  );
  displayDestinations(filtered);
});

// Initial load
displayDestinations(destinations);

// Password visibility toggle
const togglePassword = document.querySelector("#togglePassword");
const passwordField = document.querySelector("#password");

if (togglePassword) {
  togglePassword.addEventListener("click", function () {
    // Toggle the type attribute
    const type = passwordField.type === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
    // Toggle the eye icon
    this.classList.toggle("bi-eye");
  });
}

// Form validation for Login & Signup
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    const email = document.querySelector("input[type='email']").value;
    const password = document.querySelector("input[type='password']").value;

    // Simple email and password validation
    if (!email || !password) {
      e.preventDefault();
      alert("Please fill in both email and password.");
      return;
    }

    // Check if email is valid
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      e.preventDefault();
      alert("Please enter a valid email.");
      return;
    }

    // Further validation can be added here (e.g., password strength)
  });
}

