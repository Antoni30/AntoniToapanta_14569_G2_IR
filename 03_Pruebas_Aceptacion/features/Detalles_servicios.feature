Feature: Pagina deatalles servicios

  Scenario: Se Pude visualizar los la pagina de detalles servicios
    Given Estoy en la pagina detalles servicios
    Then genero un PDF es "Detalles Servicios"
    Then cerrar session servicios

  Scenario: Imagenes estan disponible en menos de 5s
  Given Estoy en la pagina de  detalles Productos
  Then Carga Imagenes en tiempo estimado 
  Then genero un PDF de como "Imagenes carga en tiempo estimado"
  Then cerrar session Productos