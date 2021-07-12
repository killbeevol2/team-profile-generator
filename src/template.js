const template = (employees) => {
  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel ="stylesheet">
    <title>Team Profile</title>
  </head>
  <body style = "font-family: raleway, sans-serif">
    <header class>
      <h1 class="w-100 bg-dark p-5 text-center text-warning"><strong>My Team</strong></h1>
    </header>
    <main class = "container d-flex flex-row flex-wrap justify-content-evenly">
``

    </main>
  </body>
</html>

`;
};

const manager = (data) => {
  return `
<div class="card my-3" style="width: 30%">
      <div class="card-body bg-primary">
        <h5 class="card-title text-light text-center"><strong>${data.getName()}</strong></h5>
        <h6 class="card-subtitle mb-2 text-light text-center"><i class="fas fa-star px-1"></i>${data.getRole()}</h6>
            <ul class="list-group">
                <li class="list-group-item">ID : ${data.getId()}</li>
                <li class="list-group-item">Email: ${data.getEmail()} </li>
                <li class="list-group-item">Office number: ${
                  data.officeNumber
                }</li>
            </ul>
        </div>
    </div>
    `;
};

const engineer = (data) => {
  return `
    <div class="card my-3" style="width: 30%">
          <div class="card-body bg-primary">
            <h5 class="card-title text-light text-center"><strong>${data.getName()}</strong></h5>
            <h6 class="card-subtitle mb-2 text-light text-center"><i class="fas fa-star-half-alt"></i>${data.getRole()}</h6>
            <ul class="list-group">
                <li class="list-group-item">ID : ${data.getId()}</li>
                <li class="list-group-item">Email : ${data.getEmail()} </li>
                <li class="list-group-item">GitHub : ${data.getGithub()}</li>
            </ul>
          </div>
        </div>
    `;
};

const intern = (data) => {
  return `
        <div class="card my-3" style="width: 30%">
            <div class="card-body bg-primary">
                <h5 class="card-title text-light text-center"><strong>${data.getName()}</strong></h5>
                <h6 class="card-subtitle mb-2 text-light text-center"><i class="far fa-star"></i>${data.getRole()}</h6>
                <ul class="list-group">
                    <li class="list-group-item">ID : ${data.getId()}</li>
                    <li class="list-group-item">Email : ${data.getEmail()} </li>
                    <li class="list-group-item">School Name: ${data.getSchool()}</li>
                </ul>
            </div>
        </div>
    `;
};

export default template;
