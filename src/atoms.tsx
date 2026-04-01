import { atom, selector } from "recoil";

export enum Categories {
    "TO_DO" = "TO_DO",
    "DOING" = "DOING",
    "DONE"  = "DONE",
} //ENUM은 객체의 키와 값이 동일한 경우에 사용하면 좋다.

export type Category = string;

export interface IToDo {
    text:string;
    id:number;
    category: Category;
}

export const categoryListState = atom<Category[]>({
    key: "categoryList",
    default: [Categories.TO_DO, Categories.DOING, Categories.DONE],
});

export const toDoState  = atom<IToDo[]>({
    key: "toDo",
    default: []
});

export const categoryState  = atom<Category>({
    key: "category",
    default: Categories.TO_DO,
});

export const todoSelector = selector({
    key: "toDoSelector",
    get: ({get}) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter((toDo) => toDo.category === category);
    }
});