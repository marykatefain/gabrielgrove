var jobs = document.querySelectorAll(".job");

for (var i = 0; i < jobs.length; i++) {
  var job = jobs[i];
  job.querySelector(".details-button").addEventListener("click", function() {
    this.parentElement.classList.toggle("mobile-expand");
  });
}
