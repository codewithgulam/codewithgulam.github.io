 // ===== DARK MODE TOGGLE =====
    const toggle = document.getElementById('dark-mode-toggle');
    const icon = toggle.querySelector('i');

    // Check for saved user preference
    if (localStorage.getItem('theme') === 'dark') {
      document.body.setAttribute('data-theme', 'dark');
      icon.classList.replace('fa-moon', 'fa-sun');
    }

    // Toggle dark/light mode
    toggle.addEventListener('click', () => {
      const isDark = document.body.getAttribute('data-theme') === 'dark';
      document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
      icon.classList.toggle('fa-moon', isDark);
      icon.classList.toggle('fa-sun', !isDark);
      localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });

    // ===== PARTICLES.JS BACKGROUND =====
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 }},
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { random: true, value: 0.5 },
        size: { random: true, value: 3 },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2 }
      }
    });

    // ===== VANILLA TILT FOR 3D EFFECTS =====
    VanillaTilt.init(document.querySelectorAll(".glass-card"), {
      max: 5,
      speed: 400,
      glare: true,
      "max-glare": 0.2
    });

    // ===== TYPEWRITER EFFECT FOR SUBTITLE =====
    const roles = ["DevOps Engineer", "GCP Specialist", "Terraform Expert"];
    let roleIndex = 0;
    const roleElement = document.querySelector(".subtitle");

    function typeRole() {
      let currentRole = roles[roleIndex];
      let text = "";
      let charIndex = 0;
      
      const typing = setInterval(() => {
        text += currentRole[charIndex];
        roleElement.textContent = text;
        charIndex++;
        if (charIndex === currentRole.length) {
          clearInterval(typing);
          setTimeout(eraseRole, 2000);
        }
      }, 100);
    }

    function eraseRole() {
      let text = roleElement.textContent;
      const erasing = setInterval(() => {
        text = text.slice(0, -1);
        roleElement.textContent = text;
        if (text === "") {
          clearInterval(erasing);
          roleIndex = (roleIndex + 1) % roles.length;
          typeRole();
        }
      }, 50);
    }

    typeRole();

    // ===== SKILL BAR ANIMATIONS =====
    document.querySelectorAll(".skill").forEach(skill => {
      skill.addEventListener("mouseenter", () => {
        skill.querySelector(".skill-level").style.transform = "scaleY(1.2)";
      });
      skill.addEventListener("mouseleave", () => {
        skill.querySelector(".skill-level").style.transform = "scaleY(1)";
      });
    });