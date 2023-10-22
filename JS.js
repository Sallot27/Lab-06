  if (document.cookie.includes("voted=true")) {
    disableButtons();
  }

  function like() {
    // Check if  user  already vote
    if (document.cookie.includes("voted=true")) {
      return;
    }

    // Increase like count
    var likeCount = parseInt(document.getElementById("likeCount").textContent);
    likeCount++;
    document.getElementById("likeCount").textContent = likeCount;

    // Set vote cookie
    document.cookie = "voted=true";

    // Disable  buttons
    disableButtons();
  }

  function dislike() {
    // Check if  user has already vote
    if (document.cookie.includes("voted=true")) {
      return;
    }

    // Increase  dislike count
    var dislikeCount = parseInt(document.getElementById("dislikeCount").textContent);
    dislikeCount++;
    document.getElementById("dislikeCount").textContent = dislikeCount;

    // Set  vote cookie
    document.cookie = "voted=true";

    // Disable  buttons
    disableButtons();
  }

  function disableButtons() {
    var buttons = document.getElementsByClassName("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }