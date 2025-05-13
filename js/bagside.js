"use strict"
function toggleVisitkort() {
    const popup = document.getElementById("visitkort-popup");
 // Finder HTML-elementet med id "visitkort-popup"
    popup.style.display = popup.style.display === "block" ? "none" : "block";
  }  
  // Viser eller skjuler popup'en:
  // Hvis den vises (display === "block"), skjul den ("none")
  // Ellers vis den ("block")