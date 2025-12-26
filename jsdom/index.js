
let participants = [];
const formulaire = document.getElementById('sumbitForm');
const participantsTable = document.getElementById('participantsTable');
participantsTable.style.display = 'none';

formulaire.addEventListener('click', function (event) {
    event.preventDefault();

    const nom = document.getElementById('name').value;
    const prenom = document.getElementById('prenom').value;
    const age = document.getElementById('age').value;
    const sport = document.getElementById('category').value;
    //console.log(nom);
    if (!verifiFormNotEmpty(nom) || !verifiFormNotEmpty(prenom) || !verifiFormNotEmpty(age) || !verifiFormNotEmpty(sport)) {
        alert('Veuillez remplir tous les champs du formulaire.');
        return;
    } else if (isNaN(age) || age <= 0) {
        alert('Veuillez entrer un âge valide.');
        return;
    } else if (age < 18) {
        alert('Vous devez être majeur pour vous inscrire.');
        return;
    } else {
        const participant = {
            nom: nom,
            prenom: prenom,
            age: age,
            sport: sport
        };
        participants.push(participant);

        const messageTableauVideo = document.getElementById('messageTableauVide');
        messageTableauVideo.style.display = 'none';

        participantsTable.style.display = 'table';

        // const tabInfoParticipant = document.getElementById('infoParticipant');
        // const newRow = tabInfoParticipant.insertRow();
        // const cellNom = newRow.insertCell(0);
        // const cellPrenom = newRow.insertCell(1);
        // const cellAge = newRow.insertCell(2);
        // const cellSport = newRow.insertCell(3);
        // cellNom.textContent = nom;
        // cellPrenom.textContent = prenom;
        // cellAge.textContent = age;
        // cellSport.textContent = sport;
        addParticipantToTable(participant);
        // calcul de l'âge moyen des personnes
        // let ageTotal = participants.reduce((total, participant) => total + parseInt(participant.age), 0);
        // let ageMoyen = ageTotal / participants.length;
        // console.log("Âge moyen des personnes:", ageMoyen);
        // const ageMoyenElement = document.getElementById('ageMoyenParticipant');
        // const newRowAgeMoyen = ageMoyenElement.insertRow();
        // const cellAgeMoyen = newRowAgeMoyen.insertCell(0);
        // cellAgeMoyen.textContent = ageMoyen.toFixed(2);
        const ageMoyenElement = document.getElementById('moyenneAge');
        ageMoyenElement.textContent = calculateAverageAge().toFixed(2);



    }

    // return participants;
});

function verifiFormNotEmpty(forms) {
    // Implementation here
    if (forms === '' || forms == null) {
        return false;
    } else {
        return true;
    }
}

function addParticipantToTable(participant) {

    const tabInfoParticipant = document.getElementById('infoParticipant');
    const newRow = tabInfoParticipant.insertRow();
    const cellNom = newRow.insertCell(0);
    const cellPrenom = newRow.insertCell(1);
    const cellAge = newRow.insertCell(2);
    const cellSport = newRow.insertCell(3);
    cellNom.textContent = participant.nom;
    cellPrenom.textContent = participant.prenom;
    cellAge.textContent = participant.age;
    cellSport.textContent = participant.sport;
}

function calculateAverageAge() {
    let ageTotal = participants.reduce((total, participant) => total + parseInt(participant.age), 0);
    let ageMoyen = ageTotal / participants.length;
    return ageMoyen;
}