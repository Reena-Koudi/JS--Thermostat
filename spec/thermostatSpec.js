describe('Thermostat', function(){
var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it('rises the temperature by 1', function() {
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });

    it('drops the temperature by 1', function() {
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });

    it('set the minimum temperature to 10', function(){
      for (var i = 0; i < 10; i++) {
      thermostat.down();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });

    it('set power saving mode on by default', function(){
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('set the power saving mode off', function(){
      thermostat.powerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    it('switch power saving mode back on', function(){
      thermostat.powerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
      thermostat.powerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('When PSM is on set maximum temperature to 25', function() {
      for(var i = 0; i < 5; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
      });
});
