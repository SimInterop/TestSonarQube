const request = require('supertest');
const app = require('./index');

describe('Backend API Tests', () => {
    // We are only testing one endpoint. 
    // SonarQube will flag /login and /calculate/tax2024 as uncovered.
    it('should calculate 2023 tax correctly for high income', async () => {
        const response = await request(app).get('/calculate/tax2023?income=100000');
        expect(response.statusCode).toBe(200);
        expect(response.body.taxOwed).toBe(20000);
    });
});
