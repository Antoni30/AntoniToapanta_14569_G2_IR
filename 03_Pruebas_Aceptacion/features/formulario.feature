Feature: Formulario de prueba
Scenario: Enviar formulario exitosamente
    Given que estoy en la página del formulario
    When lleno el formulario con datos válidos
    And envío el formulario
    Then debería ver un mensaje de éxito
    And genero un PDF con la captura de pantalla "Envio Formulario Correcto"

Scenario: Enviar formulario con campos obligatorios vacíos
    Given que estoy en la página del formulario
    When dejo el campo "firstname" vacío
    And lleno el campo "email" con "prueba@example.com"
    And envío el formulario
    And genero un PDF con la captura de pantalla "Formulario incompleto"
    Then debería ver un mensaje de error indicando "Formulario incompleto"

Scenario: Enviar formulario con un formato de correo electrónico inválido
    Given que estoy en la página del formulario
    When lleno el campo "firstname" con "Nombre de Prueba"
    And lleno el campo "email" con "correo_invalido"
    And envío el formulario
    Then genero un PDF con la captura de pantalla "El formato del correo electrónico no es válido"
    And debería ver un mensaje de error indicando "El formato del correo electrónico no es válido"
   
    
   
