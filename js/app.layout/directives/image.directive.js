let imgKool = function(ImageService, $timeout) {

  return{
    restrict: 'AE', 
    replace: true,
    scope:{
      image: '='
    },
    template:`
      <section class="mop" >
        <img id="doit" ng-src="{{image.url}}" ng-click= "removeClass(); count = count + 1" ng-init="count=0">
        <div class="butt rip" id="hide">
          <span class="new"><i class="fa fa-star-o"></i>
          <p class="star">{{count}} Likes</p></span>
        </div>
      </section>

    `,link: function(scope, element, attrs){
        element.on('click', function() {
          element.find('div').removeClass('rip');
          $timeout(function() {
            element.find('div').addClass("rip")
          }, 1000);
      });
    }
  
    
    
 
  }
 
};
imgKool.$inject = ['ImageService','$timeout'];

export default imgKool;