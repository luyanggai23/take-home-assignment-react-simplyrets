import { Routes, Route } from "react-router-dom";
import HomePage from './pages/home-page';
import ListingsPage from './pages/listings-page';
import Header from './components/Header/Header';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listings" element={<ListingsPage />} />
        </Routes>
      </div>
    </QueryClientProvider>
   
  );
}

export default App;
