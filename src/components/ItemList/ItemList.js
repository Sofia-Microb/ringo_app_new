import { ItemCount } from "../ItemCount/ItemCount";

export const ItemList = ({ product }) => {
  return (
    <div className="row justify-content-center col-12 col-sm-6 mb-5">
      <img className="card-img-top img-fluid" src={product.imagen} alt="S" />
      <div className="card-body col-11">
        <p className="card-text nombreProducto">
          <b>{product.nombre}</b>
        </p>
        <p className="card-text precioProducto">
          <b>${product.precio}</b>
        </p>
      </div>

      <div className="col-11 col-sm-9 col-md-7 dropdown mb-2 px-2 row justify-content-center">
        <button
          className="btn btn-secondary dropdown-toggle col-5"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Talle
        </button>
        <ul
          className="dropdown-menu menuTalles"
          aria-labelledby="dropdownMenuButton1"
        >
          <li>
            <a className="dropdown-item" href="/#">
              <b>4</b> <span style={{ fontSize: `80%` }}>(14,9 mm)</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/#">
              <b>5</b> <span style={{ fontSize: `80%` }}>(15,6 mm)</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/#">
              <b>6</b> <span style={{ fontSize: `80%` }}>(16,5 mm)</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/#">
              <b>7</b> <span style={{ fontSize: `80%` }}>(17,2 mm)</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/#">
              <b>8</b> <span style={{ fontSize: `80%` }}>(18,0 mm)</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/#">
              <b>9</b> <span style={{ fontSize: `80%` }}>(18,9 mm)</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/#">
              <b>10</b> <span style={{ fontSize: `80%` }}>(19,7 mm)</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/#">
              <b>11</b> <span style={{ fontSize: `80%` }}>(20,6 mm)</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/#">
              <b>12</b> <span style={{ fontSize: `80%` }}>(21,5 mm)</span>
            </a>
          </li>
        </ul>
      </div>
      <ItemCount inicial={0} stock={product.stock} />
      <button
        className="col-9 col-sm-8 justify-self-center btn-Carrito mt-1"
        id="btn-{producto.id}">
        Agregar al carrito
      </button>
    </div>
  );
};