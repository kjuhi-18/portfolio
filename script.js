// =============================
// Typing Animation (Name Included)
// =============================
const typingText =
  "Kunal Jhindal — AI & ML Enthusiast | Python Developer | Data Analyst";

let index = 0;

function typeEffect() {
  if (index < typingText.length) {
    document.getElementById("typing").textContent +=
      typingText.charAt(index);
    index++;
    setTimeout(typeEffect, 60);
  }
}

window.onload = typeEffect;

// =============================
// Section Navigation
// =============================
const navButtons =
  document.querySelectorAll(".nav button");

const sections =
  document.querySelectorAll(".section");

navButtons.forEach((btn) => {

  btn.addEventListener("click", () => {

    navButtons.forEach((b) =>
      b.classList.remove("active")
    );

    btn.classList.add("active");

    const target = btn.dataset.section;

    sections.forEach((sec) => {

      sec.classList.remove("active");

      if (sec.id === target) {
        sec.classList.add("active");
      }

    });

  });

});

// =============================
// Theme Toggle
// =============================
const themeToggle =
  document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light");

  themeToggle.textContent =
    document.body.classList.contains("light")
      ? "🌞 Light Mode"
      : "🌙 Dark Mode";

});

// =============================
// Project Hub Search
// =============================
const hubSearch =
  document.getElementById("hubSearch");

// =============================
// Projects Loader
// =============================
const repoContainer =
  document.getElementById("repoContainer");

let projectData = [];

async function loadProjects() {

  try {

    const res =
      await fetch("projects.json");

    projectData =
      await res.json();

    displayManualProjects(projectData);

  } catch (error) {

    repoContainer.innerHTML =
      `<p style="color: var(--accent);">
        ⚠️ Unable to load projects.json
      </p>`;
  }

}

function displayManualProjects(projects) {

  repoContainer.innerHTML = "";

  projects.forEach((proj) => {

    const div =
      document.createElement("div");

    div.classList.add("repo");

    const tagsHTML =
      proj.tags
        .map(
          (tag) =>
            `<span class="tag">${tag}</span>`
        )
        .join(" ");

    div.innerHTML = `
      <h4>${proj.name}</h4>

      <p class="repo-tags">
        ${tagsHTML}
      </p>

      <p class="repo-desc">
        ${proj.shortDescription}
      </p>

      <a href="${proj.link}" target="_blank">
        🔗 GitHub Repo
      </a>
    `;

    repoContainer.appendChild(div);

  });

}

// =============================
// Learning Repositories Loader
// =============================
const learningContainer =
  document.getElementById("learningContainer");

let learningData = [];

async function loadLearningRepos() {

  try {

    const res =
      await fetch("learning.json");

    learningData =
      await res.json();

    displayLearningRepos(
      learningData
    );

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

    const div =
      document.createElement("div");

    div.classList.add("repo");

    const tagsHTML =
      repo.tags
        .map(
          (tag) =>
            `<span class="tag">${tag}</span>`
        )
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

// =============================
// Unified Project Hub Search
// =============================
if (hubSearch) {

  hubSearch.addEventListener("input", (e) => {

    const query =
      e.target.value.toLowerCase().trim();

    const filteredProjects =
      projectData.filter((proj) =>

        proj.name
          .toLowerCase()
          .includes(query)

        ||

        proj.tags
          .join(" ")
          .toLowerCase()
          .includes(query)

      );

    const filteredLearning =
      learningData.filter((repo) =>

        repo.name
          .toLowerCase()
          .includes(query)

        ||

        repo.tags
          .join(" ")
          .toLowerCase()
          .includes(query)

      );

    displayManualProjects(filteredProjects);
    displayLearningRepos(filteredLearning);

  });

}
// =============================
// Image Popup
// =============================
const avatar =
  document.querySelector(".avatar");

const imgPopup =
  document.createElement("div");

imgPopup.id = "imgPopup";

imgPopup.innerHTML = `
  <div class="img-popup-content">
    <img
      src="profile.jpeg"
      alt="Profile Enlarged"
    />
  </div>
`;

document.body.appendChild(
  imgPopup
);

avatar.addEventListener(
  "click",
  () => {
    imgPopup.style.display =
      "flex";
  }
);

imgPopup.addEventListener(
  "click",
  (e) => {
    if (e.target.id === "imgPopup") {
      imgPopup.style.display =
        "none";
    }
  }
);

// =============================
// Fade In Animation
// =============================
const faders =
  document.querySelectorAll(
    ".fade-in"
  );

const appearOptions = {
  threshold: 0.2,
  rootMargin:
    "0px 0px -50px 0px",
};

const appearOnScroll =
  new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting)
          return;

        entry.target.classList.add(
          "visible"
        );

        observer.unobserve(
          entry.target
        );

      });

    },
    appearOptions
  );

faders.forEach((fader) =>
  appearOnScroll.observe(fader)
);

// =============================
// Certifications Toggle
// =============================

const toggleBtn = document.getElementById("toggleCerts");

if (toggleBtn) {
    const hiddenCards = document.querySelectorAll(".hidden-cert");
    let expanded = false;

    toggleBtn.addEventListener("click", () => {
        expanded = !expanded;

        hiddenCards.forEach(card => {
            card.classList.toggle("show-cert", expanded);
        });

        toggleBtn.textContent = expanded
            ? "Show Less"
            : "View All Certifications";
    });
}
// =============================
// Workshops Toggle
// =============================
const workshopBtn = document.getElementById("toggleWorkshops");

if (workshopBtn) {
    const hiddenWorkshops = document.querySelectorAll(".hidden-workshop");
    let expanded = false;

    workshopBtn.addEventListener("click", () => {
        expanded = !expanded;

        hiddenWorkshops.forEach(card => {
            card.classList.toggle("show-workshop", expanded);
        });

        workshopBtn.textContent = expanded
            ? "Show Less"
            : "View All Workshops";
    });
}
// =============================
// Initial Load
// =============================
loadProjects();
loadLearningRepos();