$(document).ready(function(){
    $('form').on('submit', function(e) {
        e.preventDefault();

        const enderecoNovaImagem = $('#endereco_newimg').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay_img_link">
                <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1250);

        $('#endereco_newimg').val('');
    });
    
    $('header button').click(function() {
        $('form').slideDown();
    });
    
    $('#btn_cancelar').click(function() {
        $('form').slideUp();
    });
});