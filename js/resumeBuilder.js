var bio = {
    "name": "Fredrik Persson",
    "age": 30,
    "role": [
        "father",
        "husband",
        "entrepreneur"
    ],
    "contacts": {
        "email": "fredrik@4bam.se",
        "mobile": "0735118388",
        "github": "malmagen",
        "twitter": "malmagen",
        "location": "stockholm"
    },
    "welcomeMessage": "lorem ipsum dolor sit amet",
    "skills": [
        "Habit design",
        "fast learner"
    ],
    "biopic": "images/WP-FP.jpg"
}


var work = {
    "jobs": [
        {
            "employer": "Klarna",
            "title": "Team leader -B2B marketing",
            "location": "Stockholm",
            "dates": "2008-2012",
            "description": "lorem ipsum dolor sit amet"
        },
        {
            "employer": "Minimarket",
            "title": "Ecommerce manager",
            "location": "Stockholm",
            "dates": "2010 - 2011",
            "description": "lorem ipsum dolor sit amet"
        }
    ]
};

var education = {
	"schools": [
	{
		"name": "Uppsala University",
		"city": "Uppsala",
		"degree": ["Masters", "BA"]

	},
	{
		"name": "University of New South Wales",
		"city": "Sydney",
		"degree": ["BA"]
	}
	],
	"onlineCourses":[
		{
			"title": ["HTML/CSS", "Javascripts Basics"],
			"school": "Udacity"

		}

	]
	}
	var projects = {
		"projects":[

		{
			"title":"Lorem ipsum",
			"dates": "Lorem ipsum",
			"description":"Lorem ipsum",
			"image":["images/fry.jpg"]
		}
		]
	}

if(bio.skills.length > 0 ){
	$("#header").append(HTMLskillsStart);
	for(var i = 0; i < bio.skills.length;i++){
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
	$("#skills").append(formattedSkills);	
	}	
}
	else{
		console.log("you need to add some skills");
	}
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

projects.display = function() {
	for(var project in projects.projects){
	
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var formattedPicture = HTMLprojectImage.replace("%data%",projects.projects[project].image[0]);

		var formattedProject = formattedTitle + formattedDates + formattedDescription;
		$(".project-entry:last").append(formattedProject);
		$(".project-entry:last").append(formattedPicture);
	}
}

education.display = function() {
	for(var project in projects.projects){
	
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var formattedPicture = HTMLprojectImage.replace("%data%",projects.projects[project].image[0]);

		var formattedProject = formattedTitle + formattedDates + formattedDescription;
		$(".project-entry:last").append(formattedProject);
		$(".project-entry:last").append(formattedPicture);
	}
}


$(document).click(function(loc){
var x = loc.pageX;
var y = loc.pageY;
logClicks(x,y);
});

function inName(full_name){
	full_name = full_name.trim().split(" ");
	full_name[1] =  full_name[1].toUpperCase();
	full_name[0] = full_name[0].slice(0,1).toUpperCase() + full_name[0].slice(1).toLowerCase();
	return full_name[0] + " " + full_name[1];
}





bio.contactDisplay = function () {
	for (contact in bio.contacts) {
		formattedContact = HTMLcontactGeneric.replace("%contact%", contact);
		formattedContact = formattedContact.replace("%data%", bio.contacts[contact]);
		$("#topContacts").append(formattedContact);
		$("#footerContacts").append(formattedContact);
	}
}


inName("Fredrik Persson");

var formattedName = HTMLheaderName.replace("%data%",bio["name"]);
var formattedRole = HTMLheaderRole.replace("%data%", "web developer");
var formattedPic = HTMLbioPic.replace("%data%",bio["biopic"]);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio["welcomeMessage"])
//var formattedMobile = HTMLmobile.replace("%data%", bio["contacts"]["mobile"]);
//var formattedContactGeneric = HTMLcontactGeneric.replace("%data%","test");
console.log(projects.projects[0].title)
$("#header").append(formattedWelcomeMsg);
$("#header").prepend(formattedPic);
bio.contactDisplay();
//contactsDisplay();
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
work.display();
$("#main").append(education.name);
$("#main").append(internationalizeButton);
projects.display();




