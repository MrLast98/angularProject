import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  lipsum: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacus massa, rutrum vestibulum pulvinar a, pellentesque at tellus. Integer mattis lorem bibendum, imperdiet massa et, mollis odio. Integer tempus volutpat felis, sed imperdiet lorem blandit quis. Phasellus in malesuada elit. Vestibulum eros tortor, sodales non arcu ultricies, fermentum ultricies ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras urna lectus, porta ac blandit in, efficitur sed odio. Vestibulum a lacus ultricies, sodales justo sed, mattis leo. Cras vehicula, lectus vel tempus sodales, nibh purus laoreet orci, quis sodales tellus urna at ante. Duis aliquam magna id elit varius, pharetra congue sem feugiat. Proin eget augue dignissim, sagittis ex eget, lobortis augue. Etiam pellentesque odio sem, quis ultricies tortor pellentesque et. Fusce scelerisque nunc nec ipsum gravida ultrices. Praesent ut varius dolor, sit amet porttitor nisi. Vestibulum egestas aliquet sodales. Mauris placerat fringilla nisl, a cursus lacus imperdiet ac. Sed vehicula eros vitae felis condimentum, sed finibus massa tempus. Duis fringilla ut mauris in blandit. Ut ante nibh, pretium vitae pharetra quis, pretium quis nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus laoreet tincidunt velit, vitae luctus tellus semper ut. Aliquam convallis ligula quis mauris tempor consequat. Pellentesque scelerisque elit ante, nec pretium libero posuere in. Aenean vel cursus risus. Nunc ullamcorper nunc ac libero fringilla, nec lobortis elit tempus. Maecenas tincidunt, metus non venenatis gravida, mi eros suscipit libero, non feugiat nunc magna non lectus. Quisque dignissim congue mauris, et pharetra tortor fringilla nec. Vivamus leo nibh, sagittis eget facilisis non, ornare sit amet eros. Ut congue finibus dolor, sed faucibus ipsum dapibus mattis.'
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
