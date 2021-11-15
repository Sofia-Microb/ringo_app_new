import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import Products from "../../productos.json";
import { useParams } from "react-router-dom";
import { CategoryImage } from "../CategoryImage/CategoryImage"
//import { collection, getDocs } from "firebase/firestore";
//import { getFirestore } from "../../firebase/index";



export const ItemListContainer = ({ tipoHOME }) => {
  const { tipoID } = useParams();

  const [productos, setProductos] = useState([]);

  const getData = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("No se encontro nada");
        }
      }, 1000);
    });

  useEffect(() => {
    getData(Products)
      .then((res) => {
        tipoHOME ? setProductos(res.filter((product) => product.tipo === tipoHOME)) : setProductos(Products) || //esto para el HOME
          tipoID ? setProductos(res.filter((product) => product.tipo === tipoID)) : setProductos(Products) //esto para las categorias
          ;
      })
      .catch((err) => console.log(err));
  }, [tipoHOME, tipoID]);

  // useEffect(() => {
  //   const db = getFirestore();
  //   getDocs(collection(db, "items"))
  //     .then((snapshot) => {
  //       console.log(snapshot.docs)

  //       tipoHOME ? setProductos(snapshot.docs.filter((product) => product.tipo === tipoHOME)) : setProductos(snapshot.docs) || //esto para el HOME
  //         tipoID ? setProductos(snapshot.docs.filter((product) => product.tipo === tipoID)) : setProductos(snapshot.docs) //esto para las categorias
  //         ;
  //     })
  //     .catch((err) => console.log(err));
  // }, [tipoHOME, tipoID]);


  

  return (
    <>
      <div className='container-fluid row justify-content-center mt-0 mx-0 px-0 mb-5'>
        {/* si hay tipoID es porque estoy en la pagina de categorias, sino estoy en home y no necesito el siguiente argumento */}
        {tipoID ? <CategoryImage type={tipoID} /> : null} 
        <div className="mt-4 mb-md-5 mx-0 container-fluid row justify-content-center justify-self-center col-11 col-md-9">
          {productos.length ? productos.map((producto) => ( <ItemList product={producto} key={producto.id} />))
            : "Loading..."
          }
        </div>
      </div>
    </>
  );
};


