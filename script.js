// =============================
// Typing Animation (Name Included)
// =============================
const typingText = "Kunal Jhindal — AI & ML Enthusiast | Python Developer | Data Analyst";
let index = 0;
function typeEffect() {
  if (index < typingText.length) {
    document.getElementById("typing").textContent += typingText.charAt(index);
    index++;
    setTimeout(typeEffect, 60);
  }
}
window.onload = typeEffect;

// =============================
// Section Navigation
// =============================
const navButtons = document.querySelectorAll(".nav button");
const sections = document.querySelectorAll(".section");

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    navButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const target = btn.dataset.section;
    sections.forEach((sec) => {
      sec.classList.remove("active");
      if (sec.id === target) sec.classList.add("active");
    });
  });
});

// =============================
// Theme Toggle (Dark/Light Mode)
// =============================
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light")
    ? "🌞 Light Mode"
    : "🌙 Dark Mode";
});

// =============================
// Manual Project Loader (JSON File)
// =============================
const repoContainer = document.getElementById("repoContainer");
const searchInput = document.getElementById("search");
let projectData = [];

async function loadProjects() {
  try {
    const res = await fetch("projects.json");
    projectData = await res.json();
    displayManualProjects(projectData);
  } catch (error) {
    repoContainer.innerHTML = `<p style="color: var(--accent);">⚠️ Unable to load projects.json</p>`;
  }
}

function displayManualProjects(projects) {
  repoContainer.innerHTML = "";
  projects.forEach((proj) => {
    const div = document.createElement("div");
    div.classList.add("repo");

    const tagsHTML = proj.tags
      .map((tag) => `<span class='tag'>${tag}</span>`)
      .join(" ");

    div.innerHTML = `
      <h4>${proj.name}</h4>
      <p class="repo-tags">${tagsHTML}</p>
      <p class="repo-desc">${proj.shortDescription}</p>
      <a href="${proj.link}" target="_blank">🔗 GitHub Repo</a>
    `;

    repoContainer.appendChild(div);
  });
}


searchInput.addEventListener("input", (e) => {
  const filtered = projectData.filter((proj) =>
    proj.name.toLowerCase().includes(e.target.value.toLowerCase())
  );
  displayManualProjects(filtered);
});

loadProjects();

// =============================
// Image Pop-up
// =============================
const avatar = document.querySelector(".avatar");
const imgPopup = document.createElement("div");

imgPopup.id = "imgPopup";
imgPopup.innerHTML = `
  <div class="img-popup-content">
    <img src="profile.jpeg" alt="Profile Enlarged" />
  </div>
`;

document.body.appendChild(imgPopup);

avatar.addEventListener("click", () => {
  imgPopup.style.display = "flex";
});

imgPopup.addEventListener("click", (e) => {
  if (e.target.id === "imgPopup") imgPopup.style.display = "none";
});

// =============================
// Fade-in on Scroll
// =============================
const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px",
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach((fader) => appearOnScroll.observe(fader));
// =============================
// Learning Repository Loader
// =============================

const learningContainer =
  document.getElementById("learningContainer");

const learningSearch =
  document.getElementById("learningSearch");

let learningData = [];

async function loadLearningRepos() {

  try {

    const res = await fetch("learning.json");

    learningData = await res.json();

    displayLearningRepos(learningData);

  } catch (error) {

    learningContainer.innerHTML =
      `<p style="color: var(--accent);">
        ⚠️ Unable to load learning.json
      </p>`;
  }
}

function displayLearningRepos(repos) {

  learningContainer.innerHTML = "";

  repos.forEach((repo) => {

    const div = document.createElement("div");

    div.classList.add("repo");

    const tagsHTML = repo.tags
      .map((tag) =>
        `<span class='tag'>${tag}</span>`)
      .join(" ");

    div.innerHTML = `
      <h4>${repo.name}</h4>

      <p class="repo-tags">
        ${tagsHTML}
      </p>

      <p class="repo-desc">
        ${repo.shortDescription}
      </p>

      <a href="${repo.link}" target="_blank">
        🔗 GitHub Repo
      </a>
    `;

    learningContainer.appendChild(div);
  });
}

learningSearch.addEventListener("input", (e) => {

  const filtered = learningData.filter((repo) =>
    repo.name
      .toLowerCase()
      .includes(e.target.value.toLowerCase())
  );

  displayLearningRepos(filtered);
});

loadLearningRepos();
const toggleBtn = document.getElementById("toggleCerts");

if (toggleBtn) {

  toggleBtn.addEventListener("click", () => {

    const hiddenCards =
      document.querySelectorAll(".hidden-cert");

    hiddenCards.forEach((card) => {

      if (card.style.display === "block") {
        card.style.display = "none";
        toggleBtn.textContent =
          "View All Certifications";

      } else {
        card.style.display = "block";
        toggleBtn.textContent =
          "Show Less";
      }

    });

  });

}const workshopBtn =
  document.getElementById("toggleWorkshops");

if (workshopBtn) {

  workshopBtn.addEventListener("click", () => {

    const hiddenWorkshops =
      document.querySelectorAll(".hidden-workshop");

    hiddenWorkshops.forEach((card) => {

      if (card.style.display === "block") {

        card.style.display = "none";

        workshopBtn.textContent =
          "View All Workshops";

      } else {

        card.style.display = "block";

        workshopBtn.textContent =
          "Show Less";
      }

    });

  });

}