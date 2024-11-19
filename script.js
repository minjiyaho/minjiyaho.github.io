document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to My Website!");
  function getSeason(date = new Date()) {
    const month = date.getMonth() + 1;
    let season = "";
  
    if (month >= 3 && month <= 5) {
      season = "Spring";
    } else if (month >= 6 && month <= 8) {
      season = "Summer";
    } else if (month >= 9 && month <= 11) {
      season = "Fall";
    } else {
      season = "Winter";
    }
  
    return season;
  }
  
  // Usage example:
  console.log("Current season is:", getSeason());
});
