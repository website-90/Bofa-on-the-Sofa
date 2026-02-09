// Select all elements that should fade in
const faders = document.querySelectorAll('.fade-in');

// Options for when the animation should trigger
const appearOptions = {
  threshold: 0.2
};

// Create the observer
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

// Attach observer to each fade-in element
faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
document.getElementById("copyCA").addEventListener("click", function() {
  const contract = "5D8B2QumNr2VS4J5YyzGDMpQCokBAJV9AmrANzHYymBA";
  navigator.clipboard.writeText(contract);
  this.innerText = "Copied!";
  setTimeout(() => this.innerText = "Copy Contract", 2000);
});
