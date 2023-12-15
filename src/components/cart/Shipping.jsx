import React from "react";
import { Country, State } from "country-state-city";
import Popup from "reactjs-popup";

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>H.No.</label>
            <input type="text" placeholder="Enter House No." />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
            {/* DESPLEGABLE DE PAÍSES*/}
            <label>País</label>
            <select>
              <option value="">País</option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option value="{i.isoCode}" key="{i.isoCode}">
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>Estado/Provincia</label>
            <select>
              <option value="">Estado/Provincia</option>
              {State &&
                State.getStatesOfCountry("ES").map((i) => (
                  <option value="{i.isoCode}" key="{i.isoCode}">
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Enter Pincode" />
          </div>
          <div>
            <label>N.º de teléfono</label>
            <input type="number" placeholder="Ingresa tu número telefónico" />
          </div>

          <Popup
            trigger={<button type="button">Confirm Order</button>}
            position="right center"
          >
            <div
              style={{
                color: "red",
                transform: "translate(-125%,-500%)",
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              Order Placed
            </div>
          </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
