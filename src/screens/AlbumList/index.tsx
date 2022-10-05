import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import ListItem from './ListItem';
import { database } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/Navbar';

type Album = {
    id: string;
    name: string;
    date: string
}

const AlbumList = () => {
    const [albuns, setAlbuns] = useState<Album[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAlbumData()
    }, []);
    
    const addNewAlbum = () => navigate('/album');

    const updateTask = (id: string) => navigate(`/album/${id}`);

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
    
    function deleteTask(id: string) {
        const itensCopy = Array.from(albuns);
        itensCopy.filter(item => item.id !== id);
        setAlbuns(itensCopy);
    }

    return (
        <>
            <Navbar />
            <div className="App"
                style={{
                    display: 'flex',
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    flexDirection: 'column', 
                    height: '100%', 
                    width: '100%', 
                    padding: '30px 0',
                }}>
                <div 
                    className="App-header" 
                    style={{
                        display: 'flex',
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        flexDirection: 'column', 
                        backgroundColor: '#CCC',
                        borderRadius: '15px',
                        padding: '10px 0',
                        height: '50%', 
                        width: '50%', 
                        WebkitBoxShadow: '10px 10px 15px 0px rgba(0,0,0,0.75)',
                        MozBoxShadow: '10px 10px 15px 0px rgba(0,0,0,0.75)',
                        boxShadow: '10px 10px 15px 0px rgba(0,0,0,0.75)',
                    }}
                >
                    <Button 
                        onClick={addNewAlbum} 
                        text="Novo Álbum" 
                        style={{width: '150px', height: '30px'}} 
                        color='#C75104'
                    />
                    {albuns.map(({id, name, date}) => (
                        <ListItem
                            key={id}
                            name={name}
                            date={date}
                            onChange={() => updateTask(id)}
                            onDelete={() => deleteTask(id)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default AlbumList;
