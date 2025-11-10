// List of codes to display
const codes = [
    '4XW5RG4CHRY',
    'N7A68Q82H83',
    '3XKK8Z2WB6G',
    'DelayGift',
    '60KCCU919',
    'Halloween1018',
    'subtoZRGZeRoGhost',
    'FIXERROR819',
    'Nyaa',
    'Bunnsterss',
    'druscxlla',
    'ZooFish829',
    'BugFixes',
    'U2CA518SC5',
    'X2CA821BA3',
    '55PA21N8y2',
    '50KCCU0912',
    'ZTWPH3WW8SJ',
    'ADQZP3MBW6N'
];

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('codesContainer');
    let lastCopiedElement = null;
    
    // Create code elements
    codes.forEach(code => {
        const codeElement = document.createElement('div');
        codeElement.className = 'code-item';
        
        codeElement.innerHTML = `
            <span class="code-text">${code}</span>
        `;
        
        // Add click event to copy code
        codeElement.addEventListener('click', () => {
            // Reset previous copied element
            if (lastCopiedElement) {
                lastCopiedElement.classList.remove('copied');
            }
            
            // Set new copied element
            codeElement.classList.add('copied');
            lastCopiedElement = codeElement;
            
            // Copy to clipboard
            copyToClipboard(code);
            
            // Remove highlight after 2 seconds
            setTimeout(() => {
                codeElement.classList.remove('copied');
                lastCopiedElement = null;
            }, 2000);
        });
        
        container.appendChild(codeElement);
    });
});

// Copy text to clipboard
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showNotification('Code copied to clipboard!');
    } catch (err) {
        console.error('Failed to copy text: ', err);
        showNotification('Failed to copy code');
    }
}

// Show notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');
    
    // Update notification text
    notificationText.textContent = message;
    
    // Show notification
    notification.classList.add('show');
    
    // Hide notification after delay
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}
