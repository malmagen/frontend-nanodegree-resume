//bio object containing all data which will displayed in the header of the site
var bio = {
    "name": "Fredrik Persson",
    "age": 30,
    "role": [
        "father",
        "husband",
        "learner",
        "entrepreneur"
    ],
    "contacts": {
        "email": "fredrik@4bam.se",
        "mobile": "0735118388",
        "github": "malmagen",
        "twitter": "malmagen",
        "location": "Stockholm"
    },
    "welcomeMessage": "Thanks for checking out my online résumé",
    "skills": [
        "Habit design",
        "HTML/CSS",
        "Javascript"
    ],
    "biopic": "images/WP-FP.jpg"
}

//the work object contains info about where I worked and where will be displayed at the work section
var work = {
    "jobs": [
    	{
            "employer": "4 Body and Mind",
            "title": "Cofounder",
            "location": "Stockholm, Sweden",
            "dates": "2012-",
            "description": "Started 4 Body and Mind an online coaching service making it easier to live a healthy life and improving life satisfaction."
        }
        ,
        {
            "employer": "Minimarket",
            "title": "Ecommerce manager, Sweden",
            "location": "Stockholm",
            "dates": "2011 - 2012",
            "description": "Project leader for setting up Ecommerce for the fashion brand Minimarket, after release responsible for the all the work with Ecommerce"
        },
        {
            "employer": "Klarna",
            "title": "Team leader -B2B marketing",
            "location": "Stockholm, Sweden",
            "dates": "2010-2011",
            "description": "Worked close to the sales team to increase leads, make it easier to become a customer. Started to set up a B2B marketing team."
        }
    ]
};
//education object contains the education I have taken both offline and online
var education = {
	"schools": [
	{
		"name": "Uppsala University",
		"location": "Uppsala, Sweden",
		"degree": "Masters",
		"major": ["Engineering"],
		"dates": "2004-2010",
		"url": "www.uu.se"


	},
	{
		"name": "University of New South Wales",
		"location": "Sydney, Australia",
		"degree": "BA",
		"major": ["Finance", "test"],
		"dates": "2007-2008",
		"url": "www.unsw.edu.au"
	}
	],
	"onlineCourses":[
		{
			"title": ["A Beginner's Guide to Irrational Behavior"],
			"school": "Coursera: Duke University",
			"date": "2014",
			"url":"https://www.coursera.org/course/behavioralecon"
		},
		{
			"title": ["Intro to HTML and CSS"],
			"school": "Udacity",
			"date": "2014",
			"url":"https://www.udacity.com/course/ud304"
		},
		{
			"title": ["How to Use Git and GitHub"],
			"school": "Udacity",
			"date": "2014",
			"url":"https://www.udacity.com/course/ud775"
		},
		{
			"title": ["JavaScript Basics"],
			"school": "Udacity",
			"date": "2014",
			"url":"https://www.udacity.com/course/ud804"
		}

	]
	}
	//project object contains work I have done in various classes.
	var projects = {
		"projects":[

		{
			"title":"Mockup to webisite",
			"dates": "2014",
			"description":"In our first project at Udacity's front-end nanodegree we were given a mockup of a site and our task was to make the site as similar as we could with HTML and CSS.",
			"image":["images/project_1.png"]
		},
			{
			"title":"Interactive Resume",
			"dates": "2014",
			"description":"Second project at Udacity, where I developed this interactive resume.",
			"image":["images/project_2.png"]
		}
		]
	}


//when called will replace the data in the helper.js file with my bio data and add the information to the site
var model = {}
var octopus = {
	init: function(){

	}

}


