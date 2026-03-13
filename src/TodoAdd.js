import { useState } from "react";

export default function TodoAdd(props) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');

    const handleImageChange = (evt) => {
        const cFiles = evt.target.files;
        if (cFiles.length > 0) {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                setImage(fileReader.result);
            }
            fileReader.readAsDataURL(cFiles[0]);
        } else
            setImage('');
    };
    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        const newDeep = { title, desc, image, done: false };
        const date = new Date();
        newDeep.createdAt = date.toLocaleString();
        newDeep.key = date.getTime();
        props.add(newDeep);
        evt.target.reset();
    };
    const handleFormReset = () => {
        setTitle('');
        setDesc('');
        setImage('');
    };
    return (
        <section>
            <h1>Создание нового дела</h1>
            <form onSubmit={handleFormSubmit} onReset={handleFormReset}>
                <div className="field">
                    <label className="label">Заголовок</label>
                    <div className="control">
                        <input className="input" value={title} onChange={e => setTitle(e.target.value)} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Примечание</label>
                    <div className="control">
                        <textarea className="textarea" value={desc} onChange={e => setDesc(e.target.value)} />
                    </div>
                </div>
                <div className="field">
                    <div className="file">
                        <label className="file-label">
                            <input className="file-input" type="file" accept="image/*" onChange={handleImageChange} />
                            <span className="file-cta">
                                <span className="file-label">
                                    Графическая иллюстрация...
                                </span>
                            </span>
                        </label>
                    </div>
                </div>
                <div className="field is-grouped is-grouped-right">
                    <div className="control">
                        <input type="reset" className="button is-warning is-light" value="Сброс" />
                    </div>
                    <div className="control">
                        <input type="submit" className="button is-primary" value="Сздать дело" />
                    </div>
                </div>
            </form>
        </section>
    );
}