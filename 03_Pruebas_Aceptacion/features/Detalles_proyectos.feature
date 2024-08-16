Feature: Pagina detalles Proyecto

  Scenario: Se Pude visualizar los la pagina de detalles Proyecto
    Given Estoy en la pagina de  detalles Proyecto
    Then genero un PDF de "Detalles Proyecto"
    Then cerrar session proyectos

  Scenario: Imagenes estan disponible en menos de 5s
  Given Estoy en la pagina de  detalles Productos
  Then Carga Imagenes en tiempo estimado Pr
  Then genero un PDF de como "Imagenes carga en tiempo estimado"
  Then cerrar session proyectos