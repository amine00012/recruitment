import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { clientAPI } from './clientAPI';
import "./styles/tailwind.css";
import Pagination from 'react-paginate';

export function  Clients() {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [clientsPerPage] = useState(10);
  const [error, setError] = useState(null);
  const { data: clients, status } = useQuery(
    ['clients', currentPage, clientsPerPage],
    () => clientAPI.getClients(search, currentPage, clientsPerPage)
  );

  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = [{name:"",ddd:"",}]

  const handlePageChange = (page:any) => {
    setCurrentPage(page.selected + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-medium mb-4">Liste des clients</h1>
      <div className="mb-4">
        <input
          className="border rounded p-2"
          type="text"
          placeholder="Rechercher un client"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'error' && <div>Error: {error}</div>}
      {status === 'success' && (
        <div>
          <table className="w-full text-left table-collapse">
            <thead>
              <tr>
                <th className="text-xs font-medium text-gray-700 p-2 bg-gray-100">Nom</th>
                <th className="text-xs font-medium text-gray-700 p-2 bg-gray-100">Email</th>
                <th className="text-xs font-medium text-gray-700 p-2 bg-gray-100">Téléphone</th>
              </tr>
            </thead>
            <tbody>
              {currentClients.map((client: any) => (
                <tr key={client.id}>
                  <td className="p-2 border-t border-gray-200">{client.name}</td>
                  <td className="p-2 border-t border-gray-200">{client.email}</td>
                  <td className="p-2 border-t border-gray-200">{client.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
                        className="my-8"
                        pageCount={Math.ceil(clients.length / clientsPerPage)}
                        onPageChange={handlePageChange}
                        forcePage={currentPage - 1}
                      />
                    </div>
                  )}
                </div>
              );
            }
            
            export default Clients;
            
