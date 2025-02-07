const express = require('express')

const app = express()

const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' }];

//Filtro especialidad
function filterUsersBySpecialty(specialty) {
  return usersData.filter(user => user.specialty === specialty);
}

//Rutas
app.get('/', (req, res) => {
  res.send('<h1>Bienvenido a la home</h1><br><a href="marketing">Marketing</a><br><a href="developers">Desarrolladores</a><br><a href="/oof">Pestaña eliminada</a>')
});

//marketing
app.get('/marketing', (req, res) => {
  const marketingUsers = filterUsersBySpecialty('marketing');
  const pageContent = `
    <h1>Marketing</h1>
    <p>Número de personas: ${marketingUsers.length}</p>
    <ul>
      ${marketingUsers.map(user => `<li>${user.name} - Edad: ${user.age}</li>`).join('')}
    </ul>
  `;
  res.send(`${pageContent} <br><a href="/">Home</a><br><a href="developers">Desarrolladores</a><br><a href="/oof">Pestaña eliminada</a>`)
});

app.get('/developers', (req, res) => {
  const developersUsers = filterUsersBySpecialty('developers');
  const pageContent = `
    <h1>Desarrolladores</h1>
    <p>Número de personas: ${developersUsers.length}</p>
    <ul>
      ${developersUsers.map(user => `<li>${user.name} - Edad: ${user.age}</li>`).join('')}
    </ul>
  `;
  res.send(`${pageContent} <br><a href="/">Home</a><br><a href="/marketing">Marketing</a><br><a href="/oof">Pestaña eliminada</a>`)
});

//Error 404 (¡¡¡NUN APURRIES # ONDE LA RUTA!!!)
app.use((req, res) => {
  res.status(404).send('<h1>Página no encontrada :(</h1> <br><a href="/">Home</a>');
});

app.listen(3000, () => {
  console.log(`Servidor escuchando en el puerto 3000 http://localhost:3000`);
});