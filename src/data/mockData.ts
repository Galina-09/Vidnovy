import { DamageReport, ProjectStats } from '../types';

export const mockReports: DamageReport[] = [
  {
    id: '1',
    title: 'Пошкодження мосту через річку Дніпро',
    description: 'Значні пошкодження опор мосту внаслідок обстрілу. Необхідне термінове відновлення для забезпечення транспортного сполучення.',
    location: {
      address: 'м. Київ, Подільський район',
      coordinates: { lat: 50.4851, lng: 30.5238 }
    },
    category: 'transport',
    severity: 'critical',
    photos: [
      'https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    estimatedCost: 45000000,
    status: 'verified',
    reportedBy: 'Іван Петренко',
    reportedAt: new Date('2024-01-15'),
    verifiedBy: 'Київська міська рада',
    verifiedAt: new Date('2024-01-16'),
    votes: { support: 1247, priority: 892 },
    comments: [
      {
        id: '1',
        author: 'Марія Коваленко',
        content: 'Дуже важливий об\'єкт для всього району. Підтримую швидке відновлення.',
        createdAt: new Date('2024-01-17'),
        verified: true
      }
    ],
    prozorroLink: 'https://prozorro.gov.ua/tender/123456'
  },
  {
    id: '2',
    title: 'Пошкодження школи №47',
    description: 'Пошкоджено дах та вікна школи. Потрібен капітальний ремонт для відновлення навчального процесу.',
    location: {
      address: 'м. Харків, Шевченківський район',
      coordinates: { lat: 49.9935, lng: 36.2304 }
    },
    category: 'infrastructure',
    severity: 'high',
    photos: [
      'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    estimatedCost: 2500000,
    actualCost: 2100000,
    status: 'completed',
    reportedBy: 'Олександра Іваненко',
    reportedAt: new Date('2024-02-01'),
    verifiedBy: 'Департамент освіти',
    verifiedAt: new Date('2024-02-02'),
    votes: { support: 567, priority: 423 },
    comments: []
  },
  {
    id: '3',
    title: 'Пошкодження житлового будинку',
    description: 'Частково зруйнований житловий будинок по вул. Шевченка. Потребує відновлення для повернення мешканців.',
    location: {
      address: 'м. Маріуполь, вул. Шевченка, 15',
      coordinates: { lat: 47.0971, lng: 37.5407 }
    },
    category: 'residential',
    severity: 'high',
    photos: [
      'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    estimatedCost: 8900000,
    status: 'in_progress',
    reportedBy: 'Сергій Мельник',
    reportedAt: new Date('2024-01-20'),
    verifiedBy: 'Міська рада Маріуполя',
    verifiedAt: new Date('2024-01-22'),
    votes: { support: 934, priority: 756 },
    comments: [
      {
        id: '2',
        author: 'Тетяна Лисенко',
        content: 'Люди залишились без домівок. Це має бути пріоритетом.',
        createdAt: new Date('2024-01-23'),
        verified: false
      }
    ]
  }
];

export const mockStats: ProjectStats = {
  totalReports: 1247,
  verifiedReports: 893,
  completedProjects: 156,
  totalEstimatedCost: 890500000,
  totalActualCost: 234600000
};