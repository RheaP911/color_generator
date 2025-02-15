function openSection(evt, sectionName) {
    document.querySelectorAll(".tabcontent").forEach(tab => tab.classList.add("hidden"));
    document.getElementById(sectionName).classList.remove("hidden");
}