//Projects we are proud of page

//Show More Button
function ShowMoreBtn() {
  const projectsContainer = document.querySelector(
    ".projects-we-are-proudOf .container .projects"
  );
  const showMoreBtn = document.querySelector(
    ".projects-we-are-proudOf .container .btn"
  );
  const projectsPerLoad = 6;
  const allProjects = Array.from(
    projectsContainer.querySelectorAll(".project")
  );

  //Hide extra projects when the page loads
  allProjects.forEach((project, index) => {
    if (index >= projectsPerLoad) {
      project.classList.remove("show");
    } else {
      project.classList.add("show");
    }
  });
  //Hide the button if there aren't extra projects
  if (allProjects.length <= projectsPerLoad) {
    showMoreBtn.style.display = "none";
  } else {
    showMoreBtn.textContent = `عرض المزيد`;
  }
  //When clicking the "Show More" button
  showMoreBtn.addEventListener("click", function () {
    const isExpanded = projectsContainer.classList.contains("expanded");

    if (!isExpanded) {
      //Show additional projects
      allProjects.forEach((project) => project.classList.add("show"));
      projectsContainer.classList.add("expanded");
      showMoreBtn.textContent = "عرض أقل";
      //Scroll to the first newly revealed project
      const firstNewProject = allProjects[projectsPerLoad];
      if (firstNewProject) {
        setTimeout(() => {
          firstNewProject.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 100);
      }
    } else {
      //Hide extra projects
      allProjects.forEach((project, index) => {
        if (index >= projectsPerLoad) {
          project.classList.remove("show");
        }
      });
      projectsContainer.classList.remove("expanded");
      showMoreBtn.textContent = `عرض المزيد`;
      //Scroll to the last visible project after hiding extra ones
      const lastVisibleProject = allProjects[projectsPerLoad - 1];
      if (lastVisibleProject) {
        setTimeout(() => {
          lastVisibleProject.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 100);
      }
    }
  });
}
ShowMoreBtn();
