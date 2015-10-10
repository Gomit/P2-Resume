
var bio = {
	"name":"Meron Goitom",
	"role":"Utvecklare",
	"welcomeMessage":"Hi and welcome to my resume\
	Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin.\
	Lorem ipsum har varit standard ända sedan 1500-talet, när en \
	okänd boksättare tog att antal bokstäver och blandade dem för att \
	göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt\
	okänd boksättare tog att antal bokstäver och blandade dem för att \
	göra ett",
	"profilePicture": "images/ProfilBild.png",
	"contacts":[{
		"Mobile":"(+46)76-2575515",
		"Email":"meron.g@live.se",
		"Github":"Gomit",
		"location": "Strandåkersgatan 5, Halmstad"
	}],
	"skills":["3D-modelering: Catia V5","Webbutveckling: HTML, CSS, JavaScript","Kundutveckling"],
}

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.profilePicture);
	var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").prepend(formattedRole).prepend(formattedName);
	$("#header").append(formattedImage,formattedwelcomeMsg,HTMLskillsStart);

	for(contact in bio.contacts) {
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].Mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].Email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts[contact].Github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);
    $("#header").append(formattedMobile,formattedEmail,formattedGitHub,formattedLocation);
    $("#footerContacts").append(formattedMobile,formattedEmail,formattedGitHub);
	};
	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};
};
bio.display();

/* Bio display function declaration */
/*
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.profilePicture);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.Mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.Email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.Github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
 
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").prepend(formattedBioPic);
    $("#header").append(formattedwelcomeMsg);
    $("#header").append(formattedMobile);
    $("#header").append(formattedEmail);
    $("#header").append(formattedGitHub);
    $("#header").append(formattedLocation);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
  */  
/*
/
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
	}
*/
 
/* Bio display function call */

var education = {
	"schools": [
	  {
		"name":"Halmstad Högskola",
		"location":"Halmstad, Sweden",
		"degree":"MBA",
		"major":["Innovation Business Management"],
		"dates":"2013-2015",
		"url":"http://hh.se"
	  },
	  {
		"name":"Halmstad Högskola",
		"location":"Halmstad, Sweden",
		"degree":"Masters",
		"major":["Business Management","Technical project Management"],
		"dates":"2012-2014",
		"url":"http://hh.se"
	  },
	  {
		"name":"Halmstad Högskola",
		"location":"Halmstad, Sweden",
		"degree":"Bachelor",
		"major":["Mechanical engineer"," Technical design"],
		"dates":"2008-2011",
		"url":"http://hh.se"
	  },
	],
	"onlineCourses" : [
	  {
		"title":"Front-End Web Development",
		"location":"Halmstad, Sweden",
		"school":"Udacity",
		"dates":"2014",
		"url":"https://www.udacity.com/course/nd001"
	  }
	]
	
};
education.display = function() {
    $("#education").append(HTMLschoolStart);
 
    for (school in education.schools) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedNameDegree = formattedSchoolName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);
 
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);
 
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);
 
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedMajor);
    }
 
    $(".education-entry:last").append(HTMLonlineClasses);
 
    for (course in education.onlineCourses) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedTitleSchool = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formattedTitleSchool);
         
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $(".education-entry:last").append(formattedDates);
    }
};
education.display();

var work = {
	"jobs": [
	  {
		"employer": "Willys Eurostop Halmstad",
		"title": "Butiksanställd",
		"location": "Halmstad, Sweden",
		"dates": "2015-02-04 - Nuvarande",
		"description":"Butiksanställd",
		"url":"https://www.willys.se/"
	  },
	  {
		"employer": "ICA Maxi Högskolan Halmstad",
		"title": "Butiksanställd",
		"location": "Högskolan Halmstad, Sweden",
		"dates": "2010-04-01 - 2012-04-10",
		"description":"Butiksanställd",
		"url":"http://www.ica.se/butiker/maxi/halmstad/maxi-ica-stormarknad-hogskolan-2308/start/"
	  },
	  {
		"employer": "Coop Konsum Landskrona",
		"title": "Butiksanställd",
		"location": "Landskrona, Sweden",
		"dates": "2009-06-55 - 2009-09-01",
		"description":"Butiksanställd",

	  },
	  {
		"employer": "Fredriksdalsteatern Helsingborg",
		"title": "Trafikövervakare",
		"location": "Fredriksdal Helsingborg, Sweden",
		"dates": "2009-06-15 - 2009-08-20",
		"description":"Trafikövervakare",
		"url":"http://www.evarydberg.se/"

	  },
	  {
		"employer": "ICA MAXI Hyllinge ",
		"title": "Butiksanställd",
		"location": "Hyllinge, Sweden",
		"dates": "2007-10-01 - 2008-08-20",
		"description":"Butiksanställd",
		"url":"http://www.ica.se/butiker/maxi/astorp/maxi-ica-stormarknad-hyllinge-11340/start/"

	  },
	  {
		"employer": "Netto Klippan",
		"title": "Butiksanställd",
		"location": "Klippan, Sweden",
		"dates": "2006-11-05 - 2007-10-01",
		"description":"Butiksanställd",
		"url":"http://www.netto.se/Pages/Start.aspx"
	  }
	]
};

	//function displayWork()
work.display = function() {
	$("#workExperience").append(HTMLworkStart);

	for (job in work.jobs) {
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#", work.jobs[job].url);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
	
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
work.display();
//displayWork();

var projects = {
	"projects": [
	  {
		"title":"Sample Project 1",
		"dates": "2012-05-05 - Nuvarande",
		"description": "Har drivit ett",
		"images":["images/fry.png"]
	  }
	]
};

projects.display = function() {
	$("#projects").append(HTMLprojectStart);
	
	for (project in projects.projects) {
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};
projects.display();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

$("#mapDiv").append(googleMap);
//initializeMap();

/* add collapse class to sections */
$('#workExperience, #projects, #education').addClass('collapse');

/* toggle collapse class when sections clicked*/
$('#workExperience').click(function() {
  $('#workExperience').toggleClass('collapse');
});
 
$('#projects').click(function() {
  $('#projects').toggleClass('collapse');
});
 
$('#education').click(function() {
  $('#education').toggleClass('collapse');
});


