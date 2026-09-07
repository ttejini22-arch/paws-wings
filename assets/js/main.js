document.addEventListener("DOMContentLoaded", () => {

  const root = document.body.dataset.root || "";

  /* =========================
     NAVIGATION
  ========================= */

  document.querySelectorAll("[data-nav]").forEach(el => {

    el.innerHTML = `
      <nav class="navbar navbar-expand-lg site-nav">

        <div class="container">

          <a class="navbar-brand fw-bold d-flex align-items-center gap-2"
             href="${root}index.html">

            <span class="paw-animation" aria-hidden="true">
              <span class="paw-dot dot-1"></span>
              <span class="paw-dot dot-2"></span>
              <span class="paw-dot dot-3"></span>
              <span class="paw-pad"></span>
            </span>

            <span>Paws & Wings</span>

          </a>

          <button
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
            aria-label="Toggle navigation">

            <span class="navbar-toggler-icon"></span>

          </button>

          <div class="collapse navbar-collapse" id="nav">

            <div class="navbar-nav ms-auto align-items-lg-center">

              <a class="nav-link"
                 href="${root}index.html">
                Home
              </a>

              <a class="nav-link"
                 href="${root}about.html">
                About
              </a>

              <a class="nav-link"
                 href="${root}rescue.html">
                Rescue
              </a>

              <a class="nav-link"
                 href="${root}donate.html">
                Donate
              </a>

              <a class="nav-link"
                 href="${root}adopt.html">
                Adopt
              </a>

              <a class="nav-link"
                 href="${root}volunteer.html">
                Volunteer
              </a>

              <a class="nav-link"
                 href="${root}contact.html">
                Contact
              </a>

              <a class="btn btn-light btn-sm ms-lg-2 login-button"
                 href="${root}login.html">
                Login
              </a>

            </div>

          </div>

        </div>

      </nav>
    `;
  });


  /* =========================
     FOOTER
  ========================= */

  document.querySelectorAll("[data-footer]").forEach(el => {

    el.innerHTML = `
      <footer class="footer mt-5">

        <div class="container py-5">

          <div class="footer-brand">

            <span class="footer-paw-animation" aria-hidden="true">
              <span class="footer-dot dot-1"></span>
              <span class="footer-dot dot-2"></span>
              <span class="footer-dot dot-3"></span>
              <span class="footer-pad"></span>
            </span>

            <h4>Paws & Wings</h4>

          </div>

          <p class="footer-description">
            A community platform for street animal and bird welfare.
          </p>

          <hr>

          <small class="footer-copy">
            © ${new Date().getFullYear()} Paws & Wings
          </small>

        </div>

      </footer>
    `;
  });


  /* =========================
     PINK + WHITE DESIGN
     ========================= */

  const style = document.createElement("style");

  style.textContent = `

    /* =========================
       COLOR VARIABLES
       ========================= */

    :root {
      --pw-pink: #e95b9f;
      --pw-dark-pink: #d94789;
      --pw-light-pink: #fff0f6;
      --pw-soft-pink: #fff8fb;
      --pw-border: #f4c6da;
      --pw-white: #ffffff;
      --pw-text: #555555;
    }


    /* =========================
       NAVBAR
       ========================= */

    .site-nav {
      background: var(--pw-white) !important;
      border-bottom: 1px solid var(--pw-border);
    }

    .site-nav .navbar-brand {
      color: var(--pw-dark-pink) !important;
    }

    .site-nav .nav-link {
      color: var(--pw-text) !important;
      transition: color 0.25s ease;
    }

    .site-nav .nav-link:hover {
      color: var(--pw-pink) !important;
    }

    .site-nav .nav-link:focus {
      color: var(--pw-pink) !important;
    }


    /* =========================
       NAVBAR TOGGLER
       ========================= */

    .site-nav .navbar-toggler {
      border-color: var(--pw-border) !important;
      background: var(--pw-light-pink) !important;
    }

    .site-nav .navbar-toggler:focus {
      box-shadow: 0 0 0 0.15rem
        rgba(233, 91, 159, 0.20) !important;
    }


    /* =========================
       LOGIN BUTTON
       ========================= */

    .login-button {
      color: var(--pw-dark-pink) !important;
      background: var(--pw-white) !important;
      border: 1px solid var(--pw-pink) !important;
    }

    .login-button:hover {
      color: var(--pw-white) !important;
      background: var(--pw-pink) !important;
      border-color: var(--pw-pink) !important;
    }


    /* =========================
       NAVBAR PAW ANIMATION
       ========================= */

    .paw-animation {
      position: relative;
      display: inline-block;
      width: 32px;
      height: 32px;
      flex-shrink: 0;
    }

    .paw-pad,
    .paw-dot {
      position: absolute;
      display: block;
      background: var(--pw-pink);
    }

    .paw-pad {
      width: 14px;
      height: 13px;
      left: 9px;
      top: 16px;
      border-radius: 50% 50% 45% 45%;
      animation: pawBounce 1.8s ease-in-out infinite;
    }

    .paw-dot {
      width: 7px;
      height: 9px;
      border-radius: 50%;
      animation: toeFloat 1.8s ease-in-out infinite;
    }

    .paw-dot.dot-1 {
      left: 5px;
      top: 10px;
      transform: rotate(-25deg);
    }

    .paw-dot.dot-2 {
      left: 13px;
      top: 5px;
    }

    .paw-dot.dot-3 {
      right: 5px;
      top: 10px;
      transform: rotate(25deg);
    }

    .paw-animation::before {
      content: "";
      position: absolute;
      width: 7px;
      height: 9px;
      background: var(--pw-pink);
      border-radius: 50%;
      right: 10px;
      top: 5px;
      transform: rotate(20deg);
      animation: toeFloat 1.8s ease-in-out infinite;
    }


    @keyframes pawBounce {

      0%,
      100% {
        transform: translateY(0) scale(1);
      }

      50% {
        transform: translateY(-3px) scale(1.08);
      }

    }


    @keyframes toeFloat {

      0%,
      100% {
        opacity: 0.85;
        transform: translateY(0);
      }

      50% {
        opacity: 1;
        transform: translateY(-3px);
      }

    }


    /* =========================
       FOOTER
       ========================= */

    .footer {
      background: var(--pw-light-pink) !important;
      color: var(--pw-text) !important;
      border-top: 1px solid var(--pw-border);
    }

    .footer h4 {
      color: var(--pw-dark-pink) !important;
      margin: 0;
    }

    .footer-description {
      color: #666666 !important;
      margin-top: 12px;
    }

    .footer hr {
      border-color: var(--pw-border) !important;
      opacity: 1;
    }

    .footer-copy {
      color: #777777 !important;
    }


    /* =========================
       FOOTER BRAND
       ========================= */

    .footer-brand {
      display: flex;
      align-items: center;
      gap: 12px;
    }


    /* =========================
       FOOTER PAW ANIMATION
       ========================= */

    .footer-paw-animation {
      position: relative;
      display: inline-block;
      width: 34px;
      height: 34px;
      flex-shrink: 0;
    }

    .footer-pad,
    .footer-dot {
      position: absolute;
      background: var(--pw-pink);
      display: block;
    }

    .footer-pad {
      width: 15px;
      height: 14px;
      left: 9px;
      top: 17px;
      border-radius: 50% 50% 45% 45%;
      animation: footerPawMove 2s ease-in-out infinite;
    }

    .footer-dot {
      width: 7px;
      height: 9px;
      border-radius: 50%;
      animation: footerToeMove 2s ease-in-out infinite;
    }

    .footer-dot.dot-1 {
      left: 4px;
      top: 10px;
      transform: rotate(-25deg);
    }

    .footer-dot.dot-2 {
      left: 13px;
      top: 5px;
    }

    .footer-dot.dot-3 {
      right: 4px;
      top: 10px;
      transform: rotate(25deg);
    }

    .footer-paw-animation::before {
      content: "";
      position: absolute;
      width: 7px;
      height: 9px;
      background: var(--pw-pink);
      border-radius: 50%;
      right: 10px;
      top: 5px;
      transform: rotate(20deg);
      animation: footerToeMove 2s ease-in-out infinite;
    }


    @keyframes footerPawMove {

      0%,
      100% {
        transform: translateY(0) scale(1);
      }

      50% {
        transform: translateY(-4px) scale(1.08);
      }

    }


    @keyframes footerToeMove {

      0%,
      100% {
        transform: translateY(0);
      }

      50% {
        transform: translateY(-3px);
      }

    }


    /* =========================
       REMOVE OLD GREEN COLORS
       ========================= */

    .bg-success {
      background-color: var(--pw-pink) !important;
    }

    .text-success {
      color: var(--pw-pink) !important;
    }

    .border-success {
      border-color: var(--pw-pink) !important;
    }

    .btn-success {
      background-color: var(--pw-pink) !important;
      border-color: var(--pw-pink) !important;
      color: var(--pw-white) !important;
    }

    .btn-success:hover {
      background-color: var(--pw-dark-pink) !important;
      border-color: var(--pw-dark-pink) !important;
    }

    .btn-outline-success {
      color: var(--pw-pink) !important;
      border-color: var(--pw-pink) !important;
      background: var(--pw-white) !important;
    }

    .btn-outline-success:hover {
      color: var(--pw-white) !important;
      background: var(--pw-pink) !important;
      border-color: var(--pw-pink) !important;
    }


    /* =========================
       WARNING → PINK
       ========================= */

    .bg-warning {
      background-color: var(--pw-pink) !important;
    }

    .btn-warning {
      background-color: var(--pw-pink) !important;
      border-color: var(--pw-pink) !important;
      color: var(--pw-white) !important;
    }

    .btn-warning:hover {
      background-color: var(--pw-dark-pink) !important;
      border-color: var(--pw-dark-pink) !important;
      color: var(--pw-white) !important;
    }

  `;

  document.head.appendChild(style);

});