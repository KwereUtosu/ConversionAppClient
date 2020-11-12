// import { IUnit } from '../interfaces/conversion.interfaces';

export const TEMPERATURE_TYPES = [
    'kelvin', 'celsius', 'fahrenheit', 'rankine'
];

export const VOLUME_TYPES = [
    'liters', 'tablespoons', 'cubic-inches', 'cups', 'cubic-feets', 'gallons'
];

export const ALL_UNIT_TYPES = {
    temperature: [...TEMPERATURE_TYPES],
    volume: [...VOLUME_TYPES]
};
