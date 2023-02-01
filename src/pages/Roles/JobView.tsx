import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
      interface Job {
        id: number;
        title: string;
        company: string;
        location: string;
        description: string;
        responsibilities: string[];
        requirements: string[];
      }
     
      
      const exampleJobs = [
          {
            id: 1,
            title: 'Software Engineer',
            company: 'Google',
            location: 'Mountain View, CA',
            description: 'We are looking for a software engineer to join our team and help us build cutting-edge technology.',
            responsibilities: ['Develop and maintain software applications', 'Collaborate with cross-functional teams'],
            requirements: ['Bachelor\'s degree in Computer Science or related field', '5+ years of experience in software development']
          },
          {
            id: 2,
            title: 'Data Scientist',
            company: 'Facebook',
            location: 'Menlo Park, CA',
            description: 'We are seeking a data scientist to join our team and help us make data-driven decisions.',
            responsibilities: ['Analyze large datasets', 'Develop predictive models', 'Communicate findings to stakeholders'],
           
            requirements: ['Masters degree in Data Science or related field', '3+ years of experience in data analysis']
          },
          {
          id: 3,
          title: 'Product Manager',
          company: 'Uber',
          location: 'San Francisco, CA',
          description: 'We are looking for a product manager to join our team and help drive the development of our products.',
          responsibilities: ['Develop product strategy', 'Manage product development', 'Analyze market trends'],
          requirements: ['Bachelors degree in business or related field', '5+ years of experience in product management']
          },
          ];
          
          const JobView: React.FC = () => {
          const { jobId } = useParams();
          const [job, setJob] = useState<Job | null>(null);
          useEffect(() => {
            if(jobId){
              const selectedIndex = exampleJobs.findIndex(job => job.id === parseInt(jobId));
              if (selectedIndex !== -1) {
                setJob(exampleJobs[selectedIndex]);
              }
            }
          }, [jobId]);
          
          if (!job) {
          return <div>Loading...</div>;
          }
          
          return (
          <div className="bg-gray-200 min-h-screen">
          <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 py-8">
          <h1 className="text-3xl font-medium text-center">{job.title}</h1>
          <p>{job.company} - {job.location}</p>
          <h2 className="text-2xl font-medium">Description</h2>
          <p>{job.description}</p>
          <h2 className="text-2xl font-medium">Responsibilities</h2>
          <ul>
          {job.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
          ))}
          </ul>
          <h2 className="text-2xl font-medium">Requirements</h2>
          <ul>
          {job.requirements.map((requirement, index) => (
<li key={index}>{requirement}</li>
))}
</ul>
<div className="my-4">
<button className="bg-blue-500 text-white p-2 rounded-sm">Postuler</button>
</div>
</div>
</div>
</div>
</div>
);
};

export default JobView;