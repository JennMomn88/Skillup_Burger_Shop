import {
  MDBBtn,
  MDBCheckbox,
  MDBIcon,
  MDBInput,
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import React, { useState } from "react";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="login">
      <main>
        <MDBTabs pills className="pills">
          <MDBTabsItem className="pill">
            <MDBTabsLink
              onClick={() => setActiveTab("login")}
              active={activeTab === "login"}
            >
              Iniciar Sesion
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem className="pill">
            <MDBTabsLink
              onClick={() => setActiveTab("register")}
              active={activeTab === "register"}
            >
              Registrarse
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          <MDBTabsPane show={activeTab === "login"}>
            <div className="text-center mb-3">
              <p>Iniciar sesión con:</p>
              <div
                className="d-flex justify-content-between mx-auto"
                style={{ width: "40%" }}
              >
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="twitter" size="sm" />
                </MDBBtn>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="github" size="sm" />
                </MDBBtn>
              </div>
              <p className="text-center mt-3">o con:</p>
            </div>
            <MDBInput
              wrapperClass="mb-4"
              label="Dirección de correo electrónico"
              id="form1"
              type="email"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Contraseña"
              id="form2"
              type="password"
            />
            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Recuérdame"
              />
              <a href="!#">¿Olvidaste tu contraseña?</a>
            </div>
            <MDBBtn className="mb-4 w-100">Iniciar sesión</MDBBtn>
            <p className="text-center">
              ¿No estás registrado?{" "}
              <button
                className="button-link"
                onClick={() => setActiveTab("register")}
              >
                Regístrate
              </button>
            </p>
          </MDBTabsPane>
          <MDBTabsPane show={activeTab === "register"}>
            <div className="text-center mb-3">
              <p>Registrarse con:</p>
              <div
                className="d-flex justify-content-between mx-auto"
                style={{ width: "40%" }}
              >
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="twitter" size="sm" />
                </MDBBtn>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="github" size="sm" />
                </MDBBtn>
              </div>
              <p className="text-center mt-3">o con:</p>
            </div>
            <MDBInput
              wrapperClass="mb-4"
              label="Dirección de correo electrónico"
              id="form1"
              type="email"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Contraseña"
              id="form2"
              type="password"
            />
            <div className="d-flex justify-content-between mx-4 mb-4">
              <a href="!#">¿Olvidaste tu contraseña?</a>
            </div>
            <MDBBtn className="mb-4 w-100">Registrarse</MDBBtn>
            <p className="text-center">
              ¿Tienes una cuenta?{" "}
              <button
                className="button-link"
                onClick={() => setActiveTab("login")}
              >
                Accede
              </button>
            </p>
          </MDBTabsPane>
        </MDBTabsContent>
      </main>
    </div>
  );
};

export default Login;
