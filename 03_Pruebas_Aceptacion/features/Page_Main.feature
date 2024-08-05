Feature: Pagina main

   Scenario: Al seleccionar el boton ver se dirigira a ala pagina de About Us
        Given Estoy en la pagina principal 
        Then genero un PDF "About Us"
        When selecciones el boton de ver mas me dirige a la pagina del About Us
       
    
    Scenario: Al seleccionar el boton ver se dirigira a ala pagina Servicios
        Given Estoy en la pagina principal 
        Then genero un PDF "Servicios"
        When selecciones el boton de ver mas me dirige a la pagina del Servicios
        
    Scenario: Al seleccionar el boton ver se dirigira a ala pagina Productos
        Given Estoy en la pagina principal 
        Then genero un PDF "Productos"
        When selecciones el boton de ver mas me dirige a la pagina del Productos
      
    Scenario: Al seleccionar el boton ver se dirigira a ala pagina Proyectos
        Given Estoy en la pagina principal 
        Then genero un PDF "Proyecto"
        When selecciones el boton de ver mas me dirige a la pagina del Proyectos
       

    

    

