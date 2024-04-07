const tableContainer = document.getElementById('table-container');
const weeksInYear = 52;
const totalYears = 90;

const table = document.createElement('table');

const headerRow = table.insertRow();
headerRow.insertCell().textContent ="T"; 
for (let week = 1; week <= weeksInYear; week++) {
  const weekCell = headerRow.insertCell();
  weekCell.textContent = `Н ${week}`;
  
}

for (let year = 1; year <= totalYears; year++) {
  const row = table.insertRow();
  const yearCell = row.insertCell();
  yearCell.textContent = `Г ${year}`;
  
}

for (let year = 1; year <= totalYears; year++) {
  for (let week = 1; week <= weeksInYear; week++) {
    const row = table.rows[year].insertCell();
   
    row.addEventListener('click', () => {
      row.classList.toggle('selected');
    });
  }
}

for (let year = 1; year <= totalYears; year++) {
  for (let week = 1; week <= weeksInYear; week++) {
    const row = table.rows[year].insertCell();
    row.addEventListener('click', () => {
      if (row.classList.contains('selected')) {
        row.classList.remove('selected');
      } else {
        row.classList.add('selected');
      }
    });
  }
}

tableContainer.appendChild(table);