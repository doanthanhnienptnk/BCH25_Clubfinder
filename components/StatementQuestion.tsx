
import React, { memo } from 'react';
import type { Statement } from '../types';

interface StatementQuestionProps {
  statement: Statement;
  index: number;
  value: string;
  onChange: (index: number, value: string) => void;
}

const StatementQuestion: React.FC<StatementQuestionProps> = ({ statement, index, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(index, e.target.value);
  };

  return (
    <div className="p-4 rounded-xl bg-slate-50 shadow-sm">
      <h3 className="font-bold text-slate-700 mb-3">{index + 1}. {statement.text}</h3>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <label key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-slate-200 transition-colors has-[:checked]:bg-violet-200 has-[:checked]:text-violet-800 has-[:checked]:font-bold">
            <input
              type="radio"
              name={`s${index}`}
              id={`s${index}_${i}`}
              value={i}
              checked={value === String(i)}
              onChange={handleChange}
              className="accent-violet-500"
              required
            />
            {i}
          </label>
        ))}
      </div>
    </div>
  );
};

export default memo(StatementQuestion);
