import server from '../Api';
import supertest from 'supertest';

const requestWithSupertest = supertest(server);

describe('User Endpoints', () => {

	test('GET /user should show all users', async () => {
		const res = await requestWithSupertest.get('/api/v1/users');
		expect(res.status).toEqual(200);
		expect(res.type).toEqual(expect.stringContaining('json'));
		expect(res.body).toHaveLength(0);
	});

	test('GET /user/:id should show user by id', async () => {
		const res = await requestWithSupertest.get('/api/v1/users/62a5450d472a1e7e5bda5b22');
		expect(res.status).toEqual(200);
		expect(res.type).toEqual(expect.stringContaining('json'));
	});

	test('POST /user should create a new user', async () => {
		const data = {
			username: 'test@test.com',
			password: 'test123',
			confirmPassword: 'test123',
		};
		const res = await requestWithSupertest.post('/api/v1/users').send(data);
		expect(res.status).toEqual(201);
	});

	test('POST /user should not create a new user with invalid data', async () => {
		const data = {
			username: '',
		};
		const res = await requestWithSupertest.post('/api/v1/users').send(data);
		expect(res.status).toEqual(400);
	});

	test('PUT /user/:id should update a user', async () => {
		const data = {
			password: 'test124',
		};
		const res = await requestWithSupertest.put('/api/v1/users/62a5450d472a1e7e5bda5b22').send(data);
		expect(res.status).toEqual(200);
	});

	test('DELETE /user/:id should delete a user', async () => {
		const res = await requestWithSupertest.delete('/api/v1/users/62a5450d472a1e7e5bda5b22');
		expect(res.status).toEqual(200);
	});

});