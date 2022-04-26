// Modal Elements
const projectTitle = document.querySelector("#projectTitle");
const projectDescription = document.querySelector("#projectDescription");
const projectDeployed = document.querySelector("#projectDeployed");
const projectRepo = document.querySelector("#projectRepo");
const projectImage = document.querySelector("#projectImage");

// Launch Prtoject Modal
const projectModal = new bootstrap.Modal(
  document.getElementById("projectModal")
);

//  Show the project modal and populate data
const openModal = (e) => {
  const selectedProject = e.currentTarget.dataset;
  // Update modal elements
  projectTitle.textContent = selectedProject.title;
  projectDescription.textContent = selectedProject.description;
  projectDeployed.href = selectedProject.deployed;
  projectRepo.href = selectedProject.repo;
  projectImage.src = selectedProject.image;
  // Show the modal
  projectModal.show();
};

// Add event listener to projects
document.querySelectorAll(".example").forEach((project) => {
  project.addEventListener("click", openModal);
});
