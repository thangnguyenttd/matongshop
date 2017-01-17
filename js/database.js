MY_SITE_URL = 'http://localhost:8080';

TOP_MENU_LEFT = [
  {
    title: 'Order Foods 24/7',
    href: '#',
    iconCls: 'fa fa-clock-o',
    hasSub: false
  },
  {
    title: '061 9876 5432',
    href: '#',
    iconCls: 'fa fa-phone',
    hasSub: false
  }
];

TOP_MENU_RIGHT = [
  {
    title: '',
    href: '#',
    iconCls: 'fa fa-facebook',
    hasSub: false
  },
  {
    title: '',
    href: '#',
    iconCls: 'fa fa-twitter',
    hasSub: false
  },
  {
    title: '',
    href: '#',
    iconCls: 'fa fa-google-plus',
    hasSub: false
  },
  {
    title: '',
    href: '#',
    iconCls: 'fa fa-linkedin',
    hasSub: false
  },
  {
    title: '',
    href: '#',
    iconCls: 'fa fa-pinterest-p',
    hasSub: false
  }
];

MENUS = [
  {
    title: 'Home',
    href: MY_SITE_URL,
    hasSub: false
  },
  {
    title: 'About',
    href: MY_SITE_URL + '/about.html',
    hasSub: false
  },
  {
    title: 'Shop',
    href: MY_SITE_URL + '/shop.html',
    hasSub: true,
    subItems: [
      {
        title: 'Shop',
        href: MY_SITE_URL + '/shop.html',
        hasSub: false
      },
      {
        title: 'Shop Detail',
        href: MY_SITE_URL + '/shop_detail.html',
        hasSub: false
      }
    ]
  },
  {
    title: 'Contact',
    href: MY_SITE_URL + '/contact.html',
    hasSub: false
  }
];

CATEGORIES = [
  { id: 1, name: 'Category 1', slug: 'category-1', parent: 0, href: MY_SITE_URL +'/category.html' },
    { id: 5, name: 'Sub Category 11', slug: 'sub-category-11', parent: 1 },
    { id: 6, name: 'Sub Category 12', slug: 'sub-category-12', parent: 1 },
  { id: 2, name: 'Category 2', slug: 'category-2', parent: 0 },
    { id: 7, name: 'Sub Category 21', slug: 'sub-category-21', parent: 2 },
    { id: 8, name: 'Sub Category 22', slug: 'sub-category-22', parent: 2 },
  { id: 3, name: 'Category 3', slug: 'category-3', parent: 0 },
  { id: 4, name: 'Category 4', slug: 'category-4', parent: 0 }
];

PRODUCTS = [
  { id: 1, name: 'San pham 1', slug: 'sp-1', href: MY_SITE_URL + '/shop_detail.html', imageUrl: MY_SITE_URL + '/images/sepcial-offers/img-01.jpg', featured_id: 1, attach_ids: '1,2,3,4', category_ids: '1,2,3,4', price: 200000, regular_price: 200000, sale_price: 200000, description: 'This is description !!!'},
  { id: 2, name: 'San pham 2', slug: 'sp-2', href: MY_SITE_URL + '/shop_detail.html', imageUrl: MY_SITE_URL + '/images/sepcial-offers/img-02.jpg', featured_id: 1, attach_ids: '1,2,3,4', category_ids: '1,2,3,4', price: 200000, regular_price: 200000, sale_price: 200000, description: 'This is description !!!'},
  { id: 3, name: 'San pham 3', slug: 'sp-3', href: MY_SITE_URL + '/shop_detail.html', imageUrl: MY_SITE_URL + '/images/sepcial-offers/img-03.jpg', featured_id: 1, attach_ids: '1,2,3,4', category_ids: '1,2,3,4', price: 200000, regular_price: 200000, sale_price: 200000, description: 'This is description !!!'},
  { id: 4, name: 'San pham 4', slug: 'sp-4', href: MY_SITE_URL + '/shop_detail.html', imageUrl: MY_SITE_URL + '/images/sepcial-offers/img-04.jpg', featured_id: 1, attach_ids: '1,2,3,4', category_ids: '1,2,3,4', price: 200000, regular_price: 200000, sale_price: 200000, description: 'This is description !!!'},
  { id: 5, name: 'San pham 5', slug: 'sp-5', href: MY_SITE_URL + '/shop_detail.html', imageUrl: MY_SITE_URL + '/images/sepcial-offers/img-01.jpg', featured_id: 1, attach_ids: '1,2,3,4', category_ids: '1,2,3,4', price: 200000, regular_price: 200000, sale_price: 200000, description: 'This is description !!!'},
  { id: 6, name: 'San pham 6', slug: 'sp-6', href: MY_SITE_URL + '/shop_detail.html', imageUrl: MY_SITE_URL + '/images/sepcial-offers/img-02.jpg', featured_id: 1, attach_ids: '1,2,3,4', category_ids: '1,2,3,4', price: 200000, regular_price: 200000, sale_price: 200000, description: 'This is description !!!'},
  { id: 7, name: 'San pham 7', slug: 'sp-7', href: MY_SITE_URL + '/shop_detail.html', imageUrl: MY_SITE_URL + '/images/sepcial-offers/img-03.jpg', featured_id: 1, attach_ids: '1,2,3,4', category_ids: '1,2,3,4', price: 200000, regular_price: 200000, sale_price: 200000, description: 'This is description !!!'},
  { id: 8, name: 'San pham 8', slug: 'sp-8', href: MY_SITE_URL + '/shop_detail.html', imageUrl: MY_SITE_URL + '/images/sepcial-offers/img-04.jpg', featured_id: 1, attach_ids: '1,2,3,4', category_ids: '1,2,3,4', price: 200000, regular_price: 200000, sale_price: 200000, description: 'This is description !!!'},
  { id: 9, name: 'San pham 9', slug: 'sp-9', href: MY_SITE_URL + '/shop_detail.html', imageUrl: MY_SITE_URL + '/images/sepcial-offers/img-01.jpg', featured_id: 1, attach_ids: '1,2,3,4', category_ids: '1,2,3,4', price: 200000, regular_price: 200000, sale_price: 200000, description: 'This is description !!!'},
  { id: 10, name: 'San pham 10', slug: 'sp-10', href: MY_SITE_URL + '/shop_detail.html', imageUrl: MY_SITE_URL + '/images/sepcial-offers/img-02.jpg', featured_id: 1, attach_ids: '1,2,3,4', category_ids: '1,2,3,4', price: 200000, regular_price: 200000, sale_price: 200000, description: 'This is description !!!'}
];

WIDGETS = {};

WIDGETS.home_slider = {
  background_image: '',
  title: '',
  titleDesc: '',
  data: [

  ]
};
WIDGETS.special_offer = {
  background_image: MY_SITE_URL + '/images/parallax-bg/img-05.jpg',
  title: 'Our  Special offer',
  titleDesc: 'Recommended by our Chef',
  data: JSON.parse(JSON.stringify(PRODUCTS))
};
WIDGETS.gallery_holder = {
  background_image: MY_SITE_URL + '/images/parallax-bg/img-05.jpg',
  title: 'food gallery',
  titleDesc: 'we are tasty',
  data: JSON.parse(JSON.stringify(PRODUCTS))
};
WIDGETS.related_products = {
  background_image: MY_SITE_URL + '/images/parallax-bg/img-05.jpg',
  title: 'Related Products',
  titleDesc: '',
  data: JSON.parse(JSON.stringify(PRODUCTS))
};
