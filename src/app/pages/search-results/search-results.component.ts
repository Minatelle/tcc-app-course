import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  public results = [
    {
      id: "64d3d9af896ba37abe447f0c",
      title: "Como mexer no facebook em 2023",
      urlImage: "https://res.cloudinary.com/dntsnagfi/image/upload/v1692317362/samples/food/spices.jpg"
    },
    {
      id: "64d4d6025ff08a15c7b57d11",
      title: "Como mexer no facebook",
      urlImage: "https://res.cloudinary.com/dntsnagfi/image/upload/v1692317379/samples/man-on-a-escalator.jpg"
    },
    {
      id: "64deb7d0569d69177c5dc7a6",
      title: "Como acessar o Facebook 2022",
      urlImage: "https://res.cloudinary.com/dntsnagfi/image/upload/v1692317379/samples/man-on-a-escalator.jpg"
    }
  ]

  constructor(
    private router: Router,
  ) { }

  public navigateToHome() {
    this.router.navigate(['/']);
  }
}
