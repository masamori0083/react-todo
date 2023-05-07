import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	styles: {
		global: {
			body: {
				backgroundColor: "orange.50",
				color: "gray.800",
			},
			p: {
				// mdを境にPC表示とSP表示を切り替える
				fontSize: { base: "md", md: "lg" },
				lineHeight: "tall"
			}
		}
	}
});

export default theme;