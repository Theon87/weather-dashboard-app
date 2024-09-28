import { Router } from 'express';
const router = Router();

// import HistoryService from '../../service/historyService.js';
import historyService from '../../service/historyService';

// import WeatherService from '../../service/weatherService.js';
import weatherService from '../../service/weatherService';

// TODO: POST Request with city name to retrieve weather data
router.post('/', async (req, res) => {
// TODO: GET weather data from city name
router.get('/', async (_req, res) => {
  try {
    const cityName = await historyService.cityName();
    res.json(cityName);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// TODO: save city to search history
});

// TODO: GET search history


// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req, res) => {});

export default router;
