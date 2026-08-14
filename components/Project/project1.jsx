"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        {/* Project Image */}
        <div className="relative h-48 bg-gray-100 overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <span className="text-gray-400">No image</span>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 flex-grow line-clamp-2">
              {project.title}
            </h3>
          </div>

          {/* Date */}
          <p className="text-sm text-gray-400 mb-3">
            {new Date(project.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </p>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* GitHub Link */}
          <div className="flex gap-3 pt-4 border-t border-gray-100">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View
            </a>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Project1 = () => {
  // Sample projects - sorted by date (newest first)
  const projects = [
    {
      id: 1,
      title: 'Self Balancing Car ',
      description: 'This project demonstrates a self-balancing two-wheeled robot car powered by an Arduino UNO, using MPU6050 sensor data and a PID control algorithm to keep itself upright. ',
      image: '/assets/project_pic/project1.jpg',
      github: 'https://github.com/ronit-739/Self_Balancing_Car',
      link: 'https://demo.example.com',
      date: '2025-01-15',
      technologies: ['ArduinoIDE', 'PID', 'Gyrosensor', 'Motors'],
    },
    {
      id: 2,
      title: 'IoT Sensor Network Dashboard',
      description: 'Real-time monitoring and analytics dashboard for distributed IoT sensor networks with predictive insights.',
      image: '/assets/project2.jpg',
      github: 'https://github.com',
      link: 'https://demo.example.com',
      date: '2024-12-20',
      technologies: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
    },
    {
      id: 3,
      title: 'AI-Powered Vision System',
      description: 'Computer vision system for real-time object detection and classification using deep learning models.',
      image: '/assets/project3.jpg',
      github: 'https://github.com',
      date: '2024-11-10',
      technologies: ['OpenCV', 'PyTorch', 'CUDA', 'C++'],
    },
    {
      id: 4,
      title: 'Robotic Arm Control Interface',
      description: 'Intuitive control interface for industrial robotic arms with motion planning and safety protocols.',
      image: '/assets/project4.jpg',
      github: 'https://github.com',
      link: 'https://demo.example.com',
      date: '2024-10-05',
      technologies: ['C++', 'ROS', 'Qt', 'Kinematics'],
    },
    {
      id: 5,
      title: 'Drone Flight Controller',
      description: 'Custom flight controller firmware for autonomous UAVs with stabilization and mission planning capabilities.',
      github: 'https://github.com',
      date: '2024-09-12',
      technologies: ['Arduino', 'C', 'Embedded', 'Flight Physics'],
    },
    {
      id: 6,
      title: 'ML Training Pipeline',
      description: 'Automated machine learning pipeline for data preprocessing, model training, and performance evaluation.',
      image: '/assets/project5.jpg',
      github: 'https://github.com',
      date: '2024-08-30',
      technologies: ['Python', 'Scikit-learn', 'Docker', 'Jenkins'],
    },
  ];

  // Sort by date (newest first)
  const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="bg-white font-poppins">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-white via-white to-orange-100 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Projects
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our latest innovations and creations in robotics, automation, and technology.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {sortedProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No projects available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project1;
