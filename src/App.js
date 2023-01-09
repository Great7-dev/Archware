import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from './components/Create/create';
import Dashboard from './components/Dashboard/dashboard';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
   <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
   </QueryClientProvider>
  );
}

export default App;
