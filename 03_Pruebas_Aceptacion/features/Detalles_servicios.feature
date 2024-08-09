Feature: Pagina deatalles servicios

  Scenario: Se Pude visualizar los la pagina de detalles servicios
    Given Estoy en la pagina detalles servicios
    Then genero un PDF es "Detalles Servicios"
    Then cerrar session servicios