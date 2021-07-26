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

	// Test if bookmarks is null
	if (localStorage.getItem("bookmarks") === null) {
		// Init array
		var bookmarks = [];
		// Add to array
		bookmarks.push(bookmark);
		// Set to localStorage with setItem and JSON stringify.
		localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
	} else {
		// Get (fetch) bookmarks from localStorage with getItem and JSON.parse which turns it back into JSON
		var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
		// Add bookmark to array
		bookmarks.push(bookmark);
		// Re-set back to localStorage
		localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
	}

	// Prevent form from submitting
	e.preventDefault();
}
