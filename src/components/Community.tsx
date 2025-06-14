import React, { useState } from 'react';
import { Users, MessageSquare, Heart, Award, TrendingUp, Calendar, Star, ThumbsUp, Eye, Filter } from 'lucide-react';
import { DamageObject } from '../types';

interface CommunityProps {
  objects: DamageObject[];
}

const Community: React.FC<CommunityProps> = ({ objects }) => {
  const [activeTab, setActiveTab] = useState<'discussions' | 'leaderboard' | 'voting'>('discussions');

  const discussions = [
    {
      id: '1',
      title: 'Пріоритизація відновлення шкіл у Київській області',
      author: 'Марія Петренко',
      avatar: '👩‍🏫',
      replies: 23,
      likes: 45,
      views: 234,
      timeAgo: '2 години тому',
      category: 'Освіта',
      isHot: true
    },
    {
      id: '2',
      title: 'Громадський контроль за тендерами на відновлення лікарень',
      author: 'Олександр Коваленко',
      avatar: '👨‍⚕️',
      replies: 18,
      likes: 67,
      views: 456,
      timeAgo: '4 години тому',
      category: 'Охорона здоров\'я',
      isHot: false
    },
    {
      id: '3',
      title: 'Пропозиції щодо покращення системи верифікації',
      author: 'Анна Сидоренко',
      avatar: '👩‍💼',
      replies: 31,
      likes: 89,
      views: 678,
      timeAgo: '6 годин тому',
      category: 'Платформа',
      isHot: true
    },
    {
      id: '4',
      title: 'Досвід відновлення інфраструктури в Харківській області',
      author: 'Дмитро Іваненко',
      avatar: '👨‍🔧',
      replies: 12,
      likes: 34,
      views: 189,
      timeAgo: '8 годин тому',
      category: 'Інфраструктура',
      isHot: false
    }
  ];

  const leaderboard = [
    {
      rank: 1,
      name: 'Марія Петренко',
      avatar: '👩‍🏫',
      points: 2847,
      contributions: 156,
      badge: 'Експерт з освіти',
      badgeColor: 'bg-blue-100 text-blue-800'
    },
    {
      rank: 2,
      name: 'Олександр Коваленко',
      avatar: '👨‍⚕️',
      points: 2634,
      contributions: 142,
      badge: 'Медичний консультант',
      badgeColor: 'bg-green-100 text-green-800'
    },
    {
      rank: 3,
      name: 'Анна Сидоренко',
      avatar: '👩‍💼',
      points: 2456,
      contributions: 134,
      badge: 'Активіст',
      badgeColor: 'bg-purple-100 text-purple-800'
    },
    {
      rank: 4,
      name: 'Дмитро Іваненко',
      avatar: '👨‍🔧',
      points: 2234,
      contributions: 128,
      badge: 'Інженер',
      badgeColor: 'bg-orange-100 text-orange-800'
    },
    {
      rank: 5,
      name: 'Ольга Мельник',
      avatar: '👩‍🎓',
      points: 2156,
      contributions: 119,
      badge: 'Дослідник',
      badgeColor: 'bg-yellow-100 text-yellow-800'
    }
  ];

  const votingProjects = [
    {
      id: '1',
      title: 'Школа №15 імені Тараса Шевченка',
      description: 'Відновлення після ракетного удару',
      votes: 1247,
      totalVoters: 1500,
      timeLeft: '5 днів',
      status: 'active',
      category: 'Освіта'
    },
    {
      id: '2',
      title: 'Дитячий садок "Сонечко"',
      description: 'Ремонт покрівлі та вікон',
      votes: 892,
      totalVoters: 1200,
      timeLeft: '12 днів',
      status: 'active',
      category: 'Освіта'
    },
    {
      id: '3',
      title: 'Міський парк культури',
      description: 'Відновлення зеленої зони',
      votes: 2156,
      totalVoters: 2500,
      timeLeft: 'Завершено',
      status: 'completed',
      category: 'Культура'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Громадська платформа</h1>
          <p className="text-gray-600">Обговорення, голосування та співпраця заради відновлення</p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">15,247</div>
            <div className="text-gray-600">Активних учасників</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">2,847</div>
            <div className="text-gray-600">Обговорень</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">89,234</div>
            <div className="text-gray-600">Голосів підтримки</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">1,456</div>
            <div className="text-gray-600">Експертів</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('discussions')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'discussions'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <MessageSquare className="w-5 h-5 inline mr-2" />
                Обговорення
              </button>
              <button
                onClick={() => setActiveTab('voting')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'voting'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <ThumbsUp className="w-5 h-5 inline mr-2" />
                Голосування
              </button>
              <button
                onClick={() => setActiveTab('leaderboard')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'leaderboard'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Award className="w-5 h-5 inline mr-2" />
                Рейтинг
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'discussions' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-900">Активні обговорення</h3>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Нове обговорення
                  </button>
                </div>

                <div className="space-y-4">
                  {discussions.map((discussion) => (
                    <div key={discussion.id} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="text-3xl">{discussion.avatar}</div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h4 className="font-bold text-gray-900 text-lg">{discussion.title}</h4>
                              {discussion.isHot && (
                                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                                  🔥 Гаряче
                                </span>
                              )}
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                                {discussion.category}
                              </span>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                              <span>Автор: {discussion.author}</span>
                              <span>{discussion.timeAgo}</span>
                            </div>
                            <div className="flex items-center space-x-6 text-sm text-gray-600">
                              <div className="flex items-center space-x-1">
                                <MessageSquare className="w-4 h-4" />
                                <span>{discussion.replies} відповідей</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Heart className="w-4 h-4" />
                                <span>{discussion.likes} вподобань</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Eye className="w-4 h-4" />
                                <span>{discussion.views} переглядів</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'voting' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-900">Громадське голосування</h3>
                  <div className="text-sm text-gray-600">
                    Голосування допомагає визначити пріоритети відновлення
                  </div>
                </div>

                <div className="space-y-4">
                  {votingProjects.map((project) => (
                    <div key={project.id} className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-bold text-gray-900 text-lg">{project.title}</h4>
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                              {project.category}
                            </span>
                            {project.status === 'completed' && (
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                                Завершено
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 mb-4">{project.description}</p>
                          
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm text-gray-600">
                              {project.votes} з {project.totalVoters} голосів
                            </span>
                            <span className="text-sm font-medium text-gray-900">
                              {Math.round((project.votes / project.totalVoters) * 100)}%
                            </span>
                          </div>
                          
                          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-500" 
                              style={{ width: `${(project.votes / project.totalVoters) * 100}%` }}
                            ></div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">
                              Залишилось: {project.timeLeft}
                            </span>
                            {project.status === 'active' && (
                              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                                Підтримати
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'leaderboard' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-900">Рейтинг активних учасників</h3>
                  <div className="text-sm text-gray-600">
                    Оновлюється щотижня
                  </div>
                </div>

                <div className="space-y-4">
                  {leaderboard.map((user) => (
                    <div key={user.rank} className="bg-gray-50 rounded-xl p-6 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                          user.rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                          user.rank === 2 ? 'bg-gray-100 text-gray-800' :
                          user.rank === 3 ? 'bg-orange-100 text-orange-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : user.rank === 3 ? '🥉' : user.rank}
                        </div>
                        
                        <div className="text-3xl">{user.avatar}</div>
                        
                        <div>
                          <div className="font-bold text-gray-900 text-lg">{user.name}</div>
                          <div className="flex items-center space-x-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${user.badgeColor}`}>
                              {user.badge}
                            </span>
                            <span className="text-sm text-gray-500">
                              {user.contributions} внесків
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">{user.points.toLocaleString()}</div>
                        <div className="text-sm text-gray-500">балів</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;