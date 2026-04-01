import React, { useEffect, useRef, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';
import { Categories, categoryListState, categoryState, todoSelector, toDoState } from '../atoms';

function ToDoList() {
    const isFirstRender = useRef(false);
    const [todo, setTodo] = useRecoilState(toDoState);
    const toDos = useRecoilValue(todoSelector);
    const [categories, setCategories] = useRecoilState(categoryListState);
    const [category, setCategory] = useRecoilState(categoryState);
    const [tempCategory, setTempCategory] = useState<string>("");

    const onChangeCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTempCategory(event.currentTarget.value);
    }

    const onSaveCategory = () => {
        const newCategory = tempCategory.trim();
        if (!newCategory) return;
        if (categories.includes(newCategory)) {
            setTempCategory("");
            return;
        }

        setCategories((oldCategories) => [...oldCategories, newCategory]);
        setCategory(newCategory);
        setTempCategory("");
    }

    const onInput = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value);
    }
    
    useEffect(() => {
        const savedToDos = localStorage.getItem("toDos");
        const savedCategories = localStorage.getItem("categories");

        if (savedToDos) {
            try {
                setTodo(JSON.parse(savedToDos));
            } catch (error) {
                console.error(error);
            }
        }

        if (savedCategories) {
            try {
                const parsed = JSON.parse(savedCategories);
                if (Array.isArray(parsed)) {
                    setCategories(parsed);
                }
            } catch (error) {
                console.error(error);
            }
        }

        isFirstRender.current = true;
    }, [setCategories, setTodo]);

    useEffect(() => {
        if (!isFirstRender.current) return;

        try {
            localStorage.setItem("toDos", JSON.stringify(todo));
            localStorage.setItem("categories", JSON.stringify(categories));
        } catch (error) {
            console.error(error);
        }
    }, [todo, categories]);

    return (
        <div>
            <h1>To Dos</h1>
            <hr/>
            <div>
                <input
                    type="text"
                    placeholder='새 카테고리 이름'
                    value={tempCategory}
                    onChange={onChangeCategory}
                />
                <button type="button" onClick={onSaveCategory}>카테고리 추가</button>
            </div>
            <select value={category} onChange={onInput}>
                {categories.map((item) => (
                    <option key={item} value={item}>{item.replace(/_/g, ' ')}</option>
                ))}
            </select>
            <CreateToDo/>
            {
                toDos?.map((aToDo) => (
                    <ToDo key={aToDo.id} {...aToDo} />
                ))
            }
        </div>
    )
}
export default ToDoList