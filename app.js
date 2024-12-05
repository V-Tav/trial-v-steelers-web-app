
// Load JSON data and populate the table and dropdowns
async function loadData() {
    // Load main data for the table
    const mainData = await fetch('trial_v_steelers.json').then(res => res.json());
    const heatData = await fetch('mapping.json').then(res => res.json());

    // Populate main table
    const table = document.getElementById('mainTable');
    let tableHTML = '<tr>';

    // Create table headers dynamically
    Object.keys(mainData[0]).forEach(header => {
        tableHTML += `<th>${header}</th>`;
    });
    tableHTML += '</tr>';

    // Populate table rows
    mainData.forEach(row => {
        tableHTML += '<tr>';
        Object.values(row).forEach(value => {
            tableHTML += `<td>${value}</td>`;
        });
        tableHTML += '</tr>';
    });
    table.innerHTML = tableHTML;

    // Populate dropdown for heat graph
    const heatDropdown = document.getElementById('heatDropdown');
    heatData.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.Key || option.Player;
        opt.textContent = option.Description || option.Player;
        heatDropdown.appendChild(opt);
    });
}

// Placeholder for Graph Initialization
function initializeGraphs() {
    // Line Graph Placeholder
    const lineCtx = document.getElementById('lineGraph').getContext('2d');
    new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: ['Game 1', 'Game 2', 'Game 3'],
            datasets: [{ label: 'Example Player', data: [10, 20, 30] }]
        },
    });

    // Heat Graph Logic Placeholder
    document.getElementById('generateHeat').addEventListener('click', () => {
        alert('Heat Graph Generation Placeholder');
    });

    // Scatter Graph Logic Placeholder
    document.getElementById('generateScatter').addEventListener('click', () => {
        alert('Scatter Graph Generation Placeholder');
    });
}

// Initialize everything on page load
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    initializeGraphs();
});
