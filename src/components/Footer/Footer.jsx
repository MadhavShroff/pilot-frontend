import React from "react";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';


export default () => {
return (
<div class="container-fluid" style={{background: "#fdd835"}}>
  <div class="row p-3">
    <div class="col-md-8">
      <div class="row p-3">
        <div class="col-md-3 p-2">
          <h3 class="display-5">Products</h3>
          <h6 class="list-item">
            Office Furniture
          </h6>
          <h6 class="list-item">
            Spray Guns
          </h6>
          <h6 class="list-item">
            Files
          </h6>
          <h6 class="list-item">
            Services
          </h6>
        </div>
        <div class="col-md-3 p-2">
          <h3 class="display-5">About us</h3>
          <h6 class="list-item">
            Our Team
          </h6>
          <h6 class="list-item">
            Find outlets
          </h6>
        </div>
        <div class="col-md-3 p-2">
          <h3 class="display-5">Blog</h3>
          <h6 class="list-item">
            About Pilot Spray Guns
          </h6>
          <h6 class="list-item">
            Success Stories
          </h6>
          <h6 class="list-item">
            Testimonials
          </h6>
          <h6 class="list-item">
            Reviews
          </h6>
        </div>
        <div class="col-md-3 p-2">
          <h3 class="display-5">Services</h3>
          <h6 class="list-item">
            Refirbushment
          </h6>
          <h6 class="list-item">
            Repair
          </h6>
          <h6 class="list-item">
            Warranty
          </h6>
          <h6 class="list-item">
            Servicing
          </h6>
        </div>
        <div class="col-md-6">
            <div class="row p-3">
              <div class="m-2"><SocialIcon url="https://twitter.com/jaketrent" /></div>
              <div class="m-2"><SocialIcon url="https://facebook.com/jaketrent" /></div>
              <div class="m-2"><SocialIcon url="https://medium.com/jaketrent" /></div>
              <div class="m-2"><SocialIcon url="https://youtube.com/jaketrent" /></div>
            </div>
          </div>
      </div>
      <div class="row p-3">
        <div class="col-md-12">
          <h2>
            Proident sint laborum proident commodo.
          </h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris
            condimentum nibh, ut fermentum massa. Lorem sunt adipisicing qui velit velit et magna voluptate ad aute
            dolor dolore.
          </p>
          <p>
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-4 p-3">
      <form role="form" class="p-2">
        <h2>
          Proident sint laborum proident commodo.
        </h2>
        <div class="form-group">
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="abc@gmail.com" />
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" /> Concent to receiving weekly Newsletters?
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  </div>
</div>
)
}