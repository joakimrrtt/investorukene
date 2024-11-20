let lastClickedBox = null; // To store the last clicked box

function fillContent(title, content, clickedBox) {
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = `
        <h3 class="text-lg font-bold text-white">${title}</h3>
        <p class="mt-2 text-white">${content}</p>
    `;

    // If there was a previously clicked box, remove its highlight
    if (lastClickedBox) {
        lastClickedBox.classList.remove('bg-blue-400');
        lastClickedBox.classList.add('bg-blue-600');
    }

    // Highlight the clicked box
    clickedBox.classList.remove('bg-blue-600');
    clickedBox.classList.add('bg-blue-400');

    // Update the last clicked box to the current one
    lastClickedBox = clickedBox;
}