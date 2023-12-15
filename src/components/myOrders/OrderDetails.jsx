import React from "react";

const OrderDetails = () => {
  return (
    <div className="orderDetails">
      <main>
        <h1>Información del pedido</h1>
        <div>
          <h1>Envío</h1>
          <p>
            <b>Dirección:</b> Gran Vía 123
          </p>
        </div>
        <div>
          <h1>Contacto</h1>
          <p>
            <b>Nombre:</b> Pedro
          </p>
          <p>
            <b>Teléfono:</b> +34 556 890 123
          </p>
        </div>
        <div>
          <h1>Estado</h1>
          <p>
            <b>Estado del pedido:</b> En curso
          </p>
          <p>
            <b>Fecha del pedido</b> 23-06-2023
          </p>
          <p>
            <b>Fecha de entrega:</b> 23-06-2023
          </p>
        </div>
        <div>
          <h1>Pago</h1>
          <p>
            <b>Método de pago:</b> pago contra entrega
          </p>
          <p>
            <b>Referencia de pago:</b> RP00012345
          </p>
          <p>
            <b>Fecha de pago:</b> 23-06-2023
          </p>
        </div>
        <div>
          <h1>Total</h1>
          <p>
            <b>Subtotal:</b> &euro; 13,90
          </p>
          <p>
            <b>Costos de envío:</b> &euro; 2,30
          </p>
          <p>
            <b>IVA:</b> &euro; 2,92
          </p>
          <p>
            <b>Importe total: </b>&euro; 19.12
          </p>
        </div>
        <article>
          <h1>Artículos</h1>
          <div>
            <h4>Hamburguesa con queso</h4>
            <h4>1 x &euro; 3,30</h4>
          </div>
          <div>
            <h4>Hamburguesa vegetariana con queso</h4>
            <h4>1 x &euro; 4,50</h4>
          </div>
          <div>
            <h4>Hamburguesa con queso y patatas fritas</h4>
            <h4>1 x &euro; 6,10</h4>
          </div>
          <div>
            <h4>Subtotal</h4>
            <h4>&euro; 13,90</h4>
          </div>
        </article>
      </main>
    </div>
  );
};

export default OrderDetails;
