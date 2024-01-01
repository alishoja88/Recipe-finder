import './App.css';
import { AppProvider } from './context/recipeData';
import SearchBar from './component/SearchBar';
import RecipeList from './component/RecipeList';

function App() {

  return (

    <AppProvider >
      <SearchBar />
      <RecipeList />

    </AppProvider>
  );
}

export default App;
