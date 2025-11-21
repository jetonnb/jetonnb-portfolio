const movies = [
  {
    title: "Inception",
    image: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    link: "movies/inception.html",
    category: "Sci-Fi",
  },
  {
    title: "Don't Move",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSuulQxdDMiYMGlJrQwvnY-iwz1eDKFV3a5O7ODvx829TZEUhS0",
    link: "movies/dontmove.html",
    category: "Thriller",
  },
  {
    title: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    link: "movies/darkknight.html",
    category: "Action",
  },
  {
    title: "Interstellar",
    image: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
    link: "movies/interstellar.html",
    category: "Sci-Fi",
  },
  {
    title: "Parasite",
    image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    link: "movies/parasite.html",
    category: "Drama",
  },
  {
    title: "Avengers: Endgame",
    image: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
    link: "movies/endgame.html",
    category: "Action",
  },
  {
    title: "The Matrix",
    image: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY679_.jpg",
    link: "movies/matrix.html",
    category: "Sci-Fi",
  },
  {
    title: "The Conjuring",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSZIf9inQYUUsJX2yMcgBXSul6hpa3Bnh24j0Ll18CfXXVEtCvN2v3mKLD0JbPVYlaLk9he",
    link: "movies/theconjuring.html",
    category: "Horror",
  },

  {
    title: "Blade Runner 2049",
    image: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    link: "movies/bladerunner2049.html",
    category: "Sci-Fi",
  },
  {
    title: "Alien",
    image: "https://image.tmdb.org/t/p/w500/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
    link: "movies/alien.html",
    category: "Sci-Fi",
  },
  {
    title: "Tenet",
    image: "https://image.tmdb.org/t/p/w500/aq4Pwv5Xeuvj6HZKtxyd23e6bE9.jpg",
    link: "movies/tenet.html",
    category: "Thriller",
  },
  {
    title: "A Quiet Place",
    image: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
    link: "movies/aquietplace.html",
    category: "Horror",
  },
  {
    title: "John Wick",
    image: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    link: "movies/johnwick.html",
    category: "Action",
  },
  {
    title: "Mad Max: Fury Road",
    image: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
    link: "movies/madmaxfuryroad.html",
    category: "Action",
  },
  {
    title: "Logan",
    image: "https://image.tmdb.org/t/p/w500/gGBu0hKw9BGddG8RkRAMX7B6NDB.jpg",
    link: "movies/logan.html",
    category: "Action",
  },
  {
    title: "Get Out",
    image: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
    link: "movies/getout.html",
    category: "Thriller",
  },
  {
    title: "Hereditary",
    image: "https://image.tmdb.org/t/p/w500/p9fmuz2Oj3HtEJEqbIwkFGUhVXD.jpg",
    link: "movies/hereditary.html",
    category: "Horror",
  },
  {
    title: "The Prestige",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTEGghoyRA-B0VgsVtToZA3K0bNYpwQch_sn8VVLiD0GIAT0sKV",
    link: "movies/prestige.html",
    category: "Drama",
  },
  {
    title: "Ex Machina",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQul8MydbD2U1u7Gxyaf-fGEbH4K674SSGMhoz0p2cOXzQslbAX",
    link: "movies/exmachina.html",
    category: "Sci-Fi",
  },
  {
    title: "Joker",
    image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    link: "movies/joker.html",
    category: "Drama",
  },
  {
    title: "The Sixth Sense",
    image: "https://image.tmdb.org/t/p/w500/fIssD3w3SvIhPPmVo4WMgZDVLID.jpg",
    link: "movies/sixthsense.html",
    category: "Thriller",
  },
  {
    title: "The Revenant",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTEe6r3Xi7SbIJRRhSftJJj4UwsMEpolHFFYNelBS-_qf9zBfxr",
    link: "movies/revenant.html",
    category: "Action",
  },
  {
    title: "Bird Box",
    image: "https://image.tmdb.org/t/p/w500/rGfGfgL2pEPCfhIvqHXieXFn7gp.jpg",
    link: "movies/birdbox.html",
    category: "Thriller",
  },
  {
    title: "Insidious",
    image: "https://image.tmdb.org/t/p/w500/tmlDFIUpGRKiuWm9Ixc6CYDk4y0.jpg",
    link: "movies/insidious.html",
    category: "Horror",
  },
  {
    title: "Arrival",
    image: "https://image.tmdb.org/t/p/w500/4Iu5f2nv7huqvuYkmZvSPOtbFjs.jpg",
    link: "movies/arrival.html",
    category: "Sci-Fi",
  },
  {
    title: "The Grand Budapest Hotel",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGRtr_gCn-Ffq0Iy22mDi9yRAfI52eCjJ9fjVD51fAgRaMCSc6",
    link: "movies/grandbudapesthotel.html",
    category: "Comedy",
  },
  {
    title: "Superbad",
    image: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg",
    link: "movies/superbad.html",
    category: "Comedy",
  },
  {
    title: "The Hangover",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRWuhUtUEH-YWbeUfEEkJ3FmgrM9wJfo0DBtdR_tqvLNPXn7KNu",
    link: "movies/hangover.html",
    category: "Comedy",
  },
  {
    title: "Step Brothers",
    image: "https://image.tmdb.org/t/p/w500/7ABsaBkO1jA2psC8Hy4IDhkID4h.jpg",
    link: "movies/stepbrothers.html",
    category: "Comedy",
  },
  {
    title: "Split",
    image: "https://image.tmdb.org/t/p/w500/lli31lYTFpvxVBeFHWoe5PMfW5s.jpg",
    link: "movies/split.html",
    category: "Thriller",
  },
  {
    title: "The Witch",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTtXS8N2qhH5D2FFLN9jylxcxMGkRYbrPosctjNizm5qbXllqtY",
    link: "movies/thewitch.html",
    category: "Horror",
  },
  {
    title: "The Social Network",
    image: "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
    link: "movies/socialnetwork.html",
    category: "Drama",
  },
];
let currentPage = 1;
const itemsPerPage = 12; // Cards per page
let filteredMovies = [...movies]; // Default to all movies
const moviesContainer = document.getElementById("movies-container");
const paginationContainer = document.getElementById("pagination");
const categoryTitle = document.getElementById("category-title");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

