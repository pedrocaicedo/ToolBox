class DataGenerator {

  generateUser() {

    const timestamp = Date.now();

    return {
      name: `QA User ${timestamp}`,
      email: `qauser${timestamp}@test.com`,
      password: 'QaTest12345*',
      firstName: 'QA',
      lastName: 'Automation',
      company: 'QA Company',
      address: '123 Automation Street',
      address2: 'Apartment 101',
      country: 'Canada',
      state: 'QA State',
      city: 'QA City',
      zipcode: '12345',
      mobileNumber: '3001234567'
    };

  }

}

module.exports = new DataGenerator();
