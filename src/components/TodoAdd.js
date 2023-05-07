// TODOリストを新たに作成するコンポーネント
import { Button, Textarea } from "@chakra-ui/react";

export const TodoAdd = ({
	placeholder,
	leftIcon,
	buttonText,
	inputEl,
	handleAddtodoListItem
}) => {
	return (
		<>
			<Textarea
				placeholder={placeholder}
				bgcolor="white"
				mt="8"
				borderColor="gray.400"
				ref={inputEl} />
			<Button
				onClick={handleAddtodoListItem}
				colorScheme="blue"
				leftIcon={leftIcon}
				mt="8"
			>
				{buttonText}
			</Button>
		</>
	);
};