import { TestBed } from '@angular/core/testing';

import { ChristmasCardGalleryService } from './christmas-card-gallery.service';

describe('ChristmasCardGalleryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChristmasCardGalleryService = TestBed.get(ChristmasCardGalleryService);
    expect(service).toBeTruthy();
  });
});
