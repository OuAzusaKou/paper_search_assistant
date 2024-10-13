import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Paper } from '../types';

interface PaperListProps {
  papers: Paper[];
  onPaperSelect: (paper: Paper) => void;
  selectedPaper: Paper | null;
}

const PaperList: React.FC<PaperListProps> = ({ papers, onPaperSelect, selectedPaper }) => {
  if (papers.length === 0) {
    return <p className="text-center text-gray-500">No papers found. Try searching for a paper.</p>;
  }

  return (
    <ul className="space-y-4">
      {papers.map(paper => (
        <li
          key={paper.id}
          className={`bg-white p-4 rounded-lg shadow-md cursor-pointer transition-colors ${
            selectedPaper?.id === paper.id ? 'border-2 border-blue-500' : 'hover:bg-gray-50'
          }`}
          onClick={() => onPaperSelect(paper)}
        >
          <h3 className="text-lg font-semibold mb-2">{paper.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{paper.authors.join(', ')}</p>
          <div className="flex justify-between items-center text-sm">
            <span className="text-blue-600">{paper.source}</span>
            <span className="text-gray-500">{paper.year}</span>
          </div>
          <ArrowRight className="mt-2 text-blue-500" size={20} />
        </li>
      ))}
    </ul>
  );
};

export default PaperList;