"use strict";

let quizes = [];

//static quiz datas in local host
if (!localStorage.getItem("quizes"))
	localStorage.setItem(
		"quizes",
		JSON.stringify([
		{
				id: 1,
				title: "Programming Languages Quiz",
				description: "Test your knowledge of programming languages and their features. Good luck!",
				count: 8,
				timeout: "10",
				questions: [
					{ id: 1, title: "JavaScript?", options: ["Java", "C++", "Python", "JavaScript"], correct: "4" },
					{ id: 2, title: "Python Libraries?", options: ["TensorFlow", "Django", "Ruby on Rails", "Express.js"], correct: "1" },
					{ id: 3, title: "Version Control System?", options: ["Git", "SVN", "Mercurial", "Apache"], correct: "1" },
					{ id: 4, title: "Web Development Framework?", options: ["React", "Angular", "Vue.js", "Laravel"], correct: "3" },
					{ id: 5, title: "Database Management System?", options: ["MySQL", "MongoDB", "Redis", "PostgreSQL"], correct: "2" },
					{ id: 6, title: "Frontend Framework?", options: ["Bootstrap", "Spring", "Flask", "Node.js"], correct: "1" },
					{ id: 7, title: "Cloud Computing Platform?", options: ["AWS", "Azure", "Google Cloud", "Heroku"], correct: "3" },
					{ id: 8, title: "Programming Paradigm?", options: ["Object-Oriented", "Functional", "Procedural", "Scripting"], correct: "2" }
				],
			},
			{
				id: 2,
				title: "Cybersecurity Concepts Quiz",
				description: "Test your knowledge of cybersecurity concepts and best practices. Stay secure!",
				count: 6,
				timeout: "8",
				questions: [
					{ id: 1, title: "SSL/TLS?", options: ["Secure Socket Layer", "Transport Layer Security", "Simple Security Layer", "Super Secure Language"], correct: "2" },
					{ id: 2, title: "Firewall Function?", options: ["Packet Filtering", "Data Encryption", "Device Authentication", "User Authorization"], correct: "1" },
					{ id: 3, title: "Common Password Mistake?", options: ["Using Strong Passwords", "Sharing Passwords", "Regularly Changing Passwords", "Using Two-Factor Authentication"], correct: "2" },
					{ id: 4, title: "Phishing Attack?", options: ["Denial of Service", "Malware Injection", "Social Engineering", "Network Intrusion"], correct: "3" },
					{ id: 5, title: "Vulnerability Assessment?", options: ["Penetration Testing", "Code Review", "Security Auditing", "Risk Analysis"], correct: "4" },
					{ id: 6, title: "Security Protocol?", options: ["SSH", "SMTP", "HTTP", "FTP"], correct: "1" }
				],
			},
			{
				id: 3,
				title: "DevOps Practices Quiz",
				description: "Explore your understanding of DevOps practices and principles. Happy coding!",
				count: 7,
				timeout: "9",
				questions: [
					{ id: 1, title: "Continuous Integration Tool?", options: ["Jenkins", "Ansible", "Docker", "Kubernetes"], correct: "1" },
					{ id: 2, title: "Infrastructure as Code (IaC)?", options: ["Chef", "Puppet", "Terraform", "Vagrant"], correct: "3" },
					{ id: 3, title: "Version Control in DevOps?", options: ["Git", "SVN", "Mercurial", "Perforce"], correct: "1" },
					{ id: 4, title: "Deployment Automation?", options: ["Capistrano", "Fabric", "Octopus Deploy", "Bamboo"], correct: "3" },
					{ id: 5, title: "Container Orchestration?", options: ["Docker Swarm", "Mesos", "ECS", "OpenShift"], correct: "4" },
					{ id: 6, title: "Monitoring and Logging?", options: ["Prometheus", "Grafana", "ELK Stack", "Splunk"], correct: "3" },
					{ id: 7, title: "DevOps Culture?", options: ["Silos", "Collaboration", "Waterfall", "Isolation"], correct: "2" }
				],
			},
			{
				id: 4,
				title: "Capital of Countries Quiz",
				description: "in this quiz you have to answer which capital is for which countries. good luck ;)",
				count: 10,
				timeout: "8",
				questions: [
					{ id: 1, title: "Oslo ?", options: ["Norway", "Kuwait", "Uruguay", "Montenegro"], correct: "1" },
					{ id: 2, title: "Brazil ?", options: ["Moroni", "Brasilia", "Thimphu", "Rio"], correct: "2" },
					{ id: 3, title: "France ?", options: ["Berlin", "Baghdad", "Helsinki", "Paris"], correct: "4" },
					{ id: 4, title: "Germany ?", options: ["Athens", "Berlin", "Jakarta", "Rome"], correct: "2" },
					{ id: 5, title: "Japan ?", options: ["Tokyo", "Tegucigalpa", "Kuwait ", "Bishkek"], correct: "1" },
					{ id: 6, title: "Lebanon ?", options: ["Kingston", "Riga", "Beirut", "Jakarta"], correct: "3" },
					{ id: 7, title: "Philippines ?", options: ["Lima", "Riyadh", "Oslo", "Manila"], correct: "4" },
					{ id: 8, title: "South Korea ?", options: ["Madrid", "Seoul", "Bangkok", "Mogadishu"], correct: "2" },
					{ id: 9, title: "Turkey ?", options: ["Istanbul", "Ankara", "London", "Lome"], correct: "2" },
					{ id: 10, title: "Vietnam ?", options: ["Hanoi", "Kiev", "Tunis", "Cardiff"], correct: "1" },
				],
			},
			{
				id: 5,
				title: "Most winners of European football league",
				description: "European Football: Top Division Winners - \nCan you choose the club who has won each European football division the most times?",
				count: 5,
				timeout: "6",
				questions: [
					{ id: 1, title: "England Premier League ?", options: ["Liverpool", "Manchester City", "Arsenal", "Manchester United"], correct: "4" },
					{ id: 2, title: "Spain La Liga ?", options: ["Barcelona", "Real Madrid", "Sevilla", "Valencia"], correct: "2" },
					{ id: 3, title: "Germany Bundesliga", options: ["Borussia Dortmund", "Bayer Leverkusen", "RB Leipzig", "Bayern Munich"], correct: "4" },
					{ id: 4, title: "Italy Serie A ?", options: ["Juventus", "Roma", "AC Milan", "Napoli"], correct: "1" },
					{ id: 5, title: "Portugal Primeira Liga ?", options: ["Sporting Lisbon", "Porto", "Braga", "Benfica"], correct: "4" },
				],
			},
			{
				id: 6,
				title: "Related Words",
				description: "find which one is not related with the questions word.",
				count: 5,
				timeout: "7",
				questions: [
					{ id: 1, title: "word ?", options: ["parol", "job", "letter", "term"], correct: "2" },
					{ id: 2, title: "work ?", options: ["duty", "operations", "job", "great"], correct: "4" },
					{ id: 3, title: "hand ?", options: ["foot", "eye", "pen", "toes"], correct: "3" },
					{ id: 4, title: "lion ?", options: ["cat", "chicken", "horse", "whale"], correct: "2" },
					{ id: 5, title: "pencil", options: ["dog", "book", "class", "teacher"], correct: "1" },
				],
			},
		])
	);

quizes = JSON.parse(localStorage.getItem("quizes"));

class QuizList {
	constructor(quizContainer) {
		this.quizContainer = quizContainer;
		this.generateQuizes();
	}
	generateQuizes() {
		let iconSrc = "images/test-icon.png";
		let quizTitle;

		quizes.forEach((quiz) => {
			quizTitle = quiz.title;
			quizContainer.insertAdjacentHTML(
				"beforeend",
				`
            <div class="quiz-item">
				<div>
					<img class="quiz-item-icon" src=${iconSrc} alt="test icon" />
					<p class="quiz-item-title">${quizTitle}</p>
				</div>
				<a href="quiz.html#${quiz.id}"><button>Take quiz</button></a>
			</div>
            `
			);
		});
	}
}

let quizContainer = document.querySelector("#quiz-list");
let mainList = new QuizList(quizContainer);
