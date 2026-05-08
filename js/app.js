document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileMenu");

  if (!hamburger || !mobileNav) return;

  const mobileLinks = mobileNav.querySelectorAll(".mobile-overlay__itens");

  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("active"); // ✅ bate com o CSS
    hamburger.classList.toggle("active"); // ✅ anima o ícone hambúrguer
  });

  mobileLinks.forEach((link) =>
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
      hamburger.classList.remove("active");
    }),
  );
});
