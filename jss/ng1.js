function openTab(tabId) {
    document.querySelectorAll('.tab-content-item').forEach(item => {
        item.classList.remove('active');
    });

    document.querySelectorAll('.tab-item').forEach(item => {
        item.classList.remove('tab-border');
    });

    document.getElementById(tabId + '-content').classList.add('active');

    document.getElementById(tabId).classList.add('tab-border');
}

// Initialize with the first tab open
openTab('tab-1');
