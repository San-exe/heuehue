/* ================= SOUNDS ================= */

const clickSound = new Audio("assets/Sounds/click.wav");
const errorSound = new Audio("assets/Sounds/erro.wav");
const startupSound = new Audio("assets/Sounds/windows-xp-startup.wav");
const openSound = new Audio("assets/Sounds/woosh.wav");

clickSound.preload = "auto";
errorSound.preload = "auto";
startupSound.preload = "auto";
openSound.preload = "auto";

clickSound.volume = 0.4;
openSound.volume = 0.5;
errorSound.volume = 0.6;
startupSound.volume = 0.5;

function play(sound) {
    sound.currentTime = 0;
    sound.play().catch(() => {});
}

/* ================= WINDOW SYSTEM ================= */

function openWindow(section) {

    play(clickSound);
    play(openSound);

    const windowBox = document.getElementById("window");
    windowBox.style.display = "block";
    windowBox.classList.remove("maximized");

    let title = "";
    let content = "";

    /* ================= ABOUT ================= */
    if (section === "about") {
    stopAutoSlide();
    windowBox.classList.add("maximized");   

    title = "About Me";
  content = `
<div class="about-container">

  <!-- TOP SECTION -->
  <div class="about-top">

    <!-- LEFT: IMAGE -->
    <div class="about-img">
      <img src="assets/me.jpg">
    </div>

    <!-- CENTER: TEXT -->
    <div class="about-info">
      <h1>Sanskar Jadhav</h1>
      <p class="role">Frontend Developer</p>

      <p class="about-text">
        Passionate frontend developer who enjoys building interactive UI like this Windows XP system.
        I focus on clean design, smooth UX, and creative interfaces.
      </p>

      <p>System: SanskarOS v1.0</p>
      <p>Status: Active :)</p>
      <p>Location: India</p>
    </div>

    <!-- RIGHT SIDE (STACKED) -->
    <div class="about-right">

      <!-- QUICK INFO -->
      <div class="about-side">
        <h3>Quick Info</h3>

        <p><b>Experience:</b> Beginner</p>
        <p><b>Focus:</b> Frontend Development</p>
        <p><b>Learning:</b> DSA & Web</p>

        <h4 style="margin-top:15px;">Interests</h4>
        <ul>
          <li>UI Design</li>
          <li>Creative Interfaces</li>
          <li>Building Projects</li>
        </ul>
      </div>

      <!-- SYSTEM LOGS -->
      <div class="about-side">
        <p>> Initializing SanskarOS...</p>
        <p>> Loading modules...</p>
        <p>> UI Engine: Active</p>
        <p>> Portfolio.exe running</p>
        <p>> Status: All systems operational ✔</p>
      </div>

    </div>

  </div>

  <!-- BOTTOM SECTION -->
  <div class="about-bottom">

    <!-- LEFT EMPTY SPACE -->
    <div class="about-left"></div>

    <!-- RIGHT: SKILLS -->
    <div class="about-skills">

      <h3>> Loading skills...</h3>

      <div class="skill-bar">
        <span>HTML / CSS</span>
        <div class="bar"><div style="width: 90%"></div></div>
      </div>

      <div class="skill-bar">
        <span>JavaScript</span>
        <div class="bar"><div style="width: 75%"></div></div>
      </div>

      <div class="skill-bar">
        <span>Java</span>
        <div class="bar"><div style="width: 70%"></div></div>
      </div>

      <div class="skill-bar">
        <span>Python</span>
        <div class="bar"><div style="width: 65%"></div></div>
      </div>

    </div>

  </div>

</div>
`;
}
else if (section === "skills") {
    stopAutoSlide();

    title = "Skills";

    content = `
<div class="skills-grid">

    <div class="skill-card">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg">
        <p>HTML</p>
    </div>

    <div class="skill-card">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg">
        <p>CSS</p>
    </div>

    <div class="skill-card">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg">
        <p>JavaScript</p>
    </div>

    <div class="skill-card">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg">
        <p>Java</p>
    </div>

    <div class="skill-card">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg">
        <p>Python</p>
    </div>

    <div class="skill-card">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg">
        <p>SQL</p>
    </div>

    <div class="skill-card">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg">
        <p>Git</p>
    </div>

    <div class="skill-card">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg">
        <p>GitHub</p>
    </div>

    <div class="skill-card">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg">
        <p>Figma</p>
    </div>

    <!-- NEW (your request) -->

    <div class="skill-card">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg">
        <p>C</p>
    </div>

    <div class="skill-card">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg">
        <p>C++</p>
    </div>

    <div class="skill-card">
        <img src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png">
        <p>DSA</p>
    </div>

    <!-- REAL extras based on your work -->

    <div class="skill-card">
        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png">
        <p>Responsive</p>
    </div>

    <div class="skill-card">
        <img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png">
        <p>UI/UX</p>
    </div>

    <div class="skill-card">
        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png">
        <p>Debugging</p>
    </div>

</div>
`;
}
/*help*/
    else if (section === "help") {
         stopAutoSlide();

            title = "Help & Support";
    content = `
    <div class="help-container">
        <h2> Welcome to My Portfolio</h2>
        <p>This portfolio is designed like a Windows XP desktop. Here's how to use it:</p>

        <h3> Navigation</h3>
        <ul>
            <li>Click icons on the left to open different sections</li>
            <li>Each section opens like a window</li>
            <li>You can drag windows around (if enabled)</li>
        </ul>

        <h3> Features</h3>
        <ul>
            <li><b>About</b> → Who I am</li>
            <li><b>Projects</b> → My work</li>
            <li><b>Skills</b> → What I know</li>
        </ul>

        <h3> Tips</h3>
        <ul>
            <li>Try opening multiple windows</li>
            <li>Explore everything </li>
        </ul>

        <p style="margin-top:20px;">Made by <b>Sanskar Jadhav :3 </b></p>
    </div>
    `;
}


    /* ================= PROJECTS ================= */
    else if (section === "projects") {

        title = "Projects";
        windowBox.classList.add("maximized");

        content = `
        <div class="projects-app">

            <div class="projects-slider" id="slider">

                <div class="project-card">
                    <div class="left">
                        <h2>Hospital Management System</h2>
                        <p>Web-based system to manage patient records.</p>
                        <p>Developed a full-stack web application to manage hospital operations including patient records, appointments, and doctor scheduling.</p>
                        <p>Implemented CRUD operations and database integration for efficient data handling.</p>
                        <p><b>Tools:</b> HTML, CSS, JavaScript, SQL</p>
                    </div>
                    <div class="right">
                        <img src="assets/hospital.png">
                    </div>
                </div>

                <div class="project-card">
                    <div class="left">
                        <h2>Customer Segmentation</h2>
                        <p>K-Means clustering project.</p>
                        <p>Built a machine learning model using K-Means clustering to segment customers based on purchasing behavior.</p>
                        <p>Performed data preprocessing, visualization, and clustering analysis.</p>
                        <p><b>Tools:</b> Python, Pandas, Matplotlib, Scikit-learn</p>
                    </div>
                    <div class="right">
                        <img src="assets/ml.png">
                    </div>
                </div>

                <div class="project-card">
                    <div class="left">
                        <h2>Flappy Bird</h2>
                        <p>Game built in Java.</p>
                        <p>Created a Flappy Bird-style game using Java with smooth physics and collision detection.</p>
                        <p>Implemented game loop, scoring system, and obstacle generation.</p>
                        <p><b>Tools:</b> Java, Swing</p>
                    </div>
                    <div class="right">
                        <img src="assets/flappybird.png">
                    </div>
                </div>
                <div class="project-card">
    <div class="left">
        <h2>Spotify UI Clone</h2>
        <p>Pixel-perfect Spotify interface designed in Figma.</p>
        <p>Designed a modern Spotify-inspired UI focusing on layout, user experience, and visual hierarchy.</p>
        <p>Created responsive screens including player, playlists, and navigation.</p>
        <p><b>Tools:</b> Figma</p>
    </div>
    <div class="right">
        <img src="assets/spotify.png">
    </div>
</div>

            </div>

            <div class="project-controls">
                <button onclick="prevSlide()">◀</button>
                <button onclick="nextSlide()">▶</button>
            </div>

        </div>
        
        `;

        currentSlide = 0;

        setTimeout(() => {
            updateSlide();
            startAutoSlide();
        }, 100);
    }

    /* ================= CONTACT ================= */
    else if (section === "contact") {
        stopAutoSlide();

        title = "Contact";
       content = `
<div class="contact-box">

    <h2>Contact</h2>

    <p> <b>Email:</b> 02.sanskar.j.02@gmail.com</p>
    <p> <b>GitHub:</b> github.com/San-exe</p>
    <p> <b>LinkedIn:</b> linkedin.com/in/sanskar-jadhav</p>
    <p> <b>Location:</b> India</p>

    <div class="contact-actions">
        <button onclick="copyEmail()">Copy Email</button>
        <button onclick="openGitHub()">Open GitHub</button>
    </div>

</div>
`;
    }

    /* ================= SPOTIFY ================= */
 else if (section === "spotify") {
    stopAutoSlide();

    title = "Spotify";

    windowBox.classList.add("maximized"); // still opens fullscreen

    content = `
    <div class="spotify-app">
        <iframe 
        src="https://open.spotify.com/embed/playlist/6YTpAQKhlQJvhR9aVPQ4px"
        loading="lazy">
        </iframe>
    </div>
    `;
}
    else if (section === "recycle") {
  title = "Recycle Bin";

  content = `
    <div style="padding:20px;">
      <p>Recycle Bin is empty </p>
    </div>
  `;
}

    /* ================= DEFAULT ================= */
    else {
        play(errorSound);
        title = "Error";
        content = `<p>Section not found</p>`;
    }

    document.getElementById("window-title").innerText = title;
    document.getElementById("window-content").innerHTML = content;
}

