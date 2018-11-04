"use strict"

var menuItems = {
    home:       {   title: 'Home',      href: '#home'       },
    about:      {   title: 'About',     href: '#about'      },
    services:   {   title: 'Services',  href: '#services'   },
    resume:     {   title: 'Resume',    href: '#resume'     },
    work:       {   title: 'Our Work',  href: '#portfolio'  },
    blog:       {   title: 'Blog',      href: '#blog'       },
    contact:    {   title: 'Contact',   href: '#contact-me' },
    chart:    {   title: 'Chart',   href: '#chart' },
}

var skills = ['web design', 'digital marketing', 'ux design', 'web developmnet', 'mobile apps']

var icons = {
    facebook:   {   link: 'http://www.pigu.lt',          icon: 'fab fa-facebook-f' },
    twitter:    {   link: 'http://www.twitter.com',      icon: 'fab fa-twitter'    },
    instagram:  {   link: 'http://www.instagram.com',    icon: 'fab fa-instagram'  },
    youtube:    {   link: 'http://www.youtube.com',      icon: 'fab fa-youtube'    },
    pinterest:  {   link: 'http://www.pinterest.com',    icon: 'fab fa-pinterest'  },
}

var services = {
    design:         {   title: 'web design',        icon: 'fab fa-html5 fa-6x',  info: 'Unde aliquid voluptate assumenda laboriosam harum numquam, saepe tenetur amet ullam expedita natus sequi exercitationem aliquam. Veniam facere quisquam asperiores odio reprehenderit.'},
    development:    {   title: 'php development',   icon: 'fab fa-php fa-6x',    info: 'Ipsum, dolor sit amet consectetur adipisicing elit. Unde aliquid voluptate assumenda laboriosam harum numquam, saepe ullam. Veniam facere quisquam asperiores odio reprehenderit.'},
    apps:           {   title: 'apps',              icon: 'fas fa-code fa-6x',   info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde aliquid voluptate assumenda laboriosam harum numquam, saepe tenetur amet ullam expedita natus sequi exercitationem aliquam.'},
}

var education = {
    college:       {   title: 'vkk',    period: 'september 2018 - may 2019' ,  info: 'VKK - Unde aliquid voluptate assumenda laboriosam harum numquam, saepe tenetur amet.'},
    university:    {   title: 'vu',     period: 'september 2018 - may 2019' ,  info: 'VU - Ipsum, dolor sit amet consectetur adipisicing elit. Unde aliquid voluptate assu.'},
    bit:           {   title: 'bit',    period: 'september 2018 - may 2019' ,  info: 'BIT - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde aliquid voluptat.'},
}

var work = {
    1:    {   company: 'fiver',         period: 'september 2018 - may 2019',  info: 'FIVER - Unde aliquid voluptate assumenda laboriosam harum numquam, saepe tenetur amet ullam expedita natus sequi exercitationem aliquam. Veniam facere quisquam asperiores odio reprehenderit.'},
    2:    {   company: 'blue moon',     period: 'september 2018 - may 2019',  info: 'BLUEMOON - Ipsum, dolor sit amet consectetur adipisicing elit. Unde aliquid voluptate assumenda laboriosam harum numquam, saepe ullam. Veniam facere quisquam asperiores odio reprehenderit.'},
    3:    {   company: 'yandex.taxi',   period: 'september 2018 - may 2019',  info: 'YANDEX - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde aliquid voluptate assumenda laboriosam harum numquam, saepe tenetur amet ullam expedita natus sequi exercitationem aliquam.'},
}

var projects = {
    1:      {tag: 'illustration',     img: 'assets/projects/1.jpg'},
    2:      {tag: 'photoshop',        img: 'assets/projects/2.jpg'},
    3:      {tag: 'photoshop',        img: 'assets/projects/3.jpg'},
    4:      {tag: 'illustration',     img: 'assets/projects/4.jpg'},   
    5:      {tag: 'photoshop',        img: 'assets/projects/5.jpg'},
    6:      {tag: 'illustration',     img: 'assets/projects/6.jpg'},
    7:      {tag: 'website',          img: 'assets/projects/7.jpg'},
    8:      {tag: 'website',          img: 'assets/projects/8.jpg'},
    9:      {tag: 'app',              img: 'assets/projects/9.jpg'},
    10:     {tag: 'pms',              img: 'assets/projects/10.jpg'},
    11:     {tag: 'cms',              img: 'assets/projects/11.jpg'},
    12:     {tag: 'cms',              img: 'assets/projects/12.jpg'},
}

var testimonials = {
    1:      {name: 'Mr. Anatoly Kashpirovsky', title: 'Deputy of the Russian Duma',    img: 'assets/projects/1.jpg', quote: 'The options include clipping, showing scrollbars, or displaying the content flowing out of its container into the surrounding area.' },
    2:      {name: 'Nikola Tesl', title: 'Tesla Electric Light & Manufacturing',    img: 'assets/projects/2.jpg', quote: 'Specifying a value other than visible (the default) creates a new block formatting conquote. This is necessary for technical reasons.' },
    3:      {name: 'Ole Einar Bjørndalen', title: 'The King of Biathlon',    img: 'assets/projects/3.jpg', quote: 'In order for overflow to have an effect, the block-level container must have either a set height (height or max-height) or white-space set to nowrap.' },
    4:      {name: 'Mao Zedong', title: 'Chinese communist revolutionary',    img: 'assets/projects/4.jpg', quote: 'Depends on the user agent. If content fits inside the padding box, it looks the same as visible, but still establishes.' },
}

var blogPosts = {
    1:    {   title: 'Dolor sit, amet',                 timestamp: '21st May 2018',     teaser: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab id soluta vel dolore harum atque deserunt expedita aut, suscipit doloremque sequi itaque dolorum quasi, labore molestias aspernatur recusandae blanditiis perspiciatis.',                 img:'assets/projects/6.jpg'},
    2:    {   title: 'Ab id soluta vel harum',   timestamp: '12th June 2018',    teaser: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae harum sunt atque laudantium praesentium sint alias enim. Temporibus, numquam consectetur totam necessitatibus assumenda asperiores, voluptates, ad sequi sit fugit voluptatem?',    img:'assets/projects/7.jpg'},
    3:    {   title: 'Adipisicing elit',                timestamp: '5th October 2018',  teaser: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum optio earum ducimus at. Ducimus rerum nostrum architecto harum voluptas eligendi cum magnam at corrupti veritatis unde quasi, cupiditate perferendis quas.',                             img:'assets/projects/8.jpg'},
}
