// content.js

// Function to block videos based on criteria
function blockVideos() {
    // Select all video elements on the page
    var videoElements = document.querySelectorAll('ytd-grid-video-renderer, ytd-video-renderer');
  
    // Check if there are any videos on the page
    if (videoElements.length > 0) {
      // Iterate through each video element
      videoElements.forEach(function (videoElement) {
        // Get the title, channel name, and tags
        var title = videoElement.querySelector('#video-title');
        var channelName = videoElement.querySelector('#text > a');
        var tags = videoElement.querySelectorAll('.style-scope ytd-video-meta-block span');
  
        // Check if the video contains specific tags in the tags section
        // or if the title matches a specific title
        if (
          containsTag(tags, 'RealWorld') ||
          containsTag(tags, 'Andrew Tate') ||
          containsTag(tags, 'Tate') ||
          containsTag(tags, 'TateBrothers') ||
          containsTag(tags, 'Tristan Tate') ||
          containsTag(tags, 'AdditionalTag') || // Add more tags as needed
          containsText(title, 'Andrew Tate') ||
          containsText(title, 'Tate') ||
          containsText(title, 'TateBrothers') ||
          containsText(title, 'Tristan Tate') ||
          containsText(title, 'AdditionalTitle') // Add more titles as needed
        ) {
          // Hide the video element if it meets the criteria
          videoElement.style.display = 'none';
        }
      });
  
      // Show a single message in the console (you can customize this message)
      console.log('All videos containing specified titles or tags are banned.');
    } else {
      // Show a message in the console if no videos were found
      console.log('No videos found on the page.');
    }
  }
  
  // Helper function to check if an array of tags contains a specific tag
  function containsTag(tags, targetTag) {
    for (var i = 0; i < tags.length; i++) {
      if (tags[i].textContent.toLowerCase().includes(targetTag.toLowerCase())) {
        return true;
      }
    }
    return false;
  }
  
  // Helper function to check if an element's text content contains a specific text
  function containsText(element, targetText) {
    return element && element.textContent.toLowerCase().includes(targetText.toLowerCase());
  }
  
  // Function to initialize the observer and call blockVideos when the DOM changes
  function initializeObserver() {
    // Create a MutationObserver to observe changes in the DOM
    var observer = new MutationObserver(function () {
      blockVideos();
    });
  
    // Observe changes in the document (childList: true observes additions or removals of child nodes)
    observer.observe(document, { childList: true, subtree: true });
  }
  
  // Call the initializeObserver function when the content script is injected
  initializeObserver();
  