/* ================= PROJECT SLIDER ================= */

let currentSlide = 0;
let sliderInterval = null;

function updateSlide() {
    const slider = document.getElementById("slider");
    if (slider) {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
}

function nextSlide() {
    const total = document.querySelectorAll(".project-card").length;
    currentSlide = (currentSlide + 1) % total;
    updateSlide();
}


function prevSlide() {
    const total = document.querySelectorAll(".project-card").length;
    currentSlide = (currentSlide - 1 + total) % total;
    updateSlide();
}

function startAutoSlide() {
    stopAutoSlide();
    sliderInterval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
    if (sliderInterval) {
        clearInterval(sliderInterval);
        sliderInterval = null;
    }
}

/* ================= WINDOW CONTROLS ================= */

function closeWindow() {
    play(clickSound);
    stopAutoSlide();
    document.getElementById("window").style.display = "none";
}

function minimizeWindow() {
    play(clickSound);
    document.getElementById("window").style.display = "none";
}

function maximizeWindow() {
    document.getElementById("window").classList.toggle("maximized");
}

/* ================= CLOCK ================= */

function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    document.getElementById("clock").innerText = time;
}

setInterval(updateClock, 1000);
updateClock();

/* ================= BOOT ================= */

const bar = document.getElementById("progress-bar");
const totalSlots = 20;
let filledSlots = 0;

for (let i = 0; i < totalSlots; i++) {
    const slot = document.createElement("div");
    slot.className = "slot";
    bar.appendChild(slot);
}

const slots = document.querySelectorAll(".slot");

function createBit() {
    if (filledSlots >= totalSlots) return;

    const bit = document.createElement("div");
    bit.className = "bit";
    bit.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(bit);

    setTimeout(() => {
        bit.remove();
        slots[filledSlots].classList.add("filled");
        filledSlots++;

        if (filledSlots >= totalSlots) {
            setTimeout(() => {
                document.getElementById("boot-screen").style.display = "none";
                document.getElementById("desktop").style.display = "block";
                document.querySelector(".taskbar").style.display = "flex";
                play(startupSound);
            }, 400);
        }
    }, 900);
}

setInterval(createBit, 120);

/* ================= START MENU ================= */

const startBtn = document.querySelector(".start-button");
const startMenu = document.getElementById("start-menu");

window.addEventListener("load", () => {
    startMenu.style.display = "none";
});

startBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    startMenu.style.display =
        startMenu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", () => {
    startMenu.style.display = "none";
});

startMenu.addEventListener("click", (e) => {
    e.stopPropagation();
});

function handleCommand(cmd, print) {

    if (cmd === "help") {
        print("Available commands:");
        print("about, projects, skills, contact, clear");
    }

    else if (cmd === "about") {
        print("Sanskar Jadhav - Developer ");
    }

    else if (cmd === "projects") {
        print("Opening projects...");
        setTimeout(() => openWindow("projects"), 500);
    }

    else if (cmd === "skills") {
        print("HTML, CSS, JS, Java");
    }

    else if (cmd === "contact") {
        print("Email: 02.sanskar.j.02@gmail.com");
    }

    else if (cmd === "clear") {
        document.getElementById("terminal-output").innerHTML = "";
    }

    else if (cmd === "") {
        return;
    }

    else {
        print("Command not found");
    }
}

content = `
<div class="help-wrapper">
  <div class="help-container">
    ...
  </div>
</div>
`;
function copyEmail() {
    navigator.clipboard.writeText("02.sanskar.j.02@gmail.com");
    showToast("Email copied!");
}

function openGitHub() {
    window.open("https://github.com/San-exe", "_blank");
}
function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}
setTimeout(() => {
  const terminal = document.querySelector(".terminal-box");
  if (!terminal) return;

  const lines = [
    "> Initializing SanskarOS...",
    "> Loading modules...",
    "> UI Engine: Active",
    "> Portfolio.exe running",
    "> Status: All systems operational ✔"
  ];

  terminal.innerHTML = "";

  let i = 0;
  function typeLine() {
    if (i < lines.length) {
      const p = document.createElement("p");
      p.textContent = lines[i];
      terminal.appendChild(p);
      i++;
      setTimeout(typeLine, 400);
    }
  }

  typeLine();
}, 300);