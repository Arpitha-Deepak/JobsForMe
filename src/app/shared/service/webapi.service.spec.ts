import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { WebapiService } from './webapi.service';

describe('WebapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: WebapiService = TestBed.get(WebapiService);
    expect(service).toBeTruthy();
  });
});
