
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { KEY_MAP, STATEMENTS_DATA, QUESTIONS_DATA, SUGGESTIONS } from './constants';
import type { Statement, Question, Scores, AnswerState, Group, GroupKey } from './types';
import FloatingShapes from './components/FloatingShapes';
import StatementQuestion from './components/StatementQuestion';
import ScenarioQuestion from './components/ScenarioQuestion';
import Results from './components/Results';

const App: React.FC = () => {
  const [shuffledStatements, setShuffledStatements] = useState<Statement[]>([]);
  const [answers, setAnswers] = useState<AnswerState>({});
  const [results, setResults] = useState<Scores | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShuffledStatements([...STATEMENTS_DATA].sort(() => Math.random() - 0.5));
  }, []);

  const handleStatementChange = useCallback((index: number, value: string) => {
    setAnswers(prev => ({ ...prev, [`s${index}`]: value }));
  }, []);

  const handleQuestionChange = useCallback((qIndex: number, optionKey: string, checked: boolean) => {
    setAnswers(prev => {
      const prevAnswers = (prev[`q${qIndex}`] as string[]) || [];
      const newAnswers = checked 
        ? [...prevAnswers, optionKey] 
        : prevAnswers.filter(ans => ans !== optionKey);
      return { ...prev, [`q${qIndex}`]: newAnswers };
    });
  }, []);
  
  const computeScores = (): Scores => {
      const totals: Scores = { academic: 0, artistic: 0, cultural: 0, social: 0, sports: 0 };
      
      shuffledStatements.forEach((st, idx) => {
          const val = answers[`s${idx}`];
          if (val) {
              totals[KEY_MAP[st.group]] += parseInt(val as string, 10);
          }
      });
      
      QUESTIONS_DATA.forEach((Q, idx) => {
          const choices = answers[`q${idx}`] as string[];
          if (choices) {
              choices.forEach(ch => {
                  const mapping = Q[ch as keyof Omit<Question, 'q'>][2];
                  for (const raw in mapping) {
                      const pts = mapping[raw as Group];
                      const k = KEY_MAP[raw as Group];
                      // Fix: Add undefined check for `pts`. The score mapping type is now Partial, so TypeScript
                      // correctly infers that `pts` could be undefined. This check ensures type safety.
                      if (k && pts !== undefined) {
                        totals[k] += pts;
                      }
                  }
              });
          }
      });
      return totals;
  };

  const handleSubmit = () => {
    for (let i = 0; i < shuffledStatements.length; i++) {
      if (!answers[`s${i}`]) {
        setError(`Vui lòng trả lời đủ các câu ở Phần 1 (Câu số ${i + 1})!`);
        return;
      }
    }
    setError(null);
    const finalScores = computeScores();
    setResults(finalScores);
    setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleReset = () => {
    if (window.confirm('Bạn có chắc muốn làm lại bài test không?')) {
      setAnswers({});
      setResults(null);
      setError(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="gradient-bg min-h-screen text-slate-800 flex items-center justify-center p-6 relative overflow-hidden">
      <FloatingShapes />
      <main className="w-full max-w-4xl bg-white/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl z-10">
        <header className="mb-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold">Các PTNK-ers phù hợp với CLB nào nhất nhỉ? ✨</h1>
          <p className="mt-2 text-slate-600">
            Hãy cùng <strong>BCH Đoàn trường PTNK</strong> trả lời các câu hỏi bên dưới để hệ thống gợi ý CLB phù hợp nhé!
          </p>
        </header>

        <section id="quiz">
          <form>
            <h2 className="text-xl font-bold mb-4 border-b-2 border-violet-300 pb-2">Phần 1: Statements (Thang điểm 1-5)</h2>
            <div className="space-y-4">
              {shuffledStatements.map((st, idx) => (
                <StatementQuestion
                  key={idx}
                  statement={st}
                  index={idx}
                  value={answers[`s${idx}`] as string || ''}
                  onChange={handleStatementChange}
                />
              ))}
            </div>

            <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-pink-300 pb-2">Phần 2: Câu hỏi tình huống (Chọn nhiều đáp án)</h2>
            <div className="space-y-4">
                {QUESTIONS_DATA.map((q, idx) => (
                    <ScenarioQuestion 
                        key={idx}
                        question={q}
                        index={idx}
                        values={answers[`q${idx}`] as string[] || []}
                        onChange={handleQuestionChange}
                    />
                ))}
            </div>

            {error && <div className="mt-6 p-3 bg-red-100 text-red-700 rounded-lg text-center">{error}</div>}

            <div className="flex gap-4 justify-center mt-8">
              <button type="button" className="px-6 py-3 rounded-lg font-bold bg-violet-500 text-white hover:bg-violet-600 transition-colors shadow-lg" onClick={handleSubmit}>
                Xem kết quả
              </button>
              <button type="button" className="px-6 py-3 rounded-lg font-bold bg-white text-slate-600 border border-slate-300 hover:bg-slate-100 transition-colors" onClick={handleReset}>
                Làm lại
              </button>
            </div>
          </form>

          {results && <Results results={results} ref={resultsRef} />}
        </section>
        
        <footer className="text-center text-slate-500 text-sm mt-8">
          ClubFinder PTNK — Bản demo phát triển bởi AI.
        </footer>
      </main>
    </div>
  );
};

export default App;