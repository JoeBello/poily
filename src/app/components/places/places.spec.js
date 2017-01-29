describe('PlacesService', function() {
  var placesService, appStorageService, httpBackend;
  beforeEach(module('common'));
  beforeEach(module('components.places'));

  beforeEach(inject(function(_PlacesService_, _AppStorageService_) {
    placesService = _PlacesService_;
    appStorageService = _AppStorageService_;
  }));

  it('should exist', function() {
    expect(placesService).toBeDefined();
  });
});
