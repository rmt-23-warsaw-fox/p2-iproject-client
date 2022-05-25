<script></script>

<template>
  <section class="home_section">
    <!-- home content -->
    <div class="home_content">
      <div class="filter-section">
        <form action="/action_page.php">
          <div class="input-section">
            <label for="vehicle1"> price</label><br />
            <input type="number" style="width: 180px" /><br />
          </div>
          <br />
          <div class="custom-select" style="width: 200px">
            <select>
              <option value="0">Select car:</option>
              <option value="1">Audi</option>
              <option value="2">BMW</option>
              <option value="3">Citroen</option>
              <option value="4">Ford</option>
              <option value="5">Honda</option>
              <option value="6">Jaguar</option>
              <option value="7">Land Rover</option>
              <option value="8">Mercedes</option>
              <option value="9">Mini</option>
              <option value="10">Nissan</option>
              <option value="11">Toyota</option>
              <option value="12">Volvo</option>
            </select>
          </div>

          <div class="checkboxes-section">
            <p>categories</p>
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="vehicle1"> I have a bike</label><br />
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="vehicle2"> I have a car</label><br />
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="vehicle3"> I have a boat</label><br /><br />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <!-- cards -->
      <div class="cards-section">
        <div class="cards-display">
          <div class="card">
            <div class="card-header">
              <a href="#">
                <img
                  src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
                  alt="rover"
                />
              </a>
            </div>
            <div class="card-body">
              <span class="tag tag-teal">Technology</span>
              <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
              <p>An exploration into the truck's polarising design</p>
              <div class="user">
                <img
                  src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
                  alt="user"
                />
                <div class="user-info">
                  <h5>July Dec</h5>
                  <small>2h ago</small>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <a href="#">
                <img
                  src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
                  alt="rover"
                />
              </a>
            </div>
            <div class="card-body">
              <span class="tag tag-teal">Technology</span>
              <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
              <p>An exploration into the truck's polarising design</p>
              <div class="user">
                <img
                  src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
                  alt="user"
                />
                <div class="user-info">
                  <h5>July Dec</h5>
                  <small>2h ago</small>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <img
                src="https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg"
                alt="ballons"
              />
            </div>
            <div class="card-body">
              <span class="tag tag-purple">Popular</span>
              <h4>How to Keep Going When You Don’t Know What’s Next</h4>
              <p>
                The future can be scary, but there are ways to deal with that
                fear.
              </p>
              <div class="user">
                <img
                  src="https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo"
                  alt="user"
                />
                <div class="user-info">
                  <h5>Eyup Ucmaz</h5>
                  <small>Yesterday</small>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <img
                src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg"
                alt="city"
              />
            </div>
            <div class="card-body">
              <span class="tag tag-pink">Design</span>
              <h4>10 Rules of Dashboard Design</h4>
              <p>Dashboard Design Guidelines</p>
              <div class="user">
                <img
                  src="https://studyinbaltics.ee/wp-content/uploads/2020/03/3799Ffxy.jpg"
                  alt="user"
                />
                <div class="user-info">
                  <h5>Carrie Brewer</h5>
                  <small>1w ago</small>
                </div>
              </div>
            </div>
          </div>
          <div class="pagination">
            <a href="#">&laquo;</a>
            <a href="#" class="active">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">&raquo;</a>
          </div>
        </div>
        <!-- end of cards -->
        <!-- end of home content -->
      </div>
    </div>
  </section>
</template>
