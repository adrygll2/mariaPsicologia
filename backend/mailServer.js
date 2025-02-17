require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Configurar el transportador de correo
  let transporter = nodemailer.createTransport({
    service: "gmail", // Cambia si usas otro proveedor
    auth: {
      user: process.env.EMAIL_USER, // Email desde donde se enviarán los correos
      pass: process.env.EMAIL_PASS, // Contraseña o App Password
    },
  });

  let mailOptions = {
    from: email, // Correo del remitente
    to: process.env.EMAIL_USER, // Tu correo donde recibirás los mensajes
    subject: `Nuevo mensaje de ${name}`,
    text: `De: ${name} (${email})\n\nMensaje:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Correo enviado con éxito 🎉" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error al enviar el correo", error });
  }
});

// Iniciar el servidor en el puerto 5000
app.listen(5000, () => {
  console.log("Servidor corriendo en http://localhost:5000");
});
