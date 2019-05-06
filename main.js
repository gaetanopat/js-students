// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var studenti;

document.writeln('Dati di un singolo studente: <br>');
console.log('Dati di un singolo studente:');
// richiamo la prima funzione
singleStudentInfo();
document.writeln('<br><br>Dati di tutti gli studenti (NOME e COGNOME): <br>');
console.log('Dati di tutti gli studenti:');
// richiamo la seconda funzione
arrayStudents();
document.writeln('<br><br>Dati di tutti gli studenti (NOME, COGNOME ED ETA\'): <br>');
console.log('Dati di tutti gli studenti, con il nuovo studente:');
// richiamo la terza funzione
addStudent(studenti);


// funzione per un singolo studente e stampare le sue proprietà
function singleStudentInfo(){
  // creo l'oggetto single_student
  var single_student = {
    'nome': 'Gaetano',
    'cognome': 'Patierno',
    'età': 21
  };

  // visualizzo tutte le proprietà a schermo
  for (var field in single_student) {
    document.writeln(field + ': ' + single_student[field] + '<br>');
    console.log(field + ': ' + single_student[field]);
  }
}


// funzione che crea un array di oggetti di studenti e stampa il nome e cognome
function arrayStudents(){
  // creo un array di oggetti
  var students = [
    {
      'nome': 'Giovanni',
      'cognome': 'Rossi',
      'età': 25
    },
    {
      'nome': 'Gaetano',
      'cognome': 'Patierno',
      'età': 21
    },
    {
      'nome': 'Fabio',
      'cognome': 'Ricciardi',
      'età': 21
    },
    {
      'nome': 'Paola',
      'cognome': 'Liso',
      'età': 50
    },
  ]
  // visualizzo il nome e il cognome dello studente
  for (var i = 0; i < students.length; i++) {
    document.writeln(students[i].nome + ' ' + students[i].cognome + '<br>');
    console.log(students[i].nome + ' ' + students[i].cognome);
  }
  // appoggio l'array di oggetti in una variabile globale che mi servirà per passarla all'ultima funzione
  studenti = students;
}


// funzione per aggiungere uno studente
function addStudent(array_studenti){
  var input_name = prompt('Inserisci il nome');
  var input_surname = prompt('Inserisci il cognome');
  var input_age = parseInt(prompt('Inserisci l\'età'));
  var trovato = false;
  input_name = input_name.charAt(0).toUpperCase()+input_name.slice(1).toLowerCase();
  input_surname = input_surname.charAt(0).toUpperCase()+input_surname.slice(1).toLowerCase();

  // creo un nuovo oggetto
  var nuovoStudente = {
    'nome': input_name,
    'cognome': input_surname,
    'età': input_age
  };

  // controllo che lo studente non sia già presente
  for (var i = 0; i < array_studenti.length; i++) {
    if(array_studenti[i].nome == nuovoStudente.nome && array_studenti[i].cognome == nuovoStudente.cognome && array_studenti[i].età == nuovoStudente.età){
      trovato = true;
    }

  }
  // se è presente non lo inserisce
  if(trovato == true){
    alert('Questo studente è già presente');
  } else {
    // lo pusho nell'array di oggetti
    array_studenti.push(nuovoStudente);
  }

  // visualizzo nuovamente tutti gli studenti compreso il nuovo studente
  for (var i = 0; i < array_studenti.length; i++) {
    document.writeln(array_studenti[i].nome + ' ' + array_studenti[i].cognome + ' ' + array_studenti[i].età + '<br>');
    console.log(array_studenti[i].nome, array_studenti[i].cognome, array_studenti[i].età);
  };
}
