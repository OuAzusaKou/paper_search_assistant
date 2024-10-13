import React, { useState } from 'react';
import { Search, Book, Users, ArrowRight } from 'lucide-react';
import SearchForm from './components/SearchForm';
import PaperList from './components/PaperList';
import { Paper } from './types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function App() {
  const [papers, setPapers] = useState<Paper[]>([]);
  const [selectedPaper, setSelectedPaper] = useState<Paper | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string, sources: string[]) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, sources }),
      });
      const data = await response.json();
      setPapers(data);
    } catch (error) {
      console.error('Error searching papers:', error);
      alert('An error occurred while searching for papers. Please try again.');
    }
    setLoading(false);
    setSelectedPaper(null);
  };

  // ... rest of the component remains the same
}

export default App;