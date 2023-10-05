const express = require('express');
const app = express();
const mysql = require('mysql')
const myconn = require('express-myconnection')
const routes = require('./routes')
const bcrypt = require('bcrypt');



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


//routes
app.get('/',(req, res)=>{
    res.send('hola')
})
app.use('/api', routes)
//server running
app.listen(app.get('port'), ()=>{
 console.log('server runing on port', app.get('port'))

})
    

/*

// Ruta de autenticación
app.post('/login', (req, res) => {
    console.log('Solicitud POST recibida en /login');
  const { username, password } = req.body;
  console.log('Username:', username);
  console.log('Password:', password);

  if (!username || !password) {
    return res.status(400).json({ message: 'Por favor, proporciona un nombre de usuario y contraseña.' });
  }

  conn.query('SELECT * FROM tbl_usuario WHERE Usuario = ?', [username], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error de base de datos.' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Credenciales incorrectas.' });
    }

    const user = results[0];

    bcrypt.compare(password, user.Contraseña, (bcryptErr, bcryptResult) => {
      if (bcryptErr) {
        return res.status(500).json({ message: 'Error al comparar contraseñas.' });
      }

      if (bcryptResult) {
        // Contraseña válida, genera un token de autenticación
        const token = jwt.sign({ userId: user.id_usuario, username: user.Usuario }, secretKey, { expiresIn: '1h' });
        res.status(200).json({ token });
      } else {
        // Contraseña incorrecta
        res.status(401).json({ message: 'Credenciales incorrectas.' });
      }
    });
  });
});*/


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
  