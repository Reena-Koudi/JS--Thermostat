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

    it('When PSM is on set maximum temperature to 25', function() {
      for(var i = 0; i < 5; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
      });

      it('When PSM is off set maximum temperature to 32', function() {
        for(var i = 0; i < 12; i++) {
          thermostat.up();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(32);
        });

        it('reset the temperature to default', function() {
          for(i = 0; i < 5; i++ ) {
          thermostat.resetTemperature();
          }
          expect(thermostat.getCurrentTemperature()).toEqual(20);

        });

        it('Display enery usage when temperature is less than 18', function() {
          for(var i = 0; i < 3; i++){
            thermostat.down();
          }
          expect(thermostat.energyUsage()).toEqual('low-usage');
        });

        it('Display energy usage when temperature is more than 25', function(){
          for(var i = 0; i < 6; i++){
            thermostat.up();
          }
          expect(thermostat.energyUsage()).toEqual('high-usage');
        });

        it('Display energy usage when temperature is between 18 and 25', function(){
          expect(thermostat.energyUsage()).toEqual('medium-usage');
        });

});
