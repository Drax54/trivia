import React from 'react';
import { Trophy, Medal, Award } from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  username: string;
  score: number;
  quizzesTaken: number;
  accuracy: number;
  category: string;
}

interface LeaderboardTableProps {
  entries: LeaderboardEntry[];
}

export default function LeaderboardTable({ entries }: LeaderboardTableProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Rank</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Player</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Score</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Quizzes</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Accuracy</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Category</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {entries.map((entry) => (
              <tr key={entry.rank} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    {entry.rank === 1 && <Trophy className="w-5 h-5 text-yellow-500 mr-2" />}
                    {entry.rank === 2 && <Medal className="w-5 h-5 text-gray-400 mr-2" />}
                    {entry.rank === 3 && <Award className="w-5 h-5 text-amber-600 mr-2" />}
                    <span className="font-medium text-gray-900">#{entry.rank}</span>
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900">{entry.username}</td>
                <td className="px-6 py-4 text-indigo-600 font-semibold">
                  {entry.score.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-gray-600">{entry.quizzesTaken}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${entry.accuracy}%` }}
                      />
                    </div>
                    <span className="text-gray-600">{entry.accuracy}%</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    {entry.category}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}