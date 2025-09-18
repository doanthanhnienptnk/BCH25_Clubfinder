import React, { forwardRef } from 'react';
import type { Scores, GroupKey } from '../types';
import { SUGGESTIONS } from '../constants';

interface ResultsProps {
  results: Scores;
}

const GROUP_NAMES_MAP: Record<GroupKey, string> = {
  academic: 'Học thuật',
  artistic: 'Nghệ thuật',
  cultural: 'Văn hoá',
  social: 'Xã hội',
  sports: 'Thể thao'
};

const BADGE_COLORS: Record<GroupKey, string> = {
  academic: 'bg-blue-600 text-white',
  artistic: 'bg-accent text-white',
  cultural: 'bg-indigo-500 text-white',
  social: 'bg-teal-500 text-white',
  sports: 'bg-orange-500 text-white',
};

const Results = forwardRef<HTMLDivElement, ResultsProps>(({ results }, ref) => {
  const sortedResults = (Object.keys(results) as GroupKey[]).map(key => ({
    key,
    score: results[key]
  })).sort((a, b) => b.score - a.score);

  const topGroup = sortedResults[0];

  return (
    <div ref={ref} className="mt-8 p-6 rounded-xl bg-slate-50 border border-slate-200">
      <h3 className="text-xl font-bold text-center text-primary">
        Kết quả: Bạn phù hợp nhất với nhóm <strong className="text-accent">{GROUP_NAMES_MAP[topGroup.key]}</strong>
      </h3>
      <div className="flex flex-wrap gap-2 justify-center my-4">
        {sortedResults.map(item => (
          <div key={item.key} className={`px-4 py-1.5 rounded-full font-bold text-sm shadow ${BADGE_COLORS[item.key]}`}>
            {GROUP_NAMES_MAP[item.key]}: {item.score}
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h4 className="font-bold text-lg text-center mb-3 text-primary">CLB gợi ý dành cho bạn:</h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SUGGESTIONS[topGroup.key].map(club => (
            <div key={club} className="p-4 rounded-lg bg-white shadow-md text-center transition-transform hover:scale-105 hover:shadow-lg">
              <strong className="text-slate-800">{club}</strong>
              <br />
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-primary font-bold hover:underline mt-1 inline-block">
                Xem giới thiệu CLB
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Results;