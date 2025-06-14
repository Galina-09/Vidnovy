import React from 'react';
import { MapPin, Calendar, DollarSign, Users, ArrowUpRight, AlertTriangle } from 'lucide-react';
import { DamageReport } from '../types';

interface ProjectCardProps {
  project: DamageReport;
  onClick?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('uk-UA', {
      style: 'currency',
      currency: 'UAH',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in_progress':
        return 'bg-blue-100 text-blue-800';
      case 'verified':
        return 'bg-yellow-100 text-yellow-800';
      case 'reported':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Завершено';
      case 'in_progress':
        return 'Виконується';
      case 'verified':
        return 'Верифіковано';
      case 'reported':
        return 'Повідомлено';
      default:
        return status;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'text-red-500';
      case 'high':
        return 'text-orange-500';
      case 'medium':
        return 'text-yellow-500';
      case 'low':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div
      className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative">
        {project.photos.length > 0 && (
          <img
            src={project.photos[0]}
            alt={project.title}
            className="w-full h-48 object-cover rounded-t-xl"
          />
        )}
        <div className="absolute top-4 left-4 flex space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
            {getStatusText(project.status)}
          </span>
          <div className="flex items-center bg-white rounded-full px-2 py-1">
            <AlertTriangle className={`h-3 w-3 ${getSeverityColor(project.severity)}`} />
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <ArrowUpRight className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {project.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-2" />
            {project.location.address}
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-2" />
            {new Date(project.reportedAt).toLocaleDateString('uk-UA')}
          </div>
          
          <div className="flex items-center text-sm text-gray-900 font-medium">
            <DollarSign className="h-4 w-4 mr-2" />
            {formatCurrency(project.estimatedCost)}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-500">
            <Users className="h-4 w-4 mr-1" />
            <span>{project.votes.support} підтримок</span>
          </div>
          
          <div className="text-sm text-gray-500">
            Автор: {project.reportedBy}
          </div>
        </div>
      </div>
    </div>
  );
};