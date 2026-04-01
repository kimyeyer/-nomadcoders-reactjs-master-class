import { useRecoilValue, useSetRecoilState } from 'recoil'
import { IToDo, toDoState, categoryListState } from '../atoms';
import React from 'react';

const formatCategoryLabel = (category: string) => {
    return category.replace(/_/g, ' ');
};

const ToDo = ({text, category, id}: IToDo) => {
    const setToDos = useSetRecoilState(toDoState);
    const categories = useRecoilValue(categoryListState);

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: {name},
        } = event;
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
            const newToDo = {text, id, category: name};
            const result = [
                ...oldToDos.slice(0, targetIndex), 
                newToDo, 
                ...oldToDos.slice(targetIndex + 1)
            ];
            return result;
        });
    }

    return (
        <li>
            <span>{text}</span>
            {categories.filter((item) => item !== category).map((item) => (
                <button key={item} name={item} onClick={onClick}>
                    {formatCategoryLabel(item)}
                </button>
            ))}
        </li>
    )
}

export default ToDo