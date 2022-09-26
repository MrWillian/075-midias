import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import ListItem from './ListItem';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

const AlbumList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const allFiles = ref(storage, 'albuns/');

        console.log(allFiles);
    }, []);
    
    const addNewAlbum = () => {
        
    }

    const listItem = () => {
        // storage.ref().child('images/').listAll().then(res => {
        const allFiles = ref(storage, 'albuns/');

        console.log(allFiles);
        // .storage().child('albuns').listAll().then(res => {
        //     res.items.forEach((item) => {
        //         setData(arr => [...arr, item.name]);
        //     })
        // }).catch(err => {
        //     alert(err.message);
        // });
    }
    
    // function updateTask({target}, index) {
    //     const itensCopy = Array.from(tasks);
    //     itensCopy.splice(index, 1, { id: index, value: target.value });
    //     setTasks(itensCopy);
    // }
    
    // function deleteTask(index) {
    //     const itensCopy = Array.from(tasks);
    //     itensCopy.splice(index, 1);
    //     setTasks(itensCopy);
    // }

    return (
        <div className="App">
            <div className="App-header">
                <Button onClick={addNewAlbum} />
                {/* {tasks.map(({id, value}, index) => (
                    <ListItem
                        key={id}
                        value={value}
                        onChange={(event) => updateTask(event, index)}
                        onDelete={() => deleteTask(index)}
                    />
                ))} */}
            </div>
        </div>
    );
}

export default AlbumList;
