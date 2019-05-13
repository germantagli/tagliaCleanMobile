import { TestBed } from '@angular/core/testing';

import { TagliaCleanServiceService } from './taglia-clean-service.service';

describe('TagliaCleanServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TagliaCleanServiceService = TestBed.get(TagliaCleanServiceService);
    expect(service).toBeTruthy();
  });
});
