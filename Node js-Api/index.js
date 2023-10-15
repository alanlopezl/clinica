const express = require('express');
const app = express();
const mysql = require('mysql')
const myconn = require('express-myconnection')
const routes = require('./routes')
const bcrypt = require('bcrypt');
const cors = require('cors');



app.set('port', process.env.PORT || 9000)

const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'clinica'
}

const conn = mysql.createConnection(dbOptions);

//middlewares
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json());
app.use(cors());


//routes
app.get('/',(req, res)=>{
    res.send('hola')
})
app.use('/api', routes)
//server running
app.listen(app.get('port'), ()=>{
 console.log('server runing on port', app.get('port'))

})
    



// Ruta de inicio de sesión
app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    // Consulta la base de datos para verificar si existe el usuario y la contraseña
    const sql = 'SELECT * FROM tbl_usuario WHERE Usuario = ? AND Contraseña = ?';
  
    conn.query(sql, [username, password], (err, results) => {
      if (err) {
        console.error('Error en la consulta a la base de datos:', err);
        return res.status(500).json({ message: 'Error en el proceso de inicio de sesión.' });
      }
  
      if (results.length === 0) {
        // No se encontraron resultados, lo que significa que las credenciales son incorrectas
        return res.status(401).json({ message: 'Credenciales incorrectas.' });
      }
  
      // Usuario autenticado con éxito, puedes generar un token de autenticación u otros procesos
      // Devuelve una respuesta de éxito o el token de autenticación si lo deseas
      res.status(200).json({ message: 'Inicio de sesión exitoso', user: results[0] });
    });
  });
  
  //metodo para mostrar usuarios
  app.get('/usuarios', (req, res) => {
    // Consulta la base de datos para obtener la lista de usuarios
    const sql = 'SELECT * FROM tbl_usuario';
    conn.query(sql, (err, results) => {
      if (err) {
        console.error('Error en la consulta a la base de datos:', err);
        return res.status(500).json({ message: 'Error al obtener la lista de usuarios.' });
      }
  
      // Devuelve la lista de usuarios en formato JSON
      res.status(200).json({ users: results });
    });
  });


// Ruta para obtener el nombre de usuario
app.get('/user', (req, res) => {
  // Simplemente devuelve el nombre de usuario
  res.status(200).json({ nombre: 'Nombre de usuario' });
});

