// モックサーバーへの処理
import axios from "axios";
//データセット,モックサーバーURL

const todoDataUrl = "http://localhost:3100/todos"

//サーバー上のすべてのTODOを取得する
// 他ファイルで関数を使用できるようにするためにexportする
export const getAllTodosData = async () => {
	const response = await axios.get(todoDataUrl);
	return response.data;
};

//新規TODOを追加
export const addTodoData = async (todo) => {
	const response = await axios.post(todoDataUrl, todo);
	return response.data;
};

//TODOを削除
export const deleteTodoData = async (id) => {
	await axios.delete(`${todoDataUrl}/${id}`);

	return id;
};

//axios.put()で一致したidのTODOを更新する

export const updateTodoData = async (id, todo) => {
	const response = await axios.put(`${todoDataUrl}/${id}`, todo);

	return response.data;
};