// Function to handle iframe loading errors
function handleIframeError(iframe) {
    const container = iframe.parentElement;
    const url = container.dataset.url;
    container.innerHTML = `
        <div class="iframe-error w-full h-full">
            <div>
                <svg class="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Unable to load demo</h3>
                <p class="text-gray-600 text-sm">${url}</p>
            </div>
        </div>
    `;
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select all totem elements
    const totems = document.querySelectorAll('.totem');

    // Add click/touch event listeners
    totems.forEach(totem => {
        totem.addEventListener('click', function(e) {
            // Create ripple element
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');

            // Calculate ripple size (should be large enough to cover the element)
            const diameter = Math.max(this.clientWidth, this.clientHeight);
            ripple.style.width = ripple.style.height = `${diameter}px`;

            // Calculate click position relative to the element
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - diameter / 2;
            const y = e.clientY - rect.top - diameter / 2;

            // Position the ripple element
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            // Add ripple to element
            this.appendChild(ripple);

            // Remove ripple after animation completes
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});
