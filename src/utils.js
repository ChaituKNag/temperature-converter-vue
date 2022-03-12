export function celciusToFahrenheit(temp) {
  return Math.round(temp * 1.8 + 32);
}

export function celciusToKelvin(temp) {
  return Math.round(temp + 273.15);
}

export function fahernheitToCelcius(temp) {
  return Math.round((temp - 32) * (5 / 9));
}

export function fahrenheitToKelvin(temp) {
  return Math.round((temp - 32) * (5 / 9) + 273.15);
}

export function kelvinToCelcius(temp) {
  return Math.round(temp - 273.15);
}

export function kelvinToFahrenheit(temp) {
  return Math.round((temp - 273.15) * 1.8 + 32);
}
