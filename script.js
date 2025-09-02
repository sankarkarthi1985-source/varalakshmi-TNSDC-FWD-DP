// Typing effect
const typingText = "A Passionate Developer & Designer";
let index = 0;
function typeEffect() {
  if (index < typingText.length) {
    document.getElementById("typing").textContent += typingText.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
window.onload = typeEffect;

// Upload Profile Photo
const uploadInput = document.getElementById("upload-photo");
const profilePhoto = document.getElementById("profile-photo");

uploadInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profilePhoto.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Modal Functions
function openModal(title) {
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Close modal when clicking outside content
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};