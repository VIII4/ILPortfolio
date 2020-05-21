//#region HTML elements

//#endregion

//#region Variables
var allProjectDetails = [];
//#endregion

//#region Objects
function ProjectDetails(name, roles, images, techs, bullets) {
  this.name = name;
  this.roles = roles;
  this.images = images;
  this.techs = techs;
  this.bullets = bullets;
}

var seniorPets = new ProjectDetails(
  // Project Name
  "Senior Pets",
  // Role
  "Frontend Developer",
  // Image file location
  {
    desktop: [
      "assets/images/coming-soon.jpg",
      "assets/images/coming-soon.jpg",
      "assets/images/coming-soon.jpg",
    ],
    mobile: [
      "assets/images/coming-soon-mob.jpg",
      "assets/images/coming-soon-mob.jpg",
      "assets/images/coming-soon-mob.jpg",
    ],
  },
  // Techs used
  ["html", "bootstrap", "mysql", "handlebars"],
  // Bullets
  [
    "CRUD blajaj an lj;k h;hkg ;k ;a ",
    "hgjljhfljhf ljf ljyf  ljf luyf l oyg ",
    "lkugljh gljhf gluyfv",
  ]
);

var loveBug = new ProjectDetails(
  // Project Name
  "LoveBug",
  // Role
  "Full Stack Developer",
  // Image file location
  {
    desktop: [
      "assets/images/coming-soon.jpg",
      "assets/images/coming-soon.jpg",
      "assets/images/coming-soon.jpg",
    ],
    mobile: [
      "assets/images/coming-soon-mob.jpg",
      "assets/images/coming-soon-mob.jpg",
      "assets/images/coming-soon-mob.jpg",
    ],
  },
  // Techs used
  ["html", "bootstrap", "mysql", "express"],
  // Bullets
  [
    "CRUD blajaj an lj;k h;hkg ;k ;a ",
    "hgjljhfljhf ljf ljyf  ljf luyf l oyg ",
    "lkugljh gljhf gluyfv",
  ]
);

var trek = new ProjectDetails(
  // Project Name
  "Trek",
  // Role
  "Frontend Developer",
  // Image file location
  {
    desktop: [
      "assets/images/coming-soon.jpg",
      "assets/images/coming-soon.jpg",
      "assets/images/coming-soon.jpg",
    ],
    mobile: [
      "assets/images/coming-soon-mob.jpg",
      "assets/images/coming-soon-mob.jpg",
      "assets/images/coming-soon-mob.jpg",
    ],
  },
  // Techs used
  ["html", "bootstrap", "javascript"],
  // Bullets
  [
    "CRUD blajaj an lj;k h;hkg ;k ;a ",
    "hgjljhfljhf ljf ljyf  ljf luyf l oyg ",
    "lkugljh gljhf gluyfv",
  ]
);

allProjectDetails.push(seniorPets, loveBug, trek);

//#endregion

//#region Functions

function slideBody(target) {
  $("html,body").animate(
    {
      scrollTop: $(target).offset().top,
    },
    "slow"
  );
}

function handleNavLinkClick() {
  event.preventDefault();
  slideBody($(this).data("target"));
}

function handleFilterClick() {
  var filter = $(this).data("filter");

  $(".project-panel").each(function () {
    var tags = $(this).data("tags").split(" ");

    if (filter === "all" || tags.includes(filter)) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
  $("#filtered-by").text(filter.toUpperCase() + " PROJECTS");
}

function handleDetailsClick() {
  //check screen size adjust for mobile
  var name = $(this).data("project");

  allProjectDetails.forEach(function (project) {
    if (name === project.name) {
      //Update modal text content
      $("#detail-name").text(project.name);
      $("#detail-role").html("Role: " + project.roles);
      // TO DO: generate bullets

      //Create Tech Icons
      for (var i = 0; i < project.techs.length; i++) {
        console.log(project.techs[i]);
        var icon =
          project.techs[i] === "html"
            ? "fab fa-html5"
            : project.techs[i] === "bootstrap"
            ? "fab fa-bootstrap"
            : project.techs[i] === "javascript"
            ? "fab fa-js-square"
            : project.techs[i] === "mysql"
            ? "icon-mysql"
            : project.techs[i] === "handlebars"
            ? "icon-handlebars-alt"
            : project.techs[i] === "sequelize"
            ? "icon-sequelize-alt"
            : project.techs[i] === "heroku"
            ? "icon-heroku"
            : project.techs[i] === "express"
            ? "icon-express"
            : "";
        icon = icon + " fa-3x text-dark mr-3";

        var $i = $("<i>").addClass(icon);
        $("#detail-tech").append($i);
      }

      var imgs;
      //Adjust images and modal for screen
      if (window.screen.width <= 400) {
        //adjust modal to md
        $(".modal-dialog").removeClass("modal-xl").addClass("modal-md");
        imgs = project.images.mobile;
      } else {
        imgs = project.images.desktop;
      }

      //Load Images
      for (var i = 0; i < imgs.length; i++) {
        $("#carousel-img-" + i).attr("src", imgs[i]);
      }

      $("#details-modal").modal("show");
      return;
    }

    //TO DO: enable modal
  });
}

function handleModalCloseEvent() {
  //Clear modal content
  $("#detail-name").empty();
  $("#detail-role").empty();
  $("#detail-tech").empty();
  $(".carousel-inner").each(function () {
    $(this).find("img").attr("src", "");
  });
  $(".modal-dialog").removeClass("modal-md").addClass("modal-xl");
}

//#endregion

//Charts
new Chart(document.getElementById("bar-chart-horizontal-1"), {
  type: "horizontalBar",
  data: {
    labels: [
      "Africa",
      "Asia",
      "Europe",
      "Latin America",
      "North America",
      "x",
      "x",
      "x",
    ],
    datasets: [
      {
        barThickness: "flex",
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
        ],
        data: [5267, 2478, 784, 770, 725, 780, 734, 433],
      },
    ],
  },
  options: {
    tooltips: { enabled: false },

    legend: { display: false },
    title: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: { display: false },
          reverse: true,
        },
      ],
      xAxes: [
        {
          ticks: { display: false },
          reverse: true,
        },
      ],
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  },
});

new Chart(document.getElementById("bar-chart-horizontal-2"), {
  type: "horizontalBar",
  data: {
    labels: [
      "Africa",
      "Asia",
      "Europe",
      "Latin America",
      "North America",
      "x",
      "x",
      "x",
    ],
    datasets: [
      {
        barThickness: "flex",
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
        ],
        data: [-5267, -2478, -784, -770, -725, -780, -734, -433],
      },
    ],
  },
  options: {
    tooltips: { enabled: false },

    legend: { display: false },
    title: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: { display: false },
          reverse: true,
        },
      ],
      xAxes: [
        {
          ticks: { display: false },
          reverse: true,
        },
      ],
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  },
});

//#region Events

$().ready(function () {
  //Nav Link clicked slide to target
  $(".nav-main").click(handleNavLinkClick);
  $(".nav-filter").click(handleFilterClick);
  $(".btn-details").click(handleDetailsClick);
  $(".btn-close").click(function () {
    $("#details-modal").modal("hide");
  });
});

$("#details-modal").on("hidden.bs.modal", function (e) {
  handleModalCloseEvent();
});

//#endregion
