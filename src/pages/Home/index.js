import React, { useState, useEffect } from 'react';
import firebaseDb from '../../config/firebase.js';
// import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    firebaseDb.child("ranking").on("value", (snapshot) => {

      if (snapshot.val() !== null) {
        setData({
          ...snapshot.val(),
        });
      } else {
        setData({});
      }
    });

    return () => {
      setData({});
    };
  }, []);



  return (
    <div className="home">
      <table className="styled-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Pontuação</th>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((Nome) => {

            return (
              
              <tr key={Nome}>
                <th scope="row">{Nome}</th>
                    <td>{data[Nome].Pontuacao}</td>
                    <td>{data[Nome].id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;