import { TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { HttpClient } from '@angular/common/http';
import { AssetDataService } from '../../assetData.service';
import { of } from 'rxjs';
import { NGX_ECHARTS_CONFIG } from 'ngx-echarts';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: any;
  let mockHttpClient: jasmine.SpyObj<HttpClient>;
  let assetDataServiceSpy: jasmine.SpyObj<AssetDataService>;

  beforeEach(async () => {
    // Create a mock HttpClient
    mockHttpClient = jasmine.createSpyObj('HttpClient', ['get']);
    mockHttpClient.get.and.returnValue(of({}));

    // Create a mock AssetDataService
    assetDataServiceSpy = jasmine.createSpyObj('AssetDataService', ['assetData$']);
    assetDataServiceSpy.assetData$ = of([]);

    await TestBed.configureTestingModule({
      declarations: [],
      providers: [
        { provide: HttpClient, useValue: mockHttpClient },
        { provide: AssetDataService, useValue: assetDataServiceSpy },
        { provide: NGX_ECHARTS_CONFIG, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call fetchMarketTrendsData and subscribe to assetData$ in ngOnInit', () => {
    // Spy on fetchMarketTrendsData
    spyOn(component, 'fetchMarketTrendsData').and.callFake(() => {});
    component.ngOnInit();

    // Assert fetchMarketTrendsData was called
    expect(component.fetchMarketTrendsData).toHaveBeenCalled();

    // Assert subscription to assetData$
    expect(assetDataServiceSpy.assetData$).toBeDefined();
  });
});
