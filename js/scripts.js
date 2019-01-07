// Do not allow Spaces
function NoSpace(event) {
    var k = event ? event.which : window.event.keyCode;
    if (k == 32) return false;
}

$(document).ready(function() {
  $("#pixels").submit(function(event) {
    var qstring = '';

    if($('#siteid').val() != ''){
      $('.siteid').text($('#siteid').val());
    }
    if($('#app').val() != '') {
        qstring += 'app=' + $('#app').val() + '&';
    }
    if($('#type').val() != '') {
        qstring += 'type=' + $('#type').val() + '&';
    }
    if($('#customdata').val() != '') {
        qstring += 'customdata=' + $('#customdata').val() + '&';
    }
    if($('#cid').val() != '') {
        qstring += 'cid=' + $('#cid').val() + '&';
    }
    if($('#uid').val() != '') {
        qstring += 'uid=' + $('#uid').val() + '&';
    }
    if($('#refid').val() != '') {
        qstring += 'refid=' + $('#refid').val() + '&';
    }
    $('.qstring').text((qstring).replace(/&([^&]*)$/,'$1'));
    $("#final").show();

    event.preventDefault();
    // alert('<img src="https://pt.ispot.tv/v2/TC-' + siteidInput + '.gif?' + 'app=' + appInput + '&' + 'type=' + typeInput + '&' + 'customdata=' + customdataInput + '&' + 'cid=' + cidInput + '&' + 'refid=' + refidInput + '"' + ' style="border:0" alt="" />');
  })
})
