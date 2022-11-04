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
    <C.ItemContainer>
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
    </C.ItemContainer>
  );
};

export default ListItem;
