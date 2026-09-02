@register
Feature: Registro de usuario

Yo como nuevo usuario 
Quiero registrame en la aplicacion 
Para ingresar a la plataforma

Scenario: Registrar un nuevo usuario con exito
    Given que estoy en la pagina de registrar nuevo usuario
    When registro un nuevo usuario
    And completo la informacion solicitada en el formulario
    And creo el usuario
    Then el registro se realiza con exito
        