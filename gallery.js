const buttons = document.querySelectorAll(".gallery-categories button");
const photos = document.querySelectorAll(".photo");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        photos.forEach(photo => {
            if (filter === "all" || photo.classList.contains(filter)) {
                photo.style.display = "block";
            } else {
                photo.style.display = "none";
            }
        });
    });
});

// ===== FULLSCREEN MODAL =====
const modal = document.getElementById("photoModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close-modal");

// Quando clicchi una foto → apri modal
photos.forEach(photo => {
    photo.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = photo.querySelector("img").src;
    });
});

// Chiudi modal (X)
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Chiudi cliccando fuori dalla foto
modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});

// ESC per chiudere
document.addEventListener("keydown", e => {
    if (e.key === "Escape") modal.style.display = "none";
});

