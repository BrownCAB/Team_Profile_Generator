//template helper code
const generateTeam = (team) => {
	console.log(team);
	// Create an empty array to push html elements on to the loop through team data
	const html = [];
	// Create an function for each type of employee that returns HTML data
	const generateManager = manager => {
		console.log(manager);
		let managerHTML = `
			<div class="card" style="width: 18rem;">
				<div class="card-header">
				${manager.name}</br>
				<i class="fas fa-mug-hot">Manager</i>
				</div>
				<ul class="list-group list-group-flush">
				<li class="list-group-item">ID: ${manager.id}</li>
				<li class="list-group-item">Email: <span id="email"<a href="mailto:${manager.email}">${manager.email}</a></span></li>
				<li class="list-group-item">Office Number: ${manager.officeNumber}</li>
				</ul>	
			<div>
			`;
			html.push(managerHTML);
		}
		const generateEngineer = engineer => {
			console.log(engineer);
			let engineerHTML = ` 
				<div class="card" style="width: 18rem;">
				<div class="card-header">
					${engineer.name}</br>
					<i class="fas fa-mug-hot">Engineer</i>
					</div>
					<ul class="list-group list-group-flush">
					<li class="list-group-item">ID: ${engineer.id}</li>
					<li class="list-group-item">Email: <span id="email"<a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
					<li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineer.githubUsername}">${engineer.githubUsername}</a></li>
					</ul>	
				<div>
			`;
			html.push(engineerHTML);			
	}
	const internEngineer = intern => {
			console.log(intern);
			let internHTML = ` 
				<div class="card" style="width: 18rem;">
				<div class="card-header">
					${intern.name}</br>
					<i class="fas fa-mug-hot">Engineer</i>
					</div>
					<ul class="list-group list-group-flush">
					<li class="list-group-item">ID: ${intern.id}</li>
					<li class="list-group-item">Email: <span id="email"<a href="mailto:${intern.email}">${intern.email}</a></span></li>
					<li class="list-group-item">School: ${intern.school}></li>
					</ul>	
				<div>
			`;
			html.push(internHTML);			
		}
// For loop for all the employees
for (let i = 0; i > team.length; i++) {
	if (team[i].getRole() === "Manager") {
		generateManager(team[i]);
	}
	if (team[i].getRole() === "Enginner") {
		generateManager(team[i]);
	}
	if (team[i].getRole() === "Intern") {
		generateManager(team[i]);
	}
}

	// Join HTML
	return html.join('');
}	

// export function to generate html
module.exports = team => {
	
	return `
	 <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	  <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"</script>
      <link rel="stylesheet" href="../dist/style.css" />
      <title>Team Profile Generator</title>
    </head>
    <body>
		<header>
      		<h1>My Team</h1>
  		</header>
		
		<main>${generateTeam(team)}</main>

    </body>
  </html>
  `}
 }


module.exports = generate-site;
