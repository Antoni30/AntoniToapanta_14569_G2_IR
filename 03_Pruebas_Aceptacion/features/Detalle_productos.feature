Feature: Pagina detalles producto

  Scenario: Se Pude visualizar los la pagina de detalles Productos
  Given Estoy en la pagina de  detalles Productos
  Then genero un PDF de como "Detalles Proyecto"
  Then cerrar session Productos

  Scenario: Imagenes estan disponible en menos de 5s
  Given Estoy en la pagina de  detalles Productos
  Then Carga Imagenes en tiempo estimado 
  Then genero un PDF de como "Imagenes carga en tiempo estimado"
  Then cerrar session Productos

  

  
    