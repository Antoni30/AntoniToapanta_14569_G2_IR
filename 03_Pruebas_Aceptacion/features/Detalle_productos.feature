Feature: Pagina detalles producto

  Scenario: Se Pude visualizar los la pagina de detalles Productos
    Given Estoy en la pagina de  detalles Productos
    Then genero un PDF de como "Detalles Proyecto"
    Then cerrar session Productos
    