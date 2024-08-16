Feature: Pagina main

   Scenario: Al seleccionar el boton ver se dirigira a ala pagina de About Us
        Given Estoy en la pagina principal "aboutSection"
        Then genero un PDF "About Us"
        When selecciones el boton de ver mas me dirige a la pagina del About Us
        Then genero un PDF "About Us"
        Then guardar "documento_Prueba_Seccion_About_US"
        And cerrar

     Scenario: Imagenes estan disponible en menos de 5s de about us
        Given Estoy en la pagina principal "aboutSection"
        Then Carga Imagenes en tiempo estimado M 
        Then genero un PDF de como "Imagenes carga en tiempo estimado"
        And cerrar
    
    
    Scenario: Al seleccionar el boton ver se dirigira a ala pagina Servicios
        Given Estoy en la pagina principal "servicioSection"
        Then genero un PDF "Servicios"
        When selecciones el boton de ver mas me dirige a la pagina del Servicios
        Then genero un PDF "Servicios"
        Then guardar "documento_Prueba_Seccion_Servicios"
        And cerrar

    Scenario: Imagenes estan disponible en menos de 5s de Servicios
        Given Estoy en la pagina principal "servicioSection"
        Then Carga Imagenes en tiempo estimado M
        Then genero un PDF de como "Imagenes carga en tiempo estimado"
        And cerrar
        
    Scenario: Al seleccionar el boton ver se dirigira a ala pagina Productos
        Given Estoy en la pagina principal "productoSection"
        Then genero un PDF "Productos"
        When selecciones el boton de ver mas me dirige a la pagina del Productos
        Then genero un PDF "Productos"
        Then guardar "documento_Prueba_Seccion_Productos"
        And cerrar

    Scenario: Imagenes estan disponible en menos de 5s de productos
        Given Estoy en la pagina principal "productoSection"
        Then Carga Imagenes en tiempo estimado M
        Then genero un PDF de como "Imagenes carga en tiempo estimado"
        And cerrar
        
    Scenario: Al seleccionar el boton ver se dirigira a ala pagina Proyectos
        Given Estoy en la pagina principal "proyectosSection"
        Then genero un PDF "Proyecto"
        When selecciones el boton de ver mas me dirige a la pagina del Proyectos
        Then genero un PDF "Proyecto"
        Then guardar "documento_Prueba_Seccion_Proyectos"
        And cerrar

    Scenario: Imagenes estan disponible en menos de 5s de proyecto
        Given Estoy en la pagina principal "proyectosSection"
        Then Carga Imagenes en tiempo estimado M
        Then genero un PDF de como "Imagenes carga en tiempo estimado"
        Then cerrar



        

    

    

