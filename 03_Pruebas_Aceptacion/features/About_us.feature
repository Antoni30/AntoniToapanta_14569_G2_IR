Feature: Pagina Contactanos

  Scenario: Se Pude visualizar los la pagina de Contactanos
    Given Estoy en la pagina de  Contactanos
    Then genero un PDF de para "About US"
    Then cerrar session about us