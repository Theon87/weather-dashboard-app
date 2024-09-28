import fs from 'node:fs/promises';
import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object

// TODO: Define a class for the Weather object
class Weather {
  temperature: number;
  windSpeed: number;
  humidity: number;

  constructor(temperature: number, windSpeed: number, humidity: number) {
    this.temperature = temperature;
    this.windSpeed = windSpeed;
    this.humidity = humidity;
  }
}

// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  private baseURL?: string;
  private apiKey?: string;
  cityName: string;

  constructor(baseURL: string, apiKey: string, cityName: string) {
    this.baseURL = process.env.API_BASE_URL || '';
    this.apiKey = process.env.API_KEY || '';
    this.cityName = cityName
  }

  // TODO: Create fetchLocationData method
  private async fetchLocationData(query: string) {
    try {
      const response = await fetch(
        `${this.baseURL}/data/2.5/forecast?lat={lat}&lon={lon}&appid=${this.apiKey}`
      );

      const weather = await response.json();

      const mappedWeather = await this.weatherDataMapping(weather.data);
      return mappedWeather;
    } catch (err) {
      console.log('Error:', err);
      return err;
    }
  }
  // TODO: Create destructureLocationData method
  private destructureLocationData(locationData: Coordinates): Coordinates {}
  // TODO: Create buildGeocodeQuery method
  // private buildGeocodeQuery(): string {}
  // TODO: Create buildWeatherQuery method
  // private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
  // private async fetchAndDestructureLocationData() {}
  // TODO: Create fetchWeatherData method
  // private async fetchWeatherData(coordinates: Coordinates) {}
  // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  // async getWeatherForCity(city: string) {}
}

export default new WeatherService();
