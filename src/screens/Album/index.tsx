import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as C from './style';
import Slider, { ImageFileType } from '../../components/Slider';
import { ref, uploadBytesResumable, getDownloadURL, listAll } from "firebase/storage";
import { collection, getDocs, query, Timestamp, addDoc } from "firebase/firestore";
import { database, storage } from "../../firebase";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MAX_COUNT = 30;

const Album = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [uploadedFiles, setUploadedFiles] = useState<ImageFileType[]>([]);
    const [fileLimit, setFileLimit] = useState(false);
    const navigate = useNavigate();
    let { id } = useParams();

    useEffect(() => {
        if (id !== undefined) {
            getAlbumById();
            getPhotosByNameAlbum();
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const getAlbumById = async () => {
        const querySnapshot = await getDocs(query(collection(database, "albuns")));
        querySnapshot.forEach((doc) => {
            if (doc.id === id) {
                setName(doc.data().name);
                setDescription(doc.data().description);
            }
        });
    }
    
    const getPhotosByNameAlbum = async () => {
        listAll(ref(storage, `albuns/${name}`)).then((result) => {
            console.log('result', result);
            // setUploadedFiles(result.items);
        }).catch(err => console.log(err));
    }

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
                    console.log(percent);
                    // update progress
                },
                (error) => {
                    switch (error.code) {
                        case 'storage/canceled':
                            alert('Upload has been canceled');
                            break;
                    }
                    console.log('error', error);
                },
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
        handleSaveToFirebase();
        alert("Álbum registrado com sucesso!")
        navigate('/album-list');
    }

    const handleSaveToFirebase = async () => {
        const docReference = await addDoc(collection(database, "albuns"), {
            name: name,
            description: description,
            date: Timestamp.fromDate(new Date()),
        });
    }

    return (
        <>
            <Navbar />
            <C.Container>
                <C.HeaderFormContainer>
                    <C.TitleContainer>
                        <C.Title>Álbum</C.Title>
                        <C.Line />
                    </C.TitleContainer>
                    <C.ButtonContainer>
                        <Button text="Registrar" onClick={handleSubmitButton} color="#C75104" />
                    </C.ButtonContainer>
                </C.HeaderFormContainer>
                <C.Form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Digite o nome do álbum..."
                        value={name}
                        onChange={(e) => [setName(e.target.value)]}
                        autoFocus 
                    />
                    <C.WhiteSpace />
                    <Input
                        type="text"
                        name="description"
                        placeholder="Digite a descrição do álbum..."
                        value={description}
                        onChange={(e) => [setDescription(e.target.value)]}
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
                        maxHeight: "50%",
                        maxWidth: "100%",
                        marginTop: "-120px",
                    }}>
                        <Slider images={uploadedFiles} />
                    </div>
                    {/* <p>{percent} "% done"</p> */}
                    
                </C.Form>
            </C.Container>
        </>
    );
}

export default Album;