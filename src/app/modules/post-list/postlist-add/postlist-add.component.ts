import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PostItemService } from 'src/app/services/post/post-item.service';

@Component({
  selector: 'app-postlist-add',
  templateUrl: './postlist-add.component.html',
  styleUrls: ['./postlist-add.component.css']
})
export class PostlistAddComponent implements OnInit {

  addpost : FormGroup;
  constructor(
    private postcateservice: PostItemService,
    private route: ActivatedRoute,
    private router: Router ,
    public fb: FormBuilder,
    private http : HttpClient) {
    this.addpost = this.fb.group({
      Name: [''],
      Alias: [''],
      Image: [''],
      Description: [''],
      Homeflag: false,
    })
  }
  imageObj: File;
  imageUrl: string;
  ngOnInit(): void {
  }
  uploadFile(event) {
    const FILE = (event.target as HTMLInputElement).files[0];
    this.imageObj = FILE;
  }
  onSubmit(){
  //  const imageForm = new FormData();
  //    imageForm.append('image', this.imageObj);
  //   const id = this.route.snapshot.paramMap.get('id');

  //    this.postcateservice.upload(imageForm).subscribe(
  //     (response: any) => {
  //       this.editCate.value.logo = response.data._id;
        this.postcateservice.createPost(this.addpost.value).subscribe((data: any) => {
          this.router.navigateByUrl('das');
      (error: HttpErrorResponse) => {
        console.log(error.error);
      };
  });
}
}