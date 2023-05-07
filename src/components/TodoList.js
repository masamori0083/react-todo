import { List } from "@chakra-ui/react";
import { TodoItem } from "./TodoItem";
import { TodoTitle } from "./TodoTitle";

// TODOリストを表示するコンポーネント
export const TodoList = ({
	title,
	as,
	fontSize,
	todoList,
	toggleTodoListItemStatus,
	deleteTodoListItem }) => {
	return (
		<>
			{todoList.length !== 0 && (
				<>
					<TodoTitle title={title} as={as} fontSize={fontSize} mt="12" />
					<List w="full">
						{todoList.map((todo) => {
							// keyはreact内部のみで使われて、リスト内の要素に一意のキーを割り当てる。
							// keyはリスト内要素を効率的にレンダリング、更新する際に割り当てることが推奨
							// どのコンポーネントにも、理論上は割り当てることができる
							return (<
								TodoItem
								todo={todo}
								key={todo.id}
								toggleTodoListItemStatus={toggleTodoListItemStatus}
								deleteTodoListItem={deleteTodoListItem}
							/>
							)
						})}
					</List>
				</>
			)}
		</>
	);
};