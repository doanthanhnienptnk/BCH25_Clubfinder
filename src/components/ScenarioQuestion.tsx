import React, { memo } from 'react';
import type { Question } from '../../types.ts';

interface ScenarioQuestionProps {
  question: Question;
  index: number;
  values: string[];
  onChange: (qIndex: number, optionKey: string, checked: boolean) => void;
}

const ScenarioQuestion: React.FC<ScenarioQuestionProps> = ({ question, index, values, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(index, e.target.value, e.target.checked);
  };
  
  const options = ['a', 'b', 'c', 'd', 'e'] as const;

  return (
    <div className="p-4 rounded-xl bg-slate-50/70 shadow-sm">
      <h3 className="font-bold text-slate-800 mb-3">{question.q}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {options.map((letter) => {
          const item = question[letter];
          if (!item) return null;
          const id = `q${index}_${letter}`;
          return (
            <label key={id} htmlFor={id} className="flex gap-3 items-center p-3 rounded-lg cursor-pointer transition-colors has-[:checked]:bg-accent/10 has-[:checked]:font-bold hover:bg-slate-200">
              <input
                type="checkbox"
                name={`q${index}`}
                id={id}
                value={letter}
                checked={values.includes(letter)}
                onChange={handleChange}
                className="accent-accent w-4 h-4 flex-shrink-0"
              />
              <span>{item[0]}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default memo(ScenarioQuestion);