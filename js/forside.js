window.addEventListener("scroll", () => {
    const pige = document.getElementById("pige");
    const scrollY = window.scrollY;
  
    // Justér 0.4 og 300 for hvor hurtigt og hvor langt hun bevæger sig
    const moveAmount = Math.min(scrollY * 0.7, 800);
  
    pige.style.transform = `translateX(-50%) translateY(-${moveAmount}px)`;
  });