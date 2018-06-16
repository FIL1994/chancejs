export default (gender) => {
    gender = gender || "all";
    gender = gender.toLowerCase();

    var prefixes = [
        { name: 'Doctor', abbreviation: 'Dr.' }
    ];

    if (gender === "male" || gender === "all") {
        prefixes.push({ name: 'Mister', abbreviation: 'Mr.' });
    }

    if (gender === "female" || gender === "all") {
        prefixes.push({ name: 'Miss', abbreviation: 'Miss' });
        prefixes.push({ name: 'Misses', abbreviation: 'Mrs.' });
    }

    return prefixes;    
}