// Function to display movies with pagination
function displayMovies(movieList) {
  moviesContainer.innerHTML = "";
  if (movieList.length === 0) {
    moviesContainer.innerHTML = `<h4 class="text-center">Sorry, we couldn’t find anything</h4>`;
    return;
  }

  // Pagination logic
  const totalPages = Math.ceil(movieList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const moviesToDisplay = movieList.slice(startIndex, endIndex);

  moviesToDisplay.forEach((movie) => {
    const movieCard = `
      <div class="col-md-4 col-lg-3">
        <a href="${movie.link}" class="text-decoration-none">
          <div class="card h-100">
            <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
            <div class="card-body">
              <h5 class="card-title">${movie.title}</h5>
            </div>
          </div>
        </a>
      </div>
    `;
    moviesContainer.innerHTML += movieCard;
  });

  // Display pagination controls
  displayPagination(totalPages);
}

// Function to display pagination controls
function displayPagination(totalPages) {
  paginationContainer.innerHTML = ""; // Clear existing pagination

  if (totalPages > 1) {
    // Create pagination buttons
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.textContent = i;
      pageButton.classList.add("page-button", "btn", "btn-primary", "m-1");

      pageButton.addEventListener("click", () => {
        currentPage = i; // Set the current page
        localStorage.setItem("currentPage", currentPage); // Store the current page in localStorage
        displayMovies(filteredMovies); // Re-display the movies with the new page
        window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top

        // Update the active page button
        updateActivePaginationButton(i);
      });

      paginationContainer.appendChild(pageButton);
    }
  }

  // Update the active class for the pagination
  updateActivePaginationButton(currentPage);
}

// Function to update active pagination button
function updateActivePaginationButton(page) {
  const buttons = paginationContainer.querySelectorAll("button");

  // Remove active class from all buttons
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // Add active class to the correct page button
  const activeButton = buttons[page - 1];
  if (activeButton) {
    activeButton.classList.add("active");
  }
}

// Filter movies by category
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const category = e.target.dataset.category.trim().toLowerCase();
    categoryTitle.textContent = `${e.target.innerText} Movies`;

    // Filter movies by category
    filteredMovies =
      category === "all"
        ? [...movies]
        : movies.filter((movie) => movie.category.toLowerCase() === category);

    // Reset to first page when category is changed
    currentPage = 1;

    // Display filtered movies and pagination
    displayMovies(filteredMovies);
  });
});

// Search functionality
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchQuery = searchInput.value.trim().toLowerCase();

  // If the search input is empty, do nothing and return early
  if (!searchQuery) {
    return;
  }

  filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery)
  );

  currentPage = 1; // Reset to the first page when searching

  // Update category title during search
  categoryTitle.textContent = ""; // Clear category title during search

  displayMovies(filteredMovies); // Display search results with pagination
});

// Store scroll position before leaving the page
window.addEventListener("beforeunload", () => {
  localStorage.setItem("scrollPosition", window.scrollY); // Store the scroll position in localStorage
});

document.addEventListener("DOMContentLoaded", () => {
  // Retrieve the stored current page or default to 1
  currentPage = parseInt(localStorage.getItem("currentPage")) || 1;

  // Display the movies based on the current page
  displayMovies(filteredMovies);

  // Retrieve and restore the scroll position if available
  const savedScrollPosition =
    parseInt(localStorage.getItem("scrollPosition")) || 0;
  window.scrollTo({ top: savedScrollPosition, behavior: "smooth" });

  // Clear stored data after restoring
  localStorage.removeItem("currentPage");
  localStorage.removeItem("scrollPosition");
});

function goToFirstPage() {
  localStorage.setItem("currentPage", currentPage); // Store current page
  localStorage.setItem("scrollPosition", window.scrollY); // Store scroll position
  window.location.href = "index.html"; // Redirect to homepage
}

// Function to reset pagination and display the default state
function resetPagination() {
  currentPage = 1; // Reset to the first page
  filteredMovies = [...movies]; // Reset to all movies
  categoryTitle.textContent = "Trending Movies"; // Reset category title
  searchInput.value = ""; // Clear the search input
  localStorage.removeItem("currentPage"); // Clear the stored page in localStorage
  localStorage.removeItem("scrollPosition"); // Clear the scroll position in localStorage
  displayMovies(filteredMovies); // Display all movies
  window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top
}

// Handle contact form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Process the data (e.g., send it to a server)
    console.log("Contact Form Submitted:", { name, email, message });

    // Show success message
    const successMessage = document.getElementById("contact-success-message");
    successMessage.style.display = "block";

    // Optionally reset the form after submission
    this.reset();
  });

// Handle newsletter form submission
document
  .getElementById("newsletter-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;

    // Process the data (e.g., send it to a server)
    console.log("Newsletter Form Submitted:", { email });

    // Show success message
    const successMessage = document.getElementById(
      "newsletter-success-message"
    );
    successMessage.style.display = "block";

    // Optionally reset the form after submission
    this.reset();
  });
