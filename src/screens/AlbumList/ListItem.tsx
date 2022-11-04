import React from 'react';
import Button from '../../components/Button';
import { MdRemoveRedEye, MdOutlineDelete } from "react-icons/md";
import * as C from './style';

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
        <C.NameLabel>
          {name && <>{name}&nbsp;</>}
        </C.NameLabel>
        <C.DateLabel>
          {date && <>({date})</>}
        </C.DateLabel>
      </div>
      <C.ButtonsActionContainer>
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
      </C.ButtonsActionContainer>
    </div>
  );
};

export default ListItem;
