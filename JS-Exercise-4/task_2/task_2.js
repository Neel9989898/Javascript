document.addEventListener('DOMContentLoaded', function() {
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const addBtn = document.getElementById('addBtn');
    const tableBody = document.getElementById('tableBody');

    let editRowIndex = -1;

    function addRow() {
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();

        if (firstName === '' || lastName === '') {
            alert('Please enter both first name and last name.');
            return;
        }

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td class="btn-group">
                <button class="btn btn-warning editBtn">Edit</button>
                <button class="btn btn-danger deleteBtn">Delete</button>
            </td>
        `;
        tableBody.appendChild(newRow);

        firstNameInput.value = '';
        lastNameInput.value = '';
    }

    function deleteRow(btn) {
        const row = btn.closest('tr');
        row.remove();
    }

    function editRow(btn) {
        const row = btn.closest('tr');
        const cells = row.querySelectorAll('td');

        firstNameInput.value = cells[0].textContent;
        lastNameInput.value = cells[1].textContent;
        addBtn.textContent = 'Update';
        editRowIndex = row.rowIndex;
    }

    function updateRow() {
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();

        if (firstName === '' || lastName === '') {
            alert('Please enter both first name and last name.');
            return;
        }

        const row = tableBody.rows[editRowIndex - 1];
        row.cells[0].textContent = firstName;
        row.cells[1].textContent = lastName;

        firstNameInput.value = '';
        lastNameInput.value = '';
        addBtn.textContent = 'Add';
        editRowIndex = -1;
    }

    addBtn.addEventListener('click', function() {
        if (addBtn.textContent === 'Add') {
            addRow();
        } else {
            updateRow();
        }
    });

    tableBody.addEventListener('click', function(event) {
        if (event.target.classList.contains('deleteBtn')) {
            deleteRow(event.target);
        } else if (event.target.classList.contains('editBtn')) {
            editRow(event.target);
        }
    });
});
