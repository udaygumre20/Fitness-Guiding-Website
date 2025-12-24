
// Check for "Welcome" parameter in URL
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get("signup") === "success") {
    const name = urlParams.get("name") || "User";
    // You could replace this with a nice modal, but an alert is simple and guaranteed to be seen
    alert("Welcome to Unite Active Pulse, " + name + "! Your registration was successful.");

    // Clean up URL (remove query param) without refreshing
    window.history.replaceState({}, document.title, window.location.pathname);
}
