import React from 'react';

type Props = {
    onChange: React.ChangeEventHandler<HTMLInputElement>, 
    onDelete: React.MouseEventHandler<HTMLButtonElement>, 
    value: string;
}

const ListItem = ({ onChange, onDelete, value }: Props) => {
  return (
    <div className="Item-container">
      <input
        className="Item-field"
        value={value}
        onChange={onChange}
      />
      <button onClick={onDelete}>Excluir</button>
    </div>
  );
};

export default ListItem;
