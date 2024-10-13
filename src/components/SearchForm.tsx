import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchFormProps {
  onSearch: (query: string, sources: string[]) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [sources, setSources] = useState<string[]>(['arXiv', 'AAAI', 'NeurIPS', 'ICLR']);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, sources);
  };

  const handleSourceToggle = (source: string) => {
    setSources(prev =>
      prev.includes(source) ? prev.filter(s => s !== source) : [...prev, source]
    );
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter paper title or description"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 transition-colors flex items-center"
        >
          <Search className="mr-2" size={20} />
          Search
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {['arXiv', 'AAAI', 'NeurIPS', 'ICLR'].map(source => (
          <label key={source} className="inline-flex items-center">
            <input
              type="checkbox"
              checked={sources.includes(source)}
              onChange={() => handleSourceToggle(source)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">{source}</span>
          </label>
        ))}
      </div>
    </form>
  );
};

export default SearchForm;