const destinations = ["Балі", "Рим", "Токіо", "Нью-Йорк", "Париж", "Київ"];

function suggestDestination() {
    const randomIndex = Math.floor(Math.random() * destinations.length);
    document.getElementById("destination").innerText = `Ваша наступна подорож: ${destinations[randomIndex]}`;
}
