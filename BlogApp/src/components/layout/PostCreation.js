import React, { useState } from 'react';
import axios from 'axios'; 

const PostCreation = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAutor] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/api/posts', { title, content, author });
            alert('Publicación creada exitosamente');
        } catch (error) {
            console.error('Error al crear la publicación:', error);
            alert('Ocurrió un error al crear la publicación');
        }
    };

    return (
        <div className="post-creation">
            <h2>Crear Nueva Publicación</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Título:</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="contenido">Contenido:</label>
                    <textarea id="contenido" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
                </div>
                <div>
                    <label htmlFor="autor">Autor:</label>
                    <input type="text" id="autor" value={author} onChange={(e) => setAutor(e.target.value)} required />
                </div>
                <button type="submit">Publicar</button>
            </form>
        </div>
    );
}

export default PostCreation;