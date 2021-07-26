// Listen for form submit
document.getElementById("myForm").addEventListener("submit", saveBookmark);

// Save bookmark
function saveBookmark(e) {
	// Get form values
	var siteName = document.getElementById("siteName").value;
	var siteUrl = document.getElementById("siteUrl").value;

	var bookmark = {
		name: siteName,
		url: siteUrl,
	};

	console.log(bookmark);

	// Prevent form from submitting
	e.preventDefault();
}

// Local storage test. setItem takes in a key and a value
// localStorage.setItem("test", "Hello World");
// localStorage.setItem("test2", "Sweet");
