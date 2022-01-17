import { Container } from './components/styles/Container.styled';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import Header from './components/Header';
import Card from './components/Card';
import content from './content';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ListCard from './components/ListCard';

const theme = {
	colors: {
		dark: '#818181',
		nav: '#E9FCFF',
		header: '#000',
		body: '#FDFDFD',
		footer: '#00333',
		main: '#1976d2',
		secondary: '#1FAAFF',
		tertiary: '#989898',
	},
};

function App() {

  const cardContent = content.filter(item => item.list === false)
  const listContent = content.filter(item => item.list === true)

	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Header />
				<Container>
					{cardContent.map((item, index) => (
						<Card key={index} item={item} />
					))}
					{listContent.map((item, index) => (
						<ListCard key={index} item={item} />
					))}
				</Container>
				<Contact />
				<Footer />
			</>
		</ThemeProvider>
	);
}

export default App;
// {index < 4 ? : <ListCard/>}
