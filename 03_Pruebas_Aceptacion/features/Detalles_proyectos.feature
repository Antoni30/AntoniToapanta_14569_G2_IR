Feature: Pagina detalles Proyecto

  Scenario: Se Pude visualizar los la pagina de detalles Proyecto
    Given Estoy en la pagina de  detalles Proyecto
    Then genero un PDF de "Detalles Proyecto"
    Then cerrar session proyectos