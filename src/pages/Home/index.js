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
            <th>Id</th>
            <th>Pontuação</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id) => {

            return (

              <tr key={id}>
                <th scope="row">{id}</th>
                    <td>{data[id].Pontuacao}</td>
                    <td>{data[id].Nome}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;