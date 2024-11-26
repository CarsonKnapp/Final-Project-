import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import low from 'lowdb';
import { FileSync } from 'lowdb/adapters/FileSync';
import nodemailer from 'nodemailer';

const app = express();
const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ testimonials: [] }).write();

app.use(cors());
app.use(bodyParser.json());

app.get('/testimonials', (req, res) => {
    const testimonials = db.get('testimonials').value();
    res.json(testimonials);
});

app.post('/send-email', (req, res) => {
    const { email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
            user: 'your-sendgrid-username',
            pass: 'your-sendgrid-api-key',
        },
    });

    const mailOptions = {
        from: 'your-email@example.com',
        to: email,
        subject: 'Thank you for your feedback!',
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));