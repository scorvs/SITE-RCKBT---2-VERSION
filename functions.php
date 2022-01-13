<?php 
function carrega_pagina(){
    (isset($_GET['p'])) ? $pagina = $_GET['p'] : $pagina = 'home';
    if(file_exists('page_'.$pagina.'.php')):
        require_once('page_'.$pagina.'.php');
    else:
        require_once('page_home.php');
    endif;
        
}

function gera_titulos(){
    (isset($_GET['p'])) ? $pagina = $_GET['p'] : $pagina = 'home';
    switch ($pagina):
        case 'home':
            $titulo = 'RCKBT - PHOTOGRAPH & MUSIC';
            break;
        case 'photos':
            $titulo = 'RCKBT - PHOTOGRAPH';
            break;
        case 'music':
            $titulo = 'RCKBT - MUSIC';
            break;
        case 'contact':
            $titulo = 'RCKBT - CONTACT';
            break;

        default:
            $titulo = 'RCKBT - PHOTOGRAPH & MUSIC';
            break;
    endswitch;
    return $titulo;

}

?>