import React, { useState, useEffect } from 'react';
import * as C from './style';
import Button from '../../components/Button';
import ListItem from './ListItem';
import { database, storage } from "../../firebase";
import { deleteObject, listAll, ref } from 'firebase/storage';
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/Navbar';
import { trackPromise } from 'react-promise-tracker';
import LoadingIndicator from '../../components/LoadingIndicator';

type Album = {
    id: string;
    name: string;
    date: string
}

const AlbumList = () => {
    const [albuns, setAlbuns] = useState<Album[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        trackPromise(getAlbumData());
    }, []);
    
    const addNewAlbum = () => navigate('/album');

    const updateTask = (id: string) => navigate(`/album/${id}`);

    const showAlbum = (id: string) => navigate(`/show-album/${id}`);

    const getAlbumData = async () => {
        var albunsDoc: Album[] = [];
        const querySnapshot = await getDocs(collection(database, "albuns"));
        querySnapshot.forEach((doc) => {
            albunsDoc.push({
                id: doc.id, 
                name: doc.data().name,
                date: doc.data().date.toDate().toLocaleDateString("pt-BR")
            })
        });
        setAlbuns(albunsDoc.sort((prev, next) => prev.name.localeCompare(next.name)));
    }
    
    const deleteTask = async (id: string) => {
        if (window.confirm('Você tem certeza que deseja deletar este álbum?')) {
            const albumToDeleteName = albuns.find(album => album.id === id)?.name;
            if (albumToDeleteName) {
                await deleteDoc(doc(database, "albuns", id));
                await deleteFolder(`albuns/${albumToDeleteName}`).then(() => {
                    alert('Álbum deletado com sucesso!');
                    setAlbuns(albuns.filter(item => item.id !== id));
                }).catch(error => alert(`Aconteceu um erro ao tentar deletar o álbum! ${error.message}`));
            }
        }
    }

    const deleteFolder = async (path: string) => {
        const folderRef = ref(storage, path);
        const fileList = await listAll(folderRef);
        const promises = [];
        for(let item of fileList.items) {
            promises.push(deleteObject(item));
        }
        const result = await Promise.all(promises);
        return result;
    }

    return (
        <C.Container>
            <Navbar />
            <C.Content>
                <C.List>
                    <Button 
                        onClick={addNewAlbum} 
                        text="Novo Álbum" 
                        style={{width: '150px', height: '30px'}} 
                        color='#C75104'
                    />
                    <LoadingIndicator />
                    {albuns.map(({id, name, date}) => (
                        <ListItem
                            key={id}
                            name={name}
                            date={date}
                            onChange={() => updateTask(id)}
                            onShow={() => showAlbum(id)}
                            onDelete={() => deleteTask(id)}
                        />
                    ))}
                </C.List>
            </C.Content>
        </C.Container>
    );
}

export default AlbumList;
