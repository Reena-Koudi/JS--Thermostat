function Thermostat(){
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSavingMode = true;
  this.MAX_PSM_ON = 25;
  this.MAX_PSM_OFF = 32;
  this.DEFAULT_TEMP = 20
  this.ENERGY_USAGE_LIMIT = 18;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {

  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if(this.isMinimumTemperature()){
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingModeOn = function(){
  return this.powerSavingMode === true;
};

Thermostat.prototype.powerSavingModeOff = function(){
  return this.powerSavingMode = false;
};

Thermostat.prototype.powerSavingModeOn = function(){
  return this.powerSavingMode = true;
};

Thermostat.prototype.isMaximumTemperature = function(){
  if(this.powerSavingModeOn === true) {
    return this.temperature = this.MAX_PSM_ON;
  }
      return this.temperature = this.MAX_PSM_OFF;
    };


  Thermostat.prototype.resetTemperature = function() {
    this.temperature = this.DEFAULT_TEMP;
  };

  Thermostat.prototype.energyUsage = function() {
    if(this.temperature < this.ENERGY_USAGE_LIMIT){
      return 'low-usage';
    }
    if(this.temperature >= this.ENERGY_USAGE_LIMIT && this.temperature <= this.MAX_PSM_ON){
      return 'medium-usage';
    }
      return 'high-usage';
    };
