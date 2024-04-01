const sportsGroup = [
    {
        Name: 'Ravindra',
        Sports: ['Chess', 'Cricket'],
    },
    {
        Name: 'Ravi',
        Sports: ['Cricket', 'Football'],
    },
    {
        Name: 'Rishabh',
        Sports: ['Table-Tennis', 'Football'],
    }
];

function displayNamesBySports(sportsGroup) {
    const sportsMap = {};

    sportsGroup.forEach(person => {
        person.Sports.forEach(sport => {
            if (!sportsMap[sport]) {
                sportsMap[sport] = [];
            }
            sportsMap[sport].push(person.Name);
        });
    });

    const result = [];
    for (const sport in sportsMap) {
        result.push({ [sport]: sportsMap[sport] });
    }

    return result;
}

const output = displayNamesBySports(sportsGroup);
console.log(output);
