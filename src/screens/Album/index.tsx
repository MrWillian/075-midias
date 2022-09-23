import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as C from './style';
import Slider, { ImageFileType } from '../../components/Slider';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

const MAX_COUNT = 30;

const Album = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");
    const [uploadedFiles, setUploadedFiles] = useState<ImageFileType[]>([]);
    const [fileLimit, setFileLimit] = useState(false);
    const [percent, setPercent] = useState(0);

    const handleUploadFiles = (files: ImageFileType[]) => {
        const uploaded = [...uploadedFiles];
        let limitExceeded = false;
        files.some((file: ImageFileType) => {
            if (uploaded.findIndex((f: ImageFileType) => f.name === file.name) === -1) {
                uploaded.push(file);
                if (uploaded.length === MAX_COUNT) setFileLimit(true);
                if (uploaded.length > MAX_COUNT) {
                    alert(`Você pode adicionar somente uma quantidade máxima de ${MAX_COUNT} arquivos.`);
                    setFileLimit(false);
                    limitExceeded = true;
                    return true;
                }
            }
        });
        if (!limitExceeded) setUploadedFiles(uploaded);
    }

    const handleFileEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files);
        let sanitizedFiles: ImageFileType[] = chosenFiles.map((chosenFile, index) => ({
            id: index,
            name: chosenFile.name,
            file: chosenFile,
            src: URL.createObjectURL(chosenFile)
        }));
        handleUploadFiles(sanitizedFiles);
    }

    const handleFilesToFirebase = () => {
        uploadedFiles.forEach((image) => {
            const storageRef = ref(storage, `/albuns/${name}/${image.name}`);
            const uploadTask = uploadBytesResumable(storageRef, image.file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    // update progress
                    setPercent(percent);
                },
                (err) => console.log('error', err),
                () => {
                    // download url
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        // console.log('url', url);
                    });
                }
            ); 
        });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleFilesToFirebase();
    }

    const handleSubmitButton: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        const casting = e as unknown;
        handleSubmit(casting as React.FormEvent<HTMLFormElement>);   
    }

    return (
        <>
            <Navbar />
            <C.Container>
                <C.Title>Álbum</C.Title>
                <C.Line />
                <C.Form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Digite o nome do álbum..."
                        value={name}
                        onChange={(e) => [setName(e.target.value), setError("")]}
                        autoFocus 
                    />
                    <C.WhiteSpace />
                    <Input
                        type="text"
                        name="description"
                        placeholder="Digite a descrição do álbum..."
                        value={description}
                        onChange={(e) => [setDescription(e.target.value), setError("")]}
                    />
                    <C.WhiteSpace />
                    <C.PhotosContainer>
                        <input 
                            type="file" 
                            name="images"
                            multiple 
                            onChange={handleFileEvent} 
                            accept='image/png, image/jpeg'
                            disabled={fileLimit} />
                        <p></p>
                    </C.PhotosContainer>
                    <div style={{
                        maxHeight: "200px",
                        maxWidth: "300px",
                        marginTop: "-140px",
                    }}>
                        <Slider images={uploadedFiles} />
                    </div>
                    <C.ButtonContainer>
                        <Button text="Registrar" style={{}} onClick={handleSubmitButton} />
                    </C.ButtonContainer>
                </C.Form>
            </C.Container>
        </>
    );
}

export default Album;