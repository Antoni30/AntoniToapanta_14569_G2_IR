Feature: Pagina Contactanos

  Scenario: Se Pude visualizar los la pagina de Contactanos
    Given Estoy en la pagina de  Contactanos
    Then genero un PDF de para "About US"
    Then cerrar session about us

  Scenario: Imagenes estan disponible en menos de 5s
  Given Estoy en la pagina de  detalles Productos
  Then Carga Imagenes en tiempo estimado 
  Then genero un PDF de como "Imagenes carga en tiempo estimado"
  Then cerrar session Productos