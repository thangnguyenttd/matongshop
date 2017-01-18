//Start AngularJS
// http://bach2.com/nh-studeo/foodcafe/contact.html
(function () {

    var app = angular.module('shopapp', ['ngCart','ngDialog']);

    // app.config(['$routeProvider', function($routeProvider) {
    //     $routeProvider.otherwise({
    //         redirectTo: '/cart'
    //     });
    // }]);
    app.run(function($http) {

    });



    app.controller('HeaderController', ['$scope', '$http', 'ngCart', 'ngDialog', function($scope, $http, ngCart, ngDialog) {
      $scope.menus = MENUS;
      $scope.top_menu_left = TOP_MENU_LEFT;
      $scope.top_menu_right = TOP_MENU_RIGHT;
    }]);

    app.controller('HomeController', ['$scope', '$http', 'ngCart', 'ngDialog', function($scope, $http, ngCart, ngDialog) {
      $scope.special_offer = WIDGETS.special_offer;
    }]);

    app.controller('ShopController', ['$scope', '$http', 'ngCart', 'ngDialog', function($scope, $http, ngCart, ngDialog) {

      $scope.products = PRODUCTS;

      $scope.showPriceHtml = function(product){
        if (product.sale_price > 0) {
          return '<span>' + product.regular_price +' VND</span> ' + product.price + 'VND';
        }else{
          return product.price + 'VND';
        }
      }
    }]);

    app.controller('ShopDetailController', ['$scope', '$http', 'ngCart', 'ngDialog', function($scope, $http, ngCart, ngDialog) {
      $scope.product = PRODUCTS[0];
      $scope.related_products = WIDGETS.related_products;
    }]);



    app.controller('MainController', ['$scope', '$http', 'ngCart', 'ngDialog', function($scope, $http, ngCart, ngDialog) {

      ngCart.setTaxRate(0);
      ngCart.setShipping(0);

      $scope.shop_show_type = 'grid';
      $scope.fa_icon = function (icon) {
        return "fa fa-" + icon;
      };

      $scope.showMiniCartDialog = function(){
        console.log('showMiniCartDialog')
        ngDialog.open({
            template: 'template/dialog-mini-cart.html',
            className: 'ngdialog-theme-plain',
            scope: $scope
        });

      }
      $scope.addToCart = function(event){
        var elm = angular.element(event.target);
        var data = [];
        ngCart.addItem(elm.data('id'), elm.data('name'), elm.data('price'), elm.data('quantity'));
      }

      $scope.removeCartItem = function(event){
        var elm = angular.element(event.target);
        ngCart.removeItemById(elm.data('id'));
      }


      $scope.getCartItemById = function(id){
        return ngCart.getItemById(id) ? true : false;
      }

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
    }]);

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
