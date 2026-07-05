// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import { OpenAI } from 'openai';

// dotenv.config();

// app.use(cors());
// app.use(express.json());

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// app.post('/api/code', async (req, res) => {
//   const { code, action } = req.body;

//   if (!code || !action) {
//     return res.status(2002).json({ error: 'Missing code or action' });
//   }

//   try {
//     const completion = await openai.chat.completions.create({
//       model: 'gpt-3.5-turbo',
//       messages: [
//         {
//           role: 'system',
//           content: `You are a helpful programming assistant.`,
//         },
//         {
//           role: 'user',
//           content: `Please ${action} this code:\n\n${code}`,
//         },
//       ],
//     });

//     const result = completion.choices[0].message.content;
//     res.json({ result });
//   } catch (error) {
//     console.error('❌ OpenAI API error:', error.message);
//     res.status(2002).json({ error: 'Failed to process the request' });
//   }
// });

const express = require ("express")

const Server = express ();

require("./db/Connection.js");
Server.get("/",(req,res)=>{
    res.send("About page")
});

Server.listen(2004,()=>{
    console.log("server run at : http://localhost:2002");
});