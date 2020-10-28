import React from 'react';
import "./Blog.css"
import {Link} from 'react-router-dom';

const Blog = () => {
    return(
        <div>

          {/*.... Blog Front Image....*/}
          <div className="Blog-img">
          <img
          src={process.env.PUBLIC_URL + "/img/Blog2.jpg"}
          className="img-about img-fluid"
          alt="image1"
          width="100%"
          height="auto"
         ></img>
         <div className="onimg-text text-center text-primary">
          <h2>Blog Category</h2>
          <div className="badge badge-primary">
            <h4>Home // Blog Category </h4>
            <br></br>
          </div>
        </div>
      </div>
      <br/>

    {/*......col-9 first Image part......*/}
      <div className="container-fluid jumbotron">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-9">
           <div>
            <img
            src={process.env.PUBLIC_URL + "/img/AboutMain.jpg"}
            className="img-about img-fluid"
            alt="image1"
            width="100%"
            ></img>
             <h5 className="card-name">Oct 21, 2020</h5>
         <div className="link-para">
          <h3>
           <Link to="">France Bans Metam-Sodium Sprays</Link> 
          </h3> 
          <br></br>
          <div className="blog-user">
            <div className="user"> 
            <img
            src={process.env.PUBLIC_URL + "/img/user.png"}
            className="img-line img-fluid"
            alt="user-name"
            width="30px"
            height="30px"
            ></img>
            <div className="name">
             <Link to="">
               <span> -john doe</span>
             </Link>
            </div>
            </div>
            <div className="comment">
              <span>
                <i class="fa fa-comments-o"
                area-hidden="true"></i>
               <Link to="">comments</Link> 
              </span>
            </div>
          </div>
          <p>
          Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut
          enim ad minim venia quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit iluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ofa deserunt mollit anim
          id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloreme laudantiuem totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. Nemreeo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit.
          </p>

          <Link to="">
            read more
            <span>
              <i class="fa fa-long-arrow-right">
              </i>
            </span>
          </Link>
        </div>
        </div>
        <br></br><br></br>

       {/*.....second image and its content.....*/}

        <div>
            <img
            src={process.env.PUBLIC_URL + "/img/home-slider2.jpg"}
            className="img-about img-fluid"
            alt="image1"
            width="100%"
            height="auto"
            ></img>
             <h5 className="card-name">Oct 21, 2020</h5>
         <div className="link-para">
          <h3>
           <Link to="">France Bans Metam-Sodium Sprays</Link> 
          </h3> 
          <br></br>
          <div className="blog-user">
            <div className="user"> 
            <img
            src={process.env.PUBLIC_URL + "/img/user.png"}
            className="img-line img-fluid"
            alt="user-name"
            width="30px"
            height="30px"
            ></img>
            <div className="name">
             <Link to="">
               <span> -john doe</span>
             </Link>
            </div>
            </div>
            <div className="comment">
              <span>
                <i class="fa fa-comments-o"
                area-hidden="true"></i>
               <Link to="">comments</Link> 
              </span>
            </div>
          </div>
          <p>
          Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut
          enim ad minim venia quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit iluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ofa deserunt mollit anim
          id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloreme laudantiuem totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. Nemreeo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit.
          </p>

          <Link to="">
            read more
            <span>
              <i class="fa fa-long-arrow-right">
              </i>
            </span>
          </Link>
        </div>
        </div>
        <br></br><br></br>

        {/*.....third image and its content.....*/}
        <div>
            <img
            src={process.env.PUBLIC_URL + "/img/home-card3.jpg"}
            className="img-about img-fluid"
            alt="image1"
            width="100%"
            height="auto"
            ></img>
             <h5 className="card-name">Oct 21, 2020</h5>
         <div className="link-para">
          <h3>
           <Link to="">France Bans Metam-Sodium Sprays</Link> 
          </h3> 
          <br></br>
          <div className="blog-user">
            <div className="user"> 
            <img
            src={process.env.PUBLIC_URL + "/img/user.png"}
            className="img-line img-fluid"
            alt="user-name"
            width="30px"
            height="30px"
            ></img>
            <div className="name">
             <Link to="">
               <span> -john doe</span>
             </Link>
            </div>
            </div>
            <div className="comment">
              <span>
                <i class="fa fa-comments-o"
                area-hidden="true"></i>
               <Link to="">comments</Link> 
              </span>
            </div>
          </div>
          <p>
          Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut
          enim ad minim venia quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit iluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ofa deserunt mollit anim
          id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloreme laudantiuem totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. Nemreeo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit.
          </p>

          <Link to="">
            read more
            <span>
              <i class="fa fa-long-arrow-right">
              </i>
            </span>
          </Link>
        </div>
        </div>
      </div>
 
      {/*................col-3 part..............*/}

       {/*.....Search.....*/}    
      <div className="col-lg-3 col-md-3 col-3">
          <div>
            <h3>Search</h3>
            <img
            src={process.env.PUBLIC_URL + "/img/line4o.jpg"}
            className="img-line img-fluid"
            alt="line"
            width="24%"
            height="auto"
            ></img>
            <br></br><br></br>
            <div className="search">
              <input type="text" placeholder="Search here" 
               class="fa fa-search" />
              <div class="search-icon"><i class="fa fa-search"></i></div>
              </div>
            </div> <br></br><br></br>

            {/*......Category......*/}
            <h3>Category</h3>
            <img
            src={process.env.PUBLIC_URL + "/img/line4o.jpg"}
            className="img-line img-fluid"
            alt="line"
            width="31%"
            height="auto"
            ></img>
            <br></br><br></br>
             <div className="category-sidebar">
                <ul>
                  <li>"Organic Farming"
                    <span>(12)</span>
                  </li>
                  <li>"Fresh Organic Mustard"
                    <span>(16)</span>
                  </li>
                  <li>"Organic Green Bell Pepper"
                    <span>(156)</span>
                  </li>
                  <li>"Permaculture"
                    <span>(260)</span>
                  </li>
                  <li>"Precision Farming"
                    <span>(96)</span>
                  </li>
                  <li>"Conservation Agriculture"
                    <span>(12)</span>
                  </li>
                </ul>
             </div>
             <br></br>
             <div>
               {/*......Recent Post.....*/}
               <h3>recent post</h3>
               <img
                src={process.env.PUBLIC_URL + "/img/line4o.jpg"}
                className="img-line img-fluid"
                alt="line"
                width="31%"
                height="auto"
               ></img>
             </div>
             <div className="sidebar-post">
               <ul>
                 <li>
                   <div className="post-image">
                   <img
                  src={process.env.PUBLIC_URL + "/img/blog-post2.jpg"}
                  className="img-about img-fluid"
                  alt="image1"
                  width="100%"
                  height="auto"
                  ></img>
                   </div>
                   <div className="content-post">
                     <p>oct 25, 2020</p>
                     <div className="side-p">
                     <Link href=""> <p>how we produce useful 
                       chemical paste. </p>
                     </Link>
                     </div>
                   </div>
                 </li>
                 <li>
                   <div className="post-image">
                   <img
                  src={process.env.PUBLIC_URL + "/img/blogpost1.jpg"}
                  className="img-about img-fluid"
                  alt="image1"
                  width="100%"
                  height="auto"
                  ></img>
                   </div>
                   <div className="content-post">
                     <p>oct 25, 2020</p>
                     <div className="side-p">
                     <Link href=""> <p>how we produce other 
                       dairy product. </p>
                     </Link>
                     </div>
                   </div>
                 </li>
                 <li>
                   <div className="post-image">
                   <img
                  src={process.env.PUBLIC_URL + "/img/blog-post2.jpg"}
                  className="img-about img-fluid"
                  alt="image1"
                  width="100%"
                  height="auto"
                  ></img>
                   </div>
                   <div className="content-post">
                     <p>oct 25, 2020</p>
                     <div className="side-p">
                     <Link href=""> <p>how we package and  
                      export in pure form.</p>
                     </Link>
                     </div>
                   </div>
                 </li>
               </ul>
             </div> <br></br> <br></br>

             {/*......Archives.....*/}
             <h3>Archives</h3>
            <img
            src={process.env.PUBLIC_URL + "/img/line4o.jpg"}
            className="img-line img-fluid"
            alt="line"
            width="31%"
            height="auto"
            ></img>
            <br></br>
             <div className="category-sidebar">
                <ul>
                  <li>"August 2020"
                    <span>(12)</span>
                  </li>
                  <li>"September 2020"
                    <span>(16)</span>
                  </li>
                  <li>"October 2020"
                    <span>(156)</span>
                  </li>
                  <li>"November 2020"
                    <span>(260)</span>
                  </li>
                  <li>"December 2020"
                    <span>(96)</span>
                  </li>
                  <li>"January 2021"
                    <span>(12)</span>
                  </li>
                </ul>
             </div>
             <br></br><br></br>
             {/*......Card......*/}
              <div>
               <div className="card bg-primary">
               <img
                  src={process.env.PUBLIC_URL + "/img/dairy_team3.jpg"}
                  className="img-about img-fluid card-image"
                  alt="image1"
                  width="100%"
                  height="auto"
                  ></img>
                <div className="card-body">
                  <h4 className="card-title"> </h4>
                   <p className="devid">
                   Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                    dolor laudantiuem totam rem aperiam, eaque ipsa quae 
                    ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    <h3 className="text-center devid">Devid San</h3>
                   </p>
                </div>  
               </div>    
             </div> <br></br>
             {/*......carousel card.....*/}
             <div className="container">
               <div id="demo" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="/img/dairy_team1.jpg"
                     className="img-about img-fluid card-image"
                    alt=""></img> 
                    </div>
                    {/* <div className="carousel-item active">
                    <img src="/img/dairy_team2.jpg"
                     className="img-about img-fluid card-image"
                    alt=""></img> 
                    </div>
                    <div className="carousel-item active">
                    <img src="/img/dairy_team3.jpg"
                     className="img-about img-fluid card-image"
                    alt=""></img> 
                    </div> */}
                    <p className="text-white">Crousel</p>
                  </div>       
               </div>
               </div>
             <br></br><br></br>

             {/*......Tags.......*/}
             <div className="sidebar-content">
               <div className="">
               <h3>Tags</h3>
                <img
                 src={process.env.PUBLIC_URL + "/img/line4o.jpg"}
                 className="img-line img-fluid"
                 alt="line"
                 width="16%"
                 height="auto"
            ></img>
               </div>
               <div className="sidebar-tag">
                <ul>
                  <li>
                   <div className="side-tag-name">Agriculture</div></li>
                  <li>
                  <div className="side-tag-name">Farm</div></li>
                  <li>
                  <div className="side-tag-name">Organic</div></li>
                  <li>
                  <div className="side-tag-name">Egg</div></li>
                  <li>
                  <div className="side-tag-name">Permaculture</div></li>
                  <li>
                  <div className="side-tag-name">Green</div></li>
                  <li>
                  <div className="side-tag-name">Garden</div></li>
                  <li>
                  <div className="side-tag-name">Milk</div></li>
                  <li>
                  <div className="side-tag-name">Dairy Farm</div></li>  
                </ul>
              </div>
             </div>
            </div> 

    </div>
      </div>  
    
      
    </div>
    )
}
 
export default Blog;