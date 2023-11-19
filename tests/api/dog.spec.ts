import { request, test, expect } from '@playwright/test';
const BASEAPIURL = process.env.baseAPIURL;

test('Verify - retriever is within list', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.get(`${BASEAPIURL}/breeds/list/all`);
    
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const breedsList = await response.json();
    expect(breedsList.status).toBe("success");
    expect(breedsList.message).toEqual(expect.objectContaining({
      retriever: expect.any(Array),
    }));
  });
  
test('GET - sublist of retriever', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.get(`${BASEAPIURL}/breed/retriever/list`);
    
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const subBreedsList = await response.json();
    expect(subBreedsList.status).toBe("success");
    expect(subBreedsList).toEqual(expect.objectContaining({
      message: expect.any(Array),
    }));
    expect(subBreedsList.message.length).toBeGreaterThanOrEqual(1);
  });
  
  test('GET - random image of golden retriever', async () => {
      const apiContext = await request.newContext();
      const response = await apiContext.get(`${BASEAPIURL}/breed/retriever/golden/images/random`);
      
      expect(response.ok()).toBeTruthy();
      expect(response.status()).toBe(200);
      const randomImage = await response.json();
      expect(randomImage.status).toBe("success");
      expect(randomImage.message).toEqual(expect.stringMatching(/(https?:\/\/.*\.(?:png|jpg))/i));
    });