import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import theme from './theme/theme';

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
		  <App />
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById('root')
)