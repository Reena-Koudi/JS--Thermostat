$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  $('#temperature-up').on('click',function() {
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
   })
    $('#temperature-down').on('click',function(){
      thermostat.down();
      $('#temperature').text(thermostat.temperature);
  })

  $('#temperature-reset').on('click', function(){
    thermostat.resetTemperature();
    $('#temperature').text(thermostat.temperature);
  })

  $('#powersaving').on('click', function(){
    thermostat.togglePowerSavingMode();
    if (thermostat.isPowerSavingModeOn())
      $('#powersaving').text('TURN OFF');
    else
      $('#powersaving').text('TURN ON');

    $('#temperature').text(thermostat.temperature);

  })
})
