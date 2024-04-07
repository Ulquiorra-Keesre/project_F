const tableContainer = document.getElementById('table-container');
const controls = document.getElementById('controls');
const weeksInYear = 52;
const totalYears = 90;

const table = document.createElement('table');

const headerRow = table.insertRow();
headerRow.insertCell().textContent = "T";
for (let week = 1; week <= weeksInYear; week++) {
  const weekCell = headerRow.insertCell();
  weekCell.textContent = `Н ${week}`;
}

for (let year = 1; year <= totalYears; year++) {
  const row = table.insertRow();
  const yearCell = row.insertCell();
  yearCell.textContent = `Г ${year}`;
  
  for (let week = 1; week <= weeksInYear; week++) {
    const cell = row.insertCell();
    cell.addEventListener('click', () => {
      if (!cell.classList.contains('selected')){
      highlightCells(row.rowIndex, cell.cellIndex);}
      else {clearSelection();}
    }); 
  }
}

tableContainer.appendChild(table);

function highlightCells(rowIndex, cellIndex) {
  for (let i = 1; i <= rowIndex; i++) {
    const row = table.rows[i];
    if (i == rowIndex){
      for (let j = 1; j <= cellIndex; j++) {
        const cell = row.cells[j];
        cell.classList.add('selected');
      }} else {
        for (let j = 1; j <= weeksInYear; j++) {
          const cell = row.cells[j];
          cell.classList.add('selected');
      }
    }
  }
}

controls.addEventListener('change', function(event) {
  const years = parseInt(event.target.value);
  if (!isNaN(years)) {
    clearSelection(); 
    
      for (let year = 1; year <= years; year++) {
        for (let week = 1; week <= weeksInYear; week++) {
          const cell = table.rows[year].cells[week];
          cell.classList.add('selected');
        }
      }
    }
  }
);

function clearSelection() {
  const selectedCells = table.querySelectorAll('.selected');
  selectedCells.forEach(cell => {
    cell.classList.remove('selected');
  });
}