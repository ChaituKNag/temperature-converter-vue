<template>
  <div class="border rounded m-5 p-4">
    <div id="app" class="grid grid-cols-3 gap-6 mb-5">
      <label for="temperature">
        <span class="inline-block text-gray-500 text-sm pb-1">Degrees</span>
        <input
          type="number"
          name="temperature"
          id="temperature"
          :value="temperature"
          @change="handleChange"
          class="border-2 w-full p-1 rounded focus:border-blue-500 hover:border-blue-300 outline-none"
        />
      </label>
      <label for="units">
        <span class="inline-block text-gray-500 text-sm pb-1">Type</span>
        <select
          type="number"
          name="units"
          id="units"
          class="block w-full border-2 p-1 rounded focus:border-blue-500 hover:border-blue-300 outline-none"
          @change="handleUnitSelect"
        >
          <option value="celcius">Celcius</option>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="kelvin">Kelvin</option>
        </select>
      </label>
      <div class="flex flex-col justify-end items-start">
        <button
          @click="handleSubmit"
          class="rounded bg-green-600 py-1 px-4 mb-1 text-white hover:bg-green-700"
        >
          Convert
        </button>
      </div>
    </div>
    <div class="result grid grid-cols-3 gap-6">
      <div v-if="'celcius' in result">
        <h4 class="inline-block text-gray-500 text-sm pb-1">Celcius</h4>
        <p class="text-xl font-bold">{{ result.celcius }} &deg;C</p>
      </div>
      <div v-if="'fahrenheit' in result">
        <h4 class="inline-block text-gray-500 text-sm pb-1">Fahrenheit</h4>
        <p class="text-xl font-bold">{{ result.fahrenheit }} &deg;C</p>
      </div>
      <div v-if="'kelvin' in result">
        <h4 class="inline-block text-gray-500 text-sm pb-1">Kelvin</h4>
        <p class="text-xl font-bold">{{ result.kelvin }} &deg;C</p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  celciusToFahrenheit,
  celciusToKelvin,
  fahernheitToCelcius,
  fahrenheitToKelvin,
  kelvinToCelcius,
  kelvinToFahrenheit,
} from "./utils";
const UNIT_TYPES = {
  CELCIUS: "celcius",
  FAHRENHEIT: "fahrenheit",
  KELVIN: "kelvin",
};
export default {
  name: "App",
  data() {
    return {
      temperature: 0,
      units: UNIT_TYPES.CELCIUS,
      result: {},
    };
  },
  methods: {
    handleChange(e) {
      this.temperature = Number(e.target.value);
    },
    handleUnitSelect(e) {
      this.units = e.target.value;
    },
    handleSubmit() {
      if (this.units === UNIT_TYPES.CELCIUS) {
        this.result = {
          [UNIT_TYPES.CELCIUS]: this.temperature,
          [UNIT_TYPES.FAHRENHEIT]: celciusToFahrenheit(this.temperature),
          [UNIT_TYPES.KELVIN]: celciusToKelvin(this.temperature),
        };
      } else if (this.units === UNIT_TYPES.FAHRENHEIT) {
        this.result = {
          [UNIT_TYPES.CELCIUS]: fahernheitToCelcius(this.temperature),
          [UNIT_TYPES.FAHRENHEIT]: this.temperature,
          [UNIT_TYPES.KELVIN]: fahrenheitToKelvin(this.temperature),
        };
      } else if (this.units === UNIT_TYPES.KELVIN) {
        this.result = {
          [UNIT_TYPES.CELCIUS]: kelvinToCelcius(this.temperature),
          [UNIT_TYPES.FAHRENHEIT]: kelvinToFahrenheit(this.temperature),
          [UNIT_TYPES.KELVIN]: this.temperature,
        };
      }
    },
  },
};
</script>

