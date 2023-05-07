import { useEffect, useState } from "react";
import { ulid } from 'ulid';
import * as todoData from "../apis/todos";

// カスタムフックの作成
export const useTodo = () => {
	const [todoList, setTodoList] = useState([]);
	useEffect(() => {
		todoData.getAllTodosData().then((todo) => {
			setTodoList([...todo].reverse());
		});
	}, []);
	
	// TODOの状態を更新
	const toggleTodoListItemStatus = (id, done) => {
		// findは最初にtrueになった要素を返し、その時点で処理を終了する
		const todoItem = todoList.find((item) => item.id === id);

		//取得したtodoItemのdoneの状態を反転させる
		const newTodoItem = { ...todoItem, done: !done };

		//todoListの状態も更新
		todoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
			const newTodoList = todoList.map((item) =>
				// idが異なる場合はそのまま、同じ場合はdoneの状態を反転させたupdatedTodoを返して新しい配列を作成
				item.id !== updatedTodo.id ? item : updatedTodo);
			
			setTodoList(newTodoList);
		});
	};
	// 新規TODOを追加。
	const addTodoListItem = (todoContent) => {
		
		// todoのオブジェクトを生成
		const newTodoItem = {
			content: todoContent,
			id: ulid(),
			done: false
		};
		return todoData.addTodoData(newTodoItem).then((addTodo) => {
			// todoListの状態をnewTodoItemが追加された状態に更新する
			setTodoList([addTodo, ...todoList]);
		});
	};

	// TODOの削除
	const deleteTodoListItem = (id) => {
		todoData.deleteTodoData(id).then((deleteListItemId) => {
			const newTodoList = todoList.filter(
				(item) => item.id !== deleteListItemId
			);
			// todoListの状態を指定されたidのTODOが削除された状態に更新する
			setTodoList(newTodoList);
		});
	};

	//作成した関数群を実行
	return {
		todoList, toggleTodoListItemStatus, addTodoListItem, deleteTodoListItem
	};
};

