//Start AngularJS

(function () {

    var app = angular.module('shopapp', []);
    app.run(function($http) {

    });

    app.controller('MainController', function($scope, $http, $compile) {
        // render();
        function render(){
          //All product
          $scope.product = product;

          //Get parent category
          var category_array = [];
          category.forEach(function (val,i) {
              if(val.parent == 0){
                  category_array.push(val)
              }
          })
          $scope.category = category_array;

          //Get category_sub_category
          //Get parent category
          var sub_category_array = [];
          category.forEach(function (val,i) {
              if(val.parent != 0){
                  sub_category_array.push(val)
              }
          })

          var category_sub_category = []
          category_array.forEach(function (val,i) {
              var sub_category = []
              sub_category_array.forEach(function (value,index) {
                  if(value.parent == val.id){
                      sub_category.push(value)
                  }

              })
              var category_sub_category_json = {
                  category: val,
                  sub_category_array: sub_category
              }

              category_sub_category.push(category_sub_category_json)

          })

          $scope.category_sub_category = category_sub_category

          //Get product by sub_category
          var category_product = []
          category_sub_category.forEach(function (val,i) {
              var product_array = []
              val.sub_category_array.forEach(function (value, index) {
                  product.forEach(function (product,ind) {
                      if(product.category_ids == value.id){
                          product_array.push(product)
                      }

                  })

              })

              var cat_product_item = {
                  category: val.category,
                  sub_category_list: val.sub_category_array,
                  product_list:product_array
              }
              category_product.push(cat_product_item)
          })

          $scope.category_product = category_product;

          // var html = jq('#listelement').html(data);
		      // $compile(html)($scope);
          // console.log($scope);
        }

        $scope.show_category_modal = function () {
            if($(".natha_category_wrapper").is(":hidden")){
                var document_height = $(document).height();
                $(".background_fading").css({"height":document_height});
                $(".background_fading").show();
                $(".natha_category_wrapper").show()

            }else{
                $(".background_fading").hide();
                $(".natha_category_wrapper").hide()

            }

        }
    });

})();

//END AngularJS

//Jquery ZONE
$(function() {

    $(".product_slider").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: ["<img src='image/nathavn/nav_arrow_left.png' width='25'>","<img src='image/nathavn/nav_arrow_right.png' width='25'>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });


});


//END Jquery ZONE
