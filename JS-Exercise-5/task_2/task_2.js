document.addEventListener('DOMContentLoaded', function() {
    const names = [
        "Ashish Shah",
        "Rashmin Chhatrala",
        "Yash Dubey",
        "Prakash Jain",
        "Yashraj Singh",
        "Viraj Sinha",
        "Rajesh Kumar",
        "Mahesh Marwadi",
        "Suresh Sahni",
        "Amar Vilas",
        "Virdas Singhania",
        "Rajeshwari Bindra",
        "Birendra Bhalerao",
        "Virendra Bhupati",
        "Bhupendra Singh",
        "Bhuvam Bam",
        "Shri Raj",
        "Prashant Kamle",
        "Kamlesh Tomar",
        "Risabh Khare",
        "Rishi Kohli",
        "Kunwar Kharwanda",
        "Kartik Koli",
        "Komal Jain",
        "Kartikey Pandey"
    ];

    const filterInput = document.getElementById('filterInput');
    const namesList = document.getElementById('namesList');

    function filterNames() {
        const filterText = filterInput.value.toLowerCase();
        namesList.innerHTML = '';

        names.forEach(name => {
            if (name.toLowerCase().includes(filterText)) {
                const nameItem = document.createElement('li');
                nameItem.textContent = name;
                if (filterText !== '' && name.toLowerCase().includes(filterText)) {
                    const index = name.toLowerCase().indexOf(filterText);
                    const highlightedName = name.substring(0, index) + "<span class='highlight'>" + name.substring(index, index + filterText.length) + "</span>" + name.substring(index + filterText.length);
                    nameItem.innerHTML = highlightedName;
                }
                nameItem.classList.add('list-group-item');
                namesList.appendChild(nameItem);
            }
        });
    }

    filterInput.addEventListener('input', filterNames);
});
