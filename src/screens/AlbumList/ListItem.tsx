import React from 'react';
import Button from '../../components/Button';
import { MdModeEdit, MdRemoveRedEye, MdOutlineDelete } from "react-icons/md";

type Props = {
    onChange: React.MouseEventHandler<HTMLButtonElement>, 
    onShow: React.MouseEventHandler<HTMLButtonElement>,
    onDelete: React.MouseEventHandler<HTMLButtonElement>, 
    name: string,
    date: string,
}

const ListItem = ({ onChange, onShow, onDelete, name, date }: Props) => {
  return (
    <div 
      style={{
        display: 'flex', 
        width: '80%', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderBottom: '1px solid rgba(0, 0, 0, 0.5)',
        WebkitBackgroundClip: 'padding-box',
        backgroundClip: 'padding-box',
      }}
    >
      <div>
        <span style={{fontSize: '22px', color: '#000', fontWeight: '900'}}>
          {name && <>{name}&nbsp;</>}
        </span>
        <span style={{fontSize: '18px', color: '#000', fontWeight: '900'}}>
          {date && <>({date})</>}
        </span>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', margin: '5px 0'}}>
        {/* <Button 
          text="Editar" 
          onClick={onChange} 
          style={{height: '40px', width: '40px', margin: '0 5px'}}
          Icon={MdModeEdit}
          iconSize={24}
          color='#C75104'
        /> */}
        <Button 
          text="Mostrar" 
          onClick={onShow} 
          style={{height: '40px', width: '40px', margin: '0 5px'}}
          Icon={MdRemoveRedEye}
          iconSize={24}
          color='#C75104'
        />
        <Button 
          text="Excluir" 
          onClick={onDelete} 
          style={{height: '40px', width: '40px'}} 
          Icon={MdOutlineDelete}
          iconSize={24}
          color='#C75104'
        />
      </div>
    </div>
  );
};

export default ListItem;
