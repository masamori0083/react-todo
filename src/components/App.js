import { AddIcon } from "@chakra-ui/icons";
import { Container } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { TodoTitle } from "./TodoTitle";



// アプリ全体のコンポーネント。main関数
function App() {

	// useTodo()カスタムフックで作成したtodoListを利用できるようにする
	// フック
	const { todoList, // TODOの現在の状態
		addTodoListItem, // 新規TODOを追加する関数
		toggleTodoListItemStatus, // doneを反転させて更新する関数
		deleteTodoListItem, // TODOを削除する関数
	} = useTodo();

	//参照オブジェクト。inputElに紐づけられた<input>の情報を保持する
	const inputEl = useRef(null);

	//入力フォームに入力されたTODOを登録する
	const handleAddtodoListItem = () => {

		// 何も入力されていない場合は、クリックしても何も返さない
		if (inputEl.current.value === "") return;

		//要素を追加
		addTodoListItem(inputEl.current.value);

		// 新規TODOを追加したら、テキストエリアを空にする
		inputEl.current.value = "";
	};
	console.log("ToDoリスト:", todoList)

	//未完了配列を生成
	const inCompletedList = todoList.filter((todo) => {
		return !todo.done;
	});
	
	// 完了配列を生成
	const completedList = todoList.filter((todo) => {
		return todo.done;
	})

	return (
		// Container コンポーネントはdivタグになる
		// centerContent はcenter寄せになる
		<Container centerContent p={{base: "4", md:"6"}} maxWidth="3xl">
			<TodoTitle title="TODO進捗管理" as="h1" fontSize={{base:"2xl", md:"3xl"}}/>

			<TodoAdd
				placeholder="ADD TODO"
				leftIcon={<AddIcon />}
				buttonText="TODOを追加"
				inputEl={inputEl}
				handleAddtodoListItem={handleAddtodoListItem}
			/>

			
			<TodoList
				todoList={inCompletedList}

				// useTodo()カスタムフックで作成したtoggleTodoListItemStatusを子コンポーネントへ
				// propsで渡す
				toggleTodoListItemStatus={toggleTodoListItemStatus}

				// useTodo()カスタムフックで作成したdeleteTodoListItemを子コンポーネントへ
				// propsで渡す
				deleteTodoListItem={deleteTodoListItem}
				title="未完了TODOリスト"
				as="h2"
				fontSize={{base:"xl", md:"2xl"}}
			/>
			
			<TodoList
				todoList={completedList}
				
				// useTodo()カスタムフックで作成したtoggleTodoListItemStatusを子コンポーネントへ
				// propsで渡す
				toggleTodoListItemStatus={toggleTodoListItemStatus}

				// useTodo()カスタムフックで作成したdeleteTodoListItemを子コンポーネントへ
				// propsで渡す
				deleteTodoListItem={deleteTodoListItem}
				title="未完了TODOリスト"
				as="h2"
				fontSize={{ base:"xl", md:"2xl"}}
			/>
		</Container>
	);
}
export default App;