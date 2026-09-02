Feature: Inicio de sesion

Yo como usuario registrado
Quiero iniciar sesion en la aplicacion
Para acceder a mi cuenta

Scenario: Inicio de sesion exitoso con credenciales validas
    Given que navego la pagina de inicio de sesion
    When inicio sesion con las credenciales
    Then debo iniciar la sesion correctamente
