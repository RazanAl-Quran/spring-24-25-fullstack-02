<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="Let's take a closer look at Sara portfolio, which showcases her journey and 
    highlights the experiences and skills she has gained along the way.">
    <meta name="keywords" content="Sara,portfolio,Web Developer,HTML, CSS, JavaScript">
    <meta name="author" content="Sara Abdo">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" rel="stylesheet"
        type="text/css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <link rel="stylesheet" href="../CSS/style.css">

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"
        defer></script>

    <script src="../JS/script.js" defer></script>

    <title>Sara's Portfolio</title>
</head>

<body>
    <header id="top">
        <div class="flex">
            <img class="headerImage" src="../Assets/images/PersonImage.jpg">
            <div>
                <h1> <span style="color: #1b1a22;">Sara</span> Here..</h1>
                <h3><span id="position"> Full-stack </span> Developer </h3>
            </div>

        </div>
    </header>
    <nav>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experiences">Experiences</a>
        <a href="#certificate">Certificates</a>
        <a href="#" onclick="buyCoffee()">
            Buy Me Coffee
            <img style="width: .8rem;" src="../Assets/images/cup.png" />
        </a>
        <a href="CallMyServices.html">Call My Service</a>
    </nav>
    <main>
        <section id="gallery">
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src="../Assets/images/1.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="../Assets/images/2.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../Assets/images/3.jpg" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>
        <section id="about" class="aboutSection">
            <h2 class="sectionTitle">About</h2>
            <div class="flex">
                <div class="aboutText">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi iste quis eveniet sit
                        illo dicta.
                        Eius
                        est, adipisci veritatis, vitae at optio provident sunt mollitia recusandae dignissimos
                        itaque fugiat
                        magni?
                    </p>
                    <br>
                    <br>
                    <p>
                        Dignissimos ab modi corrupti, nemo provident sunt vitae fugit aliquam odit asperiores
                        temporibus quo
                        tempora mollitia possimus ducimus. Provident, ex assumenda ut ab a consequuntur
                        voluptate aspernatur
                        quam unde labore.
                    </p>
                    <br>
                    <br>
                    <p>
                        Commodi dicta, vero cumque iure sed rem quidem, sapiente quo pariatur eligendi quos
                        consequatur nam
                        eaque modi magnam minima hic rerum illum sunt non accusamus delectus perferendis itaque
                        aliquid.
                        Expedita!
                    </p>
                    <br>
                    <br>
                    <p>
                        Ullam est praesentium sunt velit iure, hic fuga porro voluptas et, eveniet doloremque.
                        Doloremque
                        quae
                        minima consequatur voluptates nobis? Praesentium ipsa ab vero perferendis laborum
                        veritatis cum
                        necessitatibus numquam accusantium!

                    </p>
                    <br>
                    <br>
                </div>

                <img class="headerImage" src="../Assets/images/PersonImage.jpg">
            </div>
        </section>
        <section id="projects" class="projects">
            <h2 class="sectionTitle">Projects</h2>

            <button><a href="add-project.php">Add New Project</a> </button>

            <div class="flex">
                <div class="card">
                    <video controls src="../Assets/videos/Project1.mp4"></video>
                    <a href="http://google.com" target="_blank">Design Project</a>
                </div>

                <div class="card">
                    <video controls src="../Assets/videos/Project2.mp4" width="200" height="115"></video>
                    <a href="http://google.com" target="_blank">Robotic Project </a>
                </div>

                <div class="card">
                    <video controls src="../Assets/videos/Project1.mp4"></video>
                    <a href="http://google.com" target="_blank">Design Project</a>
                </div>
            </div>

        </section>
        <section id="skills" class="skillsSection">
            <h2 class="sectionTitle">Skills</h2>
            <div class="flex">
                <ul>
                    <li onmouseleave="hideDescription()" onmouseenter="showDescription('Design-Skill')">
                        Design
                        <p id="Design-Desc" class="description my-tooltip" style="display: none;">
                            Skilled in crafting modern, responsive, and user-friendly designs using tools like Figma,
                            Adobe XD,
                            and CSS3. I balance aesthetics with functionality to deliver seamless user experiences.
                        </p>
                    </li>
                    <li>Desktop Applications Developement</li>
                    <li>Web Applications Developement</li>
                    <li onmouseleave="hideDescription()" onmouseenter="showDescription('Managing-Skill')">
                        Managing Tasks
                        <p id="Managing-Desc" class="description my-tooltip" style="display: none;">
                            Strong project management skills, adept at coordinating teams, meeting deadlines, and
                            ensuring
                            efficient workflows. I excel at prioritizing tasks to deliver high-quality results on time
                        </p>
                    </li>
                    <li>Good Team Player</li>
                </ul>
                <img src="../Assets/images/icons-skill.png" alt="skills">
            </div>
        </section>
        <section id="experiences" class="experiences">
            <h2 class="sectionTitle">Experiences</h2>
            <ol>
                <li><span class="listIcon">&#10122;</span> IT Background </li>
                <li><span class="listIcon">&#10123;</span> IEEE Workshops </li>
                <li><span class="listIcon">&#10124;</span> Voulnteering </li>
                <li><span class="listIcon">&#10125;</span> BCS in CS.</li>
                <li><span class="listIcon">&#10126;</span> ACM Battles</li>
            </ol>
        </section>
        <section id="certificate" class="certificateSection">
            <h2 class="sectionTitle">Certificates</h2>
            <table>
                <tr>
                    <th>Certificate</th>
                    <th>Photos</th>
                    <th>Institute</th>
                    <th>Activites</th>
                </tr>
                <tr>
                    <td>BCS</td>
                    <td>
                        <img src="../Assets/images/empty.png" alt="No Photo">
                        <img src="../Assets/images/empty.png">
                    </td>
                    <td>YU</td>
                    <td>
                        <ul>
                            <li>Activity1</li>
                            <li>Activity2</li>
                            <li>Activity3</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>CCNA</td>
                    <td>
                        <img src="../Assets/images/empty.png" alt="No Photo">
                    </td>
                    <td colspan="2">Cisco</td>
                </tr>
            </table>
        </section>
        <section>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src="../Assets/images/1.jpg" class="d-block w-50" alt="...">
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="../Assets/images/2.jpg" class="d-block w-50" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../Assets/images/3.jpg" class="d-block w-50" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../Assets/images/3.jpg" class="d-block w-50" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../Assets/images/3.jpg" class="d-block w-50" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    </main>
    <div>
        <a class="up-btn" href="#top"><i class="fa fa-solid fa-arrow-up"></i></a>
    </div>
    <footer>
        <div class="contact">
            <span>Contact Me: </span>
            <a href="https://mail.google.com/"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://mail.google.com/"><i class="fa-brands fa-google"></i></a>
            <a href="https://mail.google.com/"><i class="fa-brands fa-twitter"></i></a>
            <a href="https://mail.google.com/"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
        <h6>Sara Abdo &copy;Copyright 2024 All Rights Reserved</h6>
    </footer>
</body>

</html>