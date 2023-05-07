// TODOの要素のコンポーネント。TodoListに渡される。
// TODOの要素の状態を変化させる処理とTODOの要素を削除する機能も追加。
import { DeleteIcon } from "@chakra-ui/icons";
import { Button, Flex, IconButton, ListItem, Text } from "@chakra-ui/react";

export const TodoItem = ({ todo, toggleTodoListItemStatus, deleteTodoListItem }) => {
	
	// TODO要素の状態を変化させる
	const handleToggleTodoListItemStatus = () => toggleTodoListItemStatus(todo.id, todo.done);

	//TODOの削除
	const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);

	const label = todo.done ? "未完了リストへ" : "完了リストへ";

	const setColorScheme = todo.done ? "pink" : "blue";
	
	return (
		<ListItem
			borderWidth="1px"
			p="4"
			mt="4"
			bg="white"
			borderRadius="md"
			borderColor="gray.300"

		>
			<Text md="6">{todo.content}</Text>
			<Flex align="center" justify="flex-end">
				<Button
					colorScheme={setColorScheme}
					variant="outline"
					size="sm"
					onClick={handleToggleTodoListItemStatus}>{label}</Button>
				<IconButton
					icon={<DeleteIcon />}
					variant="unstyled"
					aria-label="delete"
					onClick={handleDeleteTodoListItem} />
			</Flex>
		</ListItem>
	);
};