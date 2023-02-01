import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import JobView  from './job';

import  './roles.css';
interface Job {
  id: number;
  title: string;
  Salary: number; 
  company: string;
  location: string;
}

function Roles () {
  
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: 1,
      title: 'Software Engineer',
      Salary: 15122,
      company: 'Google',
      location: 'Mountain View, CA'
    },
    {
      id: 2,
      title: 'Data Scientist',
      Salary: 15122,
      company: 'Facebook',
      location: 'Menlo Park, CA'
    },
    {
      id: 3,
      title: 'Product Manager',
      Salary: 15122 ,
      company: 'Uber',
      location: 'San Francisco, CA'
    },
  ]);


  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 py-8">
            <h1 className="text-3xl font-medium text-center">Offres d'emploi</h1>
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-gray-300 text-gray-700">
                  <th className="px-4 py-2">Poste</th>
                  <th className="px-4 py-2">Salary</th>
                  <th className="px-4 py-2">Entreprise</th>
                  <th className="px-4 py-2">Localisation</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job : any) => (
                  <tr key={job.id} className="text-gray-700">
                    <td className="border px-4 py-2">{job.title}</td>
                    <td className="border px-4 py-2">{job.Salary}</td>
                    <td className="border px-4 py-2">{job.company}</td>
                    <td className="border px-4 py-2">{job.location}</td>
                    <Link to={`./job.tsx/${job.id}`} className="bg-blue-500 text-white p-2 rounded-sm">View Job</Link>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roles ;
/*
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion/dist/framer-motion' ;
import VisibilitySensor from 'react-visibility-sensor';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
}

const Roles = () => {
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Google',
      location: 'Mountain View, CA'
    },
    {
      id: 2,
      title: 'Data Scientist',
      company: 'Facebook',
      location: 'Menlo Park, CA'
    },
    {
      id: 3,
      title: 'Product Manager',
      company: 'Uber',
      location: 'San Francisco, CA'
    },
  ]);

  const [tableRef, inView] = VisibilitySensor({
    triggerOnce: true
  });

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 py-8">
            <h1 className="text-3xl font-medium text-center">Offres d'emploi</h1>
            <motion.table 
              ref={tableRef}
              className="table-auto w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 1.5 }}
            >
              <thead>
                <tr className="bg-gray-300 text-gray-700">
                  <th className="px-4 py-2">Poste</th>
                  <th className="px-4 py-2">Entreprise</th>
                  <th className="px-4 py-2">Localisation</th>
                  <th className="px-4 py-2">View</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job: Job) => (
                  <tr 
                    key={job.id} 
                    className="text-gray-700"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: job.id * 0.1 }}
                  >
                    <td className="border px-4 py-2">{job.title}</td>
                    <td className="border px-4 py-2">{job.company}</td>
                    <td className="border px-4 py-2">{job.location}</td>
                    <td className="border px-4 py-2">
                      <Link to={`/job/${job.id}`} className="bg-blue-500 text-white p-2 rounded-sm">View Job</Link>
                    </td>
                 </tr>
               ))}
             </tbody>
           </motion.table>
         </div>
       </div>
      </div>
   </div>
  );
 };

export default Roles;

import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useTransition, useViewportScroll } from "framer-motion";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
}

const Roles = () => {
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Google',
      location: 'Mountain View, CA'
    },
    {
      id: 2,
      title: 'Data Scientist',
      company: 'Facebook',
      location: 'Menlo Park, CA'
    },
    {
      id: 3,
      title: 'Product Manager',
      company: 'Uber',
      location: 'San Francisco, CA'
    },
  ]);

  const { scrollYProgress } = useViewportScroll();

  return (
    <View style={styles.container}>
      <View style={styles.tableContainer}>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <View style={styles.tableCell}>
              <Text style={styles.tableHeaderText}>Poste</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.tableHeaderText}>Entreprise</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.tableHeaderText}>Localisation</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.tableHeaderText}>View</Text>
            </View>
          </View>
          {jobs.map((job: Job) => {
            const rowTransition = useTransition(
              scrollYProgress,
              p => job.id,
              {
                from: { y: 50, opacity: 0 },
                enter: { y: 0, opacity: 1 },
                leave: { y: -50, opacity: 0 },
                config: { duration: 1.5, delay: job.id * 0.1 }
              }
            );
           
*/
