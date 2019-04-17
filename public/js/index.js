var images = [
  'images/ABIOG - RACHELLE.png',
  'images/ACEBIDO - ROY.png',
  'images/ALBOTRA - JAY-R.png',
  'images/AMBROSIO - PETER.png',
  'images/AQUINO - JOEL.png',
  'images/ATIENZA - RAM.png',
  'images/BALANAY - ACE.png',
  'images/BARCELONA - JOEY.png',
  'images/BARTOLATA - ORLANDO.png',
  'images/BEÑAS - JOSHUA.png',
  'images/BERCASIO - MC NEIL.png',
  'images/BINUYA - LEONARDO.png',
  'images/BRILLANTES - MAFE.png',
  'images/BRION - MAUREEN.png',
  'images/BRIONES - RAM.png',
  'images/CALVARIO - GIAN.png',
  'images/CAMBA - MARCO.png',
  'images/CANO - ARNOLDO.png',
  'images/CHUA -JOANNE.png',
  'images/CORDOVA - JAY.png',
  'images/DADACAY - SARAH.png',
  'images/DELA CRUZ - IRVIN.png',
  'images/DORIA - MICKA.png',
  'images/DUMALIANG - NICOLE.png',
  'images/EROY - REX.png',
  'images/ESTAMA - REYDAN.png',
  'images/EVANGELISTA - KIM.png',
  'images/FACISTOL - MICO.png',
  'images/GABOTERO - LEONARDO.png',
  'images/GATAN - PATRICK.png',
  'images/GERONIMO - ARGEENE.png',
  'images/GINOO - RAYMOND.png',
  'images/GRACIA - JAEANN.png',
  'images/GRIMALDO - ROMEL.png',
  'images/GUADIZ - ROMMEL.png',
  'images/GUILLERMO - JERIC.png',
  'images/HERMOSILLA - FERMIN.png',
  'images/HERMOSO - RAMEL.png',
  'images/ICARO - IRENE.png',
  'images/IGNACIO - APRIL.png',
  'images/ILOCARIO - KRISTINE.png',
  'images/LIBRADO - ALBERT.png',
  'images/MACEDA - JONIFFER.png',
  'images/MAHINAY - MARK.png',
  'images/MAMAUAG - HILBERT.png',
  'images/MANSUETO - BERNEL.png',
  'images/MENDOZA - NAHZ.png',
  'images/MESANO - JEM.png',
  'images/MIRA - ELISEO.png',
  'images/MOLINA - REZON.png',
  'images/MONTEYRO - JUNELA.png',
  'images/MORENO - TONIE.png',
  'images/NAGTALON - TAMMY.png',
  'images/NAVARETTE - CAMILLE.png',
  'images/OLARTE  - WENCESLAO.png',
  'images/PALCO - ALDRIN.png',
  'images/PALER - DIOSDADO.png',
  'images/PAÑA - ROBERT.png',
  'images/PARADERO - REJINE.png',
  'images/PASION - OMAR.png',
  'images/PAYLAGA - SHERWIN.png',
  'images/PEÑA - MARGIE.png',
  'images/PEREZ - RAYMOND.png',
  'images/PEREZ - BEN.png',
  'images/PUNZALAN - SHERRY.png',
  'images/QUIJANO - ROBBIE.png',
  'images/REVILLA - LEONARDO.png',
  'images/ROLDAN - GENE.png',
  'images/SAN VICENTE - JOHN.png',
  'images/SANCHEZ - PAOLO.png',
  'images/SERRANO - JAMES.png',
  'images/TANDAYU - JESSA.png',
  'images/TAWIDE - CARLITO.png',
  'images/TIANIA - QUEENIE.png',
  'images/TUY - ARIES.png',
  'images/UY - CARLITO.png',
  'images/VERSOZA - JAMES.png',
  'images/VILLACASTIN - GRETCHEN.png',
  'images/YARCIA - MARVIN.png',
]
$(document).ready(function () {
  var tick = new Audio('/audio/tick.mp3');
  var videoke_score = new Audio('/audio/videoke_score.mp3');
  var duration;
  var started;
  var speed;
  var rand_num = 0;
  var isRolling = false;

  function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

  function number() {
    if (new Date().getTime() - started > duration) {
      videoke_score.play();
      clearInterval(animationTimer);
      console.log(rand_num);
      $.ajax({
        url: '/api/employees/' + rand_num,
        method: 'GET',
        success: function (res) {
          console.log(res);
          var name = "<b>" + res.last_name + ",</b> " + toTitleCase(res.first_name);
          var department = res.department;
          $("#employee_name").html(name);
          $("#employee_department").html(department);
          $(".employee-info").css('display', 'block');
        }
      })
      startConfetti();
      isRolling = false;
      rand_num = 0;
    } else {
      rand_num = Math.floor(Math.random() * 79);
      var idx = rand_num - 1;
      $("#employee-image").attr('src', images[idx]);
      clearInterval(animationTimer);
      speed *= 1.025;
      animationTimer = setInterval(number, speed);
    }
  }

  $(document).keypress(function (e) {
    if (e.key === ' ' || e.key === 'Spacebar') {
      if (!isRolling) {
        isRolling = true;
        removeConfetti();
        $(".employee-info").css('display', 'none');
        duration = 15000;
        started = new Date().getTime();
        speed = 1;
        animationTimer = setInterval(number, speed);
      }
    }
  })

})