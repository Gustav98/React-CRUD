import React, { useState } from 'react';

function Dashboard({ posts, sendNewPost }) {

  const [form, setForm] = useState({
    userId: 1,
    id: null,
    title: '',
    body: '',
  });

  const formHandler = (key, value) => setForm({ ...form, [key]: value });
   
  const sendForm = () => {
    sendNewPost(form);
  }

  return (
    <div className="Dashboard">

      <div className="form">
        
        <input type="text" name="title" placeholder="titulo..." value={form.title} onChange={(e) => formHandler(e.target.name, e.target.value)} /> <br />

        <textarea placeholder="conteudo..." name="body" value={form.body} onChange={(e) => formHandler(e.target.name, e.target.value)} ></textarea> <br />

        <button onClick={() => sendForm()}>Adicionar</button>

      </div>


      <p>posts recentes</p> <hr />

      { posts.map((post) => <p key={post.id}>{post.title}</p>) }
    </div>
  );
}

export default Dashboard;