var view ={
	render_bio: function(){
		var skills;

		/*Display Bio */
		$("#header").append(formattedWelcomeMsg);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").prepend(formattedPic);
		$("#header").append(HTMLskillsStart);

		for(var i = 0; i < bio.skills.length;i++){
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkills);
	}
	/*Display job */
	},


	render_work: function(){
		for(var job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

			var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedLocation+formattedDates+formattedDescription;

			$(".work-entry:last").append(formattedEmployerTitle);
		}
	},

	render_projects: function(){
		for(var project in projects.projects){

		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var formattedPicture = "";
		for(var i = 0; i < projects.projects[project].image.length;i++){
			var formattedPicture = formattedPicture + HTMLprojectImage.replace("%data%",projects.projects[project].image[i]);
	    }
		var formattedProject = formattedTitle + formattedDates + formattedDescription;
		$(".project-entry:last").append(formattedProject);
		$(".project-entry:last").append(formattedPicture);
	}

	},

	render_education: function(){
		$("#education").append(HTMLschoolStart);

		for(var school in education.schools){

				var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
				var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
				var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
				var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
				var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

				var formattedSchool = formattedschoolName + formattedschoolDegree + formattedschoolDates + formattedschoolLocation + formattedschoolMajor;
				$(".education-entry:last").append(formattedSchool);
			}

		$(".education-entry:last").append(HTMLonlineClasses);
		for(var onlineclass in education.onlineCourses){

			var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineclass].title);
			var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineclass].school);
			var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineclass].date);
			var formattedonlineURL =  HTMLonlineURL.replace("%data%", education.onlineCourses[onlineclass].url);
			var formattedOnline = formattedonlineTitle+formattedonlineSchool+formattedonlineDates+formattedonlineURL;
			$(".education-entry:last").append(formattedOnline);
	}
	}

}




bio.display = function(){
var formattedName = HTMLheaderName.replace("%data%",bio["name"]);
var formattedRole = HTMLheaderRole.replace("%data%", "web developer");
var formattedPic = HTMLbioPic.replace("%data%",bio["biopic"]);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio["welcomeMessage"])


//loop through all the contacts I have added in the bio object, and add it to the site
for (contact in bio.contacts) {
	formattedContact = HTMLcontactGeneric.replace("%contact%", contact);
	formattedContact = formattedContact.replace("%data%", bio.contacts[contact]);
	$("#topContacts").append(formattedContact);
	$("#footerContacts").append(formattedContact);
}

$("#header").append(formattedWelcomeMsg);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedPic);
$("#header").append(HTMLskillsStart);
//loop through the skills that I have added and add it to the site
for(var i = 0; i < bio.skills.length;i++){

    var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
	$("#skills").append(formattedSkills);
	}


}

//when called this function loop through the jobs array in the work object and display the data to the site.
work.display = function (){
for(var job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

	var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedLocation+formattedDates+formattedDescription;

	$(".work-entry:last").append(formattedEmployerTitle);
	}
}
//loop through the projects array in the project object and display the data to the site.
projects.display = function() {
	for(var project in projects.projects){

		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var formattedPicture = "";
		for(var i = 0; i < projects.projects[project].image.length;i++){
			var formattedPicture = formattedPicture + HTMLprojectImage.replace("%data%",projects.projects[project].image[i]);
	    }
		var formattedProject = formattedTitle + formattedDates + formattedDescription;
		$(".project-entry:last").append(formattedProject);
		$(".project-entry:last").append(formattedPicture);
	}
}
//loop through the school array and onlineCourses array and display to the site.
education.display = function() {
	$("#education").append(HTMLschoolStart);
	for(var school in education.schools){

			var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

			var formattedSchool = formattedschoolName + formattedschoolDegree + formattedschoolDates + formattedschoolLocation + formattedschoolMajor;
			$(".education-entry:last").append(formattedSchool);
		}

	$(".education-entry:last").append(HTMLonlineClasses);
	for(var onlineclass in education.onlineCourses){

		var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineclass].title);
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineclass].school);
		var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineclass].date);
		var formattedonlineURL =  HTMLonlineURL.replace("%data%", education.onlineCourses[onlineclass].url);
		var formattedOnline = formattedonlineTitle+formattedonlineSchool+formattedonlineDates+formattedonlineURL;
		$(".education-entry:last").append(formattedOnline);
	}

}

//console.log all clicks made on the site and show x and y location of the click
$(document).click(function(loc){
var x = loc.pageX;
var y = loc.pageY;
logClicks(x,y);
});

//calls the function in the bio object, which will display the data in the header of the site.
bio.display();
//calls the function in the work object, which will display the work section on the site.

work.display();
//calls the function in the project object, which will display the project section on the site.
projects.display();
//calls the function in the education object, which will display the education section on the site.
education.display();

//add a google map to the site, which take the location parameters and display it on the site.
//$("#mapDiv").append(googleMap